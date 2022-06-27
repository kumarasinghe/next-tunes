function getInstance(provider: string) {
  const MusicProvider = require(`./music-providers/${provider}`);
  return new MusicProvider();
}

export { getInstance };
