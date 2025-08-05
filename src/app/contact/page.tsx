"use client";

import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

// Form schema with simplified fields
const contactFormSchema = z
	.object({
		// Base fields
		firstName: z.string().min(1, "First name is required"),
		lastName: z.string().min(1, "Last name is required"),
		email: z.string().email("Please enter a valid email address"),
		phone: z.string().min(10, "Please enter a valid phone number"),
		userType: z.enum(["therapist", "looking", "organization"]),

		// Therapist fields
		therapistOption: z.enum(["join", "questions", "other"]).optional(),

		// Client fields - church attendance
		attendsChurch: z.enum(["yes", "no"]).optional(),
		churchName: z.string().optional(),
		churchCity: z.string().optional(),
		pastorName: z.string().optional(),
		pastorEmail: z.string().optional(),

		// Organization fields
		organizationName: z.string().optional(),
		organizationCity: z.string().optional(),

		// Generic message field for all types
		message: z.string().optional(),
	})
	.superRefine((data, ctx) => {
		// Conditional validation based on userType
		if (data.userType === "therapist") {
			if (!data.therapistOption) {
				ctx.addIssue({
					path: ["therapistOption"],
					message: "Please select an option",
					code: z.ZodIssueCode.custom,
				});
			}
		}

		if (data.userType === "looking") {
			if (!data.attendsChurch) {
				ctx.addIssue({
					path: ["attendsChurch"],
					message: "Please select whether you attend church",
					code: z.ZodIssueCode.custom,
				});
			}
			// If they attend church, validate church fields
			if (data.attendsChurch === "yes") {
				if (!data.churchName) {
					ctx.addIssue({
						path: ["churchName"],
						message: "Church name is required",
						code: z.ZodIssueCode.custom,
					});
				}
				if (!data.churchCity) {
					ctx.addIssue({
						path: ["churchCity"],
						message: "Church city is required",
						code: z.ZodIssueCode.custom,
					});
				}
				if (!data.pastorName) {
					ctx.addIssue({
						path: ["pastorName"],
						message: "Pastor's name is required",
						code: z.ZodIssueCode.custom,
					});
				}
				if (!data.pastorEmail) {
					ctx.addIssue({
						path: ["pastorEmail"],
						message: "Pastor's email is required",
						code: z.ZodIssueCode.custom,
					});
				} else if (
					data.pastorEmail &&
					!z.string().email().safeParse(data.pastorEmail).success
				) {
					ctx.addIssue({
						path: ["pastorEmail"],
						message: "Please enter a valid email address",
						code: z.ZodIssueCode.custom,
					});
				}
			}
		}

		if (data.userType === "organization") {
			if (!data.organizationName) {
				ctx.addIssue({
					path: ["organizationName"],
					message: "Organization name is required",
					code: z.ZodIssueCode.custom,
				});
			}
			if (!data.organizationCity) {
				ctx.addIssue({
					path: ["organizationCity"],
					message: "Organization city is required",
					code: z.ZodIssueCode.custom,
				});
			}
		}
	});

type ContactFormData = z.infer<typeof contactFormSchema>;

const SuccessSplashScreen = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="overflow-hidden! absolute top-0 right-0 bottom-0 left-0 z-10 flex h-screen flex-col items-center justify-center gap-4 bg-[var(--secondary-color)] p-10 text-center text-white"
		>
			<h1 className="xl:text-9xl!">THANK YOU</h1>
			<h4>Our team will be in touch with you shortly.</h4>
			<Image
				src={"./ssn_vertical.svg"}
				alt={"Vertically stacked soul strength network logo"}
				height={100}
				width={100}
			/>
		</motion.div>
	);
};

export default function ContactPage() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
		setError,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
		mode: "onBlur",
	});

	const [emailSuccess, setEmailSuccess] = useState<boolean>(false);

	const userType = useWatch({
		control,
		name: "userType",
	});

	const attendsChurch = useWatch({
		control,
		name: "attendsChurch",
	});

	async function onSubmit(data: ContactFormData) {
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}
			setEmailSuccess(true);
			// Reset form on success
			reset();
			setTimeout(() => setEmailSuccess(false), 4000);
		} catch (error) {
			setError("root", {
				type: "manual",
				message:
					error instanceof Error
						? error.message
						: "Failed to send message. Please try again.",
			});
		}
	}

	const inputClassName =
		"w-full appearance-none rounded border bg-white px-3 py-2 leading-tight shadow focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] placeholder-gray-500";

	const labelClassName = "mb-2 block font-medium text-[var(--primary-color)]";

	const errorClassName = "mt-1 text-sm text-red-600";

	return (
		<div className="overflow-hidden py-6">
			<AnimatePresence>
				{emailSuccess ? (
					<SuccessSplashScreen />
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-cols-1 gap-4 lg:grid-rows-[minmax(350px,1fr)_minmax(540px,1fr)] lg:grid-cols-2">
							{/* First grid item: Title */}
							<div className="bg-[var(--secondary-color)] p-10 text-white">
								<h1 className="font-bold xl:text-3xl">Contact Us</h1>
								<p className="pt-4 text-2xl">
									You're not alone — we're here to support you. Reach out using
									the form below or send us a message. A member of our care team
									will get back to you as soon as possible. We're honoured to
									walk alongside you.
								</p>
							</div>

							{/* Second grid item: Basic Form Fields */}
							<div className="flex items-center justify-center bg-[#F5F7F5] p-10 text-[var(--primary-color)]">
								<div className="w-full">
									<div className="mb-4">
										<label htmlFor="firstName" className={labelClassName}>
											First Name *
										</label>
										<input
											type="text"
											id="firstName"
											{...register("firstName")}
											className={inputClassName}
											aria-invalid={errors.firstName ? "true" : "false"}
										/>
										{errors.firstName && (
											<p className={errorClassName}>
												{errors.firstName.message}
											</p>
										)}
									</div>

									<div className="mb-4">
										<label htmlFor="lastName" className={labelClassName}>
											Last Name *
										</label>
										<input
											type="text"
											id="lastName"
											{...register("lastName")}
											className={inputClassName}
											aria-invalid={errors.lastName ? "true" : "false"}
										/>
										{errors.lastName && (
											<p className={errorClassName}>
												{errors.lastName.message}
											</p>
										)}
									</div>

									<div className="mb-4">
										<label htmlFor="email" className={labelClassName}>
											Email *
										</label>
										<input
											type="email"
											id="email"
											{...register("email")}
											className={inputClassName}
											aria-invalid={errors.email ? "true" : "false"}
										/>
										{errors.email && (
											<p className={errorClassName}>{errors.email.message}</p>
										)}
									</div>

									<div className="mb-4">
										<label htmlFor="phone" className={labelClassName}>
											Phone Number *
										</label>
										<input
											type="tel"
											id="phone"
											{...register("phone")}
											className={inputClassName}
											aria-invalid={errors.phone ? "true" : "false"}
										/>
										{errors.phone && (
											<p className={errorClassName}>{errors.phone.message}</p>
										)}
									</div>
								</div>
							</div>

							{/* Third grid item: User Type Selection & Conditional Fields */}
							<div className="bg-[var(--background-light)] p-10 lg:col-2 lg:row-start-1 lg:row-end-3">
								<div className="mb-6">
									<fieldset>
										<legend className={labelClassName}>Are you: *</legend>
										<div className="flex flex-col gap-4">
											<div className="flex items-center gap-4 ">
												<input
													type="radio"
													id="therapist"
													{...register("userType")}
													value="therapist"
													className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
												/>
												<label htmlFor="therapist" className="font-medium">
													A Therapist
												</label>
											</div>
											<div className="flex items-center gap-3">
												<input
													type="radio"
													id="looking"
													{...register("userType")}
													value="looking"
													className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
												/>
												<label htmlFor="looking" className="font-medium">
													Looking for a Therapist
												</label>
											</div>
											<div className="flex items-center gap-3">
												<input
													type="radio"
													id="organization"
													{...register("userType")}
													value="organization"
													className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
												/>
												<label htmlFor="organization" className="font-medium">
													A Christian Organization or Church
												</label>
											</div>
										</div>
										{errors.userType && (
											<p className={errorClassName}>
												{errors.userType.message}
											</p>
										)}
									</fieldset>
								</div>

								{/* Conditional Fields Based on User Type */}
								{userType === "therapist" && (
									<div className="space-y-4">
										<fieldset>
											<legend className={labelClassName}>Subject: *</legend>
											<div className="flex flex-col gap-3">
												<div className="flex items-center gap-3">
													<input
														type="radio"
														id="option1"
														{...register("therapistOption")}
														value="join"
														className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
													/>
													<label htmlFor="option1" className="font-medium">
														I'd like to be a Soul Strength therapist
													</label>
												</div>
												<div className="flex items-center gap-3">
													<input
														type="radio"
														id="option2"
														{...register("therapistOption")}
														value="questions"
														className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
													/>
													<label htmlFor="option2" className="font-medium">
														I have questions before joining
													</label>
												</div>
												<div className="flex items-center gap-3">
													<input
														type="radio"
														id="option3"
														{...register("therapistOption")}
														value="other"
														className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
													/>
													<label htmlFor="option3" className="font-medium">
														Other
													</label>
												</div>
											</div>
											{errors.therapistOption && (
												<p className={errorClassName}>
													{errors.therapistOption.message}
												</p>
											)}
										</fieldset>

										<div>
											<label
												htmlFor="therapist-message"
												className={labelClassName}
											>
												Message
											</label>
											<textarea
												id="therapist-message"
												{...register("message")}
												rows={4}
												className={inputClassName}
												placeholder="Please share any additional information..."
											/>
										</div>
									</div>
								)}

								{userType === "looking" && (
									<div className="space-y-4">
										<fieldset>
											<legend className={labelClassName}>
												Do you attend church? *
											</legend>
											<div className="flex flex-col gap-3">
												<div className="flex items-center gap-3">
													<input
														type="radio"
														id="attends-yes"
														{...register("attendsChurch")}
														value="yes"
														className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
													/>
													<label htmlFor="attends-yes" className="font-medium">
														Yes
													</label>
												</div>
												<div className="flex items-center gap-3">
													<input
														type="radio"
														id="attends-no"
														{...register("attendsChurch")}
														value="no"
														className="text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
													/>
													<label htmlFor="attends-no" className="font-medium">
														No
													</label>
												</div>
											</div>
											{errors.attendsChurch && (
												<p className={errorClassName}>
													{errors.attendsChurch.message}
												</p>
											)}
										</fieldset>

										{/* Church details - only show if they attend church */}
										{attendsChurch === "yes" && (
											<>
												<div>
													<label
														htmlFor="churchName"
														className={labelClassName}
													>
														Church Name *
													</label>
													<input
														type="text"
														id="churchName"
														{...register("churchName")}
														className={inputClassName}
													/>
													{errors.churchName && (
														<p className={errorClassName}>
															{errors.churchName.message}
														</p>
													)}
												</div>

												<div>
													<label
														htmlFor="churchCity"
														className={labelClassName}
													>
														Church City *
													</label>
													<input
														type="text"
														id="churchCity"
														{...register("churchCity")}
														className={inputClassName}
													/>
													{errors.churchCity && (
														<p className={errorClassName}>
															{errors.churchCity.message}
														</p>
													)}
												</div>

												<div>
													<label
														htmlFor="pastorName"
														className={labelClassName}
													>
														Pastor's Name *
													</label>
													<input
														type="text"
														id="pastorName"
														{...register("pastorName")}
														className={inputClassName}
													/>
													{errors.pastorName && (
														<p className={errorClassName}>
															{errors.pastorName.message}
														</p>
													)}
												</div>

												<div>
													<label
														htmlFor="pastorEmail"
														className={labelClassName}
													>
														Pastor's Email *
													</label>
													<input
														type="email"
														id="pastorEmail"
														{...register("pastorEmail")}
														className={inputClassName}
													/>
													{errors.pastorEmail && (
														<p className={errorClassName}>
															{errors.pastorEmail.message}
														</p>
													)}
												</div>
											</>
										)}

										<div>
											<label
												htmlFor="client-message"
												className={labelClassName}
											>
												Message
											</label>
											<textarea
												id="client-message"
												{...register("message")}
												rows={4}
												className={inputClassName}
												placeholder="Please share any additional information..."
											/>
										</div>
									</div>
								)}

								{userType === "organization" && (
									<div className="space-y-4">
										<div>
											<label
												htmlFor="organizationName"
												className={labelClassName}
											>
												Organization Name *
											</label>
											<input
												type="text"
												id="organizationName"
												{...register("organizationName")}
												className={inputClassName}
											/>
											{errors.organizationName && (
												<p className={errorClassName}>
													{errors.organizationName.message}
												</p>
											)}
										</div>

										<div>
											<label
												htmlFor="organizationCity"
												className={labelClassName}
											>
												City *
											</label>
											<input
												type="text"
												id="organizationCity"
												{...register("organizationCity")}
												className={inputClassName}
											/>
											{errors.organizationCity && (
												<p className={errorClassName}>
													{errors.organizationCity.message}
												</p>
											)}
										</div>

										<div>
											<label
												htmlFor="organization-message"
												className={labelClassName}
											>
												Message
											</label>
											<textarea
												id="organization-message"
												{...register("message")}
												rows={4}
												className={inputClassName}
												placeholder="Please share any additional information..."
											/>
										</div>
									</div>
								)}

								{/* Submit Button */}
								<div className="mt-8">
									<Button
										type="submit"
										label={isSubmitting ? "Sending..." : "Send Message"}
										loading={isSubmitting}
										disabled={isSubmitting}
									/>
								</div>

								{/* Error Message */}
								{errors.root && (
									<div className="mt-4 rounded-md bg-red-50 p-3">
										<p className="text-red-800 text-sm">
											{errors.root.message}
										</p>
									</div>
								)}
							</div>
						</div>
					</form>
				)}
			</AnimatePresence>
		</div>
	);
}
