"use client";
import { useState } from "react";

const JournalEntry = () => {
  const [entry, setEntry] = useState("");

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-light-gray] mb-2">
        Quick Journal Entry
      </h3>
      <textarea
        rows={4}
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write down your thoughts..."
        className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-light-violet"
      />
      <button className="mt-3 px-4 py-2 bg-violet text-white rounded-xl hover:opacity-90 transition cursor-pointer">
        Save Entry
      </button>
    </div>
  );
};

export default JournalEntry;
