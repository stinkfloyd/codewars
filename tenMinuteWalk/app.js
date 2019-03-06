function isValidWalk(walk) {
  // insert brilliant code here
  let sum = 0
  if (walk.length !== 10) return false
  walk.forEach((direction) => {
    switch (direction) {
      case 'n':
        sum += 1
        break
      case 's':
        sum -= 1
        break
      case 'e':
        sum += 1
        break
      case 'w':
        sum -= 1
        break
      default:
        break
    }
  })
  return (sum === 0)
}