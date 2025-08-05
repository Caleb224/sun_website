"use client";

import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const joinFormSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
});

type JoinFormData = z.infer<typeof joinFormSchema>;

export default function JoinPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setError,
	} = useForm<JoinFormData>({
		resolver: zodResolver(joinFormSchema),
		mode: "onBlur",
	});

	const [submitted, setSubmitted] = useState(false);

	async function onSubmit(data: JoinFormData) {
		try {
			const response = await fetch("/api/join", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to submit email");
			}

			setSubmitted(true);
			reset();
		} catch (error) {
			setError("root", {
				type: "manual",
				message:
					error instanceof Error
						? error.message
						: "Failed to submit email. Please try again.",
			});
		}
	}

	const inputClassName =
		"w-full appearance-none rounded border bg-white px-3 py-2 leading-tight shadow focus:shadow-outline focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] placeholder-gray-500 max-w-md";
	const labelClassName = "mb-2 block font-medium text-[var(--primary-color)]";
	const errorClassName = "mt-1 text-sm text-red-600";

	if (submitted) {
		return (
			<div className="overflow-hidden py-6">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="overflow-hidden! z-10 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-[var(--background-light)] p-10 text-center text-[var(--primary-color)]"
				>
					<h1 className="xl:text-9xl!">THANK YOU</h1>
					<h4>Our team will reach out to you shortly.</h4>
					<Image
						src={"./ssn_vertical_dark.svg"}
						alt={"Vertically stacked soul strength network logo"}
						height={100}
						width={100}
					/>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="overflow-hidden py-6">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="overflow-hidden! z-10 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-[var(--background-light)] p-10 text-center text-[var(--primary-color)]"
			>
				<h1 className="xl:text-9xl!">JOIN THE NETWORK</h1>
				<h4>
					Please enter your email address and a member of our team will reach
					out to you shortly.
				</h4>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center gap-4"
				>
					<div className="w-full">
						<input
							type="email"
							id="email"
							{...register("email")}
							className={inputClassName}
							placeholder="Enter your email"
							aria-invalid={errors.email ? "true" : "false"}
						/>
						{errors.email && (
							<p className={errorClassName}>{errors.email.message}</p>
						)}
					</div>

					<Button
						type="submit"
						label={isSubmitting ? "Submitting..." : "Submit"}
						loading={isSubmitting}
						disabled={isSubmitting}
					/>

					{errors.root && (
						<div className="mt-4 rounded-md bg-red-50 p-3">
							<p className="text-red-800 text-sm">{errors.root.message}</p>
						</div>
					)}
				</form>

				<Image
					src={"./ssn_vertical_dark.svg"}
					alt={"Vertically stacked soul strength network logo"}
					height={100}
					width={100}
				/>
			</motion.div>
		</div>
	);
}
