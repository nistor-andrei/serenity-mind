import Image from "next/image";

const StartNow = () => {
  return (
    <section className="bg-violet-300 mx-20 my-10 rounded-4xl text-white flex flex-col items-center py-10">
      <Image src="/cta.svg" alt="Cta" width={300} height={150} />
      <h2 className="text-3xl font-bold mb-4">
        Your Journey to Inner Peace Begins Here
      </h2>
      <p className="text-sm mb-4 w-128 text-center">
        Embrace a calmer mind, restful sleep, and a deeper connection with
        yourself. SerenityMind guides you every step of the way toward a more
        harmonious life.
      </p>
      <button className=" bg-[var(--violet)]  cursor-pointer text-white font-semibold px-8 py-4 rounded-2xl text-sm md:text-base hover:opacity-90 transition">
        Join now
      </button>
    </section>
  );
};

export default StartNow;
