type Accent = "purple" | "cyan" | "pink" | "amber";

const ACCENT: Record<Accent, { bar: string; index: string; chip: string }> = {
	purple: {
		bar: "bg-primary shadow-[0_0_16px_-2px] shadow-primary/70",
		index: "text-primary",
		chip: "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
	},
	cyan: {
		bar: "bg-pop-cyan shadow-[0_0_16px_-2px] shadow-pop-cyan/70",
		index: "text-pop-cyan",
		chip: "bg-pop-cyan text-background shadow-lg shadow-pop-cyan/30",
	},
	pink: {
		bar: "bg-pop-pink shadow-[0_0_16px_-2px] shadow-pop-pink/70",
		index: "text-pop-pink",
		chip: "bg-pop-pink text-background shadow-lg shadow-pop-pink/30",
	},
	amber: {
		bar: "bg-pop-amber shadow-[0_0_16px_-2px] shadow-pop-amber/70",
		index: "text-pop-amber",
		chip: "bg-pop-amber text-background shadow-lg shadow-pop-amber/30",
	},
};

export function SectionHeader({
	index,
	eyebrow,
	title,
	description,
	accent = "purple",
}: {
	index: string;
	eyebrow: string;
	title: string;
	description?: string;
	accent?: Accent;
}) {
	const styles = ACCENT[accent];
	return (
		<div className="mb-10">
			<div className="flex items-center gap-3">
				<span
					className={`h-8 w-1.5 rounded-full ${styles.bar}`}
					aria-hidden="true"
				/>
				<span
					className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold tracking-widest ${styles.chip}`}
				>
					{index}
				</span>
				<span
					className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.index}`}
				>
					{eyebrow}
				</span>
			</div>
			<h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
				{title}
			</h2>
			{description && (
				<p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
					{description}
				</p>
			)}
		</div>
	);
}
