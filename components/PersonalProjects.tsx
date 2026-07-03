import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components";

const PROJECTS = [
	{
		title: "Denver Bike Fest",
		description:
			"A Next.js SPA used as the primary info hub for attendees who don't use Instagram, serving >1.2k visits per week leading up to the event",
		image: "/logo_horizontal_no_year.png",
		tags: ["Next.js", "SEO", "Community"],
		href: "https://denverbikefest.app",
	},
	{
		title: "Personal Website",
		description:
			"What you're looking at now! A place to show off my skills, projects, hobbies, and personal projects",
		image: "/me.jpeg",
		tags: ["Next.js", "TailwindCSS", "Vercel"],
		href: "#",
	},
	{
		title: "Ride Playlist Tracker (WIP)",
		description:
			"A web app that combines my Strava activities with the accompanying Spotify playlist",
		image: "/strava-spotify.png",
		tags: ["APIs", "Next.js"],
		href: "/rides",
	},
];

export function PersonalProjects() {
	return (
		<section
			id="projects"
			className="scroll-mt-24 py-16 lg:py-24"
			aria-label="Personal projects"
		>
			<SectionHeader
				index="03"
				eyebrow="What I've built"
				title="Personal Projects"
				accent="pink"
			/>
			<div className="grid gap-6 sm:grid-cols-2">
				{PROJECTS.map((item) => (
					<a
						key={item.title}
						href={item.href}
						target="_blank"
						rel="noreferrer noopener"
						className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-pop-pink/50"
					>
						<div className="relative aspect-video overflow-hidden">
							<Image
								src={item.image}
								alt={`${item.title} preview`}
								fill
								sizes="(max-width: 640px) 100vw, 50vw"
								className="object-contain transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
						<div className="flex flex-1 flex-col p-5">
							<div className="flex items-center justify-between">
								<h3 className="flex items-center gap-1 text-lg font-semibold text-foreground">
									{item.title}
									<ArrowUpRight className="size-4 text-pop-pink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
								</h3>
							</div>
							<p className="mt-2 flex-1 leading-relaxed text-muted-foreground text-pretty">
								{item.description}
							</p>
							<ul className="mt-4 flex flex-wrap gap-2">
								{item.tags.map((tag) => (
									<li
										key={tag}
										className="rounded-full bg-pop-pink/15 px-3 py-1 text-xs font-medium text-pop-pink ring-1 ring-inset ring-pop-pink/30"
									>
										{tag}
									</li>
								))}
							</ul>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
