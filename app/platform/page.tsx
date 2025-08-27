import JournalEntry from "./components/JournalEntry/JournalEntry";
import WeeklyOverview from "./components/WeeklyOverview/WeeklyOverview";
import { Welcome } from "./components/Welcome/Welcome";
import { WellbeingTracker } from "./components/WellbeingTracker/WellbeingTracker";

export default async function PlatformPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Welcome name={"Test"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WellbeingTracker />
        <WeeklyOverview />
        Tip
        <JournalEntry />
      </div>
    </div>
  );
}
