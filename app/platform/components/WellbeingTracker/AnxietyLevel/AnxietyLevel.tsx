"use client";
import { Slider } from "@/components/shadcn/ui/slider";
import { cn } from "@/utils/utils";
import { Brain } from "lucide-react";
import { useState } from "react";

export function AnxietyLevel() {
  const [value, setValue] = useState([1]);
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
        <Slider
          value={value}
          onValueChange={setValue}
          max={10}
          step={1}
          className={cn("w-[100%]")}
        />
        <p className="text-light-gray">High</p>
        <div className="ml-2 text-xl font-bold text-violet">{value}</div>
      </div>
    </section>
  );
}
