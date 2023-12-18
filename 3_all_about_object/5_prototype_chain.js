/**
 * prototype
 */

// __proto__ : 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울 때, 상속에서 부모 클래스에 해당되는 값
// 아무 프로퍼티가 없는 객체라도 __proto__ 프로퍼티가 존재하긴 한다.
const testObj = {}
console.log(testObj.__proto__)
console.log('-----')

function IdolModel(name, year) {
    this.name = name
    this.year = year
}
console.log(IdolModel.prototype) // log 로는 안 보임
console.dir(IdolModel.prototype, { // 숨긴 값을 볼 수 있다.
    showHidden: true
})

// Circular Reference (서로가 서로를 참조하는 reference)
// true (IdolModel.prototype.constructor 또한 객체)
// 프로토타입 체인 알아보기
console.log(IdolModel.prototype.constructor === IdolModel)

// true (따라서 constructor.prototype 또한 객체)
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype)
console.log('-----')

const yuJin = new IdolModel('안유진', 2003)
console.log(yuJin.__proto__)

// true
console.log(yuJin.__proto__ === IdolModel.prototype)
// true
console.log(testObj.__proto__ === Object.prototype)
console.log('-----')

// 결국 모든 값들의 최상위 proto 값은 모두 Object.prototype 을 가진다.
// true
console.log(IdolModel.__proto__ === Function.prototype)
// true
console.log(Function.prototype.__proto__ === Object.prototype)
// true
console.log(IdolModel.prototype.__proto__ === Object.prototype)
console.log('-----')

console.log(yuJin.toString())
console.log(Object.prototype.toString())
console.log('-----')

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`
    }
}

const yuJin2 = new IdolModel2('유진', 2003)
const ray2 = new IdolModel2('레이', 2004)

console.log(yuJin2.sayHello())
console.log(ray2.sayHello())
console.log(yuJin2.sayHello === ray2.sayHello) // false
console.log('-----')

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

// 같은 객체 타입이라면 이런식으로 함수를 하나의 리소스를 재사용하도록 작성할 수 있다.
// yuJin, ray 객체는 IdolModel3 의 prototype 에서 생성되기 때문에 IdolModel.prototype 에 함수를 작성하면
// 하위 객체는 같은 리소스를 사용하는 것.
IdolModel3.prototype.sayHello = function() {
    return `${this.name}이 인사를 합니다.`
}

const yuJin3 = new IdolModel3('유진', 2003)
const ray3 = new IdolModel3('레이', 2004)

console.log(yuJin3.sayHello())
console.log(yuJin3.sayHello === ray3.sayHello) // true
console.log('-----')

IdolModel3.sayStaticHello = function() {
    return '안녕하세요 저는 static method 입니다.'
}

console.log(IdolModel3.sayStaticHello())
console.log('-----')

/**
 * Overriding
 */

function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    // 이렇게 오버라이딩 가능 (프로퍼티 셰도잉)
    this.sayHello = function() {
        return '안녕하세요 저는 인스턴스 메서드입니다.'
    }
}

IdolModel4.prototype.sayHello = function() {
    return '안녕하세요 저는 prototype method 입니다.'
}

const yuJin4 = new IdolModel4('유진', 2004)
console.log(yuJin4.sayHello())
console.log('-----')

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year) {
    this.name = name
    this.year = year
}

IdolModel.prototype.sayHello = function() {
    return `${this.name}가 인사를 합니다.`
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`
    }
}

const gaEul = new IdolModel('가을', 2002)
const ray = new FemaleIdolModel('레이', 2004)

// 즉, gaEul.__proto__ === Object.getPrototypeOf(gaEul)
console.log(gaEul.__proto__)
console.log(gaEul.__proto__ === IdolModel.prototype)
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype)

console.log(gaEul.sayHello())
console.log(ray.dance())
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype) // true

Object.setPrototypeOf(ray, IdolModel.prototype)
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype) // true
console.log(ray.sayHello()) // 오류 없이 sayHello 를 사용하는 모습
console.log(ray.constructor === FemaleIdolModel) // prototype 을 바꿨으니 false
console.log(ray.constructor === IdolModel) // true

// 함수 프로토타입 변경
FemaleIdolModel.prototype = IdolModel.prototype
const eSeo = new FemaleIdolModel('이서', 2007)
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype) // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype) // true