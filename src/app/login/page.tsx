"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function LoginPage() {
	return (
		<div className="overflow-hidden py-6">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="overflow-hidden! z-10 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-[var(--background-light)] p-10 text-center text-[var(--primary-color)]"
			>
				<h1 className="xl:text-9xl!">SIGN IN</h1>
				<h4>Sign in functionality is coming soon.</h4>
				<p className="max-w-2xl text-xl">
					We're currently building our secure member portal. If you're already a
					Soul Strength member, please check back soon or contact us at{" "}
					<a
						className="hover:text-[var(--secondary-color)]"
						href="mailto:info@soulstrengthnetwork.ca"
					>
						info@soulstrengthnetwork.ca
					</a>{" "}
					for assistance.
				</p>
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
