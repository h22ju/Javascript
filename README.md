## 01. 자바스크립트 시작

#### 자바스크립트 탄생 배경 👶
최초의 자바스크립트는 넷스케이프에 근무하던 **브렌드 아이크**가 모카(Mocha)라는 이름으로 개발함.  
이후 라이브스크립트라로 이름을 변경함.  
넷스케이프가 썬마이크로 시스템즈와 제휴하여 자바스크립트로 이름을 변경함.  
이듬해 마이크로소프트에서도 자바스크립트와 유사한 제이스크립트를 개발하여 인터넷 익스플로러3.0에 포함하여 출시함.  

#### 자바스크립트의 표준화 👨‍💻
넷스케이프가 국제정보통신표준화기구(ECMA)에 표준화 요청.  
1996년 11월에 ECMA-262라는 표준명세가 만들어짐.  
1997년 7월에 ECMA 1 버전 완성.  
자바스크립트는 여러 기능이 점차 추가되어 현재 ES6(ECMA-262 6th edition)가 널리 사용됨.  
하지만 아직 일부 브라우저에는 ES5의 기능만 지원하고 있음.  
따라서 ES6를 사용한다면 반드시 브라우저 지원 여부 체크하고 사용해야함.  

#### 자바스크립트의 사용 👨‍💻
HTML5에는 Geolocation, Canvas, Drag&Drop등 풍부한 API(Application Programming Interface)가 내장되어 있음.  
이 API들은 자바스크립트 언어를 기반으로 제작됨.  
최근 제이쿼리(JQuery), 앵귤러(Angular)JS, 리액트(React)JS, 노드(Node)JS, 폰갭(PhoneGap)JS등 다양한 라이브러리가 등장함.  
이전의 자바스크립트는 클라이언트 컴퓨터에서만 작동하는 언어였지만, 현재는 NodeJS를 사용할 경우 서버에서도 작동 가능함.  
사이트제작, 모바일 웹, 앱, 스마트TV등 다양한 UI개발에 사용되고 있음.  

---

## 02. 자바스크립트 기초 문법 

#### 자바스크립트 선언문
```html
<script>
  javascript code;
</script>
```
자바스크립트 코드는 html 문서의 `<head>`혹은 `<body>`태그 영역에 선언하면 된다.

#### 내부 스크립트 외부로 분리하기
`<script src="js 파일 경로"> </script>`

#### 자바스크립트 주석 처리
```
// 한 줄 설명 글
/* 여러 줄
   설명글
*/
```

#### 코드 입력 시 주의 사항
1. 자바스크립트는 대·소문자를 구분하여 작성
2. 코드 한 줄 작성한 후 세미콜론을 사용
3. 한 줄에 한 문장만 작성하는 것이 가독성에 좋음
4. 문자형 데이터를 작성할 때는 큰따옴표와 작은따옴표 겹침 오류 주의
5. 코드를 작성할 때 중괄호 또는 소괄호의 짝이 맞아야함

---

### 변수

변수(Variables)는 변하는 데이터를 저장할 수 있는 메모리 공간  
변수에는 데이터가 오직 한 개만 저장된다.  
새로운 데이터가 들어오면 기존에 있던 데이터는 메모리 공간에서 지워지게 된다.  
변수에 저장할 수 있는 데이터의 종류로는 String, Number, Boolean, Null 데이터가 있다.

#### 변수 선언

변수 선언시 var 키워드를 변수명앞에 선언한다.  
변수명에는 영문과 숫자 일부 특수문자만 포함 가능하다.  
변수명은 의미에 맞게 만드는것이 좋다.  
변수명은 두 번째 단어의 첫 글자는 대문자로 표기하는 Camel표기법으로 표기하는것이 좋다. <br>
**ES6**

### 1. Use strict

added in ES5
use this for Vanlina Javascript.
`'use strict';`
<br>

### 2. Variable (mutable data type)

![variable](https://user-images.githubusercontent.com/76121929/105822065-ee57de80-5ffe-11eb-9bff-59f93b803644.JPG)

|                                                             var                                                             | vs  |                    let                     |
| :-------------------------------------------------------------------------------------------------------------------------: | :-: | :----------------------------------------: |
| var 선언 전에 값을 할당하여도 에러가 발생하지 않음.<br>(var hoisting) 어디에 선언했는지 상관없이 제일 위로 끌어올려주는 것. |     | let 선언 전에 값을 할당하면 에러가 발생함. |
|                                                          Undefined                                                          |     |              Reference Error               |

**var를 쓰면 안되는이유**

1. var hoisting
2. block scope 무시 (블록안에 변수 선언 후 블록 밖에서 출력하면 정상출력 됨)
   <br>

### 3. Constants (immutable data type)

한번 값을 할당하면 값이 절대 바뀌지 않음.

**constants를 사용하는 이유**

1. security
2. thread safety
3. reduce human mistake

![const](https://user-images.githubusercontent.com/76121929/105822069-ef890b80-5ffe-11eb-97fc-656e2d39a5fc.JPG)

### 4. Variable Type

|                   Primitive Type                    |           Object Type            |
| :-------------------------------------------------: | :------------------------------: |
|                     single item                     |          box container           |
| number, string, boolean,<br>null, undefined, symbol | function<br>first-class function |

#### Number

- data types for number  
   c언어나 자바에서는 숫자 선언할때 다양한 데이터 타입을 사용하지만 자바스크립트에서는 let 으로 모두 선언가능.
  `int a = 2;` `let a = 2;`
  `int b = 2.5;` `let b = 2.5`;
  <br>
- special numberic values
  `const infinity = 1 / 0;`
  `const negativeinfinity = -1 / 0;`
  `const nAn = "not a number" / 0;`
  <br>
- bigInt
  `const bigInt = 123456789012345678901234567890n; //over (-2**53) ~ 2*53`

#### String

`const char = "c";`
`const brendan = "brendan";`
`const greeting = "hello" + brendan;`

- template literals (String)
  `const hello = "hi ${brendan} !";`

#### Boolean

false : 0, null, undefined, NaN, ""
true : any other value

#### Null

`let nothing = null;`

#### Undefined

`let x;`
`let x = undefined;`

#### Symbol

map이나 다른 자료구조에서 고유한 식별자가 필요할 때  
동시다발적으로 일어날 수 있는 코드에서 우선순위를 부여하고 싶을 때

```js
const symbol1 = symbol("id");
const symbol2 = symbol("id");

console.log(symbol1 === symbol2); // false

const gSymbol1 = symbol.for("id");
const gSymbol2 = symbol.for("id");

console.log(gSymbol1 === gSymbol2); // true
```

symbol 출력 시 `symbol1.description`을 사용하여 String형식으로 변환하여 출력하여야 함.

### 5. Dynamic typing

dynamically typed language

```js
let a = "hello";
console.log(a.charAt(0)); //h

a = 1;
console.log(`value : ${a}, type: ${typeof a}`); //value : 1, type: number

a = "7" + 5;
console.log(`value : ${a}, type: ${typeof a}`); //value : 75, type: string

a = "8" / "2";
console.log(`value : ${a}, type: ${typeof a}`); //value : 4, type: number

console.log(a.charAt(0)); //error
```

--
##### typeof
`typeof 변수 또는 데이터;`
지정한 데이터 또는 변수에 저장된 자료형을 알 수 있음.

#### 변수 선언 시 주의 사항
1. 변수명 첫 글자로는 $, _ , 영문자만 올 수 있다.
2. 변수명 첫 글자 다음은 영문자, 숫자, $, _ 만 포함할 수 있다.
3. 변수명으로는 예약어를 사용할 수 없다. (document, location, window ...)
4. 변수명을 지을 때는 되도록 의미를 부여하여 작성하는것이 좋다.
5. 변수명을 사용할 때는 대·소문자를 구분해야한다.

---

### 연산

### 1. String concatenation

```js
console.log("my" + "cat"); // my cat
console.log("1" + 2); // 12
console.log(`1+2 = ${1 + 2}`); // 1+2 = 3
```

### 2. Numberic operators

```js
+ // add
- // substract
/ // divide
* // multiply
% // remainder
** // exponentiation
```

### 3. Increment and decrement operators

```js
let counter = 2;
const preIncrement = ++counter;

counter = counter + 1;
preIncrement = counter;
```

```js
let counter = 2;
const postIncrement = counter++;

postIncrement = counter;
counter = counter + 1;
```

### 4. Asssignment operators

```js
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;
```

### 5. Comparison operators

```js
< // less than
<= // less than or equal
> // greater than
>= // greater than or equal
```

### 6. Logical operators

`||`(or)  
`&&`(and)  
`!`(not)  


- or

```js
vlaue1 = true;
value2 = 4 < 2;
value3 = false;

console.log(value1 || value2 || value3);
```

가장 처음 나오는 true 값을 출력.

- and
  모든 값이 모두 true 일때, true 출력.
  null 체크할 때도 사용 가능

```js
nullableObject && nullObject.something;

if (nullableObject != null) {
  nullableObject.something;
}
```

- not
  값을 반대로 출력

### 7. Equality

```js
const stringFive = "5";
const numberFive = 5;
```

|                            ==                            |                    ===                    |
| :------------------------------------------------------: | :---------------------------------------: |
|            `stringFive == numberFive //true`             |    `stringFive === numberFive //false`    |
|            `stringFive != numberFive //false`            |    `stringFive !== numberFive //true`     |
| 데이터형식은 다르지만 같은 숫자 5이기 때문에 같다고 판단 | 데이터 형식이 다르기 때문에 다르다고 판단 |

### 8. Conditional operators

if, else if, else

```js

const name 'h22ju';

if (name === 'h22ju') {
  console.log(`hello! ${name}`);
} else if (name === 'tomy') {
  console.log(`hi! ${name}`);
} else {
  console.log('unknown');
}
```

### 9. Ternary operators

```js
condition ? value1 : value2;
console.log(name === "a" ? "yes" : "no");
```

### 10. Switch statement

```js
const browser = 'IE';

switch (browser) {
  case 'IE' :
  console.log('IE');
  break;

  case 'Chrome' :
  case 'Firefox' :
  console.log('hi');
  break;

  default :
  console.log('hello');
  break;
```

break : loop를 완전히 끝냄.
continue : 스킵 후 다음으로 넘어감.

### 11. Loops

while loop
do while loop
for
nested loops

```js
// 0~10까지 출력, countinue 사용하여 짝수만 출력

for (i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(`i: ${i}`);
}
```

```js
// 0~10까지 출력, 8에서 break

for (i = 0; i <= 10; i++) {
  if (i >= 8) {
    break;
  }
  console.log(`i: ${i}`);
}
```

#### 연산자 우선순위
1. ()
2. 단항 연산자
3. 산술 연산자
4. 비교 연산자
5. 논리 연산자
6. 대입(복합 대입) 연산자

```js
function calculate(commmand, a, b) {
  switch (commmand) {
    case "add":
    case "+":
      console.log(`${a}+${b} = ${a + b}`);
      break;
    case "substract":
    case "-":
      console.log(`${a}-${b} = ${a - b}`);
      break;
    case "divide":
    case "/":
      console.log(`${a}/${b} = ${a / b}`);
      break;
    case "multiply":
    case "*":
      console.log(`${a}*${b} = ${a * b}`);
      break;
    case "remainder":
    case "%":
      console.log(`${a}%${b} = ${a % b}`);
      break;

    default:
      console.log(`unknown command`);
      break;
  }
}

calculate("+", 1, 2);
calculate("add", 1, 2);

calculate("-", 1, 2);
calculate("substract", 1, 2);

calculate("/", 1, 2);
calculate("divide", 1, 2);

calculate("*", 1, 2);
calculate("multiply", 1, 2);

calculate("%", 1, 2);
calculate("remainder", 1, 2);

calculate("=", 1, 2);
```

---

### 함수

### 1. Function declaration

```js
function name(param1, pararm2) {
  body;
  return;
}

// one function === one thing
// naming : doSomething, command, verb
```

```js
function log(message) {
  console.log(message);
}
log("hello!");
```

### 2. Parameters

premitive type : 메모리에 value가 그대로 저장
object type : 메모리에 refernece 저장

### 3. Default Parameters (ES6)

```js
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("hi"); // hi by unknown
```

### 4. Rest Parameters (ES6)

```js
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printAll("a", "b", "c");

for (const arg of args) {
  console.log(arg);
}

args.forEach((arg) => console.log(arg));
```

### 5. Local scope

```js
let globalMessage = "global"; //global variable

function printMessage() {
  let message = "local";
  console.log(message); //local variable
  console.log(globalMessage);
}

printMessage();

console.log(message); // error
```

### 6. Return

모든 함수에는 return undefined

```js
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(sum(1, 2), result);
```

### 7. Early retun, early exit

- bad

```js
function upgradeUser(user) {
  if (user.point >= 10) {
    // long upgrade logic
  }
}
```

- good

```js
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic
}
```

---

### First-class Function

- function 변수에 할당 가능
- function의 parameter로 전달 가능
- return 값으로도 return 가능

#### 1. Function expression

```js
function sum(a, b) {
  return a + b;
}

const print = function () {
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
```

#### 2. Callback

```js
function randomQuiz(answer, printYes, printNo) {
  if (answer === "apple") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("Yes!");
};

const printNo = function () {
  console.log("No!");
};

randomQuiz("peach", "printYes", "printNo"); // No!
randomQuiz("apple", "printYes", "printNo"); // Yes!
```

---

#### Arrow Function

- always anonymous function

```js
const simplePrint = function () {
  console.log("pirnt!");
};
```

```js
const simplePrint = () => console.log("pirnt!");

const add = () => (a, b) => a + b;
```

#### IIFE : Immediately Invoked Function Expression

`(function hello() {console.log('IIFE')})();`

---

### 객체

|       Class       |       Object        |
| :---------------: | :-----------------: |
|     template      | instance of a class |
|   declare once    | created many times  |
|    no data in     |       data in       |
| introduced in ES6 |                     |

### 1. Class declarations

```js
class person {
  //constructor 생성자
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //method
  speak() {
    console.log(`hi i'm ${name}.`);
  }
}
```

- object 생성

```js
const h22ju = new Person("heeju", 20);
console.log(h22ju.name); //heeju
console.log(h22ju.age); //20
h22ju.speak(); //hi i'm heeju.
```

### 2. Getter and Setter

```js
class User {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const user1 = new User("Harry", "Potter", -1);
console.log(user1.age);

get age() {
  return this._age;
}

set age(value) {
  if(value<0) {
    throw Error ("age can't be negative!");
  }
this._age = value;
}
```

### 3. Fields (public, private)

```js
class Experiment {
  publicField = 2;
  #privateField = 0;
}
```

### 4. Static

```js
class Article {
  static wizard = 'Harry'
  constructor (articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printWizard {
    console.log(Article.wizard);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.wizard); // Harry
Article.printWizard();
```

### 5. Inheritance

```js
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log(`${this.color} triangle 🔺`);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
```

### 6. class checking

- instace of

`console.log (rectangle instance of Rectangle);`

- obj가 class를 사용하여 만들어진것인디 확인
- true, false 반환

---

## 객체

Object

- one of the JavaScript's data types.
- object = { key: value };

### 1. Literals and Properties

`const obj1 = {}; // object literal syntax`  
`const obj2 = new Object(); // object constructor syntax`

```js
//primitive type
const name = "heeju";
const age = 20;
print(name, age);

function print(name, age) {
  console.log(name);
  console.log(age);
}
```

```js
function print(user) {
  console.log(user.name);
  console.log(user.age);
}

const heeju = { name: "heeju", age: 20 };
print(heeju);
```

### 2. Computed properties

- key should be always string

```js
console.log(heeju.name); // key에 해당하는 값을 받아올 때
console.log(heeju["name"]); // computed properties는 정확하게 어떤 key가 필요한지 모를때, runtime에서 결정될 때
```

### 3. Property value shorthand

```js
const person1 = { name: "Harry", age: 15 };
const person2 = { name: "Ron", age: 15 };
const person3 = { name: "Hermione", age: 15 };
const person4 = makePerson("heeju", 20);

function makePerson(name, age) {
  return {
    /*name:*/ name, // key와 value의 이름이 동일하다면 생략 가능
    age,
  };
}
```

### 4. Constructor Function

```js
const person4 = new Person {'heeju', 20};

function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```

### 5. In Operator

- property existence check (key in obj)

```js
console.log("name" in heeju);
console.log("age" in heeju);
console.log("random" in heeju);
```

### 6. for..in vs for..of

- for (key in obj)

```js
for (key in heeju) {
  console.log(key);
}
```

- for (value of iterable)

```js
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}
```

### 7. Cloning

- Object.assign(dest, [obj1, obj2, obj3 ...])

```js
const user = { name: "harry", age: "20" };
const user2 = user;
user2.name = "ron";
console.log(user); // { name: "ron", age: "20" }

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3); // { name: "ron", age: "20" }

// object.assign
const user4 = Object.assign({}, user);
console.log(user4); // { name: "ron", age: "20" }
```

```js
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); // blue
condole.log(mixe.size); // big
```


![object_model](https://user-images.githubusercontent.com/76121929/105486091-48039480-5cf1-11eb-836c-98d70a051abf.JPG)


객체의 종류

- 문서 객체 모델 (**D**ocument **O**bject **M**odel)
- 브라우저 객체 모델 (**B**rowser **O**bject **M**odel)
- 내장 객체 (Built-in Object)

---

##### DOM

문서 객체 모델은 HTML문서 구조를 말한다.
`<html>, <head>, <body>, <img>`등의 객체들을 제어한다.

##### BOM

현재 브라우저에 계층 구조로 내장되어 있는 객체를 말한다.
navigator, screen, location, frames, history 객체 등이 있다.

##### alert
경고창을 나타낼 때 사용
`alert("경고 메시지");`
##### confirm
확인, 취소창을 나타냄. 확인을 누르면 true, 취소를 누르면 false를 반환함.
`confirm("질의내용");`
##### prompt
질의응답창을 나타낼 때 사용
`prompt("질의내용","기본답변");`

#### location
`location.herf = 'http://google.com'` `location = 'http://google.com'` : 참조 주소를 설정하거나 url을 반환함
`location.reload()` : 브라우저 새로고침

#### navigator
`navigator.appName` : 현재 브라우저의 이름 반환
`navigator.appVersion` : 현재 브라우저의 버전 정보 반환
`navigator.platform` : 현재 컴퓨터의 운영체제 정보 제공

#### history
`history.back()` : 이전 방문 사이트로 이동
`history.foward()` : 다음 방문 사이트로 이동
`history.go(n)` : n에 -2를 입력하면 2단계 이전의 방문 사이트로 이동
`history.length` : 방문기록에 저장된 목록 개수 반환

#### open
`open("URL","새 창 이름", "새 창 옵션");`
`window.open("http://google.com", "google", "width=500, height=800, left=50, top=10, scrollbars=no);`

##### Built-in Object

`참조 변수(인스턴스 이름) = new 생성함수();`


[생활코딩 자바스크립트 사전](https://opentutorials.org/course/50, "javascript")

---
