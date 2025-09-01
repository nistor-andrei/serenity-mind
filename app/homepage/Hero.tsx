import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex bg-[linear-gradient(135deg,#f5f3ff_0%,#e9d5ff_100%)] px-20  justify-between scroll-mt-20"
    >
      <section className="pt-16 px-4 flex justify-start flex-col ">
        <h1 className="text-3xl lg:text-6xl font-bold mb-6 w-lg lg:w-xl">
          Find your inner peace, one breath at a time.
        </h1>

        <p className="mb-10 text-left w-lg min-w-52 text-light-gray">
          SerenityMind is your personal guide to a calmer, happier you. Discover
          personalized journeys, interactive exercises, and mindful practices
          designed to fit your life.
        </p>
        <button className="self-start bg-violet shadow-lg cursor-pointer text-white font-semibold px-8 py-3 rounded-full text-lg md:text-base hover:opacity-90 transition">
          Start your journey
        </button>
      </section>
      <section>
        <Image src="/meditate.png" alt="Meditate" width={500} height={300} />
      </section>
    </div>
  );
};

export default Hero;
