import { Navbar } from "components/Navbar/Navbar";
import FeaturesSection from "./homepage/FeaturesSection";
import Hero from "./homepage/Hero";
import HowItWorks from "./homepage/HowItWorks/HowItWorks";
import StartNow from "./homepage/StartNow";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <StartNow />
    </>
  );
}
