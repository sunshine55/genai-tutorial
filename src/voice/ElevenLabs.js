import { ElevenLabsClient } from 'elevenlabs';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

export function askElevenLabs(contents) {
  return client.textToSpeech.convert('21m00Tcm4TlvDq8ikWAM',{
    text: contents,
    output_format: 'mp3_44100_128',
    model_id: 'eleven_multilingual_v2'
  });
}
