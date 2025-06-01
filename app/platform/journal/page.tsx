"use client";
import { Button } from "*/components/ui/button";
import { Textarea } from "*/components/ui/textarea";
import { Card } from "components/Card/Card";
import { DatePicker } from "components/DatePicker/DatePicker";
import { Lightbulb } from "lucide-react";
import { useState } from "react";

export default function Journal() {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEntry = async () => {
    if (!entry.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: entry }),
      });
      const data = await res.json();
      setResponse(data.choices[0].message.content || "AI nu a răspuns.");
      setLoading(false);
    } catch {
      setLoading(false);
      console.log("Something happened");
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold  mb-2">Intuitive Journal</h1>
      <p className="text-gray-600 mb-6">
        A space where AI becomes your reflection companion.
      </p>
      <Card className="border-1 border-gray-50">
        <section className="mb-4">
          <DatePicker />
        </section>

        <Textarea
          placeholder="How do you feel today?"
          className="h-40"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />

        <Button
          onClick={sendEntry}
          disabled={loading}
          className="mt-4 bg-violet hover:bg-hover-violet cursor-pointer text-white px-6 py-2 rounded-xl transition-all"
        >
          <Lightbulb />
          {loading ? "Loading..." : "Get guidance"}
        </Button>

        {response && (
          <div className="mt-6 bg-[#F5F4FD] border-l-4 border-[#6F62D4] p-4 rounded-lg text-gray-800 whitespace-pre-line">
            {response}
          </div>
        )}

        <div className="mt-6 text-sm text-gray-500 italic">
          🕯️ You&apos;re safe here. Let your thoughts flow naturally.
        </div>
      </Card>
    </div>
  );
}
