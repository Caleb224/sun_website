"use client";

import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(MorphSVGPlugin);

export default function Header() {
	const [opened, setOpen] = useState(false);

	// Persist timeline across re-renders with reference
	const navigationTimeline = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		let timeline: gsap.core.Timeline | null = null;

		try {
			// Initialize the timeline inside useEffect to ensure it's done once
			timeline = gsap.timeline({ paused: true });

			timeline.to(
				"#dot1",
				{ duration: 0.3, morphSVG: "#dot4", fill: "var(--secondary-color)" },
				0,
			);
			timeline.to(
				"#dot2",
				{ duration: 0.3, morphSVG: "#dot5", fill: "var(--secondary-color)" },
				0,
			);
			timeline.to(
				"#dot3",
				{ duration: 0.3, morphSVG: "#dot6", fill: "var(--secondary-color)" },
				0,
			);

			navigationTimeline.current = timeline;
		} catch (error) {
			console.error("GSAP animation failed:", error);
		}

		// Clean up the timeline if the component unmounts
		return () => {
			if (timeline) {
				timeline.kill();
				timeline = null;
			}
			navigationTimeline.current = null;
		};
	}, []);

	const open = useCallback(() => {
		if (navigationTimeline.current) {
			navigationTimeline.current.play();
			setOpen(true);
		}
	}, []);

	const close = useCallback(() => {
		if (navigationTimeline.current) {
			navigationTimeline.current.reverse();
			setOpen(false);
		}
	}, []);

	return (
		<>
			{/* DESKTOP NAVIGATION */}
			<nav
				className="hidden h-[98px] w-full items-center justify-between bg-[var(--background-light)] px-18 lg:flex"
				aria-label="Main navigation"
			>
				<Link href="/">
					<Image
						src="navigation_logo.svg"
						alt="Soul Strength Network Logo"
						width={337}
						height={0}
						className="cursor-pointer"
					/>
				</Link>
				<div className="flex items-center justify-around gap-x-[2rem] text-[16px] text-[var(--primary-color)] xl:gap-x-[6rem]">
					<Link href="/#About">
						<h5>About Us</h5>
					</Link>
					<Link href="/contact">
						<h5>Contact Us</h5>
					</Link>
					<Link href="/join">
						<h5>Join the Network</h5>
					</Link>
					<Link href="/join" className="font-semibold">
						<h5>Sign In</h5>
					</Link>
				</div>
			</nav>
			{/*	MOBILE NAVIGATION */}
			<nav
				className="flex h-[98px] items-center justify-between overflow-hidden bg-[var(--background-light)] px-10 lg:hidden"
				aria-label="Mobile navigation"
			>
				<Link href="/">
					<Image
						src="navigation_logo.svg"
						alt="Soul Strength Network Logo"
						width={200}
						height={0}
						className="cursor-pointer"
					/>
				</Link>
				<button
					type="button"
					aria-label={opened ? "Close menu" : "Open menu"}
					aria-expanded={opened}
					className="-m-2 mt-2 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
					onClick={opened ? close : open}
					onKeyDown={(e) =>
						(e.key === "Enter" || e.key === " ") && (opened ? close() : open())
					}
				>
					<svg
						width="40"
						height="18"
						viewBox="0 0 40 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="cursor-pointer"
						aria-hidden="true"
					>
						<path
							id="dot1"
							d="M23.8187 5.07251C23.8187 6.32164 23.3743 7.37647 22.4998 8.22311C21.6254 9.06974 20.5359 9.5 19.2458 9.5C17.9556 9.5 16.8661 9.06974 15.9917 8.22311C15.1172 7.37647 14.6729 6.32164 14.6729 5.07251C14.6729 3.82337 15.1172 2.76855 15.9917 1.92191C16.8661 1.07528 17.9556 0.64502 19.2458 0.64502C20.5359 0.64502 21.6254 1.0614 22.4998 1.92191C23.3743 2.76855 23.8187 3.82337 23.8187 5.07251Z"
							fill="var(--primary-color)"
						/>
						<path
							id="dot2"
							d="M9.99984 5.07251C9.99984 6.32164 9.55545 7.37647 8.68101 8.22311C7.80656 9.06974 6.71708 9.5 5.42692 9.5C4.13676 9.5 3.04729 9.06974 2.17285 8.22311C1.2984 7.37647 0.854004 6.32164 0.854004 5.07251C0.854004 3.82337 1.2984 2.76855 2.17285 1.92191C3.04729 1.07528 4.13676 0.64502 5.42692 0.64502C6.71708 0.64502 7.80656 1.0614 8.68101 1.92191C9.55545 2.76855 9.99984 3.82337 9.99984 5.07251Z"
							fill="var(--primary-color)"
						/>
						<path
							id="dot3"
							d="M37.9998 4.92749C37.9998 6.17663 37.5554 7.23145 36.681 8.07809C35.8066 8.92472 34.7171 9.35498 33.4269 9.35498C32.1368 9.35498 31.0473 8.92472 30.1728 8.07809C29.2984 7.23145 28.854 6.17663 28.854 4.92749C28.854 3.67836 29.2984 2.62353 30.1728 1.77689C31.0473 0.930258 32.1368 0.5 33.4269 0.5C34.7171 0.5 35.8066 0.916378 36.681 1.77689C37.5554 2.62353 37.9998 3.67836 37.9998 4.92749Z"
							fill="var(--primary-color)"
						/>
					</svg>
				</button>

				<svg
					width="40"
					height="20"
					viewBox="0 0 40 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="hidden"
					aria-hidden="true"
				>
					<path
						id="dot4"
						d="M22.9998 15.5725C22.9998 16.8216 22.5554 17.8765 21.681 18.7231C20.8066 19.5697 19.7171 20 18.4269 20C17.1367 20 16.0473 19.5697 15.1728 18.7231C14.2984 17.8765 13.854 16.8216 13.854 15.5725C13.854 14.3234 14.2984 13.2685 15.1728 12.4219C16.0473 11.5753 17.1367 11.145 18.4269 11.145C19.7171 11.145 20.8066 11.5614 21.681 12.4219C22.5554 13.2685 22.9998 14.3234 22.9998 15.5725Z"
						fill="#C8823A"
					/>
					<path
						id="dot5"
						d="M9.18099 15.5725C9.18099 16.8216 8.7366 17.8765 7.86216 18.7231C6.98771 19.5697 5.89824 20 4.60807 20C3.31791 20 2.22844 19.5697 1.354 18.7231C0.479554 17.8765 0.0351562 16.8216 0.0351562 15.5725C0.0351562 14.3234 0.479554 13.2685 1.354 12.4219C2.22844 11.5753 3.31791 11.145 4.60807 11.145C5.89824 11.145 6.98771 11.5614 7.86216 12.4219C8.7366 13.2685 9.18099 14.3234 9.18099 15.5725Z"
						fill="#C8823A"
					/>
					<path
						id="dot6"
						d="M16.0911 4.42749C16.0911 5.67663 15.6468 6.73145 14.7723 7.57809C13.8979 8.42472 12.8084 8.85498 11.5182 8.85498C10.2281 8.85498 9.1386 8.42472 8.26415 7.57809C7.38971 6.73145 6.94531 5.67663 6.94531 4.42749C6.94531 3.17836 7.38971 2.12353 8.26415 1.27689C9.1386 0.430258 10.2281 0 11.5182 0C12.8084 0 13.8979 0.416378 14.7723 1.27689C15.6468 2.12353 16.0911 3.17836 16.0911 4.42749Z"
						fill="#C8823A"
					/>
				</svg>
				<AnimatePresence>
					{opened && (
						<motion.div
							key="mobile-nav"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute top-30 right-0 bottom-0 left-0 z-100 flex gap-4"
						>
							<nav
								className="flex h-full grow flex-col gap-[2rem] overflow-hidden bg-[var(--background-light)] p-[2rem]"
								aria-label="Mobile menu"
							>
								<Link href="/#About" onClick={close}>
									<h5>About</h5>
								</Link>
								<Link href="/contact" onClick={close}>
									<h5>Contact Us</h5>
								</Link>
								<Link href="/join" onClick={close}>
									<h5>Join the Network</h5>
								</Link>
								<Link href="/join" onClick={close} className="font-semibold">
									<h5>Sign In</h5>
								</Link>
							</nav>
							<div className="h-full max-w-[300px] grow bg-[var(--secondary-color)]" />
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
}
