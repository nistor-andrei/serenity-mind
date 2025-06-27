import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000",
    },
    body: JSON.stringify({
      model: "anthropic/claude-3-haiku",
      messages: [
        {
          role: "user",
          content:
            "Give me a tip for mindfulness a short one, without Here's a concise mindfulness tip: ",
        },
      ],
    }),
  });

  const data = await res.json();
  const tip = data.choices[0].message;
  console.log(tip);

  return NextResponse.json({ tip });
}
