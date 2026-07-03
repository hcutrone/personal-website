import { Star } from "lucide-react";
import { SectionHeader } from "@/components";

const BOOKS = [
	{
		title: "The Invisible Life of Addie LaRue",
		author: "V. E. Schwab",
		genre: "Fantasy",
		stars: 5,
		color: "primary",
	},
	{
		title: "Project Hail Mary",
		author: "Andy Weir",
		genre: "Sci-fi",
		stars: 4.75,
		color: "pop-amber",
	},
	{
		title: "Ninth House",
		author: "Leigh Bardugo",
		genre: "Fantasy",
		stars: 5,
		color: "pop-pink",
	},
	{
		title: "The Will of the Many",
		author: "James Islington",
		genre: "Fantasy",
		stars: 5,
		color: "pop-cyan",
	},
	{
		title: "Dark Matter",
		author: "Blake Crouch",
		genre: "Sci-fi",
		stars: 5,
		color: "primary",
	},
	{
		title: "Oathbringer (The Stormlight Archive #3)",
		author: "Brandon Sanderson",
		genre: "Fantasy",
		stars: 4.5,
		color: "pop-amber",
	},
	{
		title: "The Butchers Masquerade (Dungeon Crawler Carl #5)",
		author: "Matt Dinniman",
		genre: "Fantasy",
		stars: 5,
		color: "pop-pink",
	},
	{
		title: "Tomorrow, and Tomorrow, and Tomorrow",
		author: "Gabrielle Zevin",
		genre: "Fiction",
		stars: 5,
		color: "pop-cyan",
	},
];

export function Books() {
	return (
		<section
			id="books"
			className="scroll-mt-24 py-16 lg:py-24"
			aria-label="Favorite books"
		>
			<SectionHeader
				index="05"
				eyebrow="What I've read"
				title="Favorite Books"
				description="In no partiular order"
				accent="amber"
			/>
			<ul className="space-y-3">
				{BOOKS.map((book) => (
					<li
						key={book.title}
						className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-pop-amber/50"
					>
						<span
							aria-hidden="true"
							className={`h-14 w-3 shrink-0 rounded-sm bg-${book.color}`}
						/>
						<div className="min-w-0 flex-1">
							<h3 className="truncate font-semibold text-foreground">
								{book.title}
							</h3>
							<p className="truncate text-sm text-muted-foreground">
								{book.author}
							</p>
						</div>
						<div className="flex flex-row items-center gap-0.5">
							<StarRating rating={book.stars} />
						</div>
						<span
							className={`rounded-full bg-${book.color}/15 px-3 py-1 text-xs font-medium text-${book.color} ring-1 ring-inset ring-${book.color}/30`}
						>
							{book.genre}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}

function StarRating({ rating }: { rating: number }) {
	return Array.from({ length: 5 }).map((_, i) => {
		const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;

		return (
			// biome-ignore lint/suspicious/noArrayIndexKey: We have no other value to use as they keys here
			<div key={i} className="relative" style={{ width: 24, height: 24 }}>
				<Star
					className="absolute inset-0 text-gray-300"
					strokeWidth={1.5}
					size={24}
				/>

				<div
					className="absolute inset-0 overflow-hidden"
					style={{ width: `${fillPercent}%` }}
				>
					<Star
						size={24}
						className="text-yellow-400"
						fill="currentColor"
						strokeWidth={1.5}
					/>
				</div>
			</div>
		);
	});
}
