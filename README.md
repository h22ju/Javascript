## Javascript

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

### Object Model

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

##### Built-in Object

String, Date, Array, Math등이 있다.
`참조 변수(인스턴스 이름) = new 생성함수();`
