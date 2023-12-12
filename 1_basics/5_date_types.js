/**
 * JS 에는 총 7 개의 Type 이 존재
 * 6 개의 Primitive Type
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null 
 * 6) Symbol (가장 최근에 생긴 Type)
 * 
 * 1 개의 Object Type
 * 1) Object (객체 / Function, Array 등 ..)
 */

/**
 * 1. Number Type
 */
const age = 32;
const tempature = -10;
const pi = 3.14
console.log(typeof(age));
console.log(typeof(tempature));
console.log(typeof(pi));

const infinity = Infinity;
const ninfinity = -Infinity;
console.log(typeof(infinity));
console.log(typeof(ninfinity));

/**
 * 2. String Type
 */
const codeFactory = "'코드' 팩토리";
console.log(typeof(codeFactory));

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * 1) newline -> \n
 * 2) tap -> \t
 * 3) back slash -> \\
 * 4) small qutoation -> \'
 */
const iveYuJin = '아이브\n안유진';
const iveWonYoung = '아이브\t장원영';
const backSlash = '아이브\\코드 팩토리';
const smallQutoation = '아이브\'코드팩토리';
console.log(iveYuJin);
console.log(iveWonYoung);
console.log(backSlash);
console.log(smallQutoation);

/**
 * Template Literal
 * `` 로 \n, \t 안써도 됨. 글자 그대로 입력된다.
 */

const ive2 = `ive2
gd iiii`;
console.log(ive2);
console.log(typeof(ive2));

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`)

/**
 * Boolean Type
 */
const isTrue = true;
const isFalse = false;
console.log(typeof(isTrue));
console.log(typeof(isFalse));

/**
 * undefined Type
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값.
 * 직접 undefiend 로 값을 초기화하는 것은 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof(noInit));

/**
 * null Type
 * 
 * undefined 와 마찬가지로 값이 없다는 뜻.
 * 하지만 JS 에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다.
 * null 의 경우 type 이 null type 이 아니라 Object 라고 나옴 (개발자가 인정한 버그)
 */
const init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol Type
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 원시 값과 다르게 심볼 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // true 출력

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false 출력 심볼 값은 무조건 유일무이한걸로 취급하기 때문

/**
 * Objet Type
 * 
 * JS 는 모든 것이 Object 라고 할 수 있을 정도로 광범위하게 사용하는 타입 {}
 * Key:Value 쌍으로 이뤄져있다. Map 이랑 비슷
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색'
}
console.log(dictionary);
console.log(dictionary['red']); // Key 값을 넣어 Value 를 찾는다.
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(typeof dictionary);

/**
 * Array Type
 * 
 * 값을 List 로 나열할 수 있는 타입 []
 */

const iveMemberArray = [
    '안유진', '가을', '레이', '장원영', '리즈', '이서'
];
console.log(iveMemberArray);
console.log(iveMemberArray[0]);
console.log(iveMemberArray[1]);
console.log(iveMemberArray[2]);
console.log(iveMemberArray[3]);
console.log(iveMemberArray[4]);

iveMemberArray[0] = '코드 팩토리';
console.log(iveMemberArray[0]);