/**
 * 이학산 포트폴리오 - script.js
 *
 * 기능 목록:
 *  1. 네비게이션: 스크롤 감지 / 모바일 토글 / 활성 링크
 *  2. 프로젝트 필터링 (상호작용 기능 1)
 *  3. 프로젝트 모달 (상호작용 기능 2)
 *  4. 스킬 바 애니메이션 (IntersectionObserver)
 *  5. 섹션 등장 애니메이션
 *  6. Tab 키 트랩 (모달 내부 포커스 유지)
 */

/* ──────────────────────────────────────────────
   프로젝트 데이터
   카드에 표시할 내용 + 모달에 표시할 상세 내용을 한 곳에 관리
   ────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: 'SevMerge',
    category: 'team',
    summary: '스터디/팀 협업 매칭 플랫폼',
    description:
      '팀원 4명과 함께 개발한 협업 매칭 플랫폼입니다. ' +
      'Spring Boot로 RESTful API를 설계하고, JPA + MySQL로 ' +
      '데이터 영속성을 처리했습니다. ' +
      'GitHub Flow를 처음 적용해 PR 리뷰와 코드 통합을 경험했습니다.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
    github: 'https://github.com/bin1998-git/SevMerge',
    demo: null,
    role: '백엔드 API 개발, DB 설계',
    period: '2025.09 ~ 2025.11',
  },
  {
    title: 'Spring Blog API',
    category: 'solo',
    summary: 'REST API 설계 학습 목적 블로그 백엔드',
    description:
      'REST API 설계 원칙을 직접 적용해보기 위해 만든 블로그 백엔드입니다. ' +
      'Spring Security + JWT로 인증을 구현하고, ' +
      'Pageable로 페이지네이션을 처리했습니다. ' +
      '계층형 댓글 구조를 DB에서 어떻게 표현하는지 고민한 프로젝트입니다.',
    tags: ['Spring Boot', 'Spring Security', 'MySQL', 'JWT'],
    github: null,
    demo: null,
    role: '전체 개발',
    period: '2026.01 ~ 2026.02',
  },
  {
    title: 'Portfolio Site',
    category: 'study',
    summary: 'Vanilla JS로 구현한 이 포트폴리오 사이트',
    description:
      '백엔드 위주로 공부하다 프론트엔드 기초를 다지고자 만들었습니다. ' +
      'React 없이 Vanilla JS만으로 모달·필터링·IntersectionObserver 등 ' +
      '인터랙션을 직접 구현하면서 DOM 조작 원리를 이해할 수 있었습니다. ' +
      '접근성(ARIA, Tab 키 탐색)도 고려해 작성했습니다.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/LeeHakSan',
    demo: null,
    role: '전체 개발 + 디자인',
    period: '2026.08',
  },
];

/* ──────────────────────────────────────────────
   DOM이 완전히 로드된 후 실행
   DOMContentLoaded: HTML 파싱 완료 시점 (이미지 로드 전)
   ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFilter();
  initModal();
  initSkillBars();
  initScrollReveal();
});

/* ══════════════════════════════════════════════
   1. 네비게이션
   ══════════════════════════════════════════════ */
function initNav() {
  const header  = document.querySelector('.header');
  const toggle  = document.querySelector('.nav__toggle');
  const menu    = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');

  /* 스크롤 내려가면 헤더에 그림자 추가 */
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
  }, { passive: true });   // passive: 스크롤 성능 최적화

  /* 모바일 햄버거 토글 */
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('open', !isOpen);
  });

  /* 모바일 메뉴에서 링크 클릭 시 메뉴 닫기 */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    });
  });

  /* 현재 스크롤 위치에 맞는 섹션 링크 강조 */
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentId);
    });
  }
}

/* ══════════════════════════════════════════════
   2. 프로젝트 필터링 (상호작용 기능 1)
   ══════════════════════════════════════════════ */
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter__btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;  // data-filter 속성값 읽기

      /* 버튼 active 상태 & aria-pressed 업데이트 */
      filterBtns.forEach(b => {
        b.classList.remove('filter__btn--active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('filter__btn--active');
      btn.setAttribute('aria-pressed', 'true');

      /* 카드 표시/숨김
         data-category가 filter 값과 일치하거나 'all'이면 보여줌 */
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}

/* ══════════════════════════════════════════════
   3. 프로젝트 모달 (상호작용 기능 2)
   ══════════════════════════════════════════════ */
function initModal() {
  const modal    = document.getElementById('project-modal');
  const overlay  = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const detailBtns = document.querySelectorAll('.project-card__detail');

  let lastFocused = null;  // 모달 닫을 때 포커스 복원용

  /* 상세보기 버튼 클릭 */
  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.project);  // data-project 인덱스
      openModal(idx, btn);
    });
  });

  /* 오버레이 클릭으로 닫기 */
  overlay.addEventListener('click', closeModal);

  /* X 버튼 클릭으로 닫기 */
  closeBtn.addEventListener('click', closeModal);

  /* Escape 키로 닫기 */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
    /* Tab 키 트랩: 모달이 열려 있을 때 Tab 포커스를 모달 내부에 가둠 */
    if (e.key === 'Tab' && modal.classList.contains('open')) {
      trapFocus(e, modal);
    }
  });

  function openModal(idx, triggerBtn) {
    const project = PROJECTS[idx];
    if (!project) return;

    /* 모달 내용 채우기 */
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').textContent  = project.description;

    /* 메타 정보 (역할, 기간, 태그) */
    const meta = document.getElementById('modal-meta');
    meta.innerHTML = `
      <span class="tag">역할: ${project.role}</span>
      <span class="tag">기간: ${project.period}</span>
      ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    `;

    /* 링크 버튼 */
    const links = document.getElementById('modal-links');
    links.innerHTML = '';
    if (project.github) {
      links.innerHTML += `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer"
           class="modal__link" aria-label="${project.title} GitHub (새 탭)">
          ↗ GitHub
        </a>`;
    }
    if (project.demo) {
      links.innerHTML += `
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer"
           class="modal__link" aria-label="${project.title} 데모 (새 탭)">
          ↗ Live Demo
        </a>`;
    }

    /* 모달 열기 */
    lastFocused = triggerBtn;   // 닫을 때 여기로 돌아옴
    modal.removeAttribute('aria-hidden');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';  // 배경 스크롤 막기

    /* 포커스를 닫기 버튼으로 이동 (접근성) */
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';  // 배경 스크롤 복원

    /* 모달 열기 전에 있던 버튼으로 포커스 복원 */
    if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }

  /* Tab 키 포커스 트랩
     모달 안의 포커스 가능한 요소들 사이에서만 Tab 이동하게 제한 */
  function trapFocus(e, container) {
    const focusable = container.querySelectorAll(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      /* Shift+Tab: 역방향 이동 → 첫 요소에서 마지막으로 wrap */
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      /* Tab: 순방향 이동 → 마지막 요소에서 첫 번째로 wrap */
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

/* ══════════════════════════════════════════════
   4. 스킬 바 애니메이션
   IntersectionObserver: 요소가 화면에 보일 때 콜백 실행
   → 스크롤할 때마다 체크하지 않아서 성능이 좋음
   ══════════════════════════════════════════════ */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-item__fill');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);  // 한 번만 실행
        }
      });
    },
    { threshold: 0.3 }   // 요소가 30% 이상 보일 때 트리거
  );

  fills.forEach(fill => observer.observe(fill));
}

/* ══════════════════════════════════════════════
   5. 섹션 등장 애니메이션
   CSS에 .reveal / .reveal--visible 클래스 추가하여 fade-up 효과
   ══════════════════════════════════════════════ */
function initScrollReveal() {
  /* 애니메이션 대상 요소들 */
  const targets = document.querySelectorAll(
    '.section__title, .about__grid, .project-card, .skills__group, .contact__item'
  );

  /* CSS 클래스로 초기 숨김 상태 설정 */
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}
