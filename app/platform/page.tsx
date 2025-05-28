import { createClient } from "lib/supabaseServer";
import { redirect } from "next/navigation";
import JournalEntry from "./JournalEntry/JournalEntry";
import { MindfulnessTip } from "./MindfulnessTips/MindfulnessTips";
import MoodTracker from "./MoodTracker/MoodTracker";
import WeeklyOverview from "./WeeklyOverview/WeeklyOverview";
import { Welcome } from "./Welcome/Welcome";

async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return data;
}

export default async function PlatformPage() {
  const user = await getUser();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Welcome name={user.user.user_metadata.full_name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MoodTracker />
        <WeeklyOverview />
        <MindfulnessTip />
        <JournalEntry />
      </div>
    </div>
  );
}
