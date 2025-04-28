import FeaturesSection from "components/FeaturesSection/FeaturesSection";
import Hero from "components/Hero/Hero";
import { HowItWorks } from "components/HowItWorks/HowItWorks";
import StartNow from "components/StartNow/StartNow";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <StartNow />
    </>
  );
}
