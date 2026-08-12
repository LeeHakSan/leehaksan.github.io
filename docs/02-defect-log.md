# 카드 4 — 결함 수정 기록

콘솔 오류 0건 확인: 브라우저 DevTools > Console 탭에서 빨간 오류 없음.
모든 수정은 아래 Git 커밋 기록으로 확인 가능합니다.

---

## 결함 1 — 강점 목록에 번호(1, 2, 3) 노출

| | 내용 |
|--|------|
| **수정 전** | `<ol class="strengths__list">` → 브라우저가 1, 2, 3 숫자 자동 표시 |
| **문제** | 카드 레이아웃 의도와 맞지 않고 시각적으로 어색함 |
| **수정 후** | `<ul class="strengths__list">` → 숫자 제거, CSS reset의 `list-style: none` 적용 |
| **커밋** | `style: strengths list → 3-column card grid, remove ol numbering` |

---

## 결함 2 — CSS `font-size` 중복 선언

| | 내용 |
|--|------|
| **수정 전** | `.strengths__title`에 `font-size: var(--fs-lg)` 와 `font-size: var(--fs-sm)` 두 번 선언 |
| **문제** | 마지막 값만 적용되어 실제 의도(--fs-sm)는 우연히 맞지만, 코드 의미 불명확 + lint 경고 |
| **수정 후** | 첫 번째 `font-size: var(--fs-lg)` 줄 제거, `--fs-sm` 1개만 유지 |
| **커밋** | `fix: remove duplicate font-size in strengths__title` |

---

## 결함 3 — Hero 첫 화면에 소개만 표시 (활동·근거 없음)

| | 내용 |
|--|------|
| **수정 전** | Hero가 이름·직함·설명만 표시 → 카드 3 "소개·활동·근거 첫 화면" 요구 미충족 |
| **문제** | 1366×768에서 스크롤 없이 대표 프로젝트와 근거 링크가 보이지 않음 |
| **수정 후** | Hero 2열 grid: 좌측(소개) / 우측(SevMerge 카드 + GitHub 링크) |
| **커밋** | `feat: restructure Hero + About to satisfy assignment card 1-3` |

---

## 결함 4 — 강점 설명이 상황·행동·결과 형식 없음

| | 내용 |
|--|------|
| **수정 전** | About 섹션에 "이론을 배우는 것에서 그치지 않고..." 식 일반 서술만 존재 |
| **문제** | 카드 2 "강점 3개 → 상황·행동·결과 세 칸" 요구 미충족, 근거도 없음 |
| **수정 후** | 상황 / 행동 / 결과 DL 구조로 3개 재작성, 결과에 SevMerge GitHub 링크 연결 |
| **커밋** | `feat: restructure Hero + About to satisfy assignment card 1-3` |

---

## 콘솔 오류 0건 확인 방법

1. 브라우저에서 `index.html` 열기
2. F12(또는 Cmd+Option+I) → Console 탭 클릭
3. 빨간 오류 메시지 0건 확인
   - 오류가 있다면: 오류 메시지의 파일명·줄번호 클릭 → 원인 파악 후 수정
