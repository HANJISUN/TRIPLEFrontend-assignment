# ✈️ TRIPLEFrontend-assignment
[TRIPLE_2022 공개채용] 트리플 프론트엔드 사전과제

![Generic badge](https://img.shields.io/badge/version-0.1.0-green.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/a44b29ba-d460-4a2e-b091-207f5cfe0bc0/deploy-status)](https://app.netlify.com/sites/triple-frontend-assignment/deploys)

![triple-frontend-assignment](https://user-images.githubusercontent.com/88502596/175810398-02235a09-c5fd-429c-bc46-2698b1c321df.gif)


## 🔗 Link

- [https://triple-frontend-assignment.netlify.app/](https://triple-frontend-assignment.netlify.app/)

<br>

## ⚙️ Installation

```
$ git clone https://github.com/HANJISUN/TRIPLEFrontend-assignment.git
```

```
$ npm install
```

```
$ npm start
```

<br>

## 🪃 Tech Stack & Reason for selection
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  - 기본 요구사항

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  - 타입 에러를 런타임 전에 검출하여 버그를 예방할 수 있음
  - 더 나은 개발자 경험과 코드 퀄리티 향상 
  - 크로스 브라우징(브라우저 호환성) 문제 해결
 
![Styled-Components](https://img.shields.io/badge/StypedComponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
  - 컴포넌트의 props를 참조할 수 있어, props의 값에 따라 스타일을 지정할 수 있음
  - React Native로 모바일 개발을 할 때, 재사용할 수 있음

<br>

## 🛠 Features
- [x] 영역별 등장 애니메이션
  - keyframes을 사용하여 fadeIn 애니메이션 구현
  - delay: += 100ms로 애니메이션 사이 간격을 조절
  - forwards를 사용하여 애니메이션 마지막 상태 유지
  - 모든 컴포넌트에서 props으로 전달받아 사용할 수 있도록 ThemeProvider를 활용하여 theme에 fadeIn 애니메이션 정의

- [x] 숫자가 올라가는 애니메이션
  - keyframes을 사용하여 counter 애니메이션 구현
  - @property를 활용하여 css 내에서 컴포넌트의 props로 받아온 값을 변수처럼 사용
  - cubic-bezier(베지어 곡선)로 숫자 증가 속도가 느려지는 효과 구현
  - counter-reset를 사용하여 content에 넣어줄 값을 변경
  - css content 속성을 사용하여 숫자 카운트가 끝난 뒤 최종 값을 화면에 출력
  
<br>

## 🤔 Review

- 숫자가 올라가는 counter 애니메이션을 구현하기 위해 사용한 @property가 chromium 코어 브라우저를 제외한 일부 브라우저에서는 아직 지원되지 않아, 현재로서는 크로스 브라우징이 안된다는 점에 조금 아쉬움이 남습니다. 하지만 커스텀 훅으로 구현하는 것보다 코드가 간단하고, 별다른 처리 없이 css 만으로 제어할 수 있다는 점에서 @property를 사용하게 되었습니다.

<br>



