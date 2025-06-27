import { createClient } from "lib/supabaseServer";
import { redirect } from "next/navigation";
import JournalEntry from "./components/JournalEntry/JournalEntry";
import { MindfulnessTip } from "./components/MindfulnessTips/MindfulnessTips";
import WeeklyOverview from "./components/WeeklyOverview/WeeklyOverview";
import { Welcome } from "./components/Welcome/Welcome";
import { WellbeingTracker } from "./components/WellbeingTracker/WellbeingTracker";

async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return data;
}

async function getMindfulnessTip() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/mindfulness-tip`
  );
  return data.json();
}

export default async function PlatformPage() {
  const user = await getUser();
  const mindfulnessTip = await getMindfulnessTip();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Welcome name={user.user.user_metadata.full_name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WellbeingTracker />
        <WeeklyOverview />
        <MindfulnessTip tip={mindfulnessTip.tip.content} />
        <JournalEntry />
      </div>
    </div>
  );
}
