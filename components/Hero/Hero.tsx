import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex bg-[var(--light-violet)] px-20  justify-between scroll-mt-20"
    >
      <section className="pt-16 px-4 flex justify-start flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold mb-1">Better sleep.</h1>
        <h2 className="text-5xl md:text-6xl font-bold mb-4"> Clearer mind.</h2>
        <p className="mb-6 text-left w-lg min-w-52 text-[var(--light-gray)]">
          Discover how restful sleep, reduced anxiety, and emotional awareness
          can change your life.
        </p>
        <button className="self-start bg-[var(--violet)] cursor-pointer text-white font-semibold px-8 py-4 rounded-2xl text-sm md:text-base hover:opacity-90 transition">
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
