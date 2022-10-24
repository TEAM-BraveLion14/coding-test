# coding-test
## git branch 관리
1. git clone https://github.com/TEAM-BraveLion14/coding-test.git
2. SeminKang과 같이 자신의 이름(카멜 케이스)으로 한 폴더 생성
3. 생성한 폴더 하에 'JS100제' 하위 폴더 생성 - 임의의 파일
4. git checkout -b 브랜치이름
5. git add .
6. git commit -m "커밋 메세지"
7. git push -u origin 브랜치이름
    * 생성한 브랜치에 커밋 푸시
8. git checkout main
9. git merge 브랜치이름
    * main과 개인 브랜치 병합
10. git push -u origin main
> 관리자 아닌 경우: 문제 풀이 후 개인 브랜치에 커밋(4~7), 풀리퀘스트, 메인 병합 후 각 팀원은 병합된거 pull

> 관리자 경우: 메인과 각각 개인별 브랜치 병합