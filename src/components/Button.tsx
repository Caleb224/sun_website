import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: "primary" | "secondary";
	loading?: boolean;
	href?: string;
}

export default function Button({
	label,
	variant = "primary",
	loading = false,
	disabled,
	href,
	...props
}: ButtonProps) {
	const baseStyles =
		"h-[64px] w-[250px] rounded-[8px] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium inline-flex items-center justify-center";
	const variantStyles = {
		primary:
			"text-white bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] focus:ring-[var(--primary-color)]",
		secondary:
			"text-[var(--primary-color)] border border-[var(--primary-color)] bg-transparent hover:text-white hover:bg-[var(--primary-color)]/85 focus:ring-[var(--primary-color)]",
	};

	const isDisabled = disabled || loading;
	const className = `${baseStyles} ${variantStyles[variant]} ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`;

	if (href && !isDisabled) {
		return (
			<Link href={href} className={className}>
				<h5>{loading ? "Loading..." : label}</h5>
			</Link>
		);
	}

	return (
		<button
			className={className}
			disabled={isDisabled}
			aria-label={loading ? "Loading..." : label}
			{...props}
		>
			<h5>{loading ? "Loading..." : label}</h5>
		</button>
	);
}
