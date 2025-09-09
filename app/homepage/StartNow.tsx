import { Button } from "@/components/shadcn/ui/button";

const StartNow = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#f5f3ff_0%,#e9d5ff_100%)] py-24  text-neutral-800 text-center">
      <h2 className="text-4xl font-bold mt-6 mx-auto text-purple-900 ">
        Ready to begin your journey to a more{" "}
        <span className="block">serene you?</span>
      </h2>
      <p className="mt-6 text-gray-600 text-xl max-w-2xl mx-auto">
        Join thousands of others who are sleeping better, feeling calmer, and
        living more mindfully with SerenityMind.
      </p>
      <Button className="cursor-pointer mt-6" variant="primary" size="xl">
        Start My Journey Today
      </Button>
    </section>
  );
};

export default StartNow;
