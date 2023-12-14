/**
 * Class 
 */

class IdolModel {
    name;
    year;

    // 생성자
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        return `안녕하세요. 저는 ${this.name}입니다.`
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName())
console.log('-----')

const ray = new IdolModel('레이', 2004)
console.log(ray)
console.log(ray.name)
console.log(ray.year)
console.log(ray.sayName())
console.log('-----')