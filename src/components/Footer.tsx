import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const date = new Date();
	return (
		<footer
			className="grid min-h-32 grid-cols-1 items-center justify-center gap-4 bg-[var(--primary-color)] p-12 text-white lg:min-h-[300px] lg:grid-cols-[50px_1fr_1fr]"
			aria-label="Site footer"
		>
			<Link href="#top" className="justify-self-start">
				<Image src="/footer_logo.svg" alt="Soul Strength Network Logo - Return to top of page" width={50} height={50} />
			</Link>
			<nav className="flex w-3/4 flex-col gap-4 justify-self-start py-10 font-poppins lg:ml-10 xl:w-1/2">
				<div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-10">
					<Link href="/contact">Contact Us</Link>
					<Link href="/#About">About Us</Link>
				</div>
				<div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-10">
					<Link href="/join">Join the Network</Link>
					<Link href="/join">Sign In</Link>
				</div>
			</nav>
			<h5 className="text-xs! lg:justify-self-end">
				&copy; Copyright Soul Strength Network {date.getFullYear()}
			</h5>
		</footer>
	);
}
