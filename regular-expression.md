### 정규표현식(Regular Expression)

- compile  
- execution  

#### 정규표현식 리터럴

```js
let str = "a123";
let pattern = /a/; // a가 찾고자 하는 대상임을 알림
```

#### 정규표현식 객체 생성자

```js
let pattern = new RegExp("a");
```

#### RegExp.exec()

```js
let pattern = /a/;
console.log(pattern.exec("abcdef")); // ["a"]
console.log(pattern.exec("bcdefg")); // null
```

#### RegExp.test()

- test는 인자 안에 패턴에 해당되는 문자열이 있으면 true, 없으면 false 반환

```js
let pattern = /a/;
console.log(pattern.test("abcdef")); //true
console.log(pattern.test("bcdefg")); // false
```

#### String.match()

- RegExp.exec()와 비슷하다.

```js
let pattern = /a/;
console.log("abcdef".match(pattern)); // ["a"]
console.log("bcdefg".match(pattern)); // null
```

#### String.replace()

- 문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴한다.

```js
let pattern = /a/;
console.log("abcdef".replace(pattern, "A")); // Abcdef
```

#### i

- i를 붙이면 대소문자를 구분하지 않는다.

```js
let xi = /a/;
console.log("Abcde".match(xi)); // null

let oi = /a/i;
console.log("Abcde".match(oi)); // ["A"]
```

#### g

- g를 붙이면 검색된 모든 결과를 리턴한다.

```js
let xg = /a/;
console.log("abcdea".match(xg));

let og = /a/g;
console.log("abcdea".match(og));
```

#### 캡처

```js
let pattern = /(\w+)\s(\w+)/; //  (): group \w: word \s: space
let str = "harry potter";
let result = str.replace(pattern, "$2, $1");
console.log(result);
```

[정규표현식 시각화]  https://regexper.com/  
[정규표현식 빌더]  https://regexr.com/  

#### 치환

```js
let urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
let content = " 네이버 : http://naver.com 입니다. ";
let result = content.replace(urlPattern, function (url) {
  return '<a href="' + url + ' ">' + "</a>";
});
console.log(result);
```
