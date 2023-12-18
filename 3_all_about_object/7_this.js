/**
 * this
 * 
 * JS 는 Lexical Scope 를 채택했기 때문에 정의 시점에 그 함수의 상위 스코프가 지정된다.
 * 
 * 하지만, this 키워드는 객체가 생성되는 시점에 바인딩이 지정된다.
 */

const testFunction = function() {
    return this;
}
console.log(testFunction())
console.log(testFunction() === global) // true (this 는 global 과 매핑된다.)
console.log('-----')

const yuJin = {
    name: '안유진',
    year: 2003,
    sayHello: function() {
        return `안녕하세요, 저는 ${this.name}입니다.`
    }
}

console.log(yuJin.sayHello())

// 객체의 메서드 sayHello() 를 가장 상위 레벨에 선언하면 this 가 자동으로 실행하는 대상 객체로 매핑된다. 
function Person(name, year) {
    this.name = name;
    this.year = year;
    this.sayHello = function() {
        return `안녕하세요, 저는 ${this.name}입니다.`
    }
}

// yuJin2 의 __proto__ Person.prototype 이기 때문에 dance() 를 상속받을 수 있다.
// 객체의 메서드 dance2() 를 가장 상위 레벨에 선언하지 않았기 때문에 this 가 자동으로 매핑되지 않는다.
const yuJin2 = new Person('안유진', 2003)
console.log(yuJin2.sayHello())

Person.prototype.dance = function() {
    function dance2() {
        return `${this.name}이 춤을 춥니다.`
    }

    return dance2()
}

// undefined이 춤을 춥니다.

console.log(yuJin2.dance()) 
console.log('-----')

/**
 * this 키워드는 무엇을 가르키는가 ?
 * 1) 일반 함수 호출할 땐 this 가 최상위 객체 (global) 또는 window 를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

/**
 * 1) apply():  Argument 를 리스트로 입력해야한다.
 * 2) call() : 컴마를 기반으로 Argument 순서대로 넘겨준다.
 */

function returnName() {
    return this.name // global or window
}
console.log(returnName()) // undifined

const yuJin3 = {
    name: '안유진'
}
console.log(returnName.call(yuJin3)) // call(객체) this 키워드가 yuJin3 와 바인딩
console.log(returnName.apply(yuJin3))
console.log('-----')

function mul(x, y, z) {
    return `${this.name} / 결과값 : ${x * y * z}`
}
console.log(mul.call(yuJin3, 3, 4, 5))
console.log(mul.apply(yuJin3, [3, 4, 5]))

/**
 * 3) bind() : this 를 바인딩하고 나중에 실행할 수 있다.
 */
const laterFunc = mul.bind(yuJin3,3, 4, 5)
console.log(laterFunc)
console.log(laterFunc())