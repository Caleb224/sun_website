import Button from "@/components/Button";
import InfoCircle from "@/components/InfoCircle";
import Image from "next/image";

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
		<section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3 2xl:grid-rows-[720px_minmax(220px,1fr)]">
			<div className="hidden min-h-[720px] overflow-hidden rounded-bl-[365px] bg-[#1B4349] xl:relative xl:row-span-2 xl:block xl:h-full">
				<Image
					src={"ChairLarge.svg"}
					alt={"Therapist Chair Icon"}
					width={500}
					height={500}
					className="-left-5 xl:-left-20 absolute top-10 xl:top-30"
				/>
			</div>
			<div className="relative grid-cols-2 grid-rows-2 bg-[#C8823A] p-12 text-white xl:col-span-2 2xl:grid">
				<div>
					<h2 id="Therapists">FOR THERAPISTS</h2>
					<p className="mt-10 text-2xl">
						As a therapist, do you ever worry about the referrals you get from
						popular therapist listings? Do you get drained working with client
						concerns that are outside of your expertise or preferred model?
					</p>
				</div>
				<div className="2xl:-top-5 flex items-center justify-center py-24 2xl:absolute 2xl:right-30">
					<TherapistChatBubble />
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
