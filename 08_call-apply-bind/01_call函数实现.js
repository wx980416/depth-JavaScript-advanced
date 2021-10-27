Function.prototype.myCall = function (thisArg, ...argArray) {
  // 1.获取被调用函数引用，此时 this 指向该函数
  let fun = this

  // 2.判断绑定的 this 情况，对 thisArg 转成对象类型(防止它传入的是非对象类型)
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  // 3.使用对象的方法改变函数的 this
  thisArg.fun = fun

  // 4.调用函数
  const res = thisArg.fun(...argArray)
  delete thisArg.fun

  // 5.返回结果
  return res
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2) {
  console.log('sum函数被执行', this, num1, num2)
  return num1 + num2
}

foo.myCall()
const res = sum.myCall({}, 10, 20)
console.log(res)
