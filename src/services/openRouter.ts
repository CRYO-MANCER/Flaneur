export async function askOpenRouter(
  messages: {
    role: string;
    content: string;
  }[]
) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          import.meta.env
            .VITE_OPENROUTER_API_KEY
        }`,
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        model:
          "google/gemini-2.5-flash",

        messages,

        temperature: 0.8,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "OpenRouter request failed"
    );
  }

  const data =
    await response.json();

  return data.choices?.[0]
    ?.message?.content;
    
}