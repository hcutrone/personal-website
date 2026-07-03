import { Monitor, Server, Smartphone, Wrench } from "lucide-react";
import { SectionHeader } from "@/components";

const GROUPS = [
	{
		Icon: Monitor,
		title: "Frontend",
		tile: "bg-primary text-primary-foreground shadow-lg shadow-primary/40",
		ring: "hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20",
		chip: "bg-primary/15 text-primary ring-1 ring-inset ring-primary/30",
		skills: [
			"TypeScript",
			"React",
			"Next.js",
			"TailwindCSS",
			"ChakraUI",
			"Accesibility",
		],
	},
	{
		Icon: Smartphone,
		title: "Mobile",
		tile: "bg-pop-pink text-background shadow-lg shadow-pop-pink/40",
		ring: "hover:border-pop-pink/60 hover:shadow-lg hover:shadow-pop-pink/20",
		chip: "bg-pop-pink/15 text-pop-pink ring-1 ring-inset ring-pop-pink/30",
		skills: [
			"React Native",
			"Expo",
			"Accessibility",
			"Notifications",
			"Firebase",
		],
	},
	{
		Icon: Server,
		title: "Backend",
		tile: "bg-pop-cyan text-background shadow-lg shadow-pop-cyan/40",
		ring: "hover:border-pop-cyan/60 hover:shadow-lg hover:shadow-pop-cyan/20",
		chip: "bg-pop-cyan/15 text-pop-cyan ring-1 ring-inset ring-pop-cyan/30",
		skills: ["Performance", "APIs", "PHP", "MySQL", "Node", "pnpm"],
	},
	{
		Icon: Wrench,
		title: "Tooling & Integrations",
		tile: "bg-pop-amber text-background shadow-lg shadow-pop-amber/40",
		ring: "hover:border-pop-amber/60 hover:shadow-lg hover:shadow-pop-amber/20",
		chip: "bg-pop-amber/15 text-pop-amber ring-1 ring-inset ring-pop-amber/30",
		skills: [
			"Sentry",
			"Algolia",
			"Jest",
			"Playwright",
			"GitHub Actions",
			"Google Analytics",
			"Crowdin",
		],
	},
];

export function Skills() {
	return (
		<section
			id="skills"
			className="scroll-mt-24 py-16 lg:py-24"
			aria-label="Skills and expertise"
		>
			<SectionHeader
				index="01"
				eyebrow="What I know"
				title="Skills & Expertise"
				accent="amber"
			/>
			<div className="grid gap-5 sm:grid-cols-2">
				{GROUPS.map(({ Icon, title, tile, ring, chip, skills }) => (
					<div
						key={title}
						className={`group rounded-2xl border border-border bg-card p-6 transition-all ${ring}`}
					>
						<div className="flex items-center gap-3">
							<span
								className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tile}`}
							>
								<Icon className="size-5" />
							</span>
							<h3 className="text-lg font-semibold text-foreground">{title}</h3>
						</div>
						<ul className="mt-5 flex flex-wrap gap-2">
							{skills.map((skill) => (
								<li
									key={skill}
									className={`rounded-full px-3 py-1 text-xs font-medium ${chip}`}
								>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
