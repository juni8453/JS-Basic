/**
 * Object 객체를 다루는 기본
 * 1. const 로 선언할 경우 객체 자체는 변경할 수 없다.
 * 2. 객체 안의 프로퍼티나 메서드는 변경할 수 있다 (중요)
 */

let yuJin = {
    age: 22,
    name: '안유진',
    group: 'ive',
    dance: function() {
        return '안유진이 춤을 춥니다.'
    }
}
console.log(yuJin)
console.log(yuJin.name, yuJin.age)
console.log(yuJin.dance())

const key = 'name'
console.log(yuJin[key]) // yuJin.name 과 같다. 왜냐면 yuJin['name'] 과 같기 때문
console.log('-----')

// this 키워드 사용
let ray = {
    age:21,
    name: '레이',
    group: 'ive',
    dance: function() {
        return `${this.name}가 춤을 춥니다.`
    }
}
console.log(ray.dance())
console.log('-----')

const nameKey = 'name'
const nameValue = '안유진'
const groupKey = 'group'
const groupValue = '아이브'

const yuJin2 = {
    // 변수를 key 로 저장할 땐 [] 사용
    [nameKey]: nameValue,
    [groupKey]: groupValue
}
console.log(yuJin2.name)
console.log('-----')

yuJin2.group = '코드팩토리'
console.log(yuJin2)
console.log('-----')

// 없는 key 를 만들면서 추가 가능
yuJin2.englishName = 'An Yu Jin'
console.log(yuJin2)
console.log('-----')

// delete 키워드로 key 삭제 가능
delete yuJin2.englishName;
console.log(yuJin2)
console.log('-----')

const wonyoung = {
    name: '장원영',
    group: 'ive'
}
// wonyoung = {} 이건 불가능 (const 로 객체를 생성했으니까)
wonyoung.name = '원영'
console.log(wonyoung) // 이건 가능 (만약 프로퍼티가 const 라도 변경가능한 것이 Object의 특징)
console.log('-----')

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonyoung))
console.log(Object.values(wonyoung))
console.log('-----')

/**
 * 빠르게 객체 선언
 */
const name = '안유진'

// const yuJin3 = {
//     name: name, 
// }
const yuJin3 = {
    // 위의 결과와 같다.
    // ',' 을 넣지 않으면 key 에는 변수명, value 는 변수의 값이 들어간다.
    name
}
console.log(yuJin3)