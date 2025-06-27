import { Toggle } from "@/components/shadcn/ui/toggle";
import { Bed } from "lucide-react";
import { useState } from "react";

export function SleepQuality() {
  const [sleep, setSleep] = useState<number | undefined>(undefined);

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
          <Toggle
            key={num}
            variant="outline"
            pressed={sleep === num}
            onPressedChange={(pressed) => {
              if (pressed) setSleep(num);
              else setSleep(undefined);
            }}
          >
            {num}
          </Toggle>
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
