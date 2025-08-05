import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
	// Base fields
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	userType: "therapist" | "looking" | "organization";

	// Therapist fields
	therapistOption?: "join" | "questions" | "other";

	// Client fields - church attendance
	attendsChurch?: "yes" | "no";
	churchName?: string;
	churchCity?: string;
	pastorName?: string;
	pastorEmail?: string;

	// Organization fields
	organizationName?: string;
	organizationCity?: string;

	// Generic message field for all types
	message?: string;
}

function generateEmailContent(data: ContactFormData): string {
	let html = `
		<h2>New Contact Form Submission</h2>
		<h3>Basic Information</h3>
		<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
		<p><strong>Email:</strong> ${data.email}</p>
		<p><strong>Phone:</strong> ${data.phone}</p>
		<p><strong>User :</strong> ${data.userType === "looking" ? "Looking for a Therapist" : data.userType === "therapist" ? "Therapist" : "Organization/Church"}</p>
	`;

	if (data.userType === "therapist") {
		const optionText =
			data.therapistOption === "join"
				? "I'd like to be a Soul Strength therapist"
				: data.therapistOption === "questions"
					? "I have questions before joining"
					: data.therapistOption === "other"
						? "Other"
						: "Not provided";
		html += `
			<h3>Therapist Information</h3>
			<p><strong>Selected Option:</strong> ${optionText}</p>
		`;
	}

	if (data.userType === "looking") {
		html += `
			<h3>Client Information</h3>
			<p><strong>Attends Church:</strong> ${data.attendsChurch === "yes" ? "Yes" : data.attendsChurch === "no" ? "No" : "Not provided"}</p>
		`;

		if (data.attendsChurch === "yes") {
			html += `
				<p><strong>Church Name:</strong> ${data.churchName || "Not provided"}</p>
				<p><strong>Church City:</strong> ${data.churchCity || "Not provided"}</p>
				<p><strong>Pastor's Name:</strong> ${data.pastorName || "Not provided"}</p>
				<p><strong>Pastor's Email:</strong> ${data.pastorEmail || "Not provided"}</p>
			`;
		}
	}

	if (data.userType === "organization") {
		html += `
			<h3>Organization Information</h3>
			<p><strong>Organization Name:</strong> ${data.organizationName || "Not provided"}</p>
			<p><strong>City:</strong> ${data.organizationCity || "Not provided"}</p>
		`;
	}

	if (data.message) {
		html += `
			<h3>Message</h3>
			<p>${data.message}</p>
		`;
	}

	return html;
}

export async function POST(request: Request) {
	try {
		const data: ContactFormData = await request.json();

		// Basic validation
		if (
			!data.firstName ||
			!data.lastName ||
			!data.email ||
			!data.phone ||
			!data.userType
		) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		const resend = new Resend(process.env.RESEND_API_KEY);

		if (!process.env.RESEND_API_KEY) {
			console.error("RESEND_API_KEY is not configured");
			return NextResponse.json(
				{ error: "Email service not configured" },
				{ status: 500 },
			);
		}

		const emailContent = generateEmailContent(data);

		await resend.emails.send({
			from: "info@soulstrengthnetwork.com",
			to: "info@soulstrengthnetwork.com",
			subject: `New Contact Form Submission - ${data.userType === "looking" ? "Client" : data.userType === "therapist" ? "Therapist" : "Organization"}`,
			html: emailContent,
		});

		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
