"use client";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { useState } from "react";

export const JournalEntries = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const entries = [{ id: 1, user_input: "", ai_response: "" }];

  return (
    <div className="mt-6 space-y-1">
      <DatePicker date={date} setDate={setDate} />
      {entries.map((entry) => (
        <div key={entry.id} className="flex flex-col space-y-1">
          {/* User Input */}
          <div className="flex justify-end">
            <div className="max-w-[85%] p-3 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-1 justify-end">
                <h4 className="font-medium text-sm text-gray-700">You</h4>
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">U</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {entry.user_input}
              </p>
            </div>
          </div>
          {/* AI Guidance */}
          <div className="flex justify-start">
            <div className="max-w-[85%] p-3 rounded-2xl bg-[#f7f7f8] shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-serenity-blue flex items-center justify-center">
                  <span className="text-white text-xs">L</span>
                </div>
                <h4 className="font-medium text-sm text-gray-700">Luma</h4>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {entry.ai_response}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
