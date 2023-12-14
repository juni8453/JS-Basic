/**
 * Getter and Setter
 */

class IdolModel {
    name
    year

    constructor(name, year) {
        this.name = name
        this.year = year
    }

    get nameAndYear() {
        return `${this.name}-${this.year}`
    }

    set name(name) {
        this.name = name
    }
}

class IdolModel2 {
    #name; // private
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin = new IdolModel('유진', 2003)
console.log(yuJin)
console.log(yuJin.nameAndYear) // getter는 함수 취급이 아니라 () 적으면 예외
yuJin.name = '안유진'
console.log(yuJin)

const yuJin2 = new IdolModel2('유진', 2003)
console.log(yuJin2) // IdolModel2 {year: 2003} private 프로퍼티 name 은 가져오지 못함
console.log(yuJin2.name) // private 프로퍼티는 get 으로 가져와야한다.
yuJin2.name = '코드 팩토리'
console.log(yuJin2.name)
