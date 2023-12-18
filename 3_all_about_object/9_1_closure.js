/**
 * A closure is the combination of a function and the lexical 
 * enviroment within which that function was decalred.
 * 
 * -> 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다.
 * 상위 함수에서 하위 함수를 return 함으로써 상위 함수가 먼저 실행이 끝나고, 하위 함수를 나중에 실행할 수 있는 것이 바로 Closure
 */

// function getNumber() {
//     var number = 5

//     function innerGetNumber() {
//         return number
//     }

//     return innerGetNumber()
// }

// console.log(getNumber())
// console.log('-----')

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number
    }
 
    return innerGetNumber
}

const runner = getNumber()
console.log(runner) // 함수 자체만 반환된 상황 즉, getNumeber() 는 스택에서 지워졌지만 아직 innerGetNumeber() 함수가 살아있다.
console.log(runner()) // 반환된 함수를 실행한 상황
console.log('-----')

// 1) 데이터 캐싱에 Closure 사용
function cacheFunction(newNumber) {
    // 아래 계산이 매우 오래걸린다고 가정
    var number = 10 * 10

    return number * newNumber
}

// console.log(cacheFunction(10))
// console.log(cacheFunction(20))
// console.log(cacheFunction(30)) // ... 100만번 해야한다고 가정


function cacheFunction_ex() {
    var number = 10 * 10

    // Closure 함수를 만들어서 여기서 작업 처리 후,
    function innerCacheFunction(newNumber) {
        return number * newNumber
    }

    return innerCacheFunction // 그대로 반환하도록
}

const runner2 = cacheFunction_ex() // 현재 cacheFunction_ex() 가 아니라 innerCacheFunction() 을 반환받은 상태
console.log(runner2(10)) // 반환받은 innerCacheFunction() 을 계속해서 사용하면 빠르게 작업을 처리할 수 있을 것
console.log(runner2(20))
console.log(runner2(30))
console.log('-----')

// 2) 데이터 캐싱 (반복적으로 데이터 값을 변화시켜야할 때)
function cacheFunction2() {
    var number = 99

    function increment() {
        number ++;
        return number
    }

    return increment
}

const runner3 = cacheFunction2()
console.log(runner3()) // 100
console.log(runner3()) // 101
console.log(runner3()) // 102

// 3) 정보 은닉
function Idol(name, year) {
    this.name = name
    
    var _year = year

    this.sayNameAndYear = function() {
        return `안녕하세요, 저는 ${this.name}입니다. ${_year}에 태어났습니다.`
    }
}

const yuJin = new Idol('안유진', 2004)
console.log(yuJin.sayNameAndYear())
console.log(yuJin._year) // undefined