const StartNow = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#f5f3ff_0%,#e9d5ff_100%)] py-24  text-neutral-800 text-center">
      <h2 className="text-4xl font-bold mt-5 mx-auto">
        Ready to begin your journey to a more serene you?
      </h2>
      <p className="mt-5 text-gray-600 text-xl max-w-2xl mx-auto">
        Join thousands of others who are sleeping better, feeling calmer, and
        living more mindfully with SerenityMind.
      </p>
      <button className=" bg-violet  cursor-pointer text-white font-semibold px-8 py-4 rounded-2xl text-sm md:text-base hover:opacity-90 transition mt-10">
        Start My Journey Today
      </button>
    </section>
  );
};

export default StartNow;
