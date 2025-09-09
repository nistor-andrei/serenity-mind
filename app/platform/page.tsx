import { fetchServerSide } from "@/lib/api/server";
import { UserInfo } from "@/services/authServices";
import JournalEntry from "./components/JournalEntry/JournalEntry";
import WeeklyOverview from "./components/WeeklyOverview/WeeklyOverview";
import { Welcome } from "./components/Welcome/Welcome";
import { WellbeingTracker } from "./components/WellbeingTracker/WellbeingTracker";

export default async function PlatformPage() {
  const data = await fetchServerSide<UserInfo>("/api/me", "GET");

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Welcome name={data.name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WellbeingTracker />
        <WeeklyOverview />
        Tip
        <JournalEntry />
      </div>
    </div>
  );
}
