// 引数 number を受け取る関数
/*const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      if (n % 15 === 0) {
        console.log("FizzBuzz")
      } else {
        console.log("Fizz")
      }
    } else if (n % 5 === 0) {
      if (n % 15 === 0) {
        console.log("FizzBuzz")
      } else {
        console.log("Buzz")
      }
    } else {
      console.log(n)
    }
  }
}
genkiFunction(25)
*/
const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n.includes(3)) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
genkiFunction(50)
