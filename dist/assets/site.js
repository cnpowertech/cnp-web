const root = document.documentElement.dataset.root || '';

const header = `
  <div class="utility"><div class="wrap"><a href="${root}/company/">회사정보</a><a href="${root}/contact/">오시는 길</a></div></div>
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
      <select class="lang-select" aria-label="언어 선택"><option value="ko">한국어</option><option value="en">English</option><option value="vi">Tiếng Việt</option><option value="es">Español</option></select>
      <button class="menu-btn" type="button" aria-label="메뉴 열기" aria-expanded="false"><span></span></button>
    </div>
  </header>
  <div class="mobile-panel" aria-hidden="true" inert>
    <a href="${root}/company/">회사소개</a><a href="${root}/products/">제품소개</a><a href="${root}/support/">서비스·지원</a><a href="${root}/contact/">고객센터</a>
  </div>`;

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
window.CNP_I18N?.init();

const menuButton = document.querySelector('.menu-btn');
const mobilePanel = document.querySelector('.mobile-panel');
function setMobileMenu(open) {
  if (!menuButton || !mobilePanel) return;
  mobilePanel.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', window.CNP_I18N?.t(open ? '메뉴 닫기' : '메뉴 열기') || (open ? '메뉴 닫기' : '메뉴 열기'));
  mobilePanel.setAttribute('aria-hidden', String(!open));
  mobilePanel.inert = !open;
}
menuButton?.addEventListener('click', () => setMobileMenu(!mobilePanel?.classList.contains('open')));
mobilePanel?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMobileMenu(false)));
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) setMobileMenu(false);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const products = [
  {slug:'polymer-recloser',category:'overhead',name:'배전용 RECLOSER',en:'Polymer Recloser',vi:'Máy đóng cắt tự đóng lại polymer',es:'Reconectador de polímero',image:'protection-recloser.webp',desc:'22.9kV-Y 가공 배전선로에 사용하는 디지털 제어 방식의 배전 자동화용 Recloser.',descEn:'Digitally controlled recloser for 22.9kV-Y overhead distribution lines.',descVi:'Máy đóng cắt tự đóng lại điều khiển kỹ thuật số cho đường dây phân phối trên không 22,9kV-Y.',descEs:'Reconectador de control digital para líneas aéreas de distribución de 22,9kV-Y.'},
  {slug:'eco-switch',category:'overhead',name:'에폭시절연 부하개폐기',en:'Epoxy Insulated Load Break Switch',vi:'Dao cắt tải cách điện epoxy',es:'Seccionador bajo carga aislado en epoxi',image:'eco-switch.webp',desc:'가공 및 구내 배전선로의 구분과 분기에 사용하는 에폭시 절연 개폐기.',descEn:'Epoxy-insulated switch for sectionalizing and branching overhead and private distribution lines.',descVi:'Dao cắt cách điện epoxy dùng để phân đoạn và rẽ nhánh đường dây phân phối trên không và nội bộ.',descEs:'Interruptor aislado en epoxi para seccionar y derivar líneas aéreas y redes privadas.'},
  {slug:'gas-lbs-overhead',category:'overhead',name:'가공용 가스절연 부하개폐기',en:'Overhead SF6 Gas Load Break Switch',vi:'Dao cắt tải khí SF6 đường dây trên không',es:'Seccionador bajo carga SF6 para línea aérea',image:'overhead-switch.webp',desc:'가공 배전선로의 선로 분기와 구분에 사용하는 부하개폐기.',descEn:'Load break switch for branching and sectionalizing overhead distribution lines.',descVi:'Dao cắt tải dùng để rẽ nhánh và phân đoạn đường dây phân phối trên không.',descEs:'Seccionador bajo carga para derivar y seccionar líneas aéreas de distribución.'},
  {slug:'gas-ass',category:'overhead',name:'가스절연 고장구간 자동개폐기',en:'SF6 Gas Automatic Sectionalizing Switch',vi:'Máy phân đoạn tự động khí SF6',es:'Seccionador automático SF6',image:'gas-lbs-underground.webp',desc:'고장구간을 후비보호장치와 협조해 자동으로 구분·분리하는 개폐기.',descEn:'Automatic switch that coordinates with backup protection to isolate faulted sections.',descVi:'Thiết bị tự động phối hợp với bảo vệ dự phòng để cô lập khu vực sự cố.',descEs:'Interruptor automático coordinado con la protección de respaldo para aislar tramos con fallas.'},
  {slug:'air-lbs-indoor',category:'overhead',name:'옥내용 고압부하개폐기',en:'Indoor Air Load Break Switch',vi:'Dao cắt tải không khí trong nhà',es:'Seccionador bajo carga de aire para interior',image:'air-lbs-indoor.webp',desc:'25.8kV 배전선로에서 정격 부하 개폐를 수행하는 옥내용 기기.',descEn:'Indoor equipment for rated-load switching on 25.8kV distribution lines.',descVi:'Thiết bị trong nhà dùng để đóng cắt tải định mức trên lưới phân phối 25,8kV.',descEs:'Equipo interior para maniobra de carga nominal en redes de distribución de 25,8kV.'},
  {slug:'air-ass',category:'overhead',name:'기중형 고장구간개폐기',en:'Air Insulated Automatic Sectionalizing Switch',vi:'Máy phân đoạn tự động cách điện không khí',es:'Seccionador automático aislado en aire',image:'air-ass.webp',desc:'수용가 설비를 보호하고 구내 사고가 한전선로로 파급되는 것을 방지하는 기기.',descEn:'Protects customer equipment and prevents internal faults from propagating to the utility line.',descVi:'Bảo vệ thiết bị khách hàng và ngăn sự cố nội bộ lan sang lưới điện lực.',descEs:'Protege los equipos del cliente y evita que las fallas internas se propaguen a la red eléctrica.'},
  {slug:'oil-ass',category:'overhead',name:'유입형 고장구간개폐기',en:'Oil Insulated Automatic Sectionalizing Switch',vi:'Máy phân đoạn tự động cách điện dầu',es:'Seccionador automático aislado en aceite',image:'oil-ass.webp',desc:'수용가 책임분기점에서 설비를 보호하는 유입형 자동개폐기.',descEn:'Oil-insulated automatic sectionalizing switch installed at the customer connection point.',descVi:'Máy phân đoạn tự động cách điện dầu lắp tại điểm đấu nối của khách hàng.',descEs:'Seccionador automático aislado en aceite para el punto de conexión del cliente.'},
  {slug:'mof',category:'overhead',name:'계기용 변성기',en:'Metering Outfit',vi:'Bộ đo lường điện năng',es:'Equipo de medición',image:'transformer-mof.webp',desc:'3상 4선식 특고압선로의 사용 전력량 계량에 사용하는 계기용 변성기.',descEn:'Metering outfit for measuring electricity use on three-phase, four-wire high-voltage lines.',descVi:'Bộ đo lường điện năng cho đường dây cao áp ba pha bốn dây.',descEs:'Equipo de medida para líneas de alta tensión trifásicas de cuatro hilos.'},
  {slug:'polymer-lbs-underground',category:'underground',name:'지중용 에폭시절연 부하개폐기',en:'Underground Polymer Load Break Switch',vi:'Dao cắt tải polymer cho đường dây ngầm',es:'Seccionador bajo carga de polímero para línea subterránea',image:'polymer-lbs-underground.webp',desc:'22.9kV-Y 지중배전선로의 분기와 구분에 사용하는 에폭시 몰드 절연 개폐기.',descEn:'Epoxy-mold insulated switch for branching and sectionalizing 22.9kV-Y underground distribution lines.',descVi:'Dao cắt cách điện epoxy đúc dùng để rẽ nhánh và phân đoạn lưới ngầm 22,9kV-Y.',descEs:'Interruptor aislado en epoxi moldeado para derivar y seccionar redes subterráneas de 22,9kV-Y.'},
  {slug:'gas-lbs-underground',category:'underground',name:'지중용 가스절연 부하개폐기',en:'Underground Gas Load Break Switch',vi:'Dao cắt tải khí cho đường dây ngầm',es:'Seccionador bajo carga de gas para línea subterránea',image:'underground-switch.webp',desc:'22.9kV-Y 지중배전선로에 설치하는 가스절연 부하개폐기.',descEn:'Gas-insulated load break switch for 22.9kV-Y underground distribution lines.',descVi:'Dao cắt tải cách điện khí cho lưới phân phối ngầm 22,9kV-Y.',descEs:'Seccionador bajo carga aislado en gas para redes subterráneas de 22,9kV-Y.'},
  {slug:'compact-pad-transformer',category:'transformer',name:'컴팩트형 지상변압기',en:'Compact Pad-Mounted Transformer',vi:'Máy biến áp đặt nền nhỏ gọn',es:'Transformador compacto montado en pedestal',image:'compact-pad-transformer.webp',desc:'22.9kV-Y 지중배전선로에서 지상에 설치하는 유입자냉식 변압기.',descEn:'Oil-immersed, self-cooled pad-mounted transformer for 22.9kV-Y underground distribution systems.',descVi:'Máy biến áp đặt nền ngâm dầu, tự làm mát cho lưới phân phối ngầm 22,9kV-Y.',descEs:'Transformador en pedestal sumergido en aceite y autorrefrigerado para redes subterráneas de 22,9kV-Y.'},
  {slug:'pole-transformer',category:'transformer',name:'고효율 주상변압기',en:'High-Efficiency Pole-Mounted Transformer',vi:'Máy biến áp treo cột hiệu suất cao',es:'Transformador de poste de alta eficiencia',image:'pole-transformer.webp',desc:'22.9kV-Y 3상 4선식 다중접지 배전계통에 사용하는 단상 고효율 변압기.',descEn:'High-efficiency single-phase transformer for 22.9kV-Y four-wire multi-grounded distribution systems.',descVi:'Máy biến áp một pha hiệu suất cao cho hệ thống phân phối 22,9kV-Y bốn dây nối đất đa điểm.',descEs:'Transformador monofásico de alta eficiencia para sistemas de distribución de 22,9kV-Y y cuatro hilos.'},
  {slug:'polymer-cos',category:'protection',name:'배전용 폴리머 COS',en:'Polymer Cutout Switch',vi:'Cầu chì tự rơi polymer',es:'Cortacircuito fusible de polímero',image:'polymer-cos.webp',desc:'주상변압기 1차측에서 변압기 보호와 개폐에 사용하는 컷아웃 스위치.',descEn:'Cutout switch installed on the primary side of pole transformers for protection and switching.',descVi:'Cầu chì tự rơi lắp phía sơ cấp máy biến áp treo cột để bảo vệ và đóng cắt.',descEs:'Cortacircuito instalado en el primario de transformadores de poste para protección y maniobra.'},
  {slug:'polymer-la',category:'protection',name:'배전용 폴리머 피뢰기',en:'Polymer Lightning Arrester',vi:'Chống sét van polymer',es:'Pararrayos de polímero',image:'polymer-la.webp',desc:'낙뢰와 회로 개폐에 의한 과전압을 제한하고 속류를 차단하는 보호장치.',descEn:'Protection device that limits lightning and switching overvoltage and interrupts follow current.',descVi:'Thiết bị bảo vệ hạn chế quá điện áp do sét và thao tác đóng cắt, đồng thời ngắt dòng điện tiếp diễn.',descEs:'Dispositivo que limita sobretensiones por rayos y maniobras e interrumpe la corriente subsiguiente.'},
  {slug:'lp-insulator',category:'protection',name:'폴리머 라인포스트 애자',en:'Polymer Line Post Insulator',vi:'Sứ đứng đường dây polymer',es:'Aislador de poste de línea de polímero',image:'lp-insulator.webp',desc:'특고압 가공배전선로의 절연전선을 지지하는 폴리머 애자.',descEn:'Polymer insulator that supports insulated conductors on high-voltage overhead distribution lines.',descVi:'Sứ polymer đỡ dây dẫn cách điện trên đường dây phân phối trên không cao áp.',descEs:'Aislador de polímero para soportar conductores aislados en líneas aéreas de alta tensión.'},
  {slug:'wire-fuse',category:'protection',name:'전선퓨즈',en:'Wire Fuse',vi:'Cầu chì dây',es:'Fusible de cable',image:'wire-fuse.webp',desc:'저압 인입선 보호에 사용하는 전선퓨즈.',descEn:'Wire fuse for protecting low-voltage service entrance lines.',descVi:'Cầu chì dây bảo vệ đường dây đầu vào hạ áp.',descEs:'Fusible de cable para proteger acometidas de baja tensión.'},
  {slug:'hardware-fittings',category:'protection',name:'배전금구류',en:'Distribution Line Hardware',vi:'Phụ kiện đường dây phân phối',es:'Herrajes para líneas de distribución',image:'hardware-fittings.webp',desc:'배전선로에 사용하는 각종 금구류.',descEn:'Hardware fittings for power distribution lines.',descVi:'Phụ kiện kim loại dùng cho đường dây phân phối điện.',descEs:'Herrajes para líneas de distribución eléctrica.'}
];

const labels = {all:'전체',overhead:'가공선로용',underground:'지중선로용',transformer:'변압기',protection:'보호기기'};
const grid = document.querySelector('[data-product-grid]');
const modal = document.querySelector('[data-product-modal]');
let currentCategory = 'all';
let currentProductSlug = null;

function localizeProduct(product) {
  const locale = window.CNP_I18N?.locale || 'ko';
  if (locale === 'ko') return { name: product.name, subtitle: product.en, desc: product.desc };
  if (locale === 'en') return { name: product.en, subtitle: '', desc: product.descEn };
  return { name: product[locale] || product.en, subtitle: product.en, desc: product[locale === 'vi' ? 'descVi' : 'descEs'] || product.descEn };
}

function renderProducts(category='all') {
  if (!grid) return;
  currentCategory = category;
  const list = category === 'all' ? products : products.filter((p) => p.category === category);
  grid.innerHTML = list.map((p) => { const copy = localizeProduct(p); return `<article class="product-card reveal visible" tabindex="0" role="button" data-slug="${p.slug}" aria-label="${copy.name}"><div class="product-media"><img src="${root}/assets/products/${p.image}" alt="${copy.name}" loading="lazy"></div><div class="product-body"><small>${window.CNP_I18N?.t(labels[p.category]) || labels[p.category]}</small><h3>${copy.name}${copy.subtitle ? `<br><span lang="en">${copy.subtitle}</span>` : ''}</h3><p>${copy.desc}</p><span class="more">${window.CNP_I18N?.t('상세 보기') || '상세 보기'} ↗</span></div></article>`; }).join('');
}

function openProduct(slug) {
  if (!modal) return;
  const p = products.find((item) => item.slug === slug);
  if (!p) return;
  currentProductSlug = slug;
  const copy = localizeProduct(p);
  modal.querySelector('[data-modal-image]').src = `${root}/assets/products/${p.image}`;
  modal.querySelector('[data-modal-image]').alt = copy.name;
  modal.querySelector('[data-modal-category]').textContent = window.CNP_I18N?.t(labels[p.category]) || labels[p.category];
  modal.querySelector('[data-modal-name]').innerHTML = `${copy.name}${copy.subtitle ? `<br><span lang="en">${copy.subtitle}</span>` : ''}`;
  modal.querySelector('[data-modal-desc]').textContent = copy.desc;
  modal.querySelector('[data-modal-inquiry]').href = `${root}/contact/?product=${encodeURIComponent(copy.name)}`;
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
document.addEventListener('cnp:locale', () => {
  renderProducts(currentCategory);
  if (currentProductSlug && modal?.classList.contains('open')) openProduct(currentProductSlug);
});
