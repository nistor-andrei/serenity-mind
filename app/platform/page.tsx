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
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-3">
        <Welcome name={user.user.user_metadata.full_name} />
      </div>
      <div className="xl:col-span-2 ">
        <MoodTracker />
      </div>
      <div className="xl:col-span-2">
        <WeeklyOverview />
      </div>
      <div className="xl:col-span-1">
        <MindfulnessTip />
      </div>
      <div className="xl:col-span-2">
        <JournalEntry />
      </div>
    </section>
  );
}
