"use client";

import { Button } from "@/components/shadcn/ui/button";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { Lightbulb } from "lucide-react";
import { useState } from "react";

export const AddJournalEntries = () => {
  const [entry, setEntry] = useState("");

  const handleSendEntry = async () => {};

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
        className="mt-4 bg-violet hover:bg-hover-violet cursor-pointer text-white px-6 py-2 rounded-xl transition-all"
      >
        <Lightbulb />
        Get guidance
      </Button>
    </>
  );
};
