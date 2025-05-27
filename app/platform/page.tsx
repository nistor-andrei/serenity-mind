import { pipeline } from "@xenova/transformers";
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

async function getMindfulnessTip() {
  try {
    const generator = await pipeline("text-generation", "Xenova/gpt2");
    const prompt = "Mindfulness tip of the day:\n-";

    const output = await generator(prompt, {
      max_new_tokens: 30,
      temperature: 0.7,
      top_k: 40,
      repetition_penalty: 1.2,
    });

    const generatedText =
      Array.isArray(output) && output[0] && "generated_text" in output[0]
        ? (output[0] as { generated_text: string }).generated_text
        : typeof output === "object" &&
          output !== null &&
          "generated_text" in output
        ? (output as { generated_text: string }).generated_text
        : "";

    return generatedText.replace(prompt, "").trim();
  } catch (error) {
    console.error(error);
  }
}

export default async function PlatformPage() {
  const user = await getUser();
  const tip = await getMindfulnessTip();

  console.log(tip);

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
        <MindfulnessTip tip={tip} />
      </div>
      <div className="xl:col-span-2">
        <JournalEntry />
      </div>
    </section>
  );
}
