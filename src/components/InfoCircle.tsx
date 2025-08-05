"use client";

import type { ReactNode } from "react";

interface InfoCircleProps {
	icon: ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
	onClick?: () => void;
	"aria-label"?: string;
}

const variantStyles = {
	primary:
		"rounded-full shadow-(--primary-box-shadow) h-[110px] w-[110px] md:h-[150px] md:w-[150px] bg-[var(--background-light)] flex items-center justify-center",
	secondary:
		"rounded-full shadow-(--secondary-box-shadow) h-[110px] w-[110px] md:h-[150px] md:w-[150px] bg-[var(--secondary-color)] flex items-center justify-center",
	tertiary:
		"rounded-full shadow-(--tertiary-box-shadow) h-[110px] w-[110px] md:h-[150px] md:w-[150px] bg-[#F5F7F5] flex items-center justify-center",
};

export default function InfoCircle({
	icon,
	variant = "primary",
	onClick,
	"aria-label": ariaLabel,
}: InfoCircleProps) {
	const styles = variantStyles[variant];

	return (
		<div
			className={`${styles} ${onClick ? "cursor-pointer transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2" : ""}`}
			onClick={onClick}
			onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
			role={onClick ? "button" : undefined}
			tabIndex={onClick ? 0 : undefined}
			aria-label={ariaLabel}
		>
			{icon}
		</div>
	);
}
