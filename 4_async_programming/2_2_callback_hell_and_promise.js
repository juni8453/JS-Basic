const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject 는 .then 이 아니라 .catch 를 실행시킬 수 있다. (예시)
        // if(xxx ~) {
        // resolve('성공')
        // } 
        // else {reject('에러')}
        resolve('에러')

    }, seconds * 1000)  
})

// getPromise(3)
//     .then((response) => {
//         console.log('--- first then ---')
//         console.log(response)
//     })
//     .catch((response) => {
//         console.log('--- first catch ---')
//         console.log(response)
//     })
//     .finally(() => {
//         console.log('--- then 이든 catch 든 무조건 실행 ---')
//     })

// 가장 느린 함수 기준으로 then or catch 가 불린다.
// 실행은 동시에 되긴 함
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((response) => {
  console.log(response)  
})