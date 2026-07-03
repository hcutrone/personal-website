import { ArrowDown, Book, Mail } from "lucide-react";
import Image from "next/image";
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	StravaIcon,
} from "@/components/icons";

const SOCIALS = [
	{ label: "GitHub", href: "https://github.com/hcutrone", Icon: GitHubIcon },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/hcutrone/",
		Icon: LinkedInIcon,
	},
	{
		label: "Instagram",
		href: "https://instagram.com/harrison.shoots",
		Icon: InstagramIcon,
	},
	{
		label: "Strava",
		href: "https://www.strava.com/athletes/128906102",
		Icon: StravaIcon,
	},
	{
		label: "Fable",
		href: "https://fable.co/fabler/harrison-cutrone-851428297314",
		Icon: Book,
	},
	{ label: "Email", href: "mailto:harrisoncutrone@gmail.com", Icon: Mail },
];

export function Landing() {
	return (
		<section
			id="about"
			className="scroll-mt-24 pt-28 pb-16 sm:pt-36 lg:pt-40"
			aria-label="Introduction"
		>
			<div className="flex flex-col items-center text-center">
				<div className="relative mb-8">
					<div className="relative size-32 overflow-hidden rounded-3xl ring-2 ring-primary/50 sm:size-36">
						<Image
							src="/me.jpeg"
							alt="Portrait of me"
							fill
							sizes="144px"
							className="object-cover"
							priority
						/>
					</div>
					<span
						aria-hidden="true"
						className="absolute -right-3 -top-3 size-6 rounded-full bg-pop-cyan shadow-lg shadow-pop-cyan/40"
					/>
					<span
						aria-hidden="true"
						className="absolute -bottom-2 -left-3 size-4 rounded-full bg-pop-pink shadow-lg shadow-pop-pink/40"
					/>
				</div>

				<span className="inline-flex items-center gap-2 rounded-full border border-pop-cyan/30 bg-pop-cyan-soft px-3 py-1 text-xs font-medium text-pop-cyan-text">
					<span
						className="size-1.5 rounded-full bg-pop-cyan"
						aria-hidden="true"
					/>
					Available for select freelance work
				</span>

				<h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-6xl">
					Harrison Cutrone
				</h1>
				<h2 className="mt-3 text-lg font-medium text-primary sm:text-xl">
					Full Stack Web <span className="text-pop-pink-text">&amp;</span>{" "}
					Mobile App Developer
				</h2>

				<p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
					Full-stack software engineer with 4 years of experience shipping
					consumer-facing web and mobile products at scale. Owns features
					end-to-end across{" "}
					<span className="text-pop-pink-text">
						TypeScript/React, Next.js, PHP, and React Native,
					</span>{" "}
					with a track record of leading cross-functional projects, mentoring
					teammates, and delivering reliable, well-tested code.
				</p>

				<ul
					className="mt-8 flex flex-wrap items-center justify-center gap-3"
					aria-label="Social links"
				>
					{SOCIALS.map(({ label, href, Icon }) => (
						<li key={label}>
							<a
								href={href}
								target="_blank"
								rel="noreferrer noopener"
								aria-label={label}
								className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground outline-none transition-colors hover:border-primary/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
							>
								<Icon className="size-5" />
							</a>
						</li>
					))}
				</ul>

				<a
					href="#skills"
					className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
				>
					Explore my work
					<ArrowDown className="size-4 animate-bounce" />
				</a>
			</div>
		</section>
	);
}
