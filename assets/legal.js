// 언어 고르기: 주소의 ?lang=ko|en (앱이 앱 언어로 연다) → 첫 페이지에서 고른 언어 → 브라우저 언어 (한국어가 아니면 영어).
(function () {
  const supported = ['ko', 'en'];
  let saved = null;
  try {
    saved = localStorage.getItem('lang');
  } catch (e) {
    // 저장소를 못 쓰면 주소와 브라우저 언어만 따른다.
  }
  const param = new URLSearchParams(location.search).get('lang');
  const browser = (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en';
  let current = supported.includes(param) ? param : supported.includes(saved) ? saved : browser;

  const toggle = document.getElementById('lang-toggle');

  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('article[lang]').forEach((el) => el.classList.toggle('active', el.lang === lang));
    document.querySelectorAll('[data-ko]').forEach((el) => (el.textContent = lang === 'ko' ? el.dataset.ko : el.dataset.en));
    document.title = document.querySelector('article.active h1').textContent + ' · PuzzRank';
    toggle.textContent = lang === 'ko' ? 'English' : '한국어';
  }

  apply(current);
  toggle.addEventListener('click', () => {
    const next = current === 'ko' ? 'en' : 'ko';
    apply(next);
    try {
      localStorage.setItem('lang', next);
    } catch (e) {
      // 저장하지 못해도 이번 화면에는 바뀐다.
    }
  });
})();
