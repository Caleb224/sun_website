import InfoCircle from "@/components/InfoCircle";
import Image from "next/image";
import Link from "next/link";

// Find Your Place in the Network
function FYPITN() {
	const sharedContainerStyles =
		"h-[110px] w-[110px] md:h-[150px] md:w-[150px] rounded-full bg-[#DCE7DC] absolute shadow-(--primary-box-shadow) flex items-center justify-center";
	return (
		<div className="flex min-h-[720px] flex-col items-center justify-center justify-self-end md:min-h-[860px]">
			<div className="relative flex w-full grow flex-col items-center">
				<Link
					href="/#Individuals"
					className={`${sharedContainerStyles} top-10 group flex items-center justify-center`}
				>
					<Image
						src={"PersonChatSmall.svg"}
						alt={"Therapist Chatting Icon"}
						width={89}
						height={89}
						className="hidden md:block group-hover:hidden"
					/>
					<Image
						src={"PersonChatSmall.svg"}
						alt={"Therapist Chatting Icon"}
						width={60}
						height={60}
						className="md:hidden group-hover:hidden"
					/>
                    <p className="hidden group-hover:block md:text-xl! font-poppins! text-[var(--primary-color)]">Individuals</p>
				</Link>
				<Link
					href="/#Therapists"
					className={`${sharedContainerStyles} top-40 left-0 md:top-50 group flex items-center justify-center`}
				>
					<Image
						src={"ChairSmall.svg"}
						alt={"Therapist Chair Icon"}
						width={89}
						height={89}
						className="hidden md:block group-hover:hidden"
					/>
					<Image
						src={"ChairSmall.svg"}
						alt={"Therapist Chair Icon"}
						width={60}
						height={60}
						className="md:hidden group-hover:hidden"
					/>
                    <p className="hidden group-hover:block md:text-xl! font-poppins! text-[var(--primary-color)]">Therapists</p>
				</Link>
				<Link
					href="/#Organizations"
					className={`${sharedContainerStyles} top-40 right-0 md:top-50 group flex items-center justify-center`}
				>
					<Image
						src={"ChurchSmall.svg"}
						alt={"Church Icon"}
						width={89}
						height={89}
						className="hidden md:block group-hover:hidden"
					/>
					<Image
						src={"ChurchSmall.svg"}
						alt={"Church Icon"}
						width={60}
						height={60}
						className="md:hidden group-hover:hidden"
					/>
                    <p className="hidden group-hover:block md:text-xl! font-poppins! text-[var(--primary-color)]">Organizations</p>
				</Link>
			</div>
			<Image
				src={"U-logo.svg"}
				alt={"Soul Strength Network Logo"}
				width={368}
				height={0}
			/>
		</div>
	);
}

export default function About() {
	return (
		<section
			className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3 xl:grid-rows-[minmax(540px,1fr)_minmax(420px,1fr)]"
			id="About"
		>
			<div className="flex flex-col items-start justify-center bg-[#788E91] p-12 text-white xl:col-span-2">
				<h2>ABOUT</h2>
				<h3 className="mt-10">
					Soul Strength is a Curated Network of Therapists for Christians
				</h3>
				<p className="mt-6 text-2xl">
					Soul Strength is a Network that connects people of faith to a
					therapist of faith. The Network’s vision is to become the trusted
					place to connect Christian clients with Christian therapists when
					common ground matters.
					<br />
					<br />
					We get it. Finding the right therapist is hard. Sifting through
					hundreds of therapist profiles can be overwhelming, while still
					leaving you with unanswered questions. How do I know my therapist will
					be a good fit for me? How do I know they will understand or respect my
					faith convictions?
					<br />
					<br />
					We’re here to help. We network with churches and Christian
					organizations to meet the mental health and relationship needs in your
					community
				</p>
			</div>
			<div className="flex flex-col items-center rounded-br-[365px] bg-[#DCE7DC] p-12 pb-20 xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:row-end-3">
				<h4 className="justify-self-start text-[#1B4349]">
					Find Your Place in The Network
				</h4>
				<FYPITN />
			</div>
			<div className="flex flex-col items-start justify-center bg-[#F5F7F5] p-12 text-[#1B4349] xl:col-span-2 xl:row-start-2 xl:row-end-2">
				<h4>About Our Name & Logo</h4>
				<p className="mt-6 text-2xl">
					The design in the “U” in our name, Soul Strength, is a Hebrew letter
					from the word for soul, <i>nephesh</i>. It stands as a call back to
					our roots, which are anchored in the ancient Hebrew story. Biblically,{" "}
					<i>nephesh</i> simply refers to our whole, physical, living being. As
					a counselling network, we seek to love the LORD our God with all our
					heart, <strong>soul</strong> and <strong>strength</strong> (reference
					to Deuteronomy 6:4-5).
					<br />
					<br />
					At Soul Strength we honour the historic truth of our faith and work
					together with the purposes and values of the Church in discipleship
					under Christ.
					<br />
					<br />
					If this feels like common ground, we’re glad you found us. Join the
					network!
				</p>
			</div>
		</section>
	);
}
