import Button from "@/components/Button";
import Image from "next/image";

export default function Individuals() {
	return (
		<section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3 xl:grid-rows-[520px_minmax(480px,1fr)]">
			<div className="bg-[#788E91] p-12 text-white xl:col-span-2 xl:col-start-2">
				<h2 id="Individuals">FOR INDIVIDUALS</h2>
				<p className="mt-10 text-2xl">
					Ultimately, this network is for you, as a prospective client. We
					worked hard to build a platform that to match you with the right
					therapist and gives you confidence in your future.
					<br />
					<br />
					If you’re already a Soul Strength member, hit the Sign In button to
					access our platform.
					<br />
					<br />
					The heart of our network is in our relationship with faith communities
					and churches. If your community is not yet part of the Soul Strength
					network, we’d love to hear about how we might serve your faith
					community too.
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-6 bg-[#DCE7DC] p-12 xl:col-span-2 xl:col-start-2 xl:row-start-2 xl:row-end-2">
				<p className="mb-10 text-2xl">
					If you’re not a member of a Soul Strength organization and you’re
					looking for a Christian therapist for yourself or someone you love,
					we’re here to help. Use the contact form to reach out. We’ll do our
					best to connect you with the right therapist.
				</p>
				<div className="flex flex-col items-center justify-center gap-6">
					<Button label="Contact Us" href="/contact" />
					<Button label="Sign In" variant="secondary" href="/join" />
				</div>
			</div>
			<div className="relative row-1 hidden min-h-[740px] overflow-hidden rounded-bl-[365px] bg-[#C8823A] lg:min-h-full xl:col-span-1 xl:row-start-1 xl:row-end-3 xl:block">
				<Image
					src={"PersonChatLarge.svg"}
					alt={"Therapist Chatting Icon"}
					width={500}
					height={500}
					className="-left-20 absolute top-20 xl:top-40"
				/>
			</div>
		</section>
	);
}
