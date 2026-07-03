import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components";
import { IFixitLogo } from "@/components/icons";

const WORK = [
	{
		title: "Mobile App",
		description:
			"Built and launched the iFixit mobile app (iOS and Android) in React Native and Expo — now serving ~3.2K DAU / ~65K MAU with 4+ star ratings on both stores — including integrated checkout and notifications.",
		image: "/ifixit-mobile-app.png",
		tags: [
			"React Native",
			"TypeScript",
			"Expo",
			"Firebase",
			"Shopify",
			"Google Analytics",
		],
		href: "https://ifixit.com/go/app",
	},
	{
		title: "Consent System",
		description:
			"Led end-to-end development of a site-wide consent management system as the main engineer, integrating with analytics and Shopify across a hybrid PHP and Next.js stack.",
		image: "/consent.png",
		tags: [
			"GDPR",
			"Privacy",
			"Google Analytics",
			"Piwik/Matomo",
			"Shopify",
			"SSR",
			"Project Management",
		],
	},
	{
		title: "Device Picker",
		description:
			"Led the Device Picker effort over a 20-week scope as sole engineer driver: ran weekly status syncs, scoped and prioritized issues, and iterated on designs in tandem with managers and the design team.",
		image: "/device-picker.png",
		tags: ["React", "TypeScript", "Algolia", "Project Management", "UX"],
	},
];

export function WorkProjects() {
	return (
		<section
			id="work"
			className="scroll-mt-24 py-16 lg:py-24"
			aria-label="Work experience"
		>
			<SectionHeader
				index="02"
				eyebrow="What I've worked on"
				title="Work Experience"
				accent="cyan"
			/>
			<div className="mb-4">
				<div className="flex flex-row gap-4 items-center">
					<IFixitLogo className="size-16 fill-blue-500" />
					<div>
						<h3 className="text-xl font-bold">iFixit</h3>
						<p className="text-md">
							Software Engineer 2023 - Present | Software Engineering Apprentice
							2022-2023
						</p>
					</div>
				</div>
			</div>
			<ul className="space-y-4 ml-6 pl-4 border-l-blue-500 border-l-2">
				{WORK.map((item) => (
					<li key={item.title}>
						<a
							href={item.href}
							target="_blank"
							rel="noreferrer noopener"
							className="group grid gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-border hover:bg-card sm:grid-cols-[200px_1fr] sm:gap-6"
						>
							<div className="relative aspect-video overflow-hidden rounded-lg border border-border sm:aspect-4/3">
								<Image
									src={item.image}
									alt={`${item.title} project`}
									fill
									sizes="(max-width: 640px) 100vw, 200px"
									className="object-contain transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div>
								<h3 className="flex items-center gap-1 text-lg font-semibold text-foreground">
									{item.title}
									{item.href && (
										<ArrowUpRight className="size-4 text-pop-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
									)}
								</h3>
								<p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
									{item.description}
								</p>
								<ul className="mt-3 flex flex-wrap gap-2">
									{item.tags.map((tag) => (
										<li
											key={tag}
											className="rounded-full bg-pop-cyan/15 px-3 py-1 text-xs font-medium text-pop-cyan ring-1 ring-inset ring-pop-cyan/30"
										>
											{tag}
										</li>
									))}
								</ul>
							</div>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
