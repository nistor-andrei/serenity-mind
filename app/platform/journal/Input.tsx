"use client";
import { useCallback, useState } from "react";

export const Input = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = useCallback(async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || "Something went wrong");
  }, [input]);

  console.log(response, input);

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Scrie un mesaj..."
        className="border px-4 py-2 rounded"
      />
      <button onClick={sendMessage}>Send</button>
      <div className="mt-4 whitespace-pre-wrap text-gray-800">{response}</div>
    </>
  );
};
