function longest(s1, s2) {
  // your code
  if (s1 === s2) return s1
  let unique = {}
  let longest = ''
  s1.split('').forEach((letter) => {
    if (!unique[letter]) {
      unique[letter] = 1
    }
  })
  s2.split('').forEach((letter) => {
    if (!unique[letter]) {
      unique[letter] = 1
    }
  })
  Object.keys(unique).sort().forEach((key) => {
    longest += key
  })
  return longest
}