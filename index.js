import { askGemini } from './genai/GeminiAgent.js';

askGemini('Tell me a short bedtime story about a dragon and a princess in 10 sentences.')
  .then((response) => {
    console.log(response.text);
  })
  .catch((error) => {
    console.error('Error: ', error);
  });
