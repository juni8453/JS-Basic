/**
 * Callback
 */

// function waitAndRun() {
//     setTimeout(() => {
//         console.log("끝")
//     }, 2000) 
// }

// waitAndRun()

// // BAD (Callback Hell)
// // 작동은 제대로 한다.
// function waitAndRun2() {
//     setTimeout(() => {
//         console.log('1번 콜백 끝')

//         setTimeout(() => {
//             console.log('2번 콜백 끝')

//             setTimeout(() => {
//                 console.log('3번 콜백 끝')
//             }, 2000)

//         }, 2000)

//     }, 2000)
// }
// waitAndRun2()

// 콜백 지옥 벗어나기
// 1) promise resolve, reject 이름은 상관없다.
// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료')
//     }, 2000);
// })

// // resolve 가 실행되는 순간 then 실행
// timeoutPromise.then((response) => {
//     console.log('---then---')
//     console.log(response)
// })

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료')
    }, seconds * 1000)  
})

// 3초 뒤 first then 출력 -> 다시 2초 뒤 second then 출력 ... (계속 체이닝 가능)
getPromise(3)
    .then((response) => {
        console.log('--- first then ---')
        console.log(response)
        return getPromise(2) // return 을 활용해 계속해서 then 을 연결할 수 있다.

    }).then((response) => { 
        console.log('--- second then ---')
        console.log(response)
        
    })
