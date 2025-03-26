import { OPEN_API_KEY } from "../utils/constant.js"; // Adjusted path assuming this is in src/

const OPENAI_URL = "https://openrouter.ai/api/v1/chat/completions";

export const openai = async (messages) => {
  try {
    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPEN_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Netflix Clone",
      },
      body: JSON.stringify({
        model: "google/gemma-2-9b-it:free", // Updated to the correct free model
        messages: messages,
      }),
      dangerouslyAllowedBrowser : true,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter Error Response:", errorData);
      throw new Error(`Failed to fetch OpenRouter response: ${response.status}`);
    }

    const data = await response.json();
    console.log("OpenRouter Response:", data);
    return data.choices[0]?.message?.content || "No content returned";
  } catch (error) {
    console.error("Error fetching GPT response:", error.message);
    return null;
  }
};
export default openai 