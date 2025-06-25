"use client";
import { Brain } from "lucide-react";
import { useState } from "react";

export function AnxietyLevel() {
  const [value, setValue] = useState(5);

  return (
    <section className="bg-white w-1/2">
      <div className="flex gap-1 items-center">
        <span className="color-violet">
          <Brain className="size-5" />
        </span>
        <p className="font-semibold">Anxiety Level</p>
      </div>
      <div className="flex gap-1 items-center mt-2">
        <p className="text-light-gray">Low</p>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-violet"
        />
        <p className="text-light-gray">High</p>
        <div className="ml-2 text-xl font-bold text-violet">{value}</div>
      </div>
    </section>
  );
}
