
import { GoogleGenAI } from "@google/genai";

export async function askClimateAssistant(question: string) {
  // Creating a fresh instance to ensure correct execution context
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{
        role: 'user',
        parts: [{ 
          text: `You are an expert climate scientist. Please provide an accurate, clear, and encouraging answer to this question about climate change, suitable for a middle-school or high-school student: ${question}`
        }]
      }],
      config: {
        temperature: 0.7,
        maxOutputTokens: 800,
        thinkingConfig: {
          thinkingBudget: 0 // Disable thinking for low-latency educational responses
        }
      },
    });

    return response.text || "I'm sorry, I couldn't find an answer to that right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
