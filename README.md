# coding-test

## git branch 생성
1. git clone https://github.com/TEAM-BraveLion14/coding-test.git
2. SeminKang과 같이 자신의 이름(카멜 케이스)으로 한 폴더 생성
3. 생성한 폴더 하에 'JS100제'와 같은 하위 폴더 생성
4. git checkout -b 브랜치이름

## 개인별 branch에 파일 및 폴더 생성/수정 후 커밋
1. git checkout 브랜치이름
2. git add .
3. git commit -m "커밋 메세지"
4. git push -u origin 브랜치이름
    * 생성한 브랜치에 커밋 푸시
5. 풀리퀘스트(깃허브 홈페이지에서)

## main을 개인별 branch에 병합
1. 팀원이 main에 pull request
2. 관리자가 pull request 반영해서 main branch 하 파일 및 폴더가 바뀜
3. git checkout main
4. git pull origin main
5. git checkout 개인브랜치
6. git merge main
7. git push -u origin 개인브랜치

## 풀 리퀘스트 요청시 리퀘스트 이름
* 코드 리뷰한 날이 2022년 10월 25일인 경우 코드 리뷰하기 전(25일부터 26일) 수정 및 생성 내용은 221025로 풀리퀘스트 이름을 작성한다
* 그 다음날(2022년 10월 26일) **코드 리뷰 후** 25일 코드를 수정할 경우 위와 같은 원리로 221026으로 풀리퀘스트 이름을 작성한다

참여자

commit 규칙
commit 메세지: [문제 출처(플랫폼)] 문제이름 / 난이도 / 걸린시간
description: 문제 주소 (option)

터미널에서 작성법
git commit -m "[BOJ] Hello World / 브론즈5" -m "https://www.acmicpc.net/problem/2557"

플랫폼 작성법 통일:
[BOJ] - 백준
[PGS] - 프로그래머스
[LTC] - 리트코드
[CFS] - 코드포스
[SEA] - 삼성SW Expert Academy
[ETC] - 그외

PR 규칙
PR 제목: 이름 / 주차 / 몇 문제
yuncheol shin / 8월 1주차 / 4문제
comment는 자유이나 가능하다면, 이번주에 풀었던 문제의 알고리즘 분류가 어떻게 되는지,
어떤 문제가 어려웠는지 회고를 작성한다면 개인에게도 도움되고 팀원에게도 도움이 될 것 같습니다!
