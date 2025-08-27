"use client";
import { Card } from "components/Card/Card";
import { AnxietyLevel } from "./AnxietyLevel/AnxietyLevel";
import { SleepQuality } from "./SleepQuality/SleepQuality";

export const WellbeingTracker = () => {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-6">Wellbeing Tracker</h2>
      <div className="flex gap-5 justify-center flex-col">
        <AnxietyLevel />
        <SleepQuality />
      </div>
    </Card>
  );
};
