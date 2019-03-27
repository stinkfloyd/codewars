function duplicateCount(text) {
  // ...
  let check = {}
  let count = 0
  text.toLowerCase().split('').forEach((letter) => {
    check[letter] = check[letter] ? check[letter] + 1 : 1
  })
  Object.keys(check).forEach((key) => {
    if (check[key] > 1) count++
  })
  return count
}

console.log(duplicateCount("abcdefghijklmnABCDEFGabcdefABCDEabcdABCABa"))
