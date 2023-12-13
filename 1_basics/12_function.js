/**
 * function -> 함수
 */

/**
 * 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고 싶다면 ? 
 */
console.log((2 * 10 / 2 % 3).toString())
console.log('-----')

function calculate(x) {
    // return (x * 10 / 2 % 3).toString() 
    // console.log((x * 10 / 2 % 3).toString())
    return (x * 10 / 2 % 3).toString() 
}

console.log(calculate(3))
console.log(calculate(4))
console.log('------')

function multiply(x, y) {
    console.log(x * y)
}

multiply(2, 10)
console.log('------')

function multiply2(x, y = 10) { // 파라메터에 default 값을 줄 수도 있다.
    console.log(x * 10)
}

multiply2(2)
console.log('------')

/**
 * Arrow Function
 * 일반 함수와 다르지만 일단 다르게 선언하는 방법이라고만 알고 있자..
 */

const multiply3 = (x, y) => {
    return x * y
}

console.log(multiply3(2, 4))
console.log('------')

const multiply4 = (x, y) => x * y // 람다식과 비슷하게 작성 가능
console.log(multiply4(10, 10))
console.log('------')

const multiply5 = x => x * 2;
console.log(multiply5(2))
console.log('------')

// x 에서 y => ~ 를 반환, y 에서 z => ~ 를 반환, z 에서 `x: ~` 를 반환하는 형식
const multiply6 = x => y => z => `x: ${x}, ${y}, ${z}`
console.log(multiply6(2)(5)(7))
console.log('------')

// 위와 똑같다.
function multiply7(x) {
    return function(y) {
        return function(z) {
            return `x: ${x}, ${y}, ${z}`
        }
    }
}

const multiplyTwo = function(x, y) {
    return x * y
}
console.log(multiplyTwo(2, 50))
console.log('-----')

const multiplyThree = function(x, y, z) {
    console.log(arguments)
    return x * y * z
}
console.log(multiplyThree(4, 5, 6))
console.log('-----')

const multiplyAll = function(...arguments) { // 무한하게 파라미터를 받을 수 있다.
    return Object.values(arguments).reduce((a, b) => a * b, 1)
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10))
console.log('-----')

console.log(typeof multiply)
console.log(multiply instanceof Object)