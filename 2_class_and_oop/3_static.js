/**
 * statkc - 인스턴스 변수가 아닌 클래스에 귀속되는 변수
 */

class IdolModel {
    static groupName = 'Ive';
    name
    year

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return 'Ive'
    }
}

const yuJin = new IdolModel('유진', 2003)
console.log(yuJin) // 인스턴스(객체)
console.log(IdolModel.groupName) // 클래스
console.log(IdolModel.returnGroupName())
console.log('-----')

/**
 * factory constructor
 */

class IdolModel2 {
    name
    year
    
    constructor(name, year) {
        this.name = name
        this.year = year
    }

    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year
        )
    }

    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1]
        ) 
    }
}

// static 으로 클래스에 직접 요청에서 새로운 객체를 만든다.
const yuJin2 = IdolModel2.fromObject({name: '안유진', year: 2003})
console.log(yuJin2)

const wonYoung = IdolModel2.fromList(
    ['장원영', 2003]
)
console.log(wonYoung)