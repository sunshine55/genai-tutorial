import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const model = 'gemini-2.0-flash';

export function askGemini(contents) {
  return ai.models.generateContent({ model, contents });
}
