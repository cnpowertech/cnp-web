const root = document.documentElement.dataset.root || '';

const header = `
  <div class="utility"><div class="wrap"><a href="${root}/company/">회사정보</a><a href="${root}/contact/">오시는 길</a><span>KR</span></div></div>
  <header class="site-header">
    <div class="wrap header-row">
      <a class="brand" href="${root}/" aria-label="시앤파워텍 홈"><img src="${root}/assets/cnpowertech.png" alt="시앤파워텍"></a>
      <nav class="desktop-nav" aria-label="주요 메뉴">
        <div class="nav-item"><a href="${root}/company/">회사소개</a></div>
        <div class="nav-item"><a href="${root}/products/">제품소개</a></div>
        <div class="nav-item">
          <button class="nav-trigger" type="button">서비스·지원</button>
          <div class="mega"><div class="wrap mega-grid">
            <div><div class="mega-title">서비스</div><a href="${root}/support/#consult">제품 선정 상담</a><a href="${root}/support/#after-service">A/S 접수 안내</a></div>
            <div><div class="mega-title">기술지원</div><a href="${root}/support/#technical">기술자료 안내</a><a href="${root}/support/#field">현장 기술 문의</a></div>
            <div class="mega-contact"><span class="eyebrow">Technical support</span><strong>031-351-6338</strong><span>평일 09:00–18:00</span></div>
          </div></div>
        </div>
        <div class="nav-item"><a href="${root}/contact/">고객센터</a></div>
      </nav>
      <button class="menu-btn" type="button" aria-label="메뉴 열기" aria-expanded="false"><span></span></button>
    </div>
    <div class="mobile-panel" aria-hidden="true">
      <a href="${root}/company/">회사소개</a><a href="${root}/products/">제품소개</a><a href="${root}/support/">서비스·지원</a><a href="${root}/contact/">고객센터</a>
    </div>
  </header>`;

const footer = `
  <footer class="footer"><div class="wrap">
    <div class="footer-grid">
      <div><img class="footer-logo" src="${root}/assets/cnpowertech.png" alt="시앤파워텍"><p>배전선로용 개폐기와 변압기를 제조합니다.</p></div>
      <div><h4>바로가기</h4><ul><li><a href="${root}/company/">회사소개</a></li><li><a href="${root}/products/">제품소개</a></li><li><a href="${root}/support/">서비스·지원</a></li></ul></div>
      <div><h4>시앤파워텍㈜</h4><ul><li>대표이사 오전열</li><li>전라남도 나주시 왕곡면 혁신산단5길 107</li><li>T 031-351-6338</li><li>F 031-351-6394</li></ul></div>
    </div>
    <div class="copyright">COPYRIGHT © 2026 C&amp;P INC. ALL RIGHTS RESERVED.</div>
  </div></footer>`;

document.querySelector('[data-site-header]')?.insertAdjacentHTML('afterbegin', header);
document.querySelector('[data-site-footer]')?.insertAdjacentHTML('afterbegin', footer);

const menuButton = document.querySelector('.menu-btn');
const mobilePanel = document.querySelector('.mobile-panel');
menuButton?.addEventListener('click', () => {
  const open = mobilePanel.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  mobilePanel.setAttribute('aria-hidden', String(!open));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const products = [
  {slug:'polymer-recloser',category:'overhead',name:'배전용 RECLOSER',en:'Polymer Recloser',image:'protection-recloser.webp',desc:'22.9kV-Y 가공 배전선로에 사용하는 디지털 제어 방식의 배전 자동화용 Recloser.'},
  {slug:'eco-switch',category:'overhead',name:'에폭시절연 부하개폐기',en:'Eco Switch',image:'eco-switch.webp',desc:'가공 및 구내 배전선로의 구분과 분기에 사용하는 에폭시 절연 개폐기.'},
  {slug:'gas-lbs-overhead',category:'overhead',name:'가공용 가스절연 부하개폐기',en:'SF6 Gas LBS',image:'overhead-switch.webp',desc:'가공 배전선로의 선로 분기와 구분에 사용하는 부하개폐기.'},
  {slug:'gas-ass',category:'overhead',name:'가스절연 고장구간 자동개폐기',en:'SF6 Gas ASS',image:'gas-lbs-underground.webp',desc:'고장구간을 후비보호장치와 협조해 자동으로 구분·분리하는 개폐기.'},
  {slug:'air-lbs-indoor',category:'overhead',name:'옥내용 고압부하개폐기',en:'Air LBS Indoor Type',image:'air-lbs-indoor.webp',desc:'25.8kV 배전선로에서 정격 부하 개폐를 수행하는 옥내용 기기.'},
  {slug:'air-ass',category:'overhead',name:'기중형 고장구간개폐기',en:'Air ASS',image:'air-ass.webp',desc:'수용가 설비를 보호하고 구내 사고가 한전선로로 파급되는 것을 방지하는 기기.'},
  {slug:'oil-ass',category:'overhead',name:'유입형 고장구간개폐기',en:'Oil ASS',image:'oil-ass.webp',desc:'수용가 책임분기점에서 설비를 보호하는 유입형 자동개폐기.'},
  {slug:'mof',category:'overhead',name:'계기용 변성기',en:'MOF',image:'transformer-mof.webp',desc:'3상 4선식 특고압선로의 사용 전력량 계량에 사용하는 계기용 변성기.'},
  {slug:'polymer-lbs-underground',category:'underground',name:'지중용 에폭시절연 부하개폐기',en:'Polymer LBS',image:'polymer-lbs-underground.webp',desc:'22.9kV-Y 지중배전선로의 분기와 구분에 사용하는 에폭시 몰드 절연 개폐기.'},
  {slug:'gas-lbs-underground',category:'underground',name:'지중용 가스절연 부하개폐기',en:'Gas LBS',image:'underground-switch.webp',desc:'22.9kV-Y 지중배전선로에 설치하는 가스절연 부하개폐기.'},
  {slug:'compact-pad-transformer',category:'transformer',name:'컴팩트형 지상변압기',en:'Compact Pad-Mounted Transformer',image:'compact-pad-transformer.webp',desc:'22.9kV-Y 지중배전선로에서 지상에 설치하는 유입자냉식 변압기.'},
  {slug:'pole-transformer',category:'transformer',name:'고효율 주상변압기',en:'High-Efficiency Pole Transformer',image:'pole-transformer.webp',desc:'22.9kV-Y 3상 4선식 다중접지 배전계통에 사용하는 단상 고효율 변압기.'},
  {slug:'polymer-cos',category:'protection',name:'배전용 폴리머 COS',en:'Polymer COS',image:'polymer-cos.webp',desc:'주상변압기 1차측에서 변압기 보호와 개폐에 사용하는 컷아웃 스위치.'},
  {slug:'polymer-la',category:'protection',name:'배전용 폴리머 피뢰기',en:'Polymer L.A',image:'polymer-la.webp',desc:'낙뢰와 회로 개폐에 의한 과전압을 제한하고 속류를 차단하는 보호장치.'},
  {slug:'lp-insulator',category:'protection',name:'폴리머 라인포스트 애자',en:'Polymer LP Insulator',image:'lp-insulator.webp',desc:'특고압 가공배전선로의 절연전선을 지지하는 폴리머 애자.'},
  {slug:'wire-fuse',category:'protection',name:'전선퓨즈',en:'Wire Fuse',image:'wire-fuse.webp',desc:'저압 인입선 보호에 사용하는 전선퓨즈.'},
  {slug:'hardware-fittings',category:'protection',name:'배전금구류',en:'Distribution Line Hardware',image:'hardware-fittings.webp',desc:'배전선로에 사용하는 각종 금구류.'}
];

const labels = {all:'전체',overhead:'가공선로용',underground:'지중선로용',transformer:'변압기',protection:'보호기기'};
const grid = document.querySelector('[data-product-grid]');
const modal = document.querySelector('[data-product-modal]');

function renderProducts(category='all') {
  if (!grid) return;
  const list = category === 'all' ? products : products.filter((p) => p.category === category);
  grid.innerHTML = list.map((p) => `<article class="product-card reveal visible" tabindex="0" role="button" data-slug="${p.slug}" aria-label="${p.name} 상세 보기"><div class="product-media"><img src="${root}/assets/products/${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-body"><small>${labels[p.category]}</small><h3>${p.name}<br><span lang="en">${p.en}</span></h3><p>${p.desc}</p><span class="more">상세 보기 ↗</span></div></article>`).join('');
}

function openProduct(slug) {
  if (!modal) return;
  const p = products.find((item) => item.slug === slug);
  if (!p) return;
  modal.querySelector('[data-modal-image]').src = `${root}/assets/products/${p.image}`;
  modal.querySelector('[data-modal-image]').alt = p.name;
  modal.querySelector('[data-modal-category]').textContent = labels[p.category];
  modal.querySelector('[data-modal-name]').innerHTML = `${p.name}<br><span lang="en">${p.en}</span>`;
  modal.querySelector('[data-modal-desc]').textContent = p.desc;
  modal.querySelector('[data-modal-inquiry]').href = `${root}/contact/?product=${encodeURIComponent(p.name)}`;
  modal.classList.add('open'); document.body.classList.add('modal-open');
  history.replaceState(null, '', `?product=${p.slug}`);
}

renderProducts();
const hashCategory = location.hash.slice(1);
if (labels[hashCategory]) {
  const hashButton = document.querySelector(`[data-filter="${hashCategory}"]`);
  document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
  hashButton?.classList.add('active');
  renderProducts(hashCategory);
}
document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('active'));
  button.classList.add('active'); renderProducts(button.dataset.filter);
  history.replaceState(null, '', button.dataset.filter === 'all' ? location.pathname : `#${button.dataset.filter}`);
}));
grid?.addEventListener('click', (e) => { const card=e.target.closest('[data-slug]'); if(card) openProduct(card.dataset.slug); });
grid?.addEventListener('keydown', (e) => { if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-slug]')) { e.preventDefault(); openProduct(e.target.dataset.slug); } });
function closeModal() { modal?.classList.remove('open'); document.body.classList.remove('modal-open'); history.replaceState(null,'',location.pathname); }
document.querySelectorAll('[data-modal-close]').forEach((b)=>b.addEventListener('click',closeModal));
modal?.addEventListener('click',(e)=>{if(e.target===modal) closeModal();});
document.addEventListener('keydown',(e)=>{if(e.key==='Escape') closeModal();});
const initial = new URLSearchParams(location.search).get('product'); if (initial) openProduct(initial);
