  // 모바일 메뉴 토글 + 스크롤 그림자
  const header = document.getElementById('dlsHeader');
  const burger = document.getElementById('dlsBurger');

  burger.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      header.classList.remove('is-open');
      burger.setAttribute('aria-expanded','false');
    }
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('has-shadow', window.scrollY > 2);
  });