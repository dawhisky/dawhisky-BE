# **DA WHISKY - BackEnd**

<p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/89e7f164-798e-43ec-8442-7fba16c5fe9d" alt="다위스키 리드미 메인"></p>

<br />

## **🥃 프로젝트 소개**

### 🍹 다위스키?

DA WHISKY(다위스키)는 "위스키를 더 쉽게, 깊이 알아갈 수 있는 곳이 없을까?" 라는 물음에서 시작되었습니다. <br />
**위스키 검색, 기록, 위스키바 탐색 및 줄서기 기능** 까지 - **위스키 경험을 더욱 풍부하게 만들어 주는 온라인 플랫폼** 입니다. <br />

<br />

DA WHISKY는 다음과 같은 기능을 제공합니다.

- 카테고리별 위스키 조회, 해당 위스키에 대한 맛 평가 기록

- 내 주변 또는 설정한 위치를 중심으로 한 위스키바 조회

- 조회한 위스키바가 보유 중인 위스키 조회 및 실시간 줄서기, 입장 알림

- 전직 바텐더의 입문용 위스키 큐레이션, 위스키 검색

<br />

### 🖼️ 브로슈어

<details>
  <summary>좌측의 화살표 아이콘(▶︎) 클릭 시 토글을 열어 확인할 수 있습니다.</summary>
  <div markdown="1">

  <p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/e649a1f4-3c32-48c5-93c0-b2677cd67c58" alt="다위스키 브로슈어_1"></p>
  <p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/6123c079-0f70-45e1-8e03-67d6a8585af6" alt="다위스키 브로슈어_2"></p>
  <p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/0eb3a5fa-d699-4883-bf48-f8e0cb880d97" alt="다위스키 브로슈어_3"></p>
  <p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/ef38df02-ec10-455a-8459-a61880a1a0c2" alt="다위스키 브로슈어_4"></p>
  <p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/7f5b4667-e7db-4591-a07d-22d41b3da1c4" alt="다위스키 브로슈어_5"></p>

  </div>
</details>

<br />

### ⏰ 개발 일정

| 기간 | 일정 |
| --- | --- |
| 23/05/19 ~ 23/05/21 | 프로젝트 주제 및 일정 수립 |
| 23/05/22 ~ 23/05/28 | UI 디자인 및 와이어프레임 구현 |
| 23/05/29 ~ 23/06/04 | 화면 구현 및 MVP 1차 스코프 기능 구현 |
| 23/06/05 ~ 23/06/18 | 1차 기능 피드백 수정 및 MVP 2차 스코프 기능 구현 |
| 23/06/19 ~ 23/06/25 | 유저 배포 및 유저 테스트 피드백 반영 |

<br />

### 관련 링크

| 구분 | 링크 바로가기 |
| --- | --- |
| <img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/e7224472-3ca0-4a45-88d1-f13075911d23" alt="다위스키 아이콘" style="width: 20px; height: 20px; padding-top: 10px;"> | [서비스](https://dawhisky.vercel.app) _(운영 종료로 일부 UI만 확인 가능합니다.)_ |
| <img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/ad8ad10c-7bce-4157-bf21-238d672086c9" alt="노션 아이콘" style="width: 20px; height: 20px; padding-top: 10px;"> | [개발 팀 노션](https://team-spirits.notion.site/DA-WHISKY-8cd5298ee7fe4921983d820d87681467?pvs=4) |

<br /> <br />

## **🥃 서비스 아키텍처**

<p align="center"><img src="https://github.com/dawhisky/dawhisky-FE/assets/84097192/9435d863-f6af-49f5-9219-0d28519e6487" alt="다위스키 아키텍처"></p>

<br /> <br />

## **🥃 주요 기능**

- 서울시 위스키바 크롤링 및 설정 위치 기준 위스키바 조회

- 위스키바 자리 현황 조회, Socket 실시간 줄서기 및 FCM 줄서기 응답 알림

- 실시간 인기 검색어 Top 10, 추천 검색어

- CI/CD, HTTPS, 소셜 로그인

<br />

<table>
  <tr align="center">
    <td><strong>실시간 줄서기</strong></td>
    <td><strong>실시간 줄서기 응답 알림</strong></td>
    <td><strong>검색어 자동완성</strong></td>
    <td><strong>위스키바 크롤링 데이터 지도 표기</strong></td>
  </tr>
   <tr align="center">
    <td><img src="https://github.com/dawhisky/dawhisky-FE/raw/main/img/%EC%A4%84%EC%84%9C%EA%B8%B0.gif" alt="실시간 줄서기 gif" /></td>
    <td><img src="https://github.com/dawhisky/dawhisky-FE/raw/main/img/%EC%8B%A4%EC%8B%9C%EA%B0%84%20%EC%95%8C%EB%A6%BC.gif" alt="줄서기 응답 알림 gif" /></td>
    <td><img src="https://github.com/dawhisky/dawhisky-FE/raw/main/img/%EA%B2%80%EC%83%89%EC%96%B4.gif" alt="검색어 자동완성 gif" /></td>
    <td><img src="https://github.com/dawhisky/dawhisky-FE/raw/main/img/%EC%A7%80%EB%8F%84%20%EC%9C%84%EC%B9%98%20%EA%B0%90%EC%A7%80.gif" alt="지도 위치 감지 gif" /></td>
  </tr>
</table>

<br /> <br />

## **🥃 기술적 의사결정**

<table>
  <tr>
    <td><strong>HTTPS</strong></td>
    <td> - SSL/TSL 발급을 통하여 도메인에 대한 보안성과 검색 노출 빈도를 증가<br />
- FE에서 vercel사용을 위하여 구축</td>
  </tr>
  <tr>
    <td><strong>MySQL</strong></td>
    <td> - 대부분 정형화된 데이터여서 SQL로 선정<br />
- MySQL로 프로젝트의 모든 기능이 가능하다 판단하여 팀원 모두 숙련도가 높은 DB로 선정</td>
  </tr>
  <tr>
    <td><strong>Redis</strong></td>
    <td>- 이메일 인증코드, Refresh Token, Device Token의 만료시간 관리의 편의성<br />
- Device Token의 경우 Update가 많지 않을거라 판단하여 Global Cache를 통해 성능향상을 위해 선정</td>
  </tr>
  <tr>
    <td><strong>S3</strong></td>
    <td>CI/CD 파이프라인 구축과 사진 업로드를 위해 선정</td>
  </tr>
  <tr>
    <td><strong>CI/CD Tool</strong></td>
    <td>- 레퍼런스 접근성, 비용, 러닝 커브 기준으로 선정<br />
- 최종 후보로 깃허브 액션(CI) + AWS 코드 디플로이(CD) vs 젠킨스(CI/CD 통합) 중 고민<br />
- CD환경 구성 시 jenkins의 경우 2개의 EC2인스턴스가 필요하고 세팅 기간이 오래 걸릴 것으로 판단되어 빠른 개발을 위해 github actions + Codedeploy로 선정</td>
  </tr>
  <tr>
    <td><strong>Puppeteer</strong></td>
    <td>동적 이미지 크롤링을 위해 사용</td>
  </tr>
  <tr>
    <td><strong>Socket.io</strong></td>
    <td>줄서기 기능의 실시간 자리현황 반영을 위해 소켓 방식을 채택하였고, FE와 BE 언어가 동일하여 관련 npm 중 완성도가 가장 높은 라이브러리인 socket.io 선정</td>
  </tr>
  <tr>
    <td><strong>Sentry</strong></td>
    <td>- 오류 추적과 서비스 모니터링을 위하여 선정<br />
- 센트리에 에러의 종류, 발생 위치, 발생 시간이 기록되므로 기존에 화면공유/라이브쉐어/캡쳐를 통한 에러 공유보다 편의성이 개선됨<br />
- 또한, 트레이싱을 통해 어떤 요청이 언제, 얼마나, 어떤 성능으로 들어오는지 모니터링하여 서비스 개선에 필요한 데이터 획득 가능해짐</td>
  </tr>
  <tr>
    <td><strong>Swagger</strong></td>
    <td>- api리스트와 각 api에 대한 req, res값을 가시성 좋게 표현해서 협업 효율 향상을 위해 선정<br />
- 이미 api명세서가 작성되어있지만, api명세서에 비해 접근성, 가독성이 좋음<br />
- 스웨거 페이지에서 직접 api호출이 가능하여 api test가 편리해짐</td>
  </tr>
  <tr>
    <td><strong>Jest</strong></td>
    <td>- test code 작성을 위해 선정<br />
- mocha는 세팅이 자유로운 대신 러닝 커브가 높으며, 추가적인 라이브러리들이 많이 필요하여 개발속도와 편의성을 위하여 jest로 선정</td>
  </tr>
</table>

<br /> <br />

## **🥃 트러블슈팅**

### [👉 DB 감지 체계](https://team-spirits.notion.site/DB-88fac1335ac44c08aecc429362ff46f8?pvs=4)

### [👉 카카오 싱크](https://team-spirits.notion.site/413c112ee41f4f4ca2ea10cfd8475517?pvs=4)

### [👉 카카오 로그인](https://team-spirits.notion.site/f40447016189408d8e8069c9739e218b?pvs=4)

### [👉 EC2 instance](https://team-spirits.notion.site/EC2-8f7798187a6c4a11889fecda63cc4b63?pvs=4)

<br /> <br />

## **🥃 팀원 소개**

### 🍻 백엔드

| 이름 | 담당 기능 | 깃허브 |
| --- | --- | --- |
| 주지민<br />(부리더, 백엔드 총괄) | - 서버 배포/관리 <br /> - HTTPS <br /> - CI/CD <br /> - Socket(줄서기) <br /> - DB Polling(자리 현황) <br /> - ERD/아키택쳐/스트럭쳐 설계 <br /> - 북마크/좋아요 기능 <br /> - Swagger <br /> - Sentry | [@jujigithub](https://github.com/jujigithub) |
| 박지현 | - 점주 마이페이지 <br /> - 줄서기/리뷰 CRUD <br />  - 유저 마이페이지 <br /> - 위스키 조회/필터링/검색 | [@jihyunpark81](https://github.com/jihyunpark81) |
| 이준교 | - 소셜로그인(카카오) <br /> - 회원가입(점주/유저) <br /> - 줄서기 관련 FCM <br /> - 리프레쉬/디바이스 토큰 <br /> - 위스키 및 점주 DB 스크랩핑 작업 | [@junkyo974](https://github.com/junkyo974) |

### 🍷 프론트엔드

| 이름 | 담당 기능 | 깃허브 |
| --- | --- | --- |
| 김한솔<br />(리더, 프론트엔드 총괄) | - UI 공통 컴포넌트 및 API 공통 함수 제작 <br /> - route 인증/인가 <br /> - 카카오맵 커스텀 <br /> - 디바운싱을 이용한 검색어 추천 및 검색기능 <br /> - 좋아요, 코멘트 CRUD <br /> - 위스키 및 위스키바 리스트, 디테일 페이지 <br /> - 유저 마이페이지, 스토어 주류관리 페이지 | [@hansololiviakim](https://github.com/hansololiviakim) |
| 최재홍 | - 점주 로컬 회원가입/로그인 <br /> - 유저 카카오 회원가입/로그인 <br /> - PWA <br /> - socket.io를 통한 실시간 줄서기 <br /> - FCM 줄서기 알림 기능 <br /> - 스토어 마이페이지 <br /> | [@allongsio](https://github.com/allongsio) |

### 🎨 디자이너

| 이름 | 담당 기능 | 이메일 |
| --- | --- | --- |
| 김영은 | - UI/UX 전체 디자인 <br /> - 로고 및 브로슈어 디자인 | zerosilveree@gmail.com |

<br /><br />

<p align="center">🥃 Copyright ©2023 Team Spirits all rights reserved.</p>
