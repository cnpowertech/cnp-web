# 시앤파워텍 웹사이트

정적 다중 페이지 회사 홈페이지입니다. `dist/`를 웹 루트로 서비스합니다.

로컬 미리보기:

```sh
python3 -m http.server 5180 --directory dist
```

## GitHub Pages 배포

GitHub Pages의 배포 원본을 `dist/`로 설정합니다. 모든 내부 링크와 에셋 경로는 저장소 하위 경로에서도 동작하도록 상대 경로로 구성되어 있습니다.

## 제품 첨부파일 관리

- 제품 상세 팝업의 `자료 관리`에서 관리자 아이디 `admin`과 Supabase에 설정한 관리자 비밀번호로 로그인합니다.
- 관리자 인증은 Supabase Auth, 첨부파일은 Supabase Storage의 `product-files` 버킷을 사용합니다.
- 등록한 파일은 방문자 누구나 조회·다운로드할 수 있고, 지정된 관리자 계정만 추가·삭제할 수 있습니다.
- GitHub Pages에는 정적 사이트만 배포되며 별도의 애플리케이션 서버는 필요하지 않습니다.
- 브라우저에 포함되는 Supabase 키는 공개용 anon key이며, 실제 권한은 Storage RLS 정책으로 제한합니다.
- 비밀번호는 정적 사이트 코드에 저장하지 않으며, 로그인 시 Supabase Auth로 직접 전달됩니다.
