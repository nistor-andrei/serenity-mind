import { Heart, Route, TrendingUp } from "lucide-react";

const features = [
  {
    icon: (
      <Route className="h-12 w-12 rounded-xl text-primary bg-purple-100 p-2" />
    ),
    title: "Personalized Journeys",
    description:
      "Based on your goals and mood, we craft a unique path for you. From reducing anxiety to building self-esteem, your journey is your own.",
  },
  {
    icon: (
      <Heart className="h-12 w-12 rounded-xl  bg-green-100 p-2 text-green-600" />
    ),
    title: "Interactive Exercises",
    description:
      "Engage with guided meditations, breathing exercises, and mindful journaling that respond to your input and help you grow.",
  },
  {
    icon: (
      <TrendingUp className="h-12 w-12 rounded-xl text-blue-600 bg-blue-100 p-2" />
    ),
    title: "Emotional Journal",
    description:
      "Speak your truth — and let guided prompts gently uncover what lies beneath the surface.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4  bg-clip-text">
          Your Personalized Path to Wellness
        </h2>
        <p className="text-md text-light-gray mb-12 ">
          We believe mental wellness isn&apos;t one-size-fits-all. SerenityMind
          adapts to you, offering
          <span className="block">unique tools for your specific needs.</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl py-10 px-8 shadow-lg hover:shadow-xl transition-shadow duration-300  "
            >
              <span className="mb-6 block">{feature.icon}</span>
              <h3 className="text-2xl font-semibold text-dark mb-3 text-start">
                {feature.title}
              </h3>
              <p className="text-md text-gray-600 text-start">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
