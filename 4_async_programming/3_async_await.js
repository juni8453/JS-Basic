/**
 * Awake
 * 1) awake 는 Promise 객체에서만 사용할 수 있다. 
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러')
    }, seconds * 1000)
})

async function runner() {
    try {
        const result1 = await getPromise(1)
        console.log(result1)
    
        const result2 = await getPromise(2)
        console.log(result2)

        const result3 = await getPromise(3)
        console.log(result3)
    } catch(e) {
        console.log('---catch e---')
        console.log(e)
    } finally {
        console.log('---finally---')
    }
}

runner()
console.log('실행 끝') // 이게 먼저 나옴 즉, await 를 했을 때 쓰레드가 막히지 않는다는 뜻

/**
 * Async
 */