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
변수명은 두 번째 단어의 첫 글자는 대문자로 표기하는 Camel표기법으로 표기하는것이 좋다.
`var 변수명;` `var 변수명 = 값;`
`var box;` `var box = 1;`
```js
var box;
box = 100;
box = 30;
```
변수에는 하나의 값만 넣을 수 있으므로, 기존에 저장된 데이터 100은 삭제되고 새로운 데이터 30만 저장된다.

#### 변수에 저정할 수 있는 자료형

##### 문자형 String
`var s = "javascript"`
##### 숫자형 Number
`var s = 100;`
##### 논리형 Boolean
`var s = ture;`
boolean 메서드는 숫자0, null, undefined, 빈문자를 제외한 모든 데이터에 대해 true를 반환한다.
##### null, undefined
`t = null` `var s;` 

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

### 연산자

##### 산술 연산자
`+, -, *, /, %`
##### 대입 연산자
`=, +=, *=, /=, %=`
##### 증감 연산자
`++, --`
##### 비교 연산자
`>, <, >=, <=, ==, !=, ===, !==`
##### 논리 연산자
`||, &&, !`
##### 삼항 조건 연산자
`조건식 ? 자바스크립트코드1 : 자바스크립트코드2;`
```js
var a = 10;
var b = 3;

var result = a > b ? "hello" : "world";
```

#### 연산자 우선순위
1. ()
2. 단항 연산자
3. 산술 연산자
4. 비교 연산자
5. 논리 연산자
6. 대입(복합 대입) 연산자

---

## 03. 제어문

#### 조건문 ( if/ else / else if )
#### 선택문 ( switch )
#### 반복문 ( while / for )

##### while
```
var 변수 = 초깃값;
while (조건식) {
  자바스크립트 코드
  증감식;
 }
```
##### do while
```
var 변수 = 초깃값;
do{
  자바스크립트 코드;
  증감식;
 }while(조건식)
```
##### for
```
for(초깃값; 조건식; 증감식) {
  자바스크립트 코드;
 }
```
##### 중첩 for
```
for(초깃값; 조건식; 증감식) {
  for(초깃값; 조건식; 증감식) {
  자바스크립트 코드;
  }
 }
```

##### break, continue
break : 반복문을 강제로 종료
continue : continue 다음에 오는 코드는 무시하고 바로 조건식으로 이동

---

## 04. 객체

javascript는 object 기반 언어이다.
객체는 method와 property을 가지고 있다.

```
객체.메서드();
객체.속성;
객체.속성 = 값;
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

## 05. 함수

#### basic
```
function 함수명() {
  자바스크립트 코드;
 }
```
#### parameter, argument
```js
function sum1(left, right) { // left, right는 parameter(매개변수)
document.write(left+right);
}

sum(2,3); // 2, 3은 argument (인자)
```

#### return
```js
function sum2(left, right) { 
  return left+right;
}

document.write(sum2(2,3));
```


