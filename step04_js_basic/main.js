// hello world
console.log("Hello!!!");

// 변수명 작성 스타일
// camelCase : numOne 바뀔 때 대문자로

const myName = "han";
const email = "abc@def.com";
const hello = `안녕 ${myName}!`;

// print()
console.log(myName);
console.log(email);
console.log(hello);

// 숫자
const number = 123;
console.log(number);

// Boolean
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);

// undefined
let abc;
console.log(abc);

// null
let name = null;
console.log(name);

// 재할당
name = 'evan';
console.log(name);

// 파이썬 딕셔너리와 비슷
// key-value
const user = {
    name : 'evan'
    , age : 20
    , isValid : true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);
console.log(user.city); // undefined

// 사칙연산
const a = 2;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 함수의 선언과 호출
function helloFunc() {
    console.log(1234);
}

helloFunc();

// 기명 함수
function returnFunc() {
    let a = 'returnFunc';
    return a;
}

const fun_result = returnFunc();
console.log(fun_result);

function sum(a, b) {
    return a + b;
}

const sum_a = sum(1, 2);
console.log(sum_a);

const sum_b = sum(3, 4);
console.log(sum_b);

// anomyous (익명 함수)
const world = function() {
    console.log("We are the world");
};

world();

// 조건문
const isDone = false;
if (isDone) {
    console.log('done!');
} else {
    console.log('Not Yet');
};





