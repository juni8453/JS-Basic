// function longWork() {
//     const now = new Date()

//     // milliseconds since epoch
//     // 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환
//     const millisecond = now.getTime()
//     const afterTwoSeconds = millisecond + 2 * 1000 // 1000 밀리초 = 1초 

//     while (new Date().getTime() < afterTwoSeconds) { // 2초 뒤까지 while
        
//     }

//     console.log('완료')
// }

// console.log('Hello')
// longWork()
// console.log('World')

function longWork() {
    setTimeout(() => {
        console.log('완료')
    }, 2000) // 2초동안 기다렸다가 왼쪽의 함수가 실행된다. (비동기)
}

console.log('Hello')
longWork()
console.log('World')