import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/next";
import { Cormorant_Garamond, Forum, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitialLoader from "@/components/InitialLoader";

/** Import fonts **/
const FontPoppins = Poppins({
	weight: "300",
	variable: "--font-poppins",
	subsets: ["latin"],
});

const FontForum = Forum({
	weight: "400",
	variable: "--font-forum",
	subsets: ["latin"],
});

const FontCormorant = Cormorant_Garamond({
	weight: "400",
	variable: "--font-cormorant",
	subsets: ["latin"],
});

/** Website Metadata **/
export const metadata: Metadata = {
	title: "Soul Strength Network - Christian Therapist Network",
	description:
		"A platform connecting Christian therapists with Christian clients for faith-based mental health support and counseling services.",
	keywords: [
		"Christian therapy",
		"faith-based counseling",
		"Christian therapists",
		"mental health",
		"counseling",
	],
	authors: [{ name: "Soul Strength Network" }],
	robots: "index, follow",
	openGraph: {
		title: "Soul Strength Network",
		description:
			"Connecting Christian therapists with Christian clients for faith-based mental health support.",
		type: "website",
		siteName: "Soul Strength Network",
	},
	twitter: {
		card: "summary_large_image",
		title: "Soul Strength Network",
		description:
			"Connecting Christian therapists with Christian clients for faith-based mental health support.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body
				className={`${FontPoppins.variable} ${FontForum.variable} ${FontCormorant.variable} antialiased`}
			>
				<InitialLoader>
					<Header />
					{children}
					<Footer />
                    <Analytics />
				</InitialLoader>
			</body>
		</html>
	);
}
