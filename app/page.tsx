import {
	Books,
	Landing,
	PersonalProjects,
	PhotoGallery,
	Skills,
	WorkProjects,
} from "@/components";

export default function Page() {
	return (
		<div id="top" className="relative min-h-screen bg-background">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(50rem_30rem_at_15%_-5%,oklch(0.3_0.12_305/0.55),transparent),radial-gradient(40rem_25rem_at_95%_10%,oklch(0.35_0.09_200/0.28),transparent),radial-gradient(45rem_30rem_at_50%_120%,oklch(0.32_0.1_350/0.25),transparent)]"
			/>
			<main className="mx-auto max-w-4xl px-6">
				<Landing />
				<Skills />
				<WorkProjects />
				<PersonalProjects />
				<PhotoGallery />
				<Books />
			</main>
		</div>
	);
}
