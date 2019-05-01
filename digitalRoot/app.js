digitalRoot = (n) => {
  // ...
  let sum = 0
  n.toString()
    .split("")
    .forEach((number) => {
      sum += parseInt(number, 10)
    })

  if (sum.toString().length > 1) {
    return digitalRoot(sum)
  } else {
    return sum
  }
}
console.log(digitalRoot(456))
