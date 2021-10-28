function sum(...argus) {
  // 剩余参数
  console.log(argus)

  // 展开运算符
  console.log(...argus)
}

sum(1, 2, 3, 4, 5)
