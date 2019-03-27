function rot13(message) {
  // your code here
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let rotMessage = []

  message.split('').forEach((letter) => {
    let index = alphabet.indexOf(letter)
    if (index !== -1) {
      if (index >= 13) {
        rotMessage.push(alphabet[index - 13])
      } else {
        rotMessage.push(alphabet[index + 13])
      }
    } else {
      index = alphabet.indexOf(letter.toLowerCase())
      if (index !== -1) {
        if (index >= 13) {
          rotMessage.push(alphabet[index - 13].toUpperCase())
        } else {
          rotMessage.push(alphabet[index + 13].toUpperCase())
        }
      } else {
        rotMessage.push(letter)
      }
    }
  })
  return rotMessage.join('')
}


