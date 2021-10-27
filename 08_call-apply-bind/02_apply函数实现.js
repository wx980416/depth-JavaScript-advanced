Function.prototype.myApply = function (thisArg, argArray) {
  const fun = this

  // 处理绑定的 this 和参数
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  argArray = argArray ? argArray : []

  thisArg.fun = fun
  const res = thisArg.fun(...argArray)
  delete thisArg.fun

  return res
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2) {
  console.log('sum函数被执行', this, num1, num2)
  return num1 + num2
}

foo.myApply({})
const res = sum.myApply({}, [10, 20])
console.log(res)
