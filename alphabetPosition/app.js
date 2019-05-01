function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  text.split('').forEach((letter) => {
    if (alphabet.indexOf(letter.toLowerCase()) + 1 > 0)
  })
}

alphabetPosition("THE")