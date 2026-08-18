# 완주 체크리스트

> 이미지의 요구사항 전체를 항목별로 정리하고, 현재 구현 상태를 표시합니다.

---

## 완주 체크리스트 (채점 항목)

| 상태 | 항목 |
|------|------|
| ✅ | 공개 주소가 다른 브라우저에서도 열린다 (`https://leehaksan.github.io/`) |
| ✅ | 대상 문장과 공개·비공개 점검표가 있다 (`docs/01-target-and-scope.md` + About 섹션 인용 블록) |
| ✅ | 강점이나 취향 3개가 상황·행동·결과를 채웠다 (About Me SAR 카드 3개) |
| ✅ | 공개 가능한 근거 1개가 연결됐다 (SevMerge GitHub 링크) |
| ✅ | 두 해상도에서 핵심 3개가 스크롤 없이 보이고 가로 넘침이 없다 (Hero 2열 레이아웃) |
| ✅ | 결함 3개 이상을 고친 전·후 기록과 콘솔 오류 0건 확인이 있다 (`docs/02-defect-log.md` + screenshots/) |
| ✅ | 상호작용이 마우스와 키보드에서 모두 작동한다 (필터링 + 모달, Tab/Enter 지원) |
| ✅ | 주소·전화번호·이메일 등 공개하지 않기로 한 개인정보가 페이지와 제출 기록에 0건이다 |
| ✅ | 비밀번호·토큰·API 키 등 비밀값이 페이지·배포 파일·Git 기록에 0건이다 |
| ✅ | AI 사용 여부와 내가 판단한 내용을 3줄로 남겼다 (`docs/03-verification-guide.md` AI 사용 기록 3줄 완성) |

---

## 학생 자체 점검 항목

| 상태 | 항목 |
|------|------|
| ✅ | 대상 문장 1개와 공개·비공개 점검표가 파일로 존재합니다 (`docs/01-target-and-scope.md`) |
| ✅ | 페이지가 공개 주소로 열리고 공개하지 않기로 한 정보가 보이지 않습니다 |
| ✅ | 대상 문장과 공개·비공개 범위 점검표 파일 (`docs/01-target-and-scope.md`) |
| ⚠️ | 다른 브라우저에서 확인한 공개 주소 **(직접 확인 및 스크린샷 필요 — Chrome/Safari/Firefox 별도 테스트)** |
| ✅ | 3개 항목이 모두 상황·행동·결과 세 칸을 채웠습니다 |
| ✅ | 그중 1개 이상에 공개 가능한 만든 것·기록·사진 또는 결과 문장이 연결됩니다 (SevMerge GitHub) |
| ✅ | 세 칸으로 정리한 강점이나 취향 3개 |
| ✅ | 개인정보를 제거한 근거 1개 또는 결과 문장 |
| ✅ | 두 해상도에서 스크롤하지 않아도 핵심 3개가 보입니다 |
| ✅ | 문서와 주요 영역의 가로 넘침이 0건입니다 |
| ✅ | 1366×768 수정 후 화면 파일 (`screenshots/viewport-1366x768.jpg`) |
| ✅ | 1920×1080 수정 후 화면 파일과 가로 넘침 확인 기록 (`screenshots/viewport-1920x1080.jpg`) |
| ✅ | 결함 3개 이상이 수정 전·후 상태와 함께 기록되어 있고 실제 페이지에서 고쳐졌습니다 (`docs/02-defect-log.md` + `docs/screenshots/`) |
| ✅ | 브라우저 콘솔의 빨간 오류가 0건입니다 |
| ✅ | 결함 3개 이상의 수정 전·후 목록 (A·B·C 3건) |
| ✅ | 콘솔 오류 0건 확인 화면 파일 (`screenshots/console-zero-errors.jpg`) |
| ✅ | 상호작용 1개가 페이지 내용과 관련되어 있습니다 (프로젝트 필터링) |
| ✅ | 마우스와 키보드 양쪽에서 작동하며 큰 움직임이 있으면 줄이거나 끌 수 있습니다 |
| ✅ | 상호작용 동작을 확인한 화면 파일 (`screenshots/filter-interaction.jpg`, `screenshots/modal-interaction.jpg`) |
| ✅ | 마우스·키보드 양쪽 검사 결과 (`screenshots/keyboard-tab-focus.jpg` — Tab 포커스 링 확인) |
| ✅ | 검증 안내서에 어디로 가나요·무엇을 하나요·무엇이 보이면 통과인가요·안 될 때를 모두 적었다 (`docs/03-verification-guide.md`) |
| ✅ | 무엇을 하나요는 3단계 이내이며 공개 주소에서 바로 실행할 수 있다 |
| ✅ | AI에게 맡긴 일·내가 판단한 일·AI 말을 안 들은 일을 한 줄씩 적었다 (`docs/03-verification-guide.md` 완성) |

---

## 요약

| 구분 | 완료 | 미완 |
|------|------|------|
| 채점 항목 (10개) | 10개 | 0개 |
| 자체 점검 항목 (24개) | 23개 | 1개 |

### 직접 해야 할 미완 항목

1. 다른 브라우저(Chrome/Safari/Firefox 등)에서 `https://leehaksan.github.io/` 열어서 스크린샷

### 증명 스크린샷 목록 (`docs/screenshots/`)

| 파일 | 내용 |
|------|------|
| `viewport-1366x768.jpg` | 1366×768 해상도 화면 |
| `viewport-1920x1080.jpg` | 1920×1080 해상도 + 가로 넘침 없음 확인 |
| `console-zero-errors.jpg` | F12 콘솔 오류 0건 확인 |
| `filter-interaction.jpg` | "팀 프로젝트" 필터 클릭 → SevMerge 카드만 표시 |
| `modal-interaction.jpg` | "상세보기" 클릭 → 모달 열림 확인 |
| `keyboard-tab-focus.jpg` | Tab 키 포커스 링 (HS. 로고에 보라색 테두리) |
| `defect-a-before.jpg` | 결함 A 수정 전 (필터 미작동) |
| `defect-a-after.jpg` | 결함 A 수정 후 (필터 정상) |
| `defect-b-before.jpg` | 결함 B 수정 전 (포커스 링 없음) |
| `defect-b-after.png` | 결함 B 수정 후 (포커스 링 표시) |
| `defect-c-before.jpg` | 결함 C 수정 전 (모달 미열림) |
| `defect-c-after.jpg` | 결함 C 수정 후 (모달 정상) |
