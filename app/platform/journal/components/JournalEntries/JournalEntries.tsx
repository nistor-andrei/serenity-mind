"use client";

import { supabase } from "lib/supabaseClient";
import useSWR from "swr";

interface JournalEntry {
  id: string;
  date: string;
  user_input: string;
  ai_response: string;
  created_at: string;
  user_id: string;
}

const fetcher = async (url: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const response = await fetch(`${url}?userId=${user.id}`);
  const { data } = await response.json();
  return data || [];
};

export const JournalEntries = () => {
  const {
    data: entries,
    error,
    isLoading,
  } = useSWR<JournalEntry[]>("/api/journal-entries", fetcher);

  if (isLoading) {
    return <div className="mt-6">Loading entries...</div>;
  }

  if (error) {
    return <div className="mt-6 text-red-500">Error loading entries</div>;
  }

  if (!entries || entries.length === 0) {
    return (
      <div className="mt-6 text-gray-500 italic">
        No journal entries yet. Start by writing your first entry above!
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-1">
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
