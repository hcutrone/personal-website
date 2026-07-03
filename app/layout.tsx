import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Harrison Cutrone - Software Engineer",
	description: "Personal website of Harrison Cutrone, a software engineer.",
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#1a1029",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} bg-background scroll-smooth`}
		>
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
