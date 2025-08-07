import Button from "@/components/Button";
import Image from "next/image";

function MobileCircles() {
	return (
		<div className="grid w-full grid-cols-1 items-start justify-center gap-4 text-center md:grid-cols-2">
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-[#1B4349] border-solid">
					<Image
						src={"CommonGround.svg"}
						alt={"An icon with three interconnected rings"}
						width={60}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">Creates common ground.</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-[#1B4349] border-solid">
					<Image
						src={"HandAndLeaf.svg"}
						alt={"An icon with a hand holding a leaf"}
						width={60}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					Focuses on getting counselling services to those without support
					first.
				</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-[#1B4349] border-solid">
					<Image
						src={"Lock.svg"}
						alt={"An icon with a closed lock"}
						width={40}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					Offers client confidentiality and choice of therapist.
				</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-[#1B4349] border-solid">
					<Image
						src={"Anonymous.svg"}
						alt={"An icon with a cog in the center of a shield"}
						width={60}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					Offers anonymized data of platform performance and usage.
				</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-[#1B4349] border-solid">
					<Image
						src={"MatchingPieces.svg"}
						alt={"An icon with two connect and matching puzzle pieces"}
						width={65}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					Streamlines counselling matching by enabling direct contact between
					client and therapist.
				</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-[#1B4349] border-solid">
					<Image
						src={"CostSavings.svg"}
						alt={"An icon with a money sign accompanied by a downward arrow"}
						width={60}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					Reduces inefficiencies and costs compared to other church counselling
					programs.
				</h5>
			</div>
		</div>
	);
}

function PopUpCircle() {
	const sharedContainerStyles =
		"h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-full md:shadow-(--tertiary-box-shadow) flex items-center justify-center md:absolute z-10 bg-[#F5F7F5] transition-all hover:scale-110 cursor-pointer p-10";

	return (
		<div className="relative hidden h-[200px] w-[200px] flex-col items-center justify-center gap-6 text-center md:flex md:h-[300px] md:w-[300px] md:rounded-full md:bg-[#F5F7F5] md:p-10 md:shadow-(--tertiary-box-shadow)">
			<p className="hidden text-2xl md:block">
				Benefits of the Soul Strength platform
			</p>
			{/* North */}
			<div className={`${sharedContainerStyles} md:-top-34`}>
				<Image
					src={"CommonGround.svg"}
					alt={"An icon with three interconnected rings"}
					width={80}
					height={0}
				/>
			</div>
			{/* North-East */}
			<div className={`${sharedContainerStyles} md:-top-6 md:-right-28`}>
				<Image
					src={"HandAndLeaf.svg"}
					alt={"An icon with a hand holding a leaf"}
					width={80}
					height={0}
				/>
			</div>
			{/* South-East */}
			<div className={`${sharedContainerStyles} md:-bottom-6 md:-right-28`}>
				<Image
					src={"Lock.svg"}
					alt={"An icon with a closed lock"}
					width={65}
					height={0}
				/>
			</div>
			{/* South */}
			<div className={`${sharedContainerStyles} md:-bottom-34`}>
				<Image
					src={"Anonymous.svg"}
					alt={"An icon with a cog in the center of a shield"}
					width={80}
					height={0}
				/>
			</div>
			{/* South-West */}
			<div className={`${sharedContainerStyles} md:-bottom-6 md:-left-28`}>
				<Image
					src={"MatchingPieces.svg"}
					alt={"An icon with two connect and matching puzzle pieces"}
					width={85}
					height={0}
				/>
			</div>
			{/*	North-West */}
			<div className={`${sharedContainerStyles} md:-top-6 md:-left-28`}>
				<Image
					src={"CostSavings.svg"}
					alt={"An icon with a money sign accompanied by a downward arrow"}
					width={80}
					height={0}
				/>
			</div>
		</div>
	);
}

export default function Organizations() {
	return (
		<section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
			<div className="col-span-1 grid items-start justify-start bg-[#F5F7F5] p-12">
				<h2 id="Organizations">For Your Church or Christian Organization</h2>
				<p className="mt-10 text-2xl">
					Soul Strength specializes in thoughtfully curating Christian
					therapists for the mental health and relationship needs in your
					community, giving you (as a leader) and your members an intuitive and
					confidential platform to find the right therapist based on your needs.
					Soul Strength is defined by the quality of therapists in the network
					who are committed to working in alignment with the purposes and values
					of the church.{" "}
				</p>
				<div className="py-12 md:justify-self-center">
					{/*<PopUpCircle />*/}
					<MobileCircles />
				</div>
				<div className="flex flex-col items-center justify-center gap-6 py-10 md:flex-row md:py-20 xl:hidden">
					<Button label="Join the Network" href="/join" />
					<Button label="Sign In" variant="secondary" href="/join" />
				</div>
			</div>
			<div className="relative col-span-1 row-1 hidden min-h-[740px] flex-col items-center justify-end gap-6 overflow-hidden rounded-br-[365px] bg-[#DCE7DC] pb-40 xl:col-start-2 xl:flex">
				<div className="hidden flex-col items-center justify-center gap-6 xl:flex">
					<Button label="Join the Network" href="/join" />
					<Button label="Sign In" variant="secondary" href="/join" />
				</div>
				<Image
					src={"ChurchLarge.svg"}
					alt="Church Icon"
					width={500}
					height={500}
					className="absolute top-3 left-0 xl:top-10"
				/>
			</div>
		</section>
	);
}
