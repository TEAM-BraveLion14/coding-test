# coding-test
## git branch 생성
1. git clone https://github.com/TEAM-BraveLion14/coding-test.git
2. SeminKang과 같이 자신의 이름(카멜 케이스)으로 한 폴더 생성
3. 생성한 폴더 하에 'JS100제'와 같은 하위 폴더 생성
4. git checkout -b 브랜치이름
## 개인별 branch에 파일 및 폴더 생성 후 커밋
1. git checkout 브랜치이름
2. git add 
3. git commit -m "커밋 메세지"
4. git push -u origin 브랜치이름
    * 생성한 브랜치에 커밋 푸시
5. 풀리퀘스트(깃허브 홈페이지에서)
## main을 개인별 branch에 병합
1. 풀리퀘스트시 관리자가 main에 개인별 branch 병합
2. 병합이 완료되면 팀원은 최종 병합본(main)을 개인별 브랜치에 병합해야 함
3. git checkout 브랜치이름
4. git merge main
5. git push -u origin 브랜치이름