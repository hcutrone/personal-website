"use client";

import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { SectionHeader } from "@/components";

const PHOTOS = [
	{
		src: "/photos/IMG_2439.JPG",
		alt: "Bottled Sunset",
		info: "Canon Rebel T7 | Costa Rica 2026",
		span: "sm:col-span-2 sm:row-span-3 row-span-2",
	},
	{
		src: "/photos/000073220037.jpg",
		alt: "Bike and Brew Denver",
		info: "Minolta Maxxum HTsi Plus & Kodak Gold 200 | Denver 2026",
	},
	{
		src: "/photos/IMG_2302.JPG",
		alt: "Hammock Chair",
		info: "Canon Rebel T7 | Costa Rica 2026",
	},
	{
		src: "/photos/IMG_2461.JPG",
		alt: "Campfire",
		info: "Canon Rebel T7 | Costa Rica 2026",
		span: "sm:col-span-2",
	},
	{
		src: "/photos/IMG_3450.JPG",
		alt: "Sunset Lifesaver",
		info: "Canon Rebel T7 | Costa Rica 2026",
		span: "sm:col-span-2 sm:row-span-3 row-span-2",
	},
	{
		src: "/photos/japan-bike.jpeg",
		alt: "Lake Kawaguchi Bike Loop",
		info: "Minolta Maxxum HTsi Plus & Kodak Gold 200 | Japan 2025",
		span: "sm:row-span-2 row-span-2",
	},
	{
		src: "/photos/000073210025.jpg",
		alt: "Denver Union Station",
		info: "Minolta Maxxum HTsi Plus & Kodak Gold 200 | Denver 2026",
	},
	{
		src: "/photos/000073230029.jpg",
		alt: "Pink Flower",
		info: "Minolta Maxxum HTsi Plus & Kodak Gold 200 | Costa Rica 2026",
	},
	{
		src: "/photos/000120420023.jpg",
		alt: "VW Bus",
		info: "Minolta Maxxum HTsi Plus & Kodak Gold 200 | Denver 2026",
		span: "sm:col-span-2 sm:row-span-3 row-span-2",
	},
	{
		src: "/photos/IMG_1552.jpg",
		alt: "Bike Sunset",
		info: "Canon Rebel T7 | Bike and Brew Denver 2025",
	},
	{
		src: "/photos/IMG_0499.jpg",
		alt: "Mt. Fuji",
		info: "Canon Rebel T7 | Japan 2025",
	},
	{
		src: "/photos/IMG_1784.jpg",
		alt: "Formula Drift",
		info: "Canon Rebel T7 | Formula Drift Utah 2025",
	},
	{
		src: "/photos/000270510024.jpg",
		alt: "Rock Show",
		info: "Minolta Maxxum HTsi Plus & Kodak Gold 200 | Denver 2025",
		span: "sm:row-span-2",
	},
	{
		src: "/photos/IMG_1083.jpg",
		alt: "Fuji Sunset",
		info: "Canon Rebel T7 | Japan 2025",
	},
];

export function PhotoGallery() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const active = openIndex !== null ? PHOTOS[openIndex] : null;

	return (
		<section
			id="photos"
			className="scroll-mt-24 py-16 lg:py-24"
			aria-label="Favorite photos"
		>
			<SectionHeader
				index="04"
				eyebrow="What I've shot"
				title="Favorite Photos"
				description="Some of my favorite photos I've taken, on both film and digital. Select an image for more details"
				accent="cyan"
			/>

			<Dialog.Root
				open={openIndex !== null}
				onOpenChange={(o) => !o && setOpenIndex(null)}
			>
				<div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4">
					{PHOTOS.map((photo, i) => (
						<button
							key={photo.src}
							type="button"
							onClick={() => setOpenIndex(i)}
							aria-label={`View ${photo.alt}`}
							className={`group relative overflow-hidden rounded-xl border border-border outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${photo.span ?? ""}`}
						>
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								sizes="(max-width: 640px) 50vw, 25vw"
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<span className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
						</button>
					))}
				</div>

				<div className="flex flex-row mt-4 justify-end uppercase font-semibold text-xs sm:text-sm tracking-wider text-muted-foreground hover:text-pop-cyan">
					<a
						href="https://instagram.com/harrison.shoots"
						className="inline-flex items-center gap-0.5"
					>
						See more of my photos on my Instagram
						<ArrowRight className="size-4 sm:size-5" />
					</a>
				</div>

				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
					<Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
						{active && (
							<figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
								<div className="relative aspect-square w-full">
									<Image
										src={active.src}
										alt={active.alt}
										fill
										sizes="90vw"
										className="object-contain"
									/>
								</div>
								<figcaption className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:gap-4 px-3 sm:px-5 py-2 sm:py-4">
									<Dialog.Title className="text-sm font-medium text-foreground text-pretty">
										{active.alt}
									</Dialog.Title>
									<Dialog.Description className="text-sm text-muted-foreground text-pretty">
										{active.info}
									</Dialog.Description>
								</figcaption>
							</figure>
						)}
						<Dialog.Close
							aria-label="Close"
							className="absolute -right-3 -top-3 flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary"
						>
							<X className="size-4" />
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</section>
	);
}
