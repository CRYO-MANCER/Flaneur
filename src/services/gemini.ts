export async function askGemini(
  prompt: string
) {
  const response =
    await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${
        import.meta.env
          .VITE_GEMINI_API_KEY
      }`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

  if (!response.ok) {
    throw new Error(
      "Gemini request failed"
    );
  }

  const data =
    await response.json();

  return (
    data?.candidates?.[0]
      ?.content?.parts?.[0]
      ?.text ||
    "I couldn't think of a response."
  );
}