Function.prototype.myBind = function (thisArg, ...argArray) {
  const fun = this

  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  function proxyFn(...args) {
    thisArg.fun = fun
    let finalArgs = [...argArray, ...args]
    const res = thisArg.fun(...finalArgs)
    delete thisArg.fun

    return res
  }

  return proxyFn
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2, num3, num4) {
  console.log('sum函数被执行', this, num1, num2, num3, num4)
  return num1 + num2 + num3 + num4
}

const resFoo = foo.myBind()
resFoo()

const resSum = sum.myBind({}, 10, 20)
console.log(resSum(30, 40))
