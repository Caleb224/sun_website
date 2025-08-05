"use client";

import LoadingScreen from "@/components/LoadingScreen";
import gsap from "gsap";
import { type ReactNode, useEffect, useRef, useState } from "react";

const ANIMATION_DURATION = 5000;

function FadeInComponent({ children }: { children: ReactNode }) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		try {
			gsap.to(containerRef.current, {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power2.out",
			});
		} catch (error) {
			console.error("Fade in animation failed:", error);
		}
	}, []);

	return (
		<div ref={containerRef} className="translate-y-5 opacity-0">
			{children}
		</div>
	);
}

export default function InitialLoader({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		try {
			const hasVisited = sessionStorage.getItem("ssn-has-visited");

			if (hasVisited) {
				setLoading(false);
			} else {
				sessionStorage.setItem("ssn-has-visited", "true");
				const timer = setTimeout(() => {
					setLoading(false);
				}, ANIMATION_DURATION);

				return () => clearTimeout(timer);
			}
		} catch (error) {
			console.error("Session storage error:", error);
			setError(true);
			setLoading(false);
		}
	}, []);

	if (error) {
		return <FadeInComponent>{children}</FadeInComponent>;
	}

	if (loading) {
		return <LoadingScreen />;
	}

	return <FadeInComponent>{children}</FadeInComponent>;
}
