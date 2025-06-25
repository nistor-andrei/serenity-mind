import { createClient } from "lib/supabaseServer";
import { redirect } from "next/navigation";
import JournalEntry from "./components/JournalEntry/JournalEntry";
import { MindfulnessTip } from "./components/MindfulnessTips/MindfulnessTips";
import WeeklyOverview from "./components/WeeklyOverview/WeeklyOverview";
import { Welcome } from "./components/Welcome/Welcome";

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
        <WeeklyOverview />
        <MindfulnessTip />
        <JournalEntry />
      </div>
    </div>
  );
}
