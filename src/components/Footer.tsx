import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const date = new Date();
	return (
		<footer
			className="min-h-32 lg:min-h-[300px] bg-[var(--primary-color)] p-12 grid grid-cols-1 lg:grid-cols-[50px_1fr_1fr] items-center justify-center gap-4 text-white"
			aria-label="Site footer"
		>
			<Link href="#top" className="justify-self-start">
				<Image src="/footer_logo.svg" alt="Logo" width={50} height={50} />
			</Link>
			<nav className="flex flex-col gap-4 font-poppins py-10 justify-self-start w-3/4 xl:w-1/2 lg:ml-10">
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:justify-between">
					<Link href="/contact">Contact Us</Link>
					<Link href="/#About">About Us</Link>
				</div>
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:justify-between">
					<Link href="/join">Join the Network</Link>
					<Link href="/join">Sign In</Link>
				</div>
			</nav>
			<h5 className="text-xs! lg:justify-self-end">&copy; Copyright Soul Strength Network {date.getFullYear()}</h5>
		</footer>
	);
}
