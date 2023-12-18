/**
 * scope
 * 가장 가까운 scope 의 값을 가져온다.
 */

var numberOne = 20;

function levelOne() {
    console.log(numberOne)
}

// levelOne() 

function levelOne() {
    var numberOne = 40

    console.log(numberOne)
}

levelOne() // 40
console.log(numberOne) // 20

console.log('-----')

function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99

        console.log(`levelTwo numberTwo : ${numberTwo}`)
        console.log(`levelTwo numberOne : ${numberOne}`)
    }

    levelTwo()
    console.log(`levelOne numberOne : ${numberOne}`)
}

levelOne()
console.log('-----')

/**
 * Lexical Scope
 * 선언된 위치가 상위 Scope 를 정한다.
 * 아래에서 functionTwo() 는 글로벌 스코프에서 선언되었기 때문에 글로벌 스코프 범위를 가진다.
 */

var numberThree = 3;

function functionOne() {
    var numberThree = 100

    functionTwo();
}

function functionTwo() {
    console.log(numberThree)
}

functionOne()
console.log('-----')

/**
 * var scope
 * function level scope 만 만들어낸다.
 * 
 * let, const scope
 * function level, block level scope 를 만들어낸다.
 */
var i = 999 // 10으로 변경

for(var i = 0; i < 10; i++) {
    console.log(i)
}
console.log(`i in global scope : ${i}`) // i in global scope : 10

i = 999

for(let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(`i in global scope : ${i}`) // i in global scope : 999