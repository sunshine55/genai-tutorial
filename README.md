# AI Short Bedtime Story Generator

Composed small scripts demonstrate generative AIs to convert text to speech

## API Keys

https://aistudio.google.com/welcome --> setup Google API key to generate stories

https://elevenlabs.io/docs/api-reference/introduction --> setup ElevenLabs API key to generate voice for above story

copy `.env` to `.env.local` and replace the API keys with the values from above sites

## Local Setup

Install Docker Desktop or Docker Engine:
* Docker Desktop (Win, Mac and Linux): https://docs.docker.com/desktop/
* or Docker Engine (recommended): https://docs.docker.com/engine/install/

At root folder of the project:
1. Start container: `docker compose up -d` (first time) or `docker compose start` (next time)
2. Access container shell session: `docker compose exec story-gen bash`
3. Run the scripts: `npm run exec`

Using VSCode to develop within container: https://code.visualstudio.com/docs/devcontainers/containers