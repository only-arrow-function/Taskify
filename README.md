<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=240&section=header&text=Taskify%20중급%20프로젝트&fontSize=50&fontAlignY=40" />

# ✨프로젝트 소개

## 👨‍💻 Members

**Codeit FE Sprint 4기 - 3팀**
## 멤버 소개👀
<br/>

<table>
  <tr>
    <td height="160px" align="center"><a href="https://github.com/Trophy198"><img src="https://avatars.githubusercontent.com/u/100824183?v=4" width="160px"/><br/>구승모</a></td> 
    <td height="160px" align="center"><a href="https://github.com/bumpy1800"><img src="https://avatars.githubusercontent.com/u/51107943?v=4" width="160px"/><br/>김재성</a></td> 
    <td height="160px" align="center"><a href="https://github.com/whai2"><img src="https://avatars.githubusercontent.com/u/98308702?v=4" width="160px"/><br/>노은수</a></td> 
    <td height="160px" align="center"><a href="https://github.com/ayoung-iya"><img src="https://avatars.githubusercontent.com/u/129285524?v=4" width="160px"/><br/>윤아영</a></td> 
    <td height="160px" align="center"><a href="https://github.com/D5ng"><img src="https://avatars.githubusercontent.com/u/121039744?v=4" width="160px"/><br/>이동현</a></td> 
  </tr>
</table>
<br/>

<details>
  <summary>개별 역할☝️</summary>
<br/>
 
- <b>구승모  </b> <br/>
  - 로그인 & 회원 가입 관리
  - 페이지 : 마이 페이지
- <b>김재성  </b> <br/>
  - 컬럼, 카드 도메인
  - 페이지 : 대시보드 페이지
  - 로컬 스토리지 -> 쿠키, 미들웨어
  - 무한 스크롤
  - Dnd 적용
- <b>노은수  </b> <br/>
  - git flow 초기 설정, 레포지토리 관리
  - 무중단 배포 및 도메인 연결
  - 페이지: 수정 페이지
  - react Query: 서버 상태 초기 설정
  - 페이지 네이션
- <b>윤아영  </b> <br/>
  - 초대 도메인
  - 페이지 : 마이 대시보드, 수정 페이지
  - 무한 스크롤
- <b>이동현  </b> <br/>
  - 페이지 : 마이 대시보드, 랜딩 페이지
  - 페이지네이션, 무한 스크롤
  - Dnd 적용
  - 스켈레톤

</details>

## 🎞 Duration

2024.04.15(월) ~ 04.30(화)

## ☀️ Project Topic

스마트하게 자신의 일정을 관리하는 서비스

## 💻 Site
https://taskify-six-eta.vercel.app/

## 🛠️ Skills & Tools

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) <img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"> ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 📚 Library

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> 

## 💬 Community

![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white) <a href="https://whispering-sassafras-4ac.notion.site/528ae5a35f3e4736925fc93c812f853f?pvs=4"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a> ![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

## 🚢 Deploy

<a href='https://www.openmind-coreact.store/'>![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)</a>
<br/>

---

# ✨로컬 환경 - 설치 및 실행 가이드

## 1. Getting the sources

```bash
git clone https://github.com/only-arrow-function/Taskify.git
```

## 2. Install packages

```bash
npm i
```

## 3. Run development server

```bash
npm run dev
```

<br>

---

# ✨ Feature

## 1. 메인 페이지 (컴포넌트 명: pages/Main.jsx)

- 이름을 입력해서 질문을 받을 수 있는 피드 생성
- 질문을 위한 질문 목록 페이지로 이동

## 2. 질문 목록 페이지 (컴포넌트 명: pages/ListPage.jsx)

- 생성된 피드들을 카드 형태로 페이지별로 표시
- 피드들을 ‘이름순’ , ’최신순’ 기준으로 선택해서 정렬
- 원하는 피드를 선택하여 질문 피드 페이지로 이동
- 질문할 피드를 랜덤으로 골라주는 랜덤선택 기능

## 3. 질문 피드 페이지 (컴포넌트 명: pages/CardPage.jsx)

- 질문 생성
- 질문에 대한 답변 여부, 답변 표시
- 질문에 대한 좋아요, 싫어요 버튼, 수치 표시
- 링크 복사, 카카오, 페이스북 공유
- 무한 스크롤 방식

## 4. 답변 페이지 (컴포넌트 명: pages/CardPage.jsx)

- 피드 삭제
- 답변하기 및 수정하기
- 개별 질문 삭제하기
- 답변 거절하기
- 질문에 대한 좋아요, 싫어요 버튼, 수치 표시
- 링크 복사, 카카오, 페이스북 공유
- 무한 스크롤 방식

<br/>

---


# 💡 Git branch strategy : Git flow

![프레젠테이션2](https://github.com/co-react/openMind/assets/132687752/dcc2ed65-d3da-4e3c-a080-f9ae8accbd18)


<br/>

---

# ✨ Problem & solution

## 개발 환경 및 협업 관련

### ⚠️ pr에 대한 초기 셋팅의 미흡

✅  develop에서 메인 브랜치로 바로 pr을 진행해, 하나의 pr에 너무 많은 커밋이 누적.

<details>
  <summary>해결 방안</summary>
  <br/>
  
  - feature 단위로 pr 단위를 나눔.
  - 다만, 초반부터 적용하지 않아 커밋, pr을 유연하게 적용하기 어려움
</details>

<br>

### ⚠️ 대 소문자 폴더, 파일명 변경 시, git 충돌 에러

✅  git config core.ignorecase false를 적용하지 않고, push 했을 때, 다른 팀원들에게 문제가 발생.
✅  로컬환경에서 develop 브랜치에서 pull 했을 때, feature 브랜치로 이동하지 못하는 현상.

<details>
  <summary>해결 방안</summary>
  <br/>
  
  - 먼저 git 설정 점검.
  - 원격 저장소에 대, 소문자 2개로 누적된 파일, 폴더는 삭제
  - 만약, 개인 feature 브랜치로 이동이 어려운 경우 : 파일을 삭제 후, 이동 -> 이동 후 git flow finish -> 다시 pull
</details>

<br>

## 기능 구현 요소 관련

### ⚠️ 화면 사이즈마다 페이지 수를 동적으로 변경하는 문제

✅ ListPage에서 화면 사이즈마다 화면상에 보이는 카드 수가 다름. 

<details>
  <summary>해결 방안</summary>
  <br/>
  
  - 원래는 8개를 고정으로 limit값을 지정해주었는데 사이즈 별로 동적으로 limit를 지정.
  - limit값이 변함에 따라 전체 페이지 수도 계산해주었고 이를 테블릿 → PC / PC → 테블릿 사이즈로 변경할때 동적으로 페이지 수가 바뀌도록 해주어야하는데 구현하는데 어려움을 겪음.
  - 조금 더 효율적인 방법이 있을지 고민.
</details>

<br>

### ⚠️ 상태 관리에 대한 문제

✅ props의 단방향성으로 인해(부모 -> 자식), 생기는 문제
- 만약 A 컴포넌트에서 상태를 정의하고, A의 자식 컴포넌트인 B 컴토넌트에서 A의 상태를 변경해야 할 때, 문제가 발생한다.
- 상태를 변경할 수 있는 setter 함수 혹은 setter를 포함하는 핸들러 함수를 props로 전달해 상태를 바꿀 수 있다. 이를 drilling이라고 한다.

✅ setter 함수를 넘기는 문제
- 만약 컴포넌트 트리가 깊어지면 어떨까?
  - 실제 동작을 수행하는 “아래 트리의 컴포넌트”뿐 만 아니라, 해당 컴포넌트를 건너기 위한 중간 컴포넌트들이 “모두” setter 함수를 접근할 권한을 얻게 된다.
  - 또한, 그저 전달을 위한 props를 연쇄적으로 정의하게 되어 번거로움을 유발한다.
- <b>결정적으로, props로 함수를 전달할 경우, 컴포넌트 렌더링 과정에서 함수가 새로이 정의된다. props가 변경되었다고 인식하여, 실제 변화가 없더라도 함수 props를 전달 받은 컴포넌트는 "무조건" 리렌더링이 발생한다.</b>
  - 이를 방지 하기위해 useCallback을 감싸야하는 번거로움이 발생한다.

- 예상 해결 방안: 전역 상태 도입, 전역 상태 라이브러리인 "Redux" 도입
<br>

### ⚠️ 서버로 받은 데이터 관리 문제

✅ Post 요청 후에 상태 관리 문제
- useEffect를 통해 서버에서 데이터를 받을 경우 : 보통 서버에서 받은 데이터를 useState로 관리할 것이다.
  - 만약, 다른 컴포넌트에서 post를 보내면? → 데이터를 받았던 컴포넌트의 상태는 “상한(오래된) 상태”가 된다.
  - 이를 해결하기 위해, post를 보냈다는 "또 다른 상태"를 컴포넌트 안에서 선언해, get을 요청하는 컴포넌트에 알려야 한다.
  - 이는 "전역 상태" 문제와 동일한 문제를 발생시킨다.

✅ Post 요청의 높은 자유도
- 서버 요청은 컴포넌트, 페이지의 제한 없이 다양한 곳에서 호출이 가능하다. 따라서, 이를 컴포넌트 내부 상태로 관리하려고 하면, 최신 상태를 업데이트 하기 위해, 많은 settter를 props로 전달해야 한다.

✅ 카드 생성 시, 중복 검증을 위해, GET 요청을 반복적으로 하는 문제
- 서버에 존재하는 사용자 이름을 중복되지 않도록 하기 위해 GET 요청, 이때, 중복된 경우, 다음 중복 검사에서 다시 요청. -> 매우 느림
- 만약, 2명의 사용자가 동일한 이름(ex:오스틴)을 요청한 경우: GET 요청을 통해 저장한 내부 상태는 "오스틴"이 없는 상태 -> 2명이 동시에 요청 -> 한 명이 POST 성공하더라도, GET 요청을 다시 하지 않으면, 내부 상태는 여전히 "오스틴"이 없는 상태 -> 결국, 2명 다 "오스틴" 이름을 가지게 됨.

<details>
  <summary>해결 방안</summary>
  <br/>
  
  ✅ React-Query의 도입
  - server state 정의 : 서버 요청의 높은 자유도를 관리하기 위해, 컴포넌트 내부의 상태가 아닌, 컴포넌트 외부, 즉 "server state"를 도입.
  - 데이터 캐시 : 서버 요청을 최소화하기 위해, 클라이언트의 자원을 활용. 서버로부터 받은 데이터를 캐싱(일종의 메모이제이션). -> 이를 통해, 중복 검사 시, 서버 재요청의 문제 해결
  - Mutation : React-Query는 useMutation 훅으로, 캐시를 통해 관리되는 server state는 post 요청에 대한 후속 처리를 지원. -> 같은 쿼리키를 가지는 쿼리에 post 요청 -> 서버측 데이터로 post 보내는 것 뿐만 아니라, 쿼리 데이터(캐시에 저장된 데이터)도 갱신. -> useQuery를 통해 서버 데이터를 요청하는 쪽으로 데이터가 변경되었다는 것을 자동으로 알려서 새로운 데이터를 보냄.
</details>

---

# 🙏QnA
