import Image from "next/image";

export default function Hero() {
	return (
		<section className="flex gap-6">
			<div className="hidden h-[506px] w-[544px] items-center justify-center bg-[#C8823A] p-10 text-right text-white xl:flex">
				<h3>
					Welcome to Soul Strength
					<br />a Faith-to-Faith network
					<br />
					of Christian Therapists
				</h3>
			</div>
			<div className="flex h-[506px] flex-grow flex-col items-center justify-center bg-[#1B4349] p-10">
				<Image
					src={"HeroTagline.svg"}
					alt={"Connecting You With A Christian Therapist"}
					width={770}
					height={292}
				/>
			</div>
		</section>
	);
}
