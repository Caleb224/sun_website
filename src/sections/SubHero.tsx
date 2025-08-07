"use client";

import Image from "next/image";
import Link from "next/link";

function MobileView() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6 lg:hidden">
			<div className="flex flex-col items-center justify-center">
				<Link
					href="/#Individuals"
					className="peer/individual flex min-h-[90px] min-w-[90px] flex-col items-center justify-center gap-4 rounded-full border-2 border-[var(--primary-color)] border-solid hover:border-[var(--secondary-color)]"
				>
					<Image
						src="/PersonChatSmall.svg"
						alt="Individual"
						width={50}
						height={50}
					/>
				</Link>
				<h4 className="peer-hover/individual:text-[var(--secondary-color)]">
					Individuals
				</h4>
			</div>
			<div className="flex flex-col items-center">
				<Link
					href="/#Therapists"
					className="peer/therapists flex min-h-[90px] min-w-[90px] flex-col items-center justify-center gap-4 rounded-full border-2 border-[var(--primary-color)] border-solid hover:border-[var(--secondary-color)]"
				>
					<Image
						src="/ChairSmall.svg"
						alt="Therapists"
						width={50}
						height={50}
					/>
				</Link>
				<h4 className="peer-hover/therapists:text-[var(--secondary-color)]">
					Therapists
				</h4>
			</div>
			<div className="flex flex-col items-center">
				<Link
					href="/#Organizations"
					className="peer/organization flex min-h-[90px] min-w-[90px] flex-col items-center justify-center gap-4 rounded-full border-2 border-[var(--primary-color)] border-solid hover:border-[var(--secondary-color)]"
				>
					<Image
						src="/ChurchSmall.svg"
						alt="Organizations"
						width={50}
						height={50}
					/>
				</Link>
				<h4 className="peer-hover/organization:text-[var(--secondary-color)]">
					Organization
				</h4>
			</div>
		</div>
	);
}

function ScreenView() {
	return (
		<div className="hidden w-full grid-cols-12 grid-rows-[140px_140px_140px] lg:grid xl:w-3/4">
			<Link
				href="/#Therapists"
				className="group col-span-6 row-start-2 flex h-[140px] items-center justify-around gap-4 rounded-full bg-[var(--background-light)] p-10 text-[var(--primary-color)] shadow-[var(--primary-box-shadow)] transition-all hover:z-10 hover:justify-center hover:bg-[var(--primary-color)]"
			>
				<Image
					src="/ChairSmall.svg"
					alt="Therapists"
					width={70}
					height={70}
					className="group-hover:hidden"
				/>
				<h4 className="group-hover:hidden">Are you a Therapist?</h4>
				<p className="hidden text-white group-hover:block md:text-2xl">
					We help connect you with clients that match your specialty and
					preferred models for counselling
				</p>
			</Link>
			<Link
				href="/#Individuals"
				className="group col-span-7 col-start-6 row-start-1 mt-[60px] flex h-[140px] items-center justify-around gap-4 rounded-full bg-[var(--background-light)] p-10 text-[var(--primary-color)] shadow-[var(--primary-box-shadow)] transition-all hover:z-10 hover:justify-center hover:bg-[var(--primary-color)]"
			>
				<Image
					src="/PersonChatSmall.svg"
					alt="Individuals"
					width={70}
					height={70}
					className="group-hover:hidden"
				/>
				<h4 className="group-hover:hidden">Are you looking for a Therapist?</h4>
				<p className="hidden text-white group-hover:block md:text-2xl">
					We would love to match you with the right therapist for your needs
				</p>
			</Link>
			<Link
				href="/#Organizations"
				className="-mt-[20px] group col-span-11 col-start-4 row-start-3 flex h-[140px] items-center justify-around gap-4 rounded-full bg-[var(--background-light)] p-10 text-[var(--primary-color)] shadow-[var(--primary-box-shadow)] transition-all hover:z-10 hover:justify-center hover:bg-[var(--primary-color)]"
			>
				<Image
					src="/ChurchSmall.svg"
					alt="Organizations"
					width={70}
					height={70}
					className="group-hover:hidden"
				/>
				<h4 className="group-hover:hidden">
					Are you a Church or Christian Organization?
				</h4>
				<p className="hidden text-white group-hover:block md:text-2xl">
					We network with churches and Christian organizations to meet the
					mental health and relationship needs in your community
				</p>
			</Link>
		</div>
	);
}

export default function SubHero() {
	return (
		<section className="mt-6 flex min-h-[386px] items-center justify-center rounded-bl-[365px] bg-[#F5F7F5] px-20 py-16">
			<MobileView />
			<ScreenView />
		</section>
	);
}
