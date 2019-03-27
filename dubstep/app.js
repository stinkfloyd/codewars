function songDecoder(song) {
  // ...
  return song.replace('WUB', ' ').trim()
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))