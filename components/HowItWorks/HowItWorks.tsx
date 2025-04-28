import { steps } from "./utils";

export const HowItWorks = () => {
  return (
    <section className="bg-[var(--violet)] py-10 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl  text-dark font-bold mb-2 ">
          How SerenityMind Works
        </h2>
        <p className="text-md text-violet-200 mb-12">
          A simple, calming journey to help you find balance and peace.
        </p>
        <div className="flex flex-wrap  gap-8 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center max-w-xs">
              <div className="text-7xl mb-4">{step.icon}</div>
              <p className="text-black rounded-full bg-white size-7 flex justify-center items-center m-2">
                {index + 1}
              </p>
              <h3 className="text-xl font-semibold text-white ">
                {step.title}
              </h3>
              <p className="text-sm text-violet-300 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
