# puzzrank.com 웹페이지

정적 페이지 한 장 (`index.html`). 그림은 앱의 브랜드·퍼즈팡 그림을 복사해 둔 것이다 (`assets/`).

- 로컬에서 보기: `python3 -m http.server 8090 --directory apps/web` 뒤 http://localhost:8090
- 배포: GitHub Pages (무료). 비공개 저장소는 Pages가 유료라 공개 저장소에 이 폴더 내용만 올린다.
  - 저장소 Settings → Pages → Deploy from a branch (`main`, `/ (root)`), Custom domain `puzzrank.com`, Enforce HTTPS
  - `CNAME`(도메인), `.nojekyll`(Jekyll 처리 끔)도 함께 올린다
- DNS (Route 53 호스팅 영역 `puzzrank.com`)
  - `puzzrank.com` A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www` CNAME: `<GitHub 사용자>.github.io`
