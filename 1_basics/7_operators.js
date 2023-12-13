/**
 * Operators
 */

/**
 * 1. 산술 연산자
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log('-----')
console.log(10 * (10 + 10));

/**
 * 2. 증감 연산자
 */
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);

/**
 * 3. 연산자의 위치(전위 / 후위 연산자)
 * ++ number (전위), number ++ (후위)
 * 전위는 먼저 증감하고 다른 연산을 수행
 * 후위는 다른 연산 먼저 수행하고 증감 수행
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number); // 1 2

let result2 = 1;
let number2 = 1;

result2 = ++ number2;
console.log(result2, number2); // 2 2

/**
 * 4. 숫자 타입이 아닌 타입에 +, - 를 사용하면 어떻게 될까
 * 값에 정수가 될 수 있는 경우라면 number Type 이 왿ㄴ다.
 */

let sample = '99';
console.log(sample + 1);
console.log(typeof +sample);
console.log(typeof sample);

sample = true; // 1로 친다.
console.log(+sample);
console.log(typeof +sample)
console.log(typeof sample);

sample = '안유진';
console.log(+sample);
console.log(typeof +sample); // NaN: Not a Number 발생
console.log(typeof sample);

/**
 * 5. 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 6. 비교 연산자
 * 
 * 1) 값의 비교 (잘 안씀)
 * 2) 값과 타입의 비교 2가지 비교 연산자가 존재.
 * 
 */

// 1. 값의 비교 (==) 타입을 신경쓰지 않고 진짜 값만 비교함
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(1 == true) // true
console.log(0 == false) // true

console.log('-----')

// 2. 값과 타입의 비교 (===) 타입도 신경써서 값을 비교함
console.log(5 === 5) // true
console.log(5 === '5') // false
console.log(0 === '') // false
console.log(1 === true) // false
console.log(0 === false) // false

console.log('-----')

console.log(5 != 5) // false
console.log(5 !== '5') // true

/**
 * 7. 대소 비교 연산자
 */
console.log('-----')
console.log(100 > 1)
console.log(100 < 1)
console.log(100 >= 1)
console.log(100 <= 1)

/**
 * 8. 삼항 조건 연산자
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다')
console.log('-----')

/**
 * 9. 논리 연산자 (And &&, Or ||)
 */
console.log(true && true) // true
console.log(true && false) // false
console.log(true || true) // true
console.log(true || false) // true
console.log(false || false) // false
console.log(10 > 1 && 20 > 2) // true
console.log(10 < 1 && 20 > 2) // false
console.log(10 < 1 && 20 < 2) // false
console.log(10 > 1 || 20 > 2) // true
console.log(10 > 1 || 20 < 2) // true
console.log(10 < 1 || 20 > 2) // true
console.log(10 < 1 || 20 < 2) // false

/**
 * 10. 단축평가 
 * 
 * && 사용 시 좌측이 true 면 우측 값 반환
 * && 사용 시 좌측이 false 면 좌측 값 반환
 * 
 * || 사용 시 좌측이 true 면 좌측 값 반환
 * || 사용 시 좌측이 false 면 우측 값 반환
 * (외워라)
 */
console.log('-----')
console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브
console.log(false && '아이브'); // false
console.log(true && '아이브'); // 아이브

/**
 * 11. 지수 연산자
 */
console.log(2 ** 2) // 2^2
console.log(10 ** 3) // 10^3

/**
 * 12. null 연산자
 */
let name = null;
console.log(name) // undefined

name = name ?? 'Code Factory'; // ?? 의 경우 좌측 값이 null 이거나, undefined 라면 우측 값을 반환한다.
console.log(name)

name = name ?? '아이브'; // 이제 name 은 없는 null 또는 undefined 가 아니므로 Code Factory 값이 그대로 있다.
console.log(name);

let name2;
name2 ??= 'Code Factory'; // += 처럼 ?? 사용 가능
console.log(name2);