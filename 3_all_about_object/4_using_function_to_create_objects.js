/**
 * using function to create objects
 */
function IdolModel(name, year) {
    // new 를 사용하지 않았다면 undefined 출력
    console.log(new.target)

    // new 를 안썼을 때 다시 new 를 붙여서 객체 생성 가능
    if(!new.target) {
        return new IdolModel(name, year)
    }

    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`
    }
}

const yuJin = new IdolModel('안유진', 2003)
console.log(yuJin)
console.log('-----')

const yuJin2 = IdolModel('안유진', 2003)
console.log(yuJin2) // new 키워드가 없다면 undefined
console.log(global.name) // yuJin2 이 아니라 global 에 저장됨
console.log('-----')

/**
 * Arrow Function 으로 생성자 함수(객체) 를 만들 수 있나 ?
 * 생성자 함수가 아니라는 예외 발생. 
 * 즉, 일반 함수에서만 new 키워드 사용 가능
 */
const IdolModelArrow = (name, year) => {
    this.name = name
    this.year = year
}
const yuJin3 = new IdolModelArrow('안유진', 2003)
console.log(yuJin3)