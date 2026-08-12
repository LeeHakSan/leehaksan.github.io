# 검증 안내서

> 채점자가 30초 안에 확인할 수 있도록 작성했습니다.

---

## 어디로 가나요

**공개 주소:** `https://leehaksan.github.io/`

*(GitHub Pages 배포 전이라면: 로컬에서 `index.html` 파일을 브라우저로 드래그하여 열기)*

---

## 무엇을 하나요 (3단계 이내)

### 확인 1 — 상호작용: 프로젝트 필터링

1. Projects 섹션으로 스크롤
2. **"팀 프로젝트"** 버튼 클릭 (또는 Tab 키로 이동 후 Enter)
3. SevMerge 카드만 남고 나머지 카드가 사라지는지 확인

### 확인 2 — 상호작용: 프로젝트 모달

1. Projects 섹션의 카드에서 **"상세보기"** 버튼 클릭 (또는 Tab + Enter)
2. 모달 창이 열리고 프로젝트 상세 정보 표시 확인
3. ESC 키 또는 ✕ 버튼으로 닫히는지 확인

### 확인 3 — 키보드 전체 탐색

1. 페이지 최상단에서 Tab 키 반복 누르기
2. 헤더 로고 → 네비게이션 링크 → 섹션 내 링크/버튼 순서로 포커스 이동 확인
3. 포커스 위치가 보라색 테두리로 항상 보이는지 확인

---

## 무엇이 보이면 통과인가요

| 확인 항목 | 통과 기준 |
|-----------|-----------|
| Hero 첫 화면 | 이름·직함·SevMerge 카드·GitHub 링크가 스크롤 없이 한 화면에 |
| About 섹션 | 대상 문장(인용 블록) + 강점 3개 카드(상황·행동·결과) 표시 |
| 필터링 | 카테고리 버튼 클릭 시 해당 카드만 즉시 표시 |
| 모달 | 상세보기 클릭 → 창 열림, ESC → 창 닫힘, 포커스 버튼으로 복원 |
| Tab 탐색 | 모든 링크·버튼에 포커스 테두리 표시, 순서가 자연스러움 |
| 가로 넘침 | 어느 섹션도 가로 스크롤바 없음 |
| 콘솔 | F12 → Console 탭 → 빨간 오류 0건 |

---

## 안 될 때

| 증상 | 확인 순서 |
|------|-----------|
| 공개 주소가 안 열림 | GitHub Pages 설정 → Branch: main, Folder: /(root) 확인 → 배포 완료까지 1~2분 대기 |
| 필터 버튼이 동작 안 함 | F12 Console에서 JS 오류 확인 → `script.js` 경로 오타 확인 |
| 모달이 안 닫힘 | `aria-hidden="true"` + `.modal.open` 클래스 제거 여부 확인 |
| Tab 포커스가 안 보임 | CSS `:focus-visible` 규칙 삭제 여부 확인 |
| 가로 스크롤 발생 | DevTools → Elements에서 `overflow-x: hidden` 누락 여부 확인 |

---

## AI 사용 기록 (3줄)

**AI에게 맡긴 일:**
HTML/CSS/JS 전체 초안 작성, 섹션 구조 및 컴포넌트 설계, 접근성 ARIA 속성 적용.

**내가 판단한 일:**
강점 3개의 실제 경험 내용 직접 작성 및 수정 (팀 인원 4명→7명 정정), 대상 문장 표현 확정, 공개·비공개 범위 직접 결정.

**AI 말을 안 들은 일:**
결함 A — 필터링 무효
- Before: defect-a-before.jpg — "팀 프로젝트" 선택해도 카드 3개 전부 표시
- After: defect-a-after.jpg — SevMerge 카드 1개만 표시
- 원인: card.classList.toggle('hidden', !match) 주석 처리

결함 B — 포커스 링 사라짐
- Before: defect-b-before.jpg — Tab 탐색 시 About 링크에 테두리 없음
- After: defect-b-after.png — 보라색 2px 테두리 표시
- 원인: :focus, :focus-visible 모두 outline: none

결함 C — 모달 안 열림
- Before: defect-c-before.jpg — 상세보기 클릭해도 화면 변화 없음
- After: defect-c-after.jpg — SevMerge 상세 정보 모달 정상 표시
- 원인: modal.classList.add('open') 주석 처리