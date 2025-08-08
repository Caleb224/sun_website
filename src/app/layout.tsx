import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Cormorant_Garamond, Forum, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InitialLoader from "@/components/InitialLoader";
import LocalSEOStructuredData from "./local-seo";

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
	title: {
		default: "Soul Strength Network - Christian Therapist Network",
		template: "%s | Soul Strength Network"
	},
	description:
		"Find Christian therapists and faith-based counseling services. Soul Strength Network connects churches, individuals, and licensed Christian counselors for comprehensive mental health support rooted in Christian values.",
	keywords: [
		"Christian therapy",
		"faith-based counseling", 
		"Christian therapists",
		"Christian mental health",
		"biblical counseling",
		"church counseling services",
		"Christian marriage counseling",
		"faith-based therapy",
		"Christian psychologists",
		"spiritual counseling"
	],
	authors: [{ name: "Soul Strength Network" }],
	creator: "Soul Strength Network",
	publisher: "Soul Strength Network",
	robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
	openGraph: {
		title: "Soul Strength Network - Christian Therapist Network", 
		description:
			"Find Christian therapists and faith-based counseling services. Connecting churches, individuals, and licensed Christian counselors for comprehensive mental health support.",
		type: "website",
		siteName: "Soul Strength Network",
		locale: "en_US",
		url: "https://soulstrengthnetwork.com"
	},
	twitter: {
		card: "summary_large_image",
		title: "Soul Strength Network - Christian Therapist Network",
		description:
			"Find Christian therapists and faith-based counseling services. Connecting churches, individuals, and licensed Christian counselors.",
		creator: "@soulstrengthnet"
	},
	alternates: {
		canonical: "https://soulstrengthnetwork.com"
	},
	category: "Healthcare"
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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Soul Strength Network",
							"description": "A curated network connecting Christian therapists with Christian clients for faith-based mental health support.",
							"url": "https://soulstrengthnetwork.com",
							"logo": "https://soulstrengthnetwork.com/footer_logo.svg",
							"sameAs": [],
							"contactPoint": {
								"@type": "ContactPoint", 
								"contactType": "Customer Support",
								"availableLanguage": "English"
							},
							"areaServed": {
								"@type": "Country",
								"name": "United States"
							},
							"serviceType": [
								"Christian Therapy Network",
								"Faith-based Counseling Services", 
								"Mental Health Referral Network",
								"Church Counseling Support"
							],
							"knowsAbout": [
								"Christian Therapy",
								"Faith-based Counseling",
								"Biblical Counseling", 
								"Christian Mental Health",
								"Church Pastoral Care"
							]
						})
					}}
				/>
			</head>
			<body
				className={`${FontPoppins.variable} ${FontForum.variable} ${FontCormorant.variable} antialiased`}
			>
				<InitialLoader>
					<Header />
					{children}
					<Footer />
					<Analytics />
					<LocalSEOStructuredData />
				</InitialLoader>
			</body>
		</html>
	);
}
