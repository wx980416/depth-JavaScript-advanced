function num(num1, num2) {
  let foo = () => {
    console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3 }
  }

  foo()
}
num(1, 2, 3)
