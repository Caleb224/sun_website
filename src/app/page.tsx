import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Individuals from "@/sections/Individuals";
import Organizations from "@/sections/Organizations";
import SubHero from "@/sections/SubHero";
import Therapists from "@/sections/Therapists";

export default function Home() {
	return (
		<div className="overflow-hidden py-6">
			{/*HERO*/}
			<Hero />
			<SubHero />
			{/*ABOUT*/}
			<About />
			{/*THERAPISTS*/}
			<Therapists />
			{/*ORGANIZATIONS*/}
			<Organizations />
			{/*INDIVIDUALS*/}
			<Individuals />
		</div>
	);
}
