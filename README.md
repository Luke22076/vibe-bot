# Discord Music Bot - Vibe Bot

A simple music bot for Discord that can play music from YouTube. The bot allows users to play music in voice channels with commands like `!play`, `!skip`, and `!stop`.

## Features

- Play music from YouTube
- Skip and stop commands to control music playback
- Easy-to-use commands to control the music playback
- Join and leave voice channels

## Technologies

- **Node.js**: For the bot development
- **discord.js**: A library to interact with the Discord API
- **ytdl-core**: To stream audio from YouTube
- **ffmpeg-static**: For audio conversion
- **@discordjs/voice**: For audio playback in voice channels

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [ffmpeg](https://ffmpeg.org/download.html) (must be installed on your system)

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/luke22076/vibe-bot.git
cd discord-music-bot
```

### 2. Install dependencies

Install all required packages:

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory of the project and add your Discord bot token:

```plaintext
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
```

Replace `YOUR_DISCORD_BOT_TOKEN` with the actual token you received from the [Discord Developer Portal](https://discord.com/developers/applications).

### 4. Start the bot

Once all dependencies are installed and the token is set, you can start the bot:

```bash
npm start
```

Or, if you're using **`nodemon`** for development (to automatically restart the bot when code changes):

```bash
npx nodemon index.js
```

### 5. Invite the bot

Go to the [Discord Developer Portal](https://discord.com/developers/applications), select your bot, and invite it to your server using the following URL:

```plaintext
https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot&permissions=PERMISSION_ID
```

Replace `YOUR_BOT_ID` with your bot's ID and `PERMISSION_ID` with the required permissions (e.g., `8` for admin rights).

---

## Commands

- **`!play <YouTube-URL>`**: Plays music from the provided YouTube URL.
  - Example: `!play https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- **`!skip`**: Skips the current song.
- **`!stop`**: Stops the music and makes the bot leave the voice channel.

---

## Extensions

1. **Queue**: The bot could support a queue, allowing multiple songs to be played one after the other.
2. **Error handling**: Enhance error handling for scenarios where a song cannot be played, or if there are issues connecting.
3. **Playlist**: Add functionality to manage and play a playlist of songs.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch (`git push origin feature-xyz`).
5. Open a pull request.

---

## Support

If you're having issues with the bot, check the error output in your terminal. For further questions, feel free to open an issue on GitHub.

---
