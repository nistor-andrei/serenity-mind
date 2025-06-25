import { createClient } from "lib/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { date, userInput, userId } = await req.json();
  const supabase = await createClient();
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        messages: [
          {
            role: "user",
            content: `Please respond only in English or Romanian.  ${userInput}`,
          },
        ],
      }),
    }
  );

  const data = await response.json();

  const aiResponse = data.choices?.[0]?.message?.content || "No response.";

  // Save in supabase
  const { error } = await supabase
    .from("journal_entries")
    .insert([
      { user_id: userId, date, user_input: userInput, ai_response: aiResponse },
    ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    aiResponse,
  });
}
