/**
 * 1) 발생: 던진다 (throw)
 * 2) 인지: 잡는다 (catch) 
 */

function runner() {
    try {
        console.log('Hello') 

        throw new Error('예외가 발생했습니다.')

        console.log('Code Factory')
    } catch(e) {
        console.log('---catch---')
        console.log(e)
    } finally {
        console.log('---finally---')
        console.log('finally 는 무조건 실행된다.')
    }
}
runner()