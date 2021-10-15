const arr = [1, 2, 3, 4, 5]

// const newValue = arr.filter((item, index, arr) => {
//   return item > 3
// })
// const newValue = arr.map((item) => {
//   return item * 100
// })
// const newValue = arr.find((item) => {
//   return item === 5
// })

const newValue = arr.reduce((preValue, item) => {
  console.log(preValue, item)
  return preValue + item
}, 0)
console.log(newValue)
