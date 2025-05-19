import { BookOpen, CircleHelp, Heart, Moon } from "lucide-react";

const features = [
  {
    icon: <Moon className="h-10 w-10 text-primary" />,
    title: "Sleep Better",
    description:
      "Audio guides and calming exercises to help you fall asleep faster and wake up refreshed.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Reduce Anxiety",
    description:
      "Find stillness in the storm — with calming practices that bring your mind back to peace and presence.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Emotional Journal",
    description:
      "Speak your truth — and let guided prompts gently uncover what lies beneath the surface.",
  },
  {
    icon: <CircleHelp className="h-10 w-10 text-primary" />,
    title: "Understand Fears",
    description:
      "Shine a light on your fears — explore them with compassion and discover the strength beneath.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-6 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2  bg-clip-text">
          What SerenityMind Can Do for You
        </h2>
        <p className="text-md text-light-gray mb-12">
          Reduce stress, calm anxiety, and improve sleep with personalized
          guidance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
