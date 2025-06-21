"use client";
import { Button } from "*/components/shadcn/ui/button";
import { Textarea } from "*/components/shadcn/ui/textarea";
import { DatePicker } from "components/DatePicker/DatePicker";
import { supabase } from "lib/supabaseClient";
import { Lightbulb } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { mutate } from "swr";

export const AddJournalEntries = () => {
  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());

  const sendEntry = async () => {
    if (!entry.trim()) return;

    if (!date) {
      toast.error("Date fields is empty");
      return;
    }
    setLoading(true);

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        console.log("User not authenticated");
        setLoading(false);
        return;
      }
      await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: entry, date, userId: user.id }),
      });

      setEntry("");
      await mutate("/api/journal-entries");
      setLoading(false);
    } catch {
      setLoading(false);
      console.log("Something happened");
    }
  };

  return (
    <>
      <section className="mb-4">
        <DatePicker date={date} setDate={setDate} />
      </section>
      <Textarea
        placeholder="How do you feel today?"
        className="h-40"
        value={entry}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setEntry(e.target.value)
        }
      />
      <Button
        onClick={sendEntry}
        disabled={loading}
        className="mt-4 bg-violet hover:bg-hover-violet cursor-pointer text-white px-6 py-2 rounded-xl transition-all"
      >
        <Lightbulb />
        {loading ? "Loading..." : "Get guidance"}
      </Button>
    </>
  );
};
