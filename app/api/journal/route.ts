import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

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
            content: message,
          },
        ],
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json({
    choices: data.choices,
  });
}
