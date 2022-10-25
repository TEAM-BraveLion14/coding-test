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
## 풀 리퀘스트 요청 단위
* 날짜 별로, 코드 리뷰 기준으로
* 예를 들어 24일에 한 거는 24일 풀 리퀘스트로
* 근데 코드 리뷰 전에 25일에 바꾼거는 어떻게 반영?
* 그냥 25일에 바꾼 거는 다 코드 리뷰 후에 반영하는 거로