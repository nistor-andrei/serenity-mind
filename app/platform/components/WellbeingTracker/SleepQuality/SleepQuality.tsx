import { Bed } from "lucide-react";
import { useState } from "react";

export function SleepQuality() {
  const [sleep, setSleep] = useState<number | null>(null);

  return (
    <section className="">
      <div className=" mb-3 flex items-center gap-1">
        <span className="text-serenity-blue">
          <Bed />
        </span>
        <p className="font-semibold">Sleep Quality</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setSleep(num)}
            className={`w-10 h-10 rounded-full border text-sm font-medium transition ${
              sleep === num
                ? "bg-purple-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      {sleep && (
        <p className="mt-3 text-center text-gray-700">
          You rated your sleep: <strong>{sleep}/10</strong>
        </p>
      )}
    </section>
  );
}
