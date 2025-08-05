"use client";

import Image from "next/image";
import Link from "next/link";

function MobileView() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center lg:hidden gap-4 md:gap-6 h-full">
			<div className="flex flex-col items-center justify-center">
				<Link href="/#Individuals" className="peer/individual flex flex-col items-center justify-center gap-4 min-w-[90px] min-h-[90px] border-2 border-[var(--primary-color)] border-solid rounded-full hover:border-[var(--secondary-color)]">
					<Image src="/PersonChatSmall.svg" alt="Individual" width={50} height={50} />
				</Link>
				<h4 className="peer-hover/individual:text-[var(--secondary-color)]">Individuals</h4>
			</div>
			<div className="flex flex-col items-center">
				<Link href="/#Therapists" className="peer/therapists flex flex-col items-center justify-center gap-4 min-w-[90px] min-h-[90px] border-2 border-[var(--primary-color)] border-solid rounded-full hover:border-[var(--secondary-color)]">
					<Image src="/ChairSmall.svg" alt="Therapists" width={50} height={50} />
				</Link>
				<h4 className="peer-hover/therapists:text-[var(--secondary-color)]">Therapists</h4>
			</div>
			<div className="flex flex-col items-center">
				<Link href="/#Organizations" className="peer/organization flex flex-col items-center justify-center gap-4 min-w-[90px] min-h-[90px] border-2 border-[var(--primary-color)] border-solid rounded-full hover:border-[var(--secondary-color)]">
					<Image src="/ChurchSmall.svg" alt="Organizations" width={50} height={50} />
				</Link>
				<h4 className="peer-hover/organization:text-[var(--secondary-color)]">Organization</h4>
			</div>
		</div>
	)
}

function ScreenView() {
	return (
		<div className="hidden lg:grid grid-cols-12 grid-rows-[140px_140px_140px] w-full xl:w-3/4">
			<Link href="/#Therapists" className="group flex items-center justify-around hover:justify-center gap-4 bg-[var(--background-light)] p-10 text-[var(--primary-color)] h-[140px] rounded-full row-start-2 col-span-6 shadow-[var(--primary-box-shadow)] hover:bg-[var(--primary-color)] transition-all hover:z-10">
				<Image src="/ChairSmall.svg" alt="Therapists" width={70} height={70} className="group-hover:hidden"/>
				<h4 className="group-hover:hidden">Are you a Therapist?</h4>
				<p className="hidden group-hover:block text-white">We help connect you with clients that match your specialty and preferred models for counselling</p>
			</Link>
			<Link href="/#Individuals" className="mt-[60px] group flex items-center justify-around hover:justify-center gap-4 bg-[var(--background-light)] p-10 text-[var(--primary-color)] h-[140px] rounded-full row-start-1 col-start-6 col-span-7 shadow-[var(--primary-box-shadow)] hover:bg-[var(--primary-color)] transition-all hover:z-10">
				<Image src="/PersonChatSmall.svg" alt="Individuals" width={70} height={70} className="group-hover:hidden"/>
				<h4 className="group-hover:hidden">Are you looking for a Therapist?</h4>
				<p className="hidden group-hover:block text-white">We would love to match you with the right therapist for your needs</p>
			</Link>
			<Link href="/#Organizations" className="-mt-[20px] group flex items-center justify-around hover:justify-center gap-4 bg-[var(--background-light)] p-10 text-[var(--primary-color)] h-[140px] rounded-full row-start-3 col-start-4 col-span-11 shadow-[var(--primary-box-shadow)] hover:bg-[var(--primary-color)] transition-all hover:z-10">
				<Image src="/ChurchSmall.svg" alt="Organizations" width={70} height={70} className="group-hover:hidden"/>
				<h4 className="group-hover:hidden">Are you a Church or Christian Organization?</h4>
				<p className="hidden group-hover:block text-white">We network with churches and Christian organizations to meet the mental health and relationship needs in your community</p>
			</Link>
		</div>
	)
}

export default function SubHero() {
	return (
		<section className="mt-6 min-h-[386px] flex items-center justify-center rounded-bl-[365px] bg-[#F5F7F5] px-20 py-16">
			<MobileView/>
			<ScreenView/>
		</section>
	);
}
