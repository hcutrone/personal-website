import { Book, FileText, Mail } from "lucide-react";
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	StravaIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

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
	{
		label: "Resume",
		href: "/Harrison_Cutrone_Resume.docx.pdf",
		Icon: FileText,
	},
];

export function Socials({ className }: { className?: string }) {
	return (
		<ul
			className={cn(
				"mt-8 flex flex-wrap items-center justify-center gap-3",
				className,
			)}
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
	);
}
