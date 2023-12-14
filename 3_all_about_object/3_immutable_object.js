const yuJin = {
    name : '유진',
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age
    }
}

console.log(yuJin)

/**
 * Extensible (확장 가능 여부)
 * 추가는 안되지만, 삭제는 가능
 */
console.log(Object.isExtensible(yuJin)) // true(default)

yuJin.position = 'vocal'

console.log(yuJin)
console.log('-----')

Object.preventExtensions(yuJin)
console.log(Object.isExtensible(yuJin)) // false
console.log('-----')

yuJin.groupName = 'Ive'
console.log(yuJin) // false 라 프로퍼티 추가가 안됨.
console.log('-----')

delete yuJin.position
console.log(yuJin) // false 라도 프로퍼티 삭제는 가능.
console.log('-----')

/**
 * Seal
 * 사실상 프로퍼티 어트리뷰트의 configurable 을 false 로 하는 것과 같다.
 * 그래서 봉인을 하더라도 value, writable 변경은 가능함
 */

const yuJin2 = {
    name : '유진',
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age
    }
}

console.log(Object.isSealed(yuJin2)) // false(default)
Object.seal(yuJin2)
console.log(Object.isSealed(yuJin2)) // true
yuJin2.groupName = 'Ive'
yuJin2.groupName = 'Ive'
console.log(yuJin2) // 추가가 안됨. 봉인되었기때문
delete yuJin2.name
console.log(yuJin2) // 삭제도 안됨
console.log('-----')

// 봉인됐더라도 프로퍼티 어트리뷰트는 변경 가능
Object.defineProperty(yuJin2, 'name', {
    value: 'code factory'
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'))

Object.defineProperty(yuJin2, 'name', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'))
console.log('-----')


/**
 * freezed
 * 가장 높은 immutable 등급
 * 읽기 외 모든 기능을 불가하게 만든다.
 * enumerable 제외 writable, configurable 모두 false
 */

const yuJin3 = {
    name : '유진',
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age
    }
}
console.log(Object.isFrozen(yuJin3)) // false(default)

Object.freeze(yuJin3) // 객체 동결

console.log(Object.isFrozen(yuJin3)) // true 

yuJin3.groupName = 'Ive'
console.log(yuJin3) // 값 추가 불가

delete yuJin3.name 
console.log(yuJin3) // 값 삭제 불가

// 프로퍼티 어트리뷰트 value, writable 또한 변경 불가
// Object.defineProperty(yuJin3, 'name', {
//     // value: 'code factory'
//     writable: true
// })

const yuJin4 = {
    name: '안유진',
    year: 2003,

    // 객체 내 객체 생성
    wonYoung: {
        name: '장원영',
        year: 2002
    },
}
// 상위 객체를 얼렸다고 하위 객체까지 적용되지 않는다.
// Extensible, Seal, Freezed 모두 포함
Object.freeze(yuJin4)
console.log(Object.isFrozen(yuJin4)) // true
console.log(Object.isFrozen(yuJin4.wonYoung)) // false