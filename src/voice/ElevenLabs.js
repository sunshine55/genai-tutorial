import { ElevenLabsClient } from 'elevenlabs';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

client
  .textToSpeech({
    text: 'Hello, world!',
    voice: '21m00Tcm4TlvDq8ikWAM',
    stability: 0.75,
    similarityBoost: 0.75
  })
  .then((audio) => {
    // do something with the audio
  })
  .catch((error) => {
    console.error('Error:', error);
  });
