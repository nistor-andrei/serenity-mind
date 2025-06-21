import { LoaderPage } from "@/components/LoaderPage/LoaderPage";
import { Card } from "components/Card/Card";
import { Suspense } from "react";
import { AddJournalEntries } from "./components/AddJournalEntries/AddJournalEntries";
import { JournalEntries } from "./components/JournalEntries/JournalEntries";

export default function Journal() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold  mb-2">Intuitive Journal</h1>
      <p className="text-gray-600 mb-6">
        A space where AI becomes your reflection companion.
      </p>
      <Card className="border-1 border-gray-50">
        <AddJournalEntries />
        <Suspense fallback={<LoaderPage />}>
          <JournalEntries />
        </Suspense>
        <div className="mt-6 text-sm text-gray-500 italic">
          🕯️ You&apos;re safe here. Let your thoughts flow naturally.
        </div>
      </Card>
    </div>
  );
}
