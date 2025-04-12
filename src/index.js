import { askGemini } from './genai/GeminiAgent.js';
import { askElevenLabs } from './voice/ElevenLabs.js';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import path from 'path';

const geminiResponse = await askGemini(process.env.SAMPLE_PROMPT);
const audio = await askElevenLabs(geminiResponse.text);
const fileName = `${uuid()}.mp3`;
const fileStream = fs.createWriteStream(fileName);
audio.pipe(fileStream);
fileStream.on('finish', () => {
  path.resolve(fileName);
  console.log(`Audio file saved as ${fileName}`);
});
fileStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});
