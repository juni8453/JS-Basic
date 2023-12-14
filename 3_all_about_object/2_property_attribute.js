/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티: 키 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티: 자체적인 값은 없지만 다른 값을 가져오거나 설정할 때
 *                  호출되는 함수로 구성된 프로퍼티
 *                  예를들어 getter, setter
 */

const yuJin = {
    name: '안유진',
    year: 2003
}

// yuJin 객체의 name 프로퍼티 값을 알고 싶다면,
/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부
 * 3) enumerable - 열거가 가능한지 여부
 * 4) configurable - 프로퍼티 어트리뷰트 재정의 여부 판단
 *                 - false 일 경우 프로퍼티 삭제, 어트리뷰트 변경 금지
 *                 - 단, writable 이 true 인 경우 값 변경과
 *                   writable 을 변경하는 것은 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(
    yuJin, 'name'
))
console.log(Object.getOwnPropertyDescriptor(
    yuJin, 'year'
))

// 한번에 모든 프로퍼티 어트리뷰트 값을 확인할 수 있다.
console.log(Object.getOwnPropertyDescriptors(yuJin))
console.log('-----')

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2)
console.log(yuJin2.age)

yuJin2.age = 20
console.log(yuJin2.age)
console.log(yuJin2.year)
console.log('-----')

// 액세서 프로퍼티는 value 가 없다.
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'))
console.log('-----')

// 객체에 프로퍼티 어트리뷰트도 조정하면서 프로퍼티 추가하는 방법
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    // 아래 3개의 어트리뷰트를 조정하지 않다면 기본 false 가 설정됨
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(yuJin2)
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

yuJin2.height = 180
console.log(yuJin2)
console.log('-----')

Object.defineProperty(yuJin2, 'height', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

// 변경 불가로 수정하고 변경해보면 ?
yuJin2.height = 160;
console.log(yuJin2) // height = 180 변경이 안됨
console.log('-----')


// 열거가 가능하면 이렇게 사용가능
console.log(Object.keys(yuJin2))
for(let key in yuJin2) {
    console.log(key)
}

// 열거가 불가능하도록 프로퍼티 어트리뷰트를 수정해보자
Object.defineProperty(yuJin2, 'name', {
    enumerable: false
})

// name 이 사라졌음
console.log(Object.keys(yuJin2)) 
for(let key in yuJin2) {
    console.log(key)
}
console.log(yuJin2)
console.log('-----')


// configurable: false 로 수정
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

// Cannot redefine property: height 발생
// configurable: false 라면 어트리뷰트 재정의가 불가능하기 때문
// 위에 writable 이 false 라고 가정했을때.
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false
// })

// con 은 false 지만 writable 이 true 이기 때문에 값 수정은 가능
Object.defineProperty(yuJin2, 'height', {
    value: 172
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')) 

// 역시 writable 속성도 바꿀 수 있다.
Object.defineProperty(yuJin2, 'height', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height '))


