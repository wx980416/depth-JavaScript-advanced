function foo(num1, num2, num3) {
  console.log(arguments)

  // 通过下标获取参数值
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])

  // arguments.callee 指向当前 arguments 的函数
  console.log(arguments.callee)
}
foo(1, 2, 3) // [Arguments] { '0': 1, '1': 2, '2': 3 } 类数组，本质是一个带有下标属性和值及 length 属性的对象
