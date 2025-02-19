const { Client, GatewayIntentBits } = require('discord.js');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-static');
const { createAudioPlayer, createAudioResource, AudioPlayerStatus, AudioResource } = require('@discordjs/voice');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

const prefix = '!';

const queue = new Map();

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'play') {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('You need to join a voice channel to play music!');

    const songUrl = args[0];
    if (!ytdl.validateURL(songUrl)) return message.reply('Invalid YouTube URL.');

    try {
      const connection = await voiceChannel.join();
      const stream = ytdl(songUrl, { filter: 'audioonly' });
      const resource = createAudioResource(stream, { inputType: 'unknown' });
      const player = createAudioPlayer();
      connection.subscribe(player);
      player.play(resource);

      message.reply(`Now playing: ${songUrl}`);
    } catch (err) {
      console.error(err);
      message.reply('There was an issue playing the song.');
    }
  }

  if (command === 'skip') {
    const player = queue.get(message.guild.id);
    if (!player) return message.reply('There is no song to skip.');
    player.stop();
    message.reply('The song was skipped.');
  }

  if (command === 'stop') {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('You need to join a voice channel to stop the music!');

    voiceChannel.leave();
    message.reply('The music was stopped, and the bot left the voice channel.');
  }
});

client.login(process.env.DISCORD_TOKEN);
