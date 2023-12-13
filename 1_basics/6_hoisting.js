/**
 * Hoisting
 * 
 * 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미한다.
 * 아래 예시에서 name 변수 선언 전 호출했음에도 예외가 발생하지 않고 undefined 가 출력되는 것처럼
 * 인터프리터가 var name 의 메모리 공간을 미리 할당해두기 때문.
 * 
 * let, const 키워드는 호이스팅 현상을 막아주기 때문에 var 이 잘 사용되지 않는 것임
 */

console.log('Hello');
console.log('World !');

console.log(name); // undefined 에러가 아니네
var name = 'Code Factory';
console.log(name); // Code Factory

/**
* let 과 const 는 호이스팅 현상을 막아준다.
* 즉, 변수가 함수에 값이 할당되기 전에 데이터 접근을 막아준다는 뜻.
*/ 

// console.log(yuJin); // Cannot access ~ before initialization
// let yuJin = '안유진';

// console.log(wonYoung); // ~ is not defined
// const wonYoung = '장원영';

