function foo(num1, num2) {
  console.log(arguments)

  // 遍历放入新数组
  let newArr = []
  let len = arguments.length
  for (let i = 0; i < len; i++) {
    newArr.push(arguments[i])
  }
  console.log(newArr)

  // 调用数组的 slice 方法返回新数组 slice() 方法可从已有的数组中返回选定的元素
  let newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)

  let newArr3 = [].slice.call(arguments)
  console.log(newArr3)

  //   Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
  // 　那么什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象
  // let newArr4 = Array.from(arguments)
  let newArr4 = Array.from({
    0: 1,
    1: 2,
    length: 2,
  })
  console.log(newArr4)

  let newArr5 = [...arguments]
  console.log(newArr5)
}

foo(1, 2)

// slice 实现
Array.prototype.mySlice = function (start, end) {
  let arr = this
  let newArr = []
  start = start || 0
  end = end || arr.length

  for (let index = start; index < end; index++) {
    newArr.push(arr[index])
  }

  return newArr
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(nums.mySlice(3, 6)) //  [4, 5, 6]
