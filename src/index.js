module.exports = function reverse (n) {
  let a = Math.abs(n)
  let x = String(a)
  let y = Array.from(x)
  y.reverse()
  y = y.join('')
  y = Number(y)
  return y
}
