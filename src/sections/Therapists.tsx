import Button from "@/components/Button";
import InfoCircle from "@/components/InfoCircle";
import Image from "next/image";

function MobileCircles() {
	return (
		<div className="grid w-full grid-cols-1 items-start justify-center gap-4 text-center md:grid-cols-2">
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-white border-solid">
					<Image
						src={"PuzzlePiece.svg"}
						alt={"An icon with three interconnected rings"}
						width={60}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">This reduces client-therapist mismatch.</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-white border-solid">
					<Image
						src={"CheckCircle.svg"}
						alt={"An icon with a hand holding a leaf"}
						width={60}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					We know that you are much more likely to be effective with your client
					population and needs when working within your specialty and training.
				</h5>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4">
				<div className="flex min-h-[90px] min-w-[90px] items-center justify-center rounded-full border border-white border-solid">
					<Image
						src={"Leaf.svg"}
						alt={"An icon with a closed lock"}
						width={40}
						height={0}
					/>
				</div>
				<h5 className="font-forum!">
					We value therapist <strong>sustainability</strong>. We want to avoid
					therapist burnout by promoting the best fit with your clients.
				</h5>
			</div>
		</div>
	);
}

export function TherapistChatBubble() {
	return (
		<div className="relative mb-12 lg:block">
			<div className="-top-10 md:-top-15 xl:-top-10 xl:-left-20 absolute">
				<InfoCircle
					icon={
						<>
							<Image
								src={"PuzzlePiece.svg"}
								alt={"Puzzle Piece Icon"}
								width={89}
								height={0}
								className="hidden md:block"
							/>
							<Image
								src={"PuzzlePiece.svg"}
								alt={"Puzzle Piece Icon"}
								width={60}
								height={0}
								className="md:hidden"
							/>
						</>
					}
					variant="secondary"
				/>
			</div>
			<div className="-left-5 xl:-left-25 absolute top-55 xl:top-50">
				<InfoCircle
					icon={
						<>
							<Image
								src={"CheckCircle.svg"}
								alt={"Checkmark Icon"}
								width={89}
								height={0}
								className="hidden md:block"
							/>
							<Image
								src={"CheckCircle.svg"}
								alt={"Checkmark Icon"}
								width={60}
								height={0}
								className="md:hidden"
							/>
						</>
					}
					variant="secondary"
				/>
			</div>
			<div className="-right-5 xl:-right-10 absolute top-63 md:top-67 xl:top-63">
				<InfoCircle
					icon={
						<>
							<Image
								src={"Leaf.svg"}
								alt={"Leaf Icon"}
								width={59}
								height={0}
								className="hidden md:block"
							/>
							<Image
								src={"Leaf.svg"}
								alt={"Leaf Icon"}
								width={40}
								height={0}
								className="md:hidden"
							/>
						</>
					}
					variant="secondary"
				/>
			</div>
			<Image
				src={"SpeechBubble.svg"}
				alt={
					"Soul Strength connects you with clients that match your specialty and preferred therapeutic models"
				}
				width={300}
				height={296}
			/>
		</div>
	);
}

export default function Therapists() {
	return (
		<section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3 2xl:grid-rows-[minmax(720px,1fr)_220px]">
			<div className="hidden min-h-[720px] overflow-hidden rounded-bl-[365px] bg-[#1B4349] xl:relative xl:row-span-2 xl:block xl:h-full">
				<Image
					src={"ChairLarge.svg"}
					alt={"Therapist Chair Icon"}
					width={500}
					height={500}
					className="-left-5 xl:-left-20 absolute top-10 xl:top-30"
				/>
			</div>
			<div className="relative flex flex-col bg-[#C8823A] p-12 text-white xl:col-span-2">
				<div>
					<h2 id="Therapists">FOR THERAPISTS</h2>
					<p className="mt-10 text-2xl">
						As a therapist, do you ever worry about the referrals you get from
						popular therapist listings? Do you get drained working with client
						concerns that are outside of your expertise or preferred model?
					</p>
				</div>
				<div className="flex flex-col items-center justify-center py-24">
					<p className="pb-12 font-bold font-forum! text-2xl md:w-3/5 md:self-center md:justify-self-center 2xl:w-1/2">
						Soul Strength connects you with clients that match your specialty
						and preferred therapeutic models.
					</p>
					<MobileCircles />
				</div>
				<div className="col-span-2 row-2 mt-6 self-center">
					<p className="text-2xl lg:pt-6">
						Soul Strength is a <strong>Faith-to-Faith</strong> network; meaning,
						we specialize in creating common ground between clients and
						therapists. We understand the intricate relationship between faith
						and mental health, and we want clients and therapists to know that
						questions of faith and spirituality are welcome in session.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-6 bg-[#F5F7F5] py-20 md:flex-row xl:col-span-2">
				<Button label="Join the Network" href="/join" />
				<Button label="Sign In" variant="secondary" href="/join" />
			</div>
		</section>
	);
}
