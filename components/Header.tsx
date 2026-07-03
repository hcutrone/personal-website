"use client";

import { useEffect, useState } from "react";

const NAV = [
	{ id: "about", label: "About" },
	{ id: "skills", label: "Skills" },
	{ id: "work", label: "Work" },
	{ id: "projects", label: "Projects" },
	{ id: "photos", label: "Photos" },
	{ id: "books", label: "Books" },
];

export function FloatingHeader() {
	const [active, setActive] = useState("about");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: "-45% 0px -50% 0px" },
		);
		NAV.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
			<nav
				aria-label="Primary"
				className="flex max-w-full items-center gap-1 rounded-full border border-border/80 bg-card/70 p-1.5 shadow-lg shadow-mauve-1/50 backdrop-blur-xl"
			>
				<ul className="flex items-center overflow-x-auto">
					{NAV.map(({ id, label }) => {
						const isActive = active === id;
						return (
							<li key={id}>
								<a
									href={`#${id}`}
									aria-current={isActive ? "true" : undefined}
									className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
										isActive
											? "bg-primary/15 text-foreground"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{label}
								</a>
							</li>
						);
					})}
				</ul>
				<a
					href="mailto:harrisoncutrone@gmail.com"
					className="ml-1 hidden shrink-0 rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:block"
				>
					Contact
				</a>
			</nav>
		</header>
	);
}
