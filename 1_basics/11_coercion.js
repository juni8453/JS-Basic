/**
 * 타입 변환
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적 변환
let stringAge = age.toString()
console.log(typeof stringAge)

console.log('-----')

// 암묵적 변환
let test = age + ''; // 정수형에 문자열을 더하니 
console.log(typeof test) // string 타입으로 변환된다.
console.log('98' + 2) // 982 (string)
console.log('98' * 2) // 196 (number) string 에는 곱한다는 개념이 없으니 곱해버림
console.log('98' - 2) // 96 (number) 역시 string 에 빼기 개념이 없으니 빼버림

console.log('-----')

// 명시적 변환 몇 가지 더
console.log(typeof (99).toString())
console.log(typeof (true).toString())
console.log(typeof (Infinity).toString())

console.log('-----')

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'))
console.log(typeof parseFloat('0.99'), parseFloat('0.99'))
console.log(typeof +'1', +'1')

console.log('-----')

// Boolean 타입으로 변환
console.log(!'x') // false string 값 기준 값이 들어있다면 boolean 기준으로 true
console.log(!!'x') // true
console.log(!'') // 아무 값이 없으므로 false -> !false 니까 true
console.log(!!0) // 숫자형 0 은 false
console.log(!!'0')
console.log(!'false')
console.log(!!undefined)
console.log(!!null)
console.log('-----')
console.log(!{}) // false
console.log(!!{}) // true Object 는 값이 들어있던 없던 true 상태
console.log('-----')
console.log(![])
console.log(!![])

 