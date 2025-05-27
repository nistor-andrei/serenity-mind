"use client";

import { Card } from "components/Card/Card";
import { Annoyed, Frown, Meh, Smile } from "lucide-react";
import { useState } from "react";
const moods = [
  { label: "Happy", icon: Smile },
  { label: "Neutral", icon: Meh },
  { label: "Worried", icon: Annoyed },
  { label: "Sad", icon: Frown },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">How are you feeling today?</h2>
      <div className="flex gap-5 items-center">
        {moods.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setSelectedMood(label)}
            className={`flex flex-col items-center p-3 rounded-lg  transition-all border-1 border-gray-100 cursor-pointer
              ${
                selectedMood === label
                  ? "bg-indigo-100 border-indigo-500 text-indigo-700"
                  : " hover:bg-gray-100"
              }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default MoodTracker;
