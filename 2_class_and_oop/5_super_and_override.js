class IdolModel {
    name
    year

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요. ${this.name}입니다.`
    }
}

class FemaleIdolModel extends IdolModel {
    part

    // 생성자 또한 상속받는다. 기본 생성자를 그대로 사용하고 싶다면 super() 를 사용.
    constructor(name, year, part) {
        super(name, year); // new IdolModel(name, year) 과 동일
        this.part = part;
    }

    // 부모 클래스 메서드 재정의
    // JS 같은 경우에는 super.name 이 아니라 this.name 이 맞다. (대부분 OOP 지원언어는 super.name 이 맞음)
    // 변수를 불러올 때는 super 키워드를 사용하면 안됨. 대신 함수는 super 키워드를 사용할 수 있다 (중요)
    sayHello() {
        // return `${this.name}입니다. ${this.part}를 맡고 있습니다`
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`
    }
}

const yuJin = new FemaleIdolModel('유진', 2003, 'vocal')
console.log(yuJin)
console.log(yuJin.sayHello())

const jiMin = new FemaleIdolModel('지민', 1995, 'dance')
console.log(jiMin.sayHello())