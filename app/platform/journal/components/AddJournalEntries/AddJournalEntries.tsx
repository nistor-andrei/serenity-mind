"use client";
import { Button } from "*/components/shadcn/ui/button";
import { Textarea } from "*/components/shadcn/ui/textarea";
import { format } from "date-fns";
import { supabase } from "lib/supabaseClient";
import { Lightbulb } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

async function sendJournalEntry(
  url: string,
  { arg }: { arg: { userInput: string; date: string; userId: string } }
) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  if (!res.ok) {
    throw new Error("Failed to send entry.");
  }
}

export const AddJournalEntries = () => {
  const [entry, setEntry] = useState("");
  const date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd");

  const { trigger, isMutating } = useSWRMutation(
    "/api/journal",
    sendJournalEntry
  );

  const handleSendEntry = async () => {
    if (!entry.trim()) return;

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        toast.error("User not authenticated");
        return;
      }
      await trigger({ userInput: entry, date: formattedDate, userId: user.id });

      setEntry("");
      await mutate("/api/journal-entries");
    } catch (error) {
      console.error(error);
      toast.error("Something happened while sending your entry.");
    }
  };

  return (
    <>
      <Textarea
        placeholder="How do you feel today?"
        className="h-40"
        value={entry}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setEntry(e.target.value)
        }
      />
      <Button
        onClick={handleSendEntry}
        disabled={isMutating}
        className="mt-4 bg-violet hover:bg-hover-violet cursor-pointer text-white px-6 py-2 rounded-xl transition-all"
      >
        <Lightbulb />
        {isMutating ? "Loading..." : "Get guidance"}
      </Button>
    </>
  );
};
