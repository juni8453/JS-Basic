/**
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 10; i > 0; i--) {
    console.log(i)
}

for (let i = 0; i < 10; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j)
    }
}

// * 을 이용해서 6x6 의 정사각형 출력
let board = ''

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        board += '*'
     }
    board += '\n'
    
}
console.log(board)

/**
 * for in loops (for ...in)
 */
const yujin = {
    name: '안유진',
    year: 2003
}

for (const key in yujin) {
    console.log(key)
}

console.log('-----')

const iveMembersArray = ['유진', '원영', '가을', '레이', '이서', '리즈']

for (index in iveMembersArray) {
    console.log(index) // 0 ~ 5 까지 인덱스 값이 나옴
}

for (index in iveMembersArray) {
    console.log(index)
    console.log(iveMembersArray[index])
    console.log(`${index}:${iveMembersArray[index]}`)
}

console.log('-----')

/**
 * for...of (list 에서 사용 가능 for ... in 과 다르게 바로 값이 나온다.)
 */

for (let value of iveMembersArray) {
    console.log(value)
}

console.log('-----')

/**
 * While loops
 */

let number = 0

while (number < 10) {
    number++
    console.log(number)
}

console.log('-----')

/**
 * break, continue
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }

    console.log(i)
}

console.log('-----')

number = 0
while (number < 10) {
    if (number === 5) {
        break
    }
    
    number ++
    console.log(number)
}

console.log('-----')

for (let i = 0; i < 10; i++) {
    if(i === 5) {
        continue
    }

    console.log(i)
}

console.log('-----')

number = 0
while (number < 10) {
    number++

    if (number === 5) {
        continue
    }

    console.log(number)
}