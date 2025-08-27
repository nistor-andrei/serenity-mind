import { UserInfo } from "@/lib/api/auth";
import { cookies } from "next/headers";
import JournalEntry from "./components/JournalEntry/JournalEntry";
import WeeklyOverview from "./components/WeeklyOverview/WeeklyOverview";
import { Welcome } from "./components/Welcome/Welcome";
import { WellbeingTracker } from "./components/WellbeingTracker/WellbeingTracker";

const getUserInfo = async (url: string): Promise<UserInfo> => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.get("Authorization")?.value ?? "";
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}${url}`, {
    headers: {
      cookie: `Authorization=${cookieHeader}`,
    },
  });
  return res.json();
};

export default async function PlatformPage() {
  const data = await getUserInfo("/api/me");

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
