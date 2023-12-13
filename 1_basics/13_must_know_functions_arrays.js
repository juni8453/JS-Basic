/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]
console.log(iveMembers)

// push() return 값으로는 새로운 길이가 반환
console.log(iveMembers.push('코드팩토리'))
console.log(iveMembers)
console.log('-----')

// pop() 가장 우측 값이 빠지고 해당 값이 반환
console.log(iveMembers.pop())
console.log(iveMembers)
console.log('-----')

// shift() 가장 좌측 값이 빠지고 해당 값이 반환
console.log(iveMembers.shift())
console.log(iveMembers)
console.log('-----')

// unshift() 가장 좌측 값에 값을 집어넣고 새로운 길이가 반환
// 왼쪽에 push() 하는 것과 동일
console.log(iveMembers.unshift('안유진'))
console.log(iveMembers)
console.log('-----')

// splice(시작 인덱스, 몇 개) 삭제되는 값이 반환
console.log(iveMembers.splice(0, 3))
console.log(iveMembers)
console.log('-----')

/**
 * 한 번 선언한 변수의 불변성을 지키기위해 위해 위 함수는 사용하지 않는게 좋다.
 * 즉, 원래 변수 값에 변동이 없고 새로운 변수가 나오는 함수를 아래에서 알아본다.
 */
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]
console.log(iveMembers.concat('코드 팩토리'))
console.log(iveMembers) // 코드 팩토리가 추가가 안돼있다. 새로운 함수에 반영되었기 때문
let newIveMembers = iveMembers.concat('코드 팩토리')
console.log(newIveMembers)
console.log('-----')

// slice(시작 인덱스, ~ 앞 까지 자르고 싶은 인덱스)
console.log(iveMembers.slice(0, 3))
newIveMembers = iveMembers.slice(0, 3)
console.log(newIveMembers)
console.log('-----')

// spread operator
let iveMembers2 = [
    ...iveMembers // 리스트를 벗겨내서 리스트에 저장
]
console.log(iveMembers2)

let iveMembers3 = [
    iveMembers
]
console.log(iveMembers3) // 리스트 안에 리스트 저장
console.log('-----')

let iveMembers4 = iveMembers
console.log(iveMembers4) // 2와 똑같은 결과 
console.log(iveMembers4 === iveMembers) // true (주소 값 동일) 즉 주소 값이 동일하다는 뜻.
console.log('-----')

// join()
console.log(iveMembers.join()) // string type 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')) // string type 안유진/가을/레이/장원영/리즈/이서
console.log('-----')

// sort()
console.log(iveMembers.sort())
console.log(iveMembers.reverse())

// a를 b보다 뒤에 두려면 0보다 큰 숫자 반환
// a를 b보다 앞에 두려면 0보다 작은 숫자 반환
// 그대로 순서를 유지하려면 0 반환
let numbers = [1,9,7,5,3]
console.log(numbers.sort((a, b) => {
    // a=1, b=9 라고 했을 때 1 < 9 이기 때문에 -1 반환 -> 1, 9 순서 유지 즉 오름차순
    return a > b ? 1 : -1
}))
console.log(numbers.sort((a, b) => a > b ? -1 : 1))
console.log('-----')

// map()
console.log(iveMembers.map(x => x))
console.log(iveMembers.map(x => `아이브: ${x}`))
console.log(iveMembers.map(x => {
    if(x === '안유진') {
        return `ive: ${x}`
    } else {
        return x
    }
}))
console.log('-----')

// filter() true 라면 x 값을 keep 하고 모든 keep 된 값을 최종적으로 반환
numbers = [1,8,7,6,3]
console.log(numbers.filter(x => x % 2 === 0))
console.log('-----')

// find() true 값을 찾으면 해당 값만 반환하고 끝
console.log(numbers.find(x => x % 2 === 0))
console.log('-----')

// findIndex()
console.log(numbers.findIndex(x => x % 2 === 0))

// reduce(콜백 함수, 시작하고 싶은 값(맨 처음 p 에 들어가는 값)) 
// p 에는 원소를 돌면서 이전 값이 계속해서 저장된다.
// 맨 처음 시작할 땐 값이 없으니 2번째 인자 값을 넣어주는 것. 여기선 0이니 맨 처음은 0 + 1 이 실행되고 p 에는 1이 저장된다.
console.log(numbers.reduce((p, n) => p + n, 0))