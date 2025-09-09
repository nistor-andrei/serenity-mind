import { Star } from "lucide-react";
import Image from "next/image";
import { stars, steps } from "./utils";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center flex gap-10">
        <section className="relative">
          <Image
            src="/woman-meditate.png"
            alt="woman that meditate pic"
            priority
            width={1000}
            height={1000}
            className="rounded-md"
          />
          <div className="flex shadow-2xl rounded-lg flex-col w-72 px-8  gap-2 py-4 absolute -right-10 -bottom-8 bg-white">
            <p className="font-semibold text-start">
              &quot;SerenityMind has been a game changer for my anxiety.&quot;
            </p>
            <p className="text-light-gray text-start">- Jessica L</p>
            <div className="flex">
              {stars.map((index) => {
                return (
                  <Star
                    key={index}
                    className="text-yellow-400 "
                    fill="currentColor"
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl  text-black font-bold mb-2 ">
            A space for you to feel,heal and grow
          </h2>
          <p className="color-light-gray">
            Life can be overwhelming. SerenityMind provides simple, effective
            tools to help you navigate its challenges with more grace and less
            stress. We&apos;re not just an app; we&apos;re a companion on your
            wellness journey.
          </p>
          <section className="mt-6 ">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex text-lg gap-2 mb-4 items-center"
              >
                {step.icon}
                <p className="text-black font-bold text-start ">
                  {step.title}
                  <p className="text-start font-normal inline ml-1 text-light-gray">
                    {step.description}
                  </p>
                </p>
              </div>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;
