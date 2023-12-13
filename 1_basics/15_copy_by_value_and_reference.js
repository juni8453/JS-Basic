/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 * 
 * 1) 기본적으로 원시 타입은 copy by value
 * 2) 원시 값을 제외한 타입은 copy by reference
 */

// Call by Value 예시
// copy 를 바꾸면 original 은 변동이 없다.
// 주소값이 다른 복사본을 바꿨기 때문에 원본에는 아무런 변동이 없기 때문
let original = '안녕하세요'
let clone = original

console.log(original)
console.log(clone)

clone += ' 안유진입니다.'
console.log(original) // 안녕하세요
console.log(clone) // 안녕하세요 안유진입니다.
console.log('-----')

let originalObject = {
    name: '안',
    group: '아이브'
}

// Call by Reference 예시
// copy 를 바꿨지만 original 도 바뀐다.
// 주소값이 같기 때문
let cloneObj = originalObject

cloneObj.name = '레이'
console.log(originalObject)
console.log(cloneObj)
console.log(originalObject === cloneObj) // true
console.log('-----')

const yuJin1 = {
    name: '안유진',
    group: '아이브'
}

const yuJin2 = yuJin1

const yuJin3 = {
    name: '안유진',
    group: '아이브'
}

console.log(yuJin1 === yuJin2) // true
console.log(yuJin1 === yuJin3) // false
console.log(yuJin2 === yuJin3) // false

/**
 * Spread Operator (Call By Value)
 */

const yuJin4 = {
    // Spread Operator 는 새로 Object 를 생성하는거니까 Call By Value
    ...yuJin3
}
console.log(yuJin4)
console.log(yuJin4 === yuJin3) // false