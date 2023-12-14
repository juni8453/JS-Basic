/**
 * 1) object 를 생성해서 객체 생성 - 기본기
 * 2) class 를 인스턴스화해서 생성 - class 와 oop
 * 3) function 을 사용해서 생성 - 이제 배울 차례
 */

// 1번 방법
const yuJin = {
    name: '안유진',
    year: 2003
}

// 2번 방법
class IdolModel {
    name
    year

    constructor(name, year) {
        this.name = name
        this.year = year
    }
}

// 3번 방법 (생성자 함수라고 부름)
// 함수에는 생성자가 없으니 파라미터로 값을 받는다.
// 함수에서 this 키워드를 사용한 경우, 객체처럼 사용할 수 있다.
function IdolFunction(name, year) {
    this.name = name
    this.year = year
}

// 함수에서 this 키워드를 사용했다면 객체처럼 사용할 수 있다.
// 즉, new 로 생성이 가능하다.
const gaEul = new IdolFunction('가을', 2002)
console.log(gaEul)