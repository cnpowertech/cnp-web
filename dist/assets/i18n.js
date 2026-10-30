(() => {
  const supported = ['ko', 'en', 'vi', 'es'];
  const textNodes = new WeakMap();
  const attributes = new WeakMap();
  const pageTitles = {
    '시앤파워텍 | 배전 전력기기': { en: 'C&P Powertech | Power Distribution Equipment', vi: 'C&P Powertech | Thiết bị phân phối điện', es: 'C&P Powertech | Equipos de distribución eléctrica' },
    '회사소개 | 시앤파워텍': { en: 'Company | C&P Powertech', vi: 'Công ty | C&P Powertech', es: 'Empresa | C&P Powertech' },
    '제품소개 | 시앤파워텍': { en: 'Products | C&P Powertech', vi: 'Sản phẩm | C&P Powertech', es: 'Productos | C&P Powertech' },
    '서비스·지원 | 시앤파워텍': { en: 'Service & Support | C&P Powertech', vi: 'Dịch vụ & Hỗ trợ | C&P Powertech', es: 'Servicio y soporte | C&P Powertech' },
    '고객센터 | 시앤파워텍': { en: 'Contact | C&P Powertech', vi: 'Liên hệ | C&P Powertech', es: 'Contacto | C&P Powertech' },
  };

  const phrases = {
    '회사정보': { en: 'Company', vi: 'Công ty', es: 'Empresa' },
    '오시는 길': { en: 'Directions', vi: 'Chỉ đường', es: 'Cómo llegar' },
    '회사소개': { en: 'Company', vi: 'Giới thiệu', es: 'Empresa' },
    '제품소개': { en: 'Products', vi: 'Sản phẩm', es: 'Productos' },
    '서비스·지원': { en: 'Service & Support', vi: 'Dịch vụ & Hỗ trợ', es: 'Servicio y soporte' },
    '고객센터': { en: 'Contact', vi: 'Liên hệ', es: 'Contacto' },
    '서비스': { en: 'Service', vi: 'Dịch vụ', es: 'Servicio' },
    '기술지원': { en: 'Technical support', vi: 'Hỗ trợ kỹ thuật', es: 'Soporte técnico' },
    '제품 선정 상담': { en: 'Product selection', vi: 'Tư vấn chọn sản phẩm', es: 'Selección de productos' },
    'A/S 접수 안내': { en: 'Service request guide', vi: 'Hướng dẫn bảo hành', es: 'Guía de servicio técnico' },
    '기술자료 안내': { en: 'Technical documents', vi: 'Tài liệu kỹ thuật', es: 'Documentación técnica' },
    '현장 기술 문의': { en: 'Field support', vi: 'Hỗ trợ tại hiện trường', es: 'Soporte en campo' },
    '평일 09:00–18:00': { en: 'Weekdays 09:00–18:00', vi: 'Thứ Hai–Thứ Sáu 09:00–18:00', es: 'Laborables 09:00–18:00' },
    '메뉴 열기': { en: 'Open menu', vi: 'Mở menu', es: 'Abrir menú' },
    '메뉴 닫기': { en: 'Close menu', vi: 'Đóng menu', es: 'Cerrar menú' },
    '시앤파워텍 홈': { en: 'C&P Powertech home', vi: 'Trang chủ C&P Powertech', es: 'Inicio de C&P Powertech' },
    '주요 메뉴': { en: 'Main navigation', vi: 'Điều hướng chính', es: 'Navegación principal' },
    '배전선로용 개폐기와 변압기를 제조합니다.': { en: 'We manufacture switches and transformers for power distribution lines.', vi: 'Chúng tôi sản xuất thiết bị đóng cắt và máy biến áp cho lưới phân phối điện.', es: 'Fabricamos interruptores y transformadores para redes de distribución eléctrica.' },
    '바로가기': { en: 'Quick links', vi: 'Liên kết nhanh', es: 'Enlaces rápidos' },
    '대표이사 오전열': { en: 'CEO Oh Jeon-yeol', vi: 'Giám đốc điều hành Oh Jeon-yeol', es: 'Director general Oh Jeon-yeol' },
    '전라남도 나주시 왕곡면 혁신산단5길 107': { en: '107, Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Korea', vi: '107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Hàn Quốc', es: '107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Corea' },
    '[본사] 전라남도 나주시 왕곡면 혁신산단 5길 107': { en: '[Head office] 107, Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Korea', vi: '[Trụ sở chính] 107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Hàn Quốc', es: '[Sede central] 107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Corea' },
    '[지사] 경기도 화성시 장안면 수촌길 119-8번지': { en: '[Branch] 119-8, Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Korea', vi: '[Chi nhánh] 119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Hàn Quốc', es: '[Sucursal] 119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Corea' },
    '전력의 안정적인': { en: 'Powering a', vi: 'Kiến tạo dòng điện', es: 'Impulsamos un futuro' },
    '흐름을 만듭니다': { en: 'reliable future', vi: 'ổn định và tin cậy', es: 'energético confiable' },
    '시앤파워텍은 개폐기와 변압기를 개발·생산하는': { en: 'C&P Powertech develops and manufactures switches and transformers', vi: 'C&P Powertech phát triển và sản xuất thiết bị đóng cắt và máy biến áp', es: 'C&P Powertech desarrolla y fabrica interruptores y transformadores' },
    '배전 전력기기 전문기업입니다.': { en: 'as a specialist in power distribution equipment.', vi: 'với chuyên môn sâu về thiết bị phân phối điện.', es: 'como especialista en equipos de distribución eléctrica.' },
    '축적된 기술과 품질관리 역량으로': { en: 'With proven technology and quality management expertise,', vi: 'Với công nghệ tích lũy và năng lực quản lý chất lượng,', es: 'Con tecnología consolidada y experiencia en gestión de calidad,' },
    '안전하고 지속가능한 전력 환경을 만들어갑니다.': { en: 'we create a safer, more sustainable power environment.', vi: 'chúng tôi kiến tạo môi trường điện an toàn và bền vững.', es: 'creamos un entorno eléctrico seguro y sostenible.' },
    'Powering a Reliable Future': { en: 'Powering a Reliable Future', vi: 'Powering a Reliable Future', es: 'Powering a Reliable Future' },
    '신뢰할 수 있는 전력으로 더 나은 미래를 만듭니다.': { en: 'Building a better future with reliable power.', vi: 'Kiến tạo tương lai tốt đẹp hơn bằng nguồn điện tin cậy.', es: 'Creamos un futuro mejor con energía confiable.' },
    '배경 이미지 슬라이드 제어': { en: 'Background image carousel controls', vi: 'Điều khiển trình chiếu ảnh nền', es: 'Controles del carrusel de imágenes de fondo' },
    '이전 이미지': { en: 'Previous image', vi: 'Ảnh trước', es: 'Imagen anterior' },
    '다음 이미지': { en: 'Next image', vi: 'Ảnh tiếp theo', es: 'Imagen siguiente' },
    '첫 번째 이미지 보기': { en: 'View first image', vi: 'Xem ảnh thứ nhất', es: 'Ver la primera imagen' },
    '두 번째 이미지 보기': { en: 'View second image', vi: 'Xem ảnh thứ hai', es: 'Ver la segunda imagen' },
    '세 번째 이미지 보기': { en: 'View third image', vi: 'Xem ảnh thứ ba', es: 'Ver la tercera imagen' },
    '시앤파워텍 생산 현장': { en: 'C&P Powertech production floor', vi: 'Xưởng sản xuất C&P Powertech', es: 'Planta de producción de C&P Powertech' },
    '시앤파워텍 변압기 생산 현장': { en: 'C&P Powertech transformer production floor', vi: 'Xưởng sản xuất máy biến áp C&P Powertech', es: 'Planta de producción de transformadores de C&P Powertech' },
    '제품 살펴보기': { en: 'Explore products', vi: 'Xem sản phẩm', es: 'Ver productos' },
    'SCROLL TO EXPLORE': { en: 'SCROLL TO EXPLORE', vi: 'CUỘN ĐỂ KHÁM PHÁ', es: 'DESPLÁZATE PARA EXPLORAR' },
    '기술과 품질로': { en: 'Technology and quality', vi: 'Công nghệ và chất lượng', es: 'Tecnología y calidad' },
    '전력의 신뢰를 만들어갑니다': { en: 'build trust in power', vi: 'kiến tạo niềm tin vào nguồn điện', es: 'para una energía confiable' },
    '시앤파워텍은 개폐기와 변압기를 중심으로 배전 전력기기를 개발하고 생산하는 기업입니다.': { en: 'C&P Powertech develops and manufactures power distribution equipment, with a focus on switches and transformers.', vi: 'C&P Powertech phát triển và sản xuất thiết bị phân phối điện, tập trung vào thiết bị đóng cắt và máy biến áp.', es: 'C&P Powertech desarrolla y fabrica equipos de distribución eléctrica, principalmente interruptores y transformadores.' },
    '화성과 나주의 생산 기반과 기술연구 역량을 바탕으로 제품의 설계부터 생산, 시험, 품질관리까지 체계적으로 수행하고 있습니다.': { en: 'With production bases in Hwaseong and Naju and strong R&D capabilities, we systematically manage design, production, testing and quality control.', vi: 'Với cơ sở sản xuất tại Hwaseong và Naju cùng năng lực R&D, chúng tôi quản lý có hệ thống từ thiết kế, sản xuất, thử nghiệm đến kiểm soát chất lượng.', es: 'Con bases de producción en Hwaseong y Naju y capacidad de I+D, gestionamos sistemáticamente el diseño, la producción, las pruebas y el control de calidad.' },
    '한국전력공사와 민간 전력시장에서 쌓아온 경험을 바탕으로, 고객이 신뢰할 수 있는 제품을 공급하겠습니다.': { en: 'Drawing on experience with KEPCO and the private power market, we deliver products our customers can trust.', vi: 'Dựa trên kinh nghiệm với KEPCO và thị trường điện tư nhân, chúng tôi cung cấp những sản phẩm khách hàng có thể tin tưởng.', es: 'Nuestra experiencia con KEPCO y el mercado eléctrico privado nos permite ofrecer productos en los que nuestros clientes pueden confiar.' },
    '시앤파워텍 알아보기': { en: 'Discover C&P Powertech', vi: 'Tìm hiểu C&P Powertech', es: 'Conozca C&P Powertech' },
    '업력': { en: 'Experience', vi: 'Kinh nghiệm', es: 'Experiencia' },
    '전력기기 사업경험': { en: 'Power equipment experience', vi: 'Kinh nghiệm thiết bị điện', es: 'Experiencia en equipos eléctricos' },
    '생산기반': { en: 'Production bases', vi: 'Cơ sở sản xuất', es: 'Bases de producción' },
    '화성 · 나주': { en: 'Hwaseong · Naju', vi: 'Hwaseong · Naju', es: 'Hwaseong · Naju' },
    '두 지역의 생산거점': { en: 'Two production locations', vi: 'Hai cơ sở sản xuất', es: 'Dos centros de producción' },
    '판매 네트워크': { en: 'Sales network', vi: 'Mạng lưới bán hàng', es: 'Red comercial' },
    '전국 약 300개': { en: 'About 300 nationwide', vi: 'Khoảng 300 trên toàn quốc', es: 'Aproximadamente 300 en el país' },
    '대리점 및 거래처 기반': { en: 'Dealers and business partners', vi: 'Đại lý và đối tác kinh doanh', es: 'Distribuidores y socios comerciales' },
    '사업분야': { en: 'Core business', vi: 'Lĩnh vực kinh doanh', es: 'Área de negocio' },
    '개폐기 · 변압기': { en: 'Switches · Transformers', vi: 'Thiết bị đóng cắt · Máy biến áp', es: 'Interruptores · Transformadores' },
    '핵심 제품군': { en: 'Core product lines', vi: 'Dòng sản phẩm cốt lõi', es: 'Líneas de productos principales' },
    '배전 환경에 맞춘 제품군': { en: 'Products for distribution networks', vi: 'Sản phẩm cho lưới phân phối', es: 'Productos para redes de distribución' },
    '가공선로, 지중선로, 변압기와 보호기기로 구분해 필요한 제품을 빠르게 찾을 수 있습니다.': { en: 'Find equipment by overhead lines, underground lines, transformers and protection devices.', vi: 'Tìm thiết bị theo nhóm đường dây trên không, đường dây ngầm, máy biến áp và thiết bị bảo vệ.', es: 'Encuentre equipos por líneas aéreas, líneas subterráneas, transformadores y dispositivos de protección.' },
    '가공선로용 개폐기': { en: 'Overhead line switches', vi: 'Thiết bị đóng cắt đường dây trên không', es: 'Interruptores para líneas aéreas' },
    'ECO 부하개폐기 · 고장구간 자동개폐기': { en: 'ECO load break switch · Automatic sectionalizing switch', vi: 'Dao cắt tải ECO · Máy phân đoạn tự động', es: 'Seccionador bajo carga ECO · Seccionador automático' },
    '가공 배전선로의 안정적인 운영을 위한 전력기기': { en: 'Equipment for reliable overhead distribution network operation', vi: 'Thiết bị giúp vận hành ổn định lưới phân phối trên không', es: 'Equipos para el funcionamiento fiable de redes aéreas de distribución' },
    '지중선로용 개폐기': { en: 'Underground line switches', vi: 'Thiết bị đóng cắt đường dây ngầm', es: 'Interruptores para líneas subterráneas' },
    '에폭시절연 부하개폐기 · 지중용 부하개폐기': { en: 'Epoxy insulated LBS · Underground load break switch', vi: 'Dao cắt tải cách điện epoxy · Dao cắt tải ngầm', es: 'Seccionador aislado en epoxi · Seccionador subterráneo' },
    '지중 배전 환경에 적용되는 개폐기': { en: 'Switches designed for underground distribution environments', vi: 'Thiết bị đóng cắt cho môi trường phân phối điện ngầm', es: 'Interruptores para entornos de distribución subterránea' },
    '고효율 주상변압기 · 아몰퍼스 변압기 · 지상변압기': { en: 'High-efficiency pole transformer · Amorphous transformer · Pad-mounted transformer', vi: 'Máy biến áp treo cột hiệu suất cao · Máy biến áp vô định hình · Máy biến áp đặt nền', es: 'Transformador de poste de alta eficiencia · Transformador amorfo · Transformador en pedestal' },
    '전력을 사용 환경에 맞게 변환하는 배전기기': { en: 'Distribution equipment that transforms power for its application', vi: 'Thiết bị phân phối biến đổi điện năng phù hợp với môi trường sử dụng', es: 'Equipos de distribución que transforman la energía según su aplicación' },
    '폴리머 피뢰기 · 폴리머 COS': { en: 'Polymer lightning arrester · Polymer COS', vi: 'Chống sét van polymer · Cầu chì tự rơi polymer', es: 'Pararrayos de polímero · Cortacircuito COS de polímero' },
    '배전설비 보호를 위한 기기': { en: 'Equipment for protecting power distribution facilities', vi: 'Thiết bị bảo vệ hệ thống phân phối điện', es: 'Equipos para proteger instalaciones de distribución eléctrica' },
    '가공선로용': { en: 'Overhead line', vi: 'Đường dây trên không', es: 'Línea aérea' },
    '지중선로용': { en: 'Underground line', vi: 'Đường dây ngầm', es: 'Línea subterránea' },
    '변압기': { en: 'Transformers', vi: 'Máy biến áp', es: 'Transformadores' },
    '보호기기': { en: 'Protection equipment', vi: 'Thiết bị bảo vệ', es: 'Equipos de protección' },
    '제품 이후까지': { en: 'Technical support', vi: 'Hỗ trợ kỹ thuật', es: 'Soporte técnico' },
    '이어지는 기술지원': { en: 'beyond delivery', vi: 'sau khi bàn giao', es: 'después de la entrega' },
    '제품 선정부터 현장 문의와 A/S 접수까지 담당 창구를 한곳에서 안내합니다.': { en: 'One contact point connects product selection, field questions and service requests.', vi: 'Một đầu mối duy nhất hỗ trợ chọn sản phẩm, tư vấn hiện trường và yêu cầu bảo hành.', es: 'Un único punto de contacto para selección de productos, consultas de campo y servicio técnico.' },
    '설치 환경과 용도에 맞는 제품을 안내합니다.': { en: 'We help identify equipment for your installation and application.', vi: 'Chúng tôi tư vấn thiết bị phù hợp với môi trường lắp đặt và mục đích sử dụng.', es: 'Le orientamos hacia el equipo adecuado para su instalación y uso.' },
    '제품 규격과 기술자료 문의를 접수합니다.': { en: 'Request product specifications and technical documentation.', vi: 'Tiếp nhận yêu cầu về thông số và tài liệu kỹ thuật.', es: 'Solicite especificaciones y documentación técnica.' },
    'A/S 접수': { en: 'Service requests', vi: 'Yêu cầu bảo hành', es: 'Solicitudes de servicio' },
    '제품과 현장 정보를 확인해 담당자에게 연결합니다.': { en: 'We review product and site information and connect you with the right specialist.', vi: 'Chúng tôi kiểm tra thông tin sản phẩm, hiện trường và kết nối với chuyên viên phù hợp.', es: 'Revisamos la información del producto y la instalación para asignar al especialista adecuado.' },
    '나주 혁신산단에서': { en: 'Manufactured at', vi: 'Sản xuất tại', es: 'Fabricado en' },
    '제품을 생산합니다': { en: 'our Naju plant', vi: 'nhà máy Naju', es: 'nuestra planta de Naju' },
    '지도에서 보기': { en: 'View map', vi: 'Xem bản đồ', es: 'Ver mapa' },
    '전력의 안정적인 흐름을 만드는 기술': { en: 'Technology that keeps power flowing reliably', vi: 'Công nghệ duy trì dòng điện ổn định', es: 'Tecnología para un flujo eléctrico confiable' },
    '고객의 신뢰를 쌓아가는 기업': { en: 'A company built on customer trust', vi: 'Doanh nghiệp vun đắp niềm tin của khách hàng', es: 'Una empresa que construye la confianza del cliente' },
    '시앤파워텍은 개폐기와 변압기를 중심으로 배전 전력기기를 개발·생산하는 전문기업입니다.': { en: 'C&P Powertech specializes in developing and manufacturing power distribution equipment, with a focus on switches and transformers.', vi: 'C&P Powertech là doanh nghiệp chuyên phát triển và sản xuất thiết bị phân phối điện, tập trung vào thiết bị đóng cắt và máy biến áp.', es: 'C&P Powertech se especializa en el desarrollo y la fabricación de equipos de distribución eléctrica, principalmente interruptores y transformadores.' },
    '기술과 품질을 바탕으로 안전하고 지속가능한 전력 환경을 만들어갑니다.': { en: 'Through technology and quality, we create a safe and sustainable power environment.', vi: 'Bằng công nghệ và chất lượng, chúng tôi kiến tạo môi trường điện an toàn và bền vững.', es: 'Con tecnología y calidad, creamos un entorno eléctrico seguro y sostenible.' },
    '시앤파워텍은 개폐기와 변압기를 중심으로 배전 전력기기를 개발하고 생산하는 기업입니다.': { en: 'C&P Powertech develops and manufactures power distribution equipment, with a focus on switches and transformers.', vi: 'C&P Powertech phát triển và sản xuất thiết bị phân phối điện, tập trung vào thiết bị đóng cắt và máy biến áp.', es: 'C&P Powertech desarrolla y fabrica equipos de distribución eléctrica, principalmente interruptores y transformadores.' },
    '전력은 산업을 움직이고 일상을 이어주는 필수 기반입니다. 시앤파워텍은 전력이 필요한 곳에 안전하고 안정적으로 공급될 수 있도록 배전 현장에 필요한 제품을 연구하고 생산해 왔습니다.': { en: 'Electric power is essential to industry and everyday life. We research and manufacture equipment that helps deliver power safely and reliably wherever it is needed.', vi: 'Điện năng là nền tảng thiết yếu của công nghiệp và đời sống. Chúng tôi nghiên cứu và sản xuất thiết bị giúp cung cấp điện an toàn, ổn định đến nơi cần thiết.', es: 'La electricidad es esencial para la industria y la vida diaria. Investigamos y fabricamos equipos que permiten suministrarla de forma segura y fiable.' },
    '가공용·지중용 부하개폐기, 고장구간 자동개폐기, 주상·지상변압기 등 다양한 제품을 공급하며 한국전력공사와 민간 전력시장의 요구에 대응하고 있습니다.': { en: 'Our portfolio includes overhead and underground load break switches, automatic sectionalizing switches, and pole- and pad-mounted transformers for KEPCO and private power markets.', vi: 'Danh mục của chúng tôi gồm dao cắt tải trên không và ngầm, thiết bị phân đoạn tự động, máy biến áp treo cột và đặt nền cho KEPCO và thị trường điện tư nhân.', es: 'Suministramos seccionadores aéreos y subterráneos, seccionadores automáticos y transformadores de poste y pedestal para KEPCO y el mercado privado.' },
    '화성과 나주의 생산 기반과 기술연구 역량을 바탕으로 제품의 설계부터 생산, 시험과 품질관리까지 이어지는 역량을 갖추고 있습니다. 공인시험과 현장 경험을 통해 제품의 신뢰성을 높이고, 납품 이후에도 고객의 목소리에 귀 기울이겠습니다.': { en: 'With production bases in Hwaseong and Naju and strong R&D capabilities, we cover design, manufacturing, testing and quality control. Accredited testing and field experience improve reliability, and we continue listening after delivery.', vi: 'Với cơ sở sản xuất tại Hwaseong và Naju cùng năng lực R&D, chúng tôi thực hiện từ thiết kế, sản xuất đến thử nghiệm và quản lý chất lượng, đồng thời luôn lắng nghe khách hàng sau bàn giao.', es: 'Con centros de producción en Hwaseong y Naju y capacidad de I+D, abarcamos diseño, fabricación, pruebas y control de calidad, y seguimos escuchando al cliente tras la entrega.' },
    '앞으로도 에폭시 절연 개폐기와 고효율 변압기 등 변화하는 전력 환경에 필요한 제품을 확대하고, 국내에서 쌓은 기술과 경험을 바탕으로 해외시장으로 성장해 나가겠습니다.': { en: 'We will expand products for a changing power environment, including epoxy-insulated switches and high-efficiency transformers, and grow into global markets with expertise built in Korea.', vi: 'Chúng tôi sẽ mở rộng các sản phẩm phù hợp với môi trường điện thay đổi và vươn ra thị trường quốc tế bằng công nghệ, kinh nghiệm tích lũy tại Hàn Quốc.', es: 'Ampliaremos los productos necesarios para un entorno eléctrico cambiante y creceremos en mercados internacionales con la experiencia adquirida en Corea.' },
    '기술과 품질로 신뢰를 쌓고, 안정적인 전력 공급과 지속가능한 미래에 기여하겠습니다.': { en: 'We build trust through technology and quality, contributing to reliable power and a sustainable future.', vi: 'Chúng tôi xây dựng niềm tin bằng công nghệ và chất lượng, góp phần vào nguồn điện ổn định và tương lai bền vững.', es: 'Generamos confianza con tecnología y calidad, contribuyendo a un suministro fiable y un futuro sostenible.' },
    '전력의 신뢰를 만듭니다': { en: 'Building trust in power', vi: 'Kiến tạo niềm tin vào nguồn điện', es: 'Generamos confianza en la energía' },
    '배전 현장의 요구를 이해하고, 신뢰할 수 있는 제품으로 안정적인 전력 사용을 뒷받침합니다.': { en: 'We understand distribution field requirements and support reliable power use with dependable products.', vi: 'Chúng tôi thấu hiểu yêu cầu thực tế và hỗ trợ sử dụng điện ổn định bằng sản phẩm đáng tin cậy.', es: 'Entendemos las necesidades de campo y respaldamos un uso estable de la energía con productos fiables.' },
    '배전 전력기기의 기술과 품질을 통해 안정적인 전력 공급에 기여하는 기업': { en: 'A company contributing to reliable power through power distribution technology and quality', vi: 'Doanh nghiệp góp phần cung cấp điện ổn định bằng công nghệ và chất lượng thiết bị phân phối', es: 'Una empresa que contribuye a un suministro fiable mediante tecnología y calidad' },
    '고객이 신뢰할 수 있는 전력기기를 공급하여 산업과 일상의 안정적인 전력 사용을 뒷받침합니다.': { en: 'We supply dependable power equipment that supports stable electricity use in industry and daily life.', vi: 'Chúng tôi cung cấp thiết bị điện đáng tin cậy, hỗ trợ sử dụng điện ổn định trong công nghiệp và đời sống.', es: 'Suministramos equipos fiables que respaldan el uso estable de electricidad en la industria y la vida diaria.' },
    '국내에서 쌓은 기술과 신뢰를 바탕으로 세계 전력시장에 기여하는 기업으로 성장합니다.': { en: 'We grow into a company that contributes to global power markets through technology and trust built in Korea.', vi: 'Chúng tôi phát triển thành doanh nghiệp đóng góp cho thị trường điện toàn cầu bằng công nghệ và niềm tin tích lũy tại Hàn Quốc.', es: 'Crecemos para contribuir al mercado eléctrico mundial con tecnología y confianza desarrolladas en Corea.' },
    '기술': { en: 'Technology', vi: 'Công nghệ', es: 'Tecnología' },
    '현장의 요구와 전력 환경의 변화에 맞는 제품을 개발합니다.': { en: 'We develop products for field requirements and changing power environments.', vi: 'Chúng tôi phát triển sản phẩm phù hợp với yêu cầu thực tế và môi trường điện thay đổi.', es: 'Desarrollamos productos adaptados a las necesidades de campo y a un entorno eléctrico cambiante.' },
    '품질': { en: 'Quality', vi: 'Chất lượng', es: 'Calidad' },
    '생산과 시험, 품질관리를 통해 신뢰할 수 있는 제품을 공급합니다.': { en: 'Manufacturing, testing and quality control ensure dependable products.', vi: 'Sản xuất, thử nghiệm và quản lý chất lượng bảo đảm sản phẩm đáng tin cậy.', es: 'La fabricación, las pruebas y el control de calidad garantizan productos fiables.' },
    '책임': { en: 'Responsibility', vi: 'Trách nhiệm', es: 'Responsabilidad' },
    '제품 공급 이후에도 고객의 문의와 현장 요구에 대응합니다.': { en: 'We respond to customer questions and field needs after delivery.', vi: 'Chúng tôi hỗ trợ thắc mắc và nhu cầu thực tế của khách hàng sau bàn giao.', es: 'Atendemos consultas y necesidades de campo después de la entrega.' },
    '성장': { en: 'Growth', vi: 'Phát triển', es: 'Crecimiento' },
    '국내 시장에서 축적한 경험을 바탕으로 새로운 시장을 개척합니다.': { en: 'We enter new markets with experience built in Korea.', vi: 'Chúng tôi mở rộng thị trường mới dựa trên kinh nghiệm tích lũy tại Hàn Quốc.', es: 'Abrimos nuevos mercados con la experiencia acumulada en Corea.' },
    '회사개요': { en: 'Company overview', vi: 'Tổng quan công ty', es: 'Resumen de la empresa' },
    '시앤파워텍의 기본 정보와 주요 사업을 한눈에 확인할 수 있습니다.': { en: 'Key company information and business areas at a glance.', vi: 'Thông tin cơ bản và lĩnh vực kinh doanh chính của công ty.', es: 'Información básica y principales áreas de negocio de la empresa.' },
    '회사명': { en: 'Company name', vi: 'Tên công ty', es: 'Empresa' },
    '오전열': { en: 'Oh Jeon-yeol', vi: 'Oh Jeon-yeol', es: 'Oh Jeon-yeol' },
    '설립연도': { en: 'Founded', vi: 'Năm thành lập', es: 'Fundación' },
    '2013년': { en: '2013', vi: '2013', es: '2013' },
    '주요 사업': { en: 'Core business', vi: 'Lĩnh vực chính', es: 'Actividad principal' },
    '배전용 개폐기, 변압기 및 보호기기 개발·생산': { en: 'Development and manufacturing of distribution switches, transformers and protection equipment', vi: 'Phát triển và sản xuất thiết bị đóng cắt, máy biến áp và thiết bị bảo vệ', es: 'Desarrollo y fabricación de interruptores, transformadores y equipos de protección' },
    '본사·나주공장': { en: 'Head office · Naju plant', vi: 'Trụ sở · Nhà máy Naju', es: 'Sede · Planta de Naju' },
    '화성사업장': { en: 'Hwaseong site', vi: 'Cơ sở Hwaseong', es: 'Centro de Hwaseong' },
    '경기도 화성시 장안면 수촌길 119-8': { en: '119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Korea', vi: '119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Hàn Quốc', es: '119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Corea' },
    '주요 제품': { en: 'Main products', vi: 'Sản phẩm chính', es: 'Productos principales' },
    '부하개폐기, 고장구간 자동개폐기, 주상·지상변압기, 피뢰기 등': { en: 'Load break switches, automatic sectionalizing switches, pole- and pad-mounted transformers, arresters and more', vi: 'Dao cắt tải, thiết bị phân đoạn tự động, máy biến áp treo cột và đặt nền, chống sét van và các sản phẩm khác', es: 'Seccionadores, seccionadores automáticos, transformadores de poste y pedestal, pararrayos y más' },
    '기술부터 품질관리까지,': { en: 'From technology to quality control,', vi: 'Từ công nghệ đến quản lý chất lượng,', es: 'De la tecnología al control de calidad,' },
    '전력기기의 신뢰를 만듭니다': { en: 'we build trust in power equipment', vi: 'chúng tôi tạo dựng độ tin cậy cho thiết bị điện', es: 'generamos confianza en los equipos eléctricos' },
    '연구개발': { en: 'Research & development', vi: 'Nghiên cứu phát triển', es: 'Investigación y desarrollo' },
    '배전 현장의 요구를 반영하여 제품과 기술을 개발합니다.': { en: 'We develop products and technologies that reflect distribution field needs.', vi: 'Chúng tôi phát triển sản phẩm và công nghệ theo nhu cầu thực tế của lưới phân phối.', es: 'Desarrollamos productos y tecnologías que responden a las necesidades de la distribución.' },
    '생산 기반': { en: 'Production', vi: 'Cơ sở sản xuất', es: 'Producción' },
    '화성과 나주의 사업장을 기반으로 제품을 생산합니다.': { en: 'We manufacture products at our Hwaseong and Naju sites.', vi: 'Chúng tôi sản xuất sản phẩm tại các cơ sở Hwaseong và Naju.', es: 'Fabricamos productos en nuestros centros de Hwaseong y Naju.' },
    '시험·품질관리': { en: 'Testing & quality', vi: 'Thử nghiệm và chất lượng', es: 'Pruebas y calidad' },
    '시험설비 운영과 공정·출하검사를 통해 제품 품질을 관리합니다.': { en: 'We manage quality through test facilities and in-process and outgoing inspections.', vi: 'Chúng tôi quản lý chất lượng bằng thiết bị thử nghiệm, kiểm tra công đoạn và xuất xưởng.', es: 'Gestionamos la calidad mediante instalaciones de ensayo e inspecciones de proceso y salida.' },
    '영업·고객지원': { en: 'Sales & customer support', vi: 'Kinh doanh và hỗ trợ', es: 'Ventas y atención al cliente' },
    '국내 고객과 소통하며 제품 공급 및 납품 이후의 문의에 대응합니다.': { en: 'We communicate with customers and support product supply and post-delivery inquiries.', vi: 'Chúng tôi phối hợp với khách hàng, hỗ trợ cung cấp sản phẩm và các yêu cầu sau bàn giao.', es: 'Nos comunicamos con los clientes y atendemos el suministro y las consultas posteriores.' },
    '성장의 발자취': { en: 'Our journey', vi: 'Hành trình phát triển', es: 'Nuestra trayectoria' },
    '기술과 제품, 생산 기반을 확장하며 배전 전력기기 전문기업으로 성장해 왔습니다.': { en: 'We have grown as a specialist in power distribution equipment by expanding technology, products and production.', vi: 'Chúng tôi đã phát triển thành doanh nghiệp chuyên về thiết bị phân phối bằng cách mở rộng công nghệ, sản phẩm và sản xuất.', es: 'Hemos crecido como especialistas en distribución eléctrica ampliando tecnología, productos y producción.' },
    '회사 설립 및 개폐기 사업 기반 구축': { en: 'Founded the company and established the switchgear business foundation.', vi: 'Thành lập công ty và xây dựng nền tảng kinh doanh thiết bị đóng cắt.', es: 'Fundación de la empresa y creación de la base del negocio de interruptores.' },
    '기업부설연구소 설립 및 생산 기반 확대': { en: 'Established the corporate R&D institute and expanded production.', vi: 'Thành lập viện R&D doanh nghiệp và mở rộng nền tảng sản xuất.', es: 'Creación del instituto de I+D y ampliación de la producción.' },
    '계기용 변성기 제품 공급 및 관련 기술 확보': { en: 'Began supplying metering outfits and secured related technology.', vi: 'Bắt đầu cung cấp bộ đo lường và nắm vững công nghệ liên quan.', es: 'Inicio del suministro de equipos de medida y adquisición de tecnología relacionada.' },
    '시앤파워텍㈜으로 상호 변경, 나주 생산 기반 구축': { en: 'Renamed C&P Powertech and established the Naju production base.', vi: 'Đổi tên thành C&P Powertech và xây dựng cơ sở sản xuất Naju.', es: 'Cambio de nombre a C&P Powertech y establecimiento de la base de Naju.' },
    '나주공장 증축 및 개폐기·변압기 관련 사업 확대': { en: 'Expanded the Naju plant and the switch and transformer business.', vi: 'Mở rộng nhà máy Naju và hoạt động thiết bị đóng cắt, máy biến áp.', es: 'Ampliación de la planta de Naju y del negocio de interruptores y transformadores.' },
    '벤처기업 확인 및 국내외 시장 확대 추진': { en: 'Received venture company certification and pursued domestic and global growth.', vi: 'Được công nhận doanh nghiệp đầu tư mạo hiểm và thúc đẩy mở rộng thị trường trong và ngoài nước.', es: 'Certificación como empresa de riesgo y expansión en mercados nacionales e internacionales.' },
    '품질과 기술에 대한': { en: 'Objective validation of', vi: 'Đánh giá khách quan về', es: 'Validación objetiva de' },
    '객관적인 검증': { en: 'quality and technology', vi: 'chất lượng và công nghệ', es: 'calidad y tecnología' },
    '시앤파워텍은 품질경영체계를 운영하고, 주요 제품에 대한 시험을 통해 제품의 성능과 신뢰성을 확인하고 있습니다.': { en: 'We operate quality management systems and verify product performance and reliability through testing.', vi: 'Chúng tôi vận hành hệ thống quản lý chất lượng và xác minh hiệu suất, độ tin cậy qua thử nghiệm.', es: 'Aplicamos sistemas de gestión de calidad y verificamos el rendimiento y la fiabilidad mediante pruebas.' },
    '경영시스템': { en: 'Management systems', vi: 'Hệ thống quản lý', es: 'Sistemas de gestión' },
    'ISO 9001 품질경영시스템': { en: 'ISO 9001 Quality Management System', vi: 'Hệ thống quản lý chất lượng ISO 9001', es: 'Sistema de Gestión de Calidad ISO 9001' },
    'ISO 14001 환경경영시스템': { en: 'ISO 14001 Environmental Management System', vi: 'Hệ thống quản lý môi trường ISO 14001', es: 'Sistema de Gestión Ambiental ISO 14001' },
    'ISO 45001 안전보건경영시스템': { en: 'ISO 45001 Occupational Health & Safety Management System', vi: 'Hệ thống quản lý an toàn và sức khỏe nghề nghiệp ISO 45001', es: 'Sistema de Gestión de Seguridad y Salud en el Trabajo ISO 45001' },
    '환경·안전': { en: 'Environment & safety', vi: 'Môi trường và an toàn', es: 'Medio ambiente y seguridad' },
    '기업 인증': { en: 'Company certifications', vi: 'Chứng nhận doanh nghiệp', es: 'Certificaciones empresariales' },
    '기술 역량': { en: 'Technical capability', vi: 'Năng lực kỹ thuật', es: 'Capacidad técnica' },
    '제품 시험': { en: 'Product testing', vi: 'Thử nghiệm sản phẩm', es: 'Pruebas de producto' },
    '벤처기업 확인': { en: 'Venture company certification', vi: 'Chứng nhận doanh nghiệp đầu tư mạo hiểm', es: 'Certificación de empresa de riesgo' },
    '에너지특화기업 지정': { en: 'Energy-specialized company designation', vi: 'Chỉ định doanh nghiệp chuyên ngành năng lượng', es: 'Designación como empresa especializada en energía' },
    '특허 및 디자인 등록 현황': { en: 'Patents and registered designs', vi: 'Bằng sáng chế và đăng ký thiết kế', es: 'Patentes y diseños registrados' },
    '주요 개폐기·변압기 공인시험 현황': { en: 'Accredited testing for major switches and transformers', vi: 'Thử nghiệm được công nhận cho thiết bị đóng cắt và máy biến áp chính', es: 'Ensayos acreditados de interruptores y transformadores principales' },
    '두 생산거점을 바탕으로': { en: 'Two production bases', vi: 'Hai cơ sở sản xuất', es: 'Dos centros de producción' },
    '고객의 요구에 대응합니다': { en: 'support customer needs', vi: 'đáp ứng nhu cầu khách hàng', es: 'responden a las necesidades del cliente' },
    '나주와 화성의 생산 기반을 통해 제품 개발과 생산, 품질관리를 수행합니다.': { en: 'Our Naju and Hwaseong bases support product development, manufacturing and quality control.', vi: 'Các cơ sở Naju và Hwaseong hỗ trợ phát triển, sản xuất và quản lý chất lượng.', es: 'Nuestras bases de Naju y Hwaseong respaldan el desarrollo, la fabricación y el control de calidad.' },
    '나주 본사·공장': { en: 'Naju head office · plant', vi: 'Trụ sở · Nhà máy Naju', es: 'Sede · Planta de Naju' },
    '위치 및 연락처 보기': { en: 'View location and contact', vi: 'Xem vị trí và liên hệ', es: 'Ver ubicación y contacto' },
    '각 부서가 제품 개발부터 생산, 품질관리와 고객 대응까지 협력합니다.': { en: 'Our teams collaborate across product development, manufacturing, quality and customer response.', vi: 'Các bộ phận phối hợp từ phát triển, sản xuất, quản lý chất lượng đến hỗ trợ khách hàng.', es: 'Los equipos colaboran en desarrollo, producción, calidad y atención al cliente.' },
    '기술연구소': { en: 'R&D Institute', vi: 'Viện nghiên cứu', es: 'Instituto de I+D' },
    '시앤에스㈜ 설립, 자가공장 매입, 개폐기 및 차단기 몰드콘 어셈블리 특허 출원, OIL ASS 공급 개시': { en: 'Founded C&S, acquired a factory, filed a patent for molded switchgear and circuit-breaker assemblies, and began supplying Oil ASS products.', vi: 'Thành lập C&S, mua nhà máy, nộp đơn sáng chế cụm thiết bị đóng cắt đúc và bắt đầu cung cấp Oil ASS.', es: 'Fundación de C&S, adquisición de fábrica, solicitud de patente para conjuntos moldeados y comienzo del suministro de Oil ASS.' },
    '기업부설연구소 설립, 공장 신축 완료, 옥내용 AISS 공급 개시': { en: 'Established the corporate research institute, completed a new factory and began supplying indoor AISS products.', vi: 'Thành lập viện nghiên cứu doanh nghiệp, hoàn thành nhà máy mới và bắt đầu cung cấp AISS trong nhà.', es: 'Creación del instituto de investigación, finalización de una nueva fábrica e inicio del suministro de AISS interior.' },
    '계기용 변성기(M.O.F) 공급 개시': { en: 'Began supplying metering outfit equipment (M.O.F).', vi: 'Bắt đầu cung cấp thiết bị đo lường M.O.F.', es: 'Inicio del suministro de equipos de medida M.O.F.' },
    '나주공장 신축, 시앤파워텍㈜으로 상호 및 대표이사 변경': { en: 'Built the Naju plant and changed the company name and CEO to C&P Powertech.', vi: 'Xây dựng nhà máy Naju, đổi tên công ty và giám đốc điều hành thành C&P Powertech.', es: 'Construcción de la planta de Naju y cambio de nombre y dirección a C&P Powertech.' },
    '나주공장 증축': { en: 'Expanded the Naju plant.', vi: 'Mở rộng nhà máy Naju.', es: 'Ampliación de la planta de Naju.' },
    '벤처기업확인(혁신성장형)': { en: 'Certified as an innovation-growth venture company.', vi: 'Được chứng nhận doanh nghiệp đổi mới tăng trưởng.', es: 'Certificación como empresa de crecimiento innovador.' },
    '조직 구성': { en: 'Organization', vi: 'Cơ cấu tổ chức', es: 'Organización' },
    '대표이사를 중심으로 연구, 품질, 생산, 영업과 구매관리 조직을 운영합니다.': { en: 'Our organization covers research, quality, production, sales and purchasing under the CEO.', vi: 'Tổ chức gồm nghiên cứu, chất lượng, sản xuất, kinh doanh và mua hàng dưới sự điều hành của giám đốc.', es: 'La organización comprende investigación, calidad, producción, ventas y compras bajo la dirección general.' },
    '연구소': { en: 'R&D Institute', vi: 'Viện R&D', es: 'Instituto de I+D' },
    '품질부': { en: 'Quality', vi: 'Chất lượng', es: 'Calidad' },
    '생산부': { en: 'Production', vi: 'Sản xuất', es: 'Producción' },
    '영업부': { en: 'Sales', vi: 'Kinh doanh', es: 'Ventas' },
    '구매관리부': { en: 'Purchasing', vi: 'Mua hàng', es: 'Compras' },
    '배전 전력기기': { en: 'Power distribution equipment', vi: 'Thiết bị phân phối điện', es: 'Equipos de distribución eléctrica' },
    '제품을 선택하면 용도와 문의 경로를 확인할 수 있습니다.': { en: 'Select a product to review its application and inquiry options.', vi: 'Chọn sản phẩm để xem ứng dụng và cách liên hệ.', es: 'Seleccione un producto para ver su aplicación y las opciones de consulta.' },
    '전체': { en: 'All', vi: 'Tất cả', es: 'Todos' },
    '상세 보기': { en: 'View details', vi: 'Xem chi tiết', es: 'Ver detalles' },
    '제품 문의': { en: 'Product inquiry', vi: 'Liên hệ sản phẩm', es: 'Consulta de producto' },
    '제품 상세': { en: 'Product details', vi: 'Chi tiết sản phẩm', es: 'Detalles del producto' },
    '목록으로': { en: 'Back to list', vi: 'Quay lại danh sách', es: 'Volver a la lista' },
    '첨부파일': { en: 'Downloads', vi: 'Tệp đính kèm', es: 'Archivos adjuntos' },
    '자료 관리': { en: 'Manage files', vi: 'Quản lý tệp', es: 'Gestionar archivos' },
    '관리 닫기': { en: 'Close manager', vi: 'Đóng quản lý', es: 'Cerrar gestión' },
    '제품 카탈로그와 기술자료를 다운로드할 수 있습니다.': { en: 'Download product catalogs and technical documents.', vi: 'Tải danh mục sản phẩm và tài liệu kỹ thuật.', es: 'Descargue catálogos de productos y documentación técnica.' },
    '등록된 첨부파일이 없습니다.': { en: 'No files have been added.', vi: 'Chưa có tệp nào được thêm.', es: 'No se han añadido archivos.' },
    '첨부파일 선택': { en: 'Choose file', vi: 'Chọn tệp', es: 'Elegir archivo' },
    '선택된 파일 없음': { en: 'No file selected', vi: 'Chưa chọn tệp', es: 'Ningún archivo seleccionado' },
    '파일 추가': { en: 'Add file', vi: 'Thêm tệp', es: 'Añadir archivo' },
    '다운로드': { en: 'Download', vi: 'Tải xuống', es: 'Descargar' },
    '삭제': { en: 'Delete', vi: 'Xóa', es: 'Eliminar' },
    '로그아웃': { en: 'Log out', vi: 'Đăng xuất', es: 'Cerrar sesión' },
    '관리자 로그인': { en: 'Administrator login', vi: 'Đăng nhập quản trị', es: 'Inicio de sesión de administrador' },
    '첨부파일을 추가하거나 삭제하려면 로그인해 주세요.': { en: 'Sign in to add or delete attachments.', vi: 'Đăng nhập để thêm hoặc xóa tệp đính kèm.', es: 'Inicie sesión para añadir o eliminar archivos.' },
    '아이디': { en: 'Username', vi: 'Tên đăng nhập', es: 'Usuario' },
    '비밀번호': { en: 'Password', vi: 'Mật khẩu', es: 'Contraseña' },
    '로그인': { en: 'Log in', vi: 'Đăng nhập', es: 'Iniciar sesión' },
    '아이디 또는 비밀번호가 올바르지 않습니다.': { en: 'The username or password is incorrect.', vi: 'Tên đăng nhập hoặc mật khẩu không đúng.', es: 'El usuario o la contraseña no son correctos.' },
    '파일을 선택해 주세요.': { en: 'Choose a file.', vi: 'Vui lòng chọn tệp.', es: 'Seleccione un archivo.' },
    '파일은 20MB 이하만 추가할 수 있습니다.': { en: 'Files must be 20 MB or smaller.', vi: 'Tệp phải có dung lượng tối đa 20 MB.', es: 'Los archivos deben tener 20 MB o menos.' },
    '파일을 추가했습니다.': { en: 'The file was added.', vi: 'Đã thêm tệp.', es: 'Se añadió el archivo.' },
    '파일을 삭제했습니다.': { en: 'The file was deleted.', vi: 'Đã xóa tệp.', es: 'Se eliminó el archivo.' },
    '파일을 처리하지 못했습니다. 다시 시도해 주세요.': { en: 'The file could not be processed. Please try again.', vi: 'Không thể xử lý tệp. Vui lòng thử lại.', es: 'No se pudo procesar el archivo. Inténtelo de nuevo.' },
    '이 파일을 삭제할까요?': { en: 'Delete this file?', vi: 'Xóa tệp này?', es: '¿Eliminar este archivo?' },
    '필요한 지원을': { en: 'Connect with', vi: 'Kết nối với', es: 'Conecte con' },
    '빠르게 연결합니다': { en: 'the right support', vi: 'đúng chuyên viên', es: 'el soporte adecuado' },
    '제품명, 설치 환경과 문의 내용을 알려주시면 담당 부서에서 확인합니다.': { en: 'Share the product name, installation environment and your question so the appropriate team can review it.', vi: 'Hãy cung cấp tên sản phẩm, môi trường lắp đặt và nội dung cần hỗ trợ để bộ phận phù hợp kiểm tra.', es: 'Indique el producto, el entorno de instalación y su consulta para que el equipo correspondiente la revise.' },
    '설치 환경과 용도에 맞는 제품군을 안내합니다.': { en: 'We recommend product groups for your installation and application.', vi: 'Chúng tôi đề xuất nhóm sản phẩm phù hợp với môi trường lắp đặt và mục đích sử dụng.', es: 'Recomendamos la familia de productos adecuada para su instalación y aplicación.' },
    '상담 요청': { en: 'Request consultation', vi: 'Yêu cầu tư vấn', es: 'Solicitar asesoría' },
    '제품 규격과 기술자료 관련 문의를 접수합니다.': { en: 'Request product specifications and technical documentation.', vi: 'Tiếp nhận yêu cầu về thông số và tài liệu kỹ thuật.', es: 'Solicite especificaciones y documentación técnica.' },
    '자료 문의': { en: 'Request documents', vi: 'Yêu cầu tài liệu', es: 'Solicitar documentos' },
    '제품명과 설치 위치, 현장 상황을 바탕으로 담당자를 연결합니다.': { en: 'We assign a specialist based on the product, installation location and site conditions.', vi: 'Chúng tôi bố trí chuyên viên dựa trên sản phẩm, vị trí lắp đặt và điều kiện hiện trường.', es: 'Asignamos un especialista según el producto, la ubicación y las condiciones de la instalación.' },
    '제품 라벨과 증상 정보를 준비한 뒤 전화로 접수해 주세요.': { en: 'Prepare the product label and symptom details, then contact us by phone.', vi: 'Chuẩn bị nhãn sản phẩm và thông tin lỗi, sau đó liên hệ qua điện thoại.', es: 'Prepare la etiqueta del producto y los síntomas, y contáctenos por teléfono.' },
    '접수 안내': { en: 'Request guide', vi: 'Hướng dẫn yêu cầu', es: 'Guía de solicitud' },
    '기술문의 절차': { en: 'Technical inquiry process', vi: 'Quy trình hỗ trợ kỹ thuật', es: 'Proceso de consulta técnica' },
    '문의 접수': { en: 'Submit inquiry', vi: 'Gửi yêu cầu', es: 'Enviar consulta' },
    '제품명과 현장 정보를 전달합니다.': { en: 'Provide the product name and site information.', vi: 'Cung cấp tên sản phẩm và thông tin hiện trường.', es: 'Indique el producto y la información de la instalación.' },
    '담당자 확인': { en: 'Specialist review', vi: 'Chuyên viên kiểm tra', es: 'Revisión del especialista' },
    '제품과 문의 유형에 맞는 담당자가 내용을 검토합니다.': { en: 'The appropriate specialist reviews your request.', vi: 'Chuyên viên phù hợp sẽ xem xét yêu cầu.', es: 'El especialista adecuado revisa la solicitud.' },
    '기술 안내': { en: 'Technical guidance', vi: 'Hướng dẫn kỹ thuật', es: 'Orientación técnica' },
    '필요한 자료 또는 후속 조치 방법을 안내합니다.': { en: 'We provide the required documents or next-step guidance.', vi: 'Chúng tôi cung cấp tài liệu hoặc hướng dẫn bước tiếp theo.', es: 'Facilitamos la documentación o los pasos siguientes.' },
    '제품과 기술지원이': { en: 'Need product or', vi: 'Bạn cần sản phẩm', es: '¿Necesita producto' },
    '필요하신가요?': { en: 'technical support?', vi: 'hoặc hỗ trợ kỹ thuật?', es: 'o soporte técnico?' },
    '제품과 기술 문의를': { en: 'Connect quickly for', vi: 'Kết nối nhanh cho', es: 'Conexión rápida para' },
    '빠르게 연결합니다': { en: 'product and technical inquiries', vi: 'tư vấn sản phẩm và kỹ thuật', es: 'consultas de producto y técnicas' },
    '제품명과 설치 환경을 준비해 주시면 담당자가 더욱 빠르게 확인할 수 있습니다.': { en: 'Have the product name and installation details ready so our team can assist you faster.', vi: 'Chuẩn bị tên sản phẩm và thông tin lắp đặt để được hỗ trợ nhanh hơn.', es: 'Tenga preparados el producto y los datos de instalación para una atención más rápida.' },
    'A/S 문의': { en: 'After-sales service', vi: 'Hỗ trợ sau bán hàng', es: 'Servicio posventa' },
    '제품 라벨과 증상, 설치 위치를 준비해 주세요.': { en: 'Please have the product label, symptoms and installation location ready.', vi: 'Vui lòng chuẩn bị nhãn sản phẩm, lỗi và vị trí lắp đặt.', es: 'Prepare la etiqueta, los síntomas y la ubicación de instalación.' },
    '영업 관련 문의': { en: 'Sales inquiries', vi: 'Liên hệ kinh doanh', es: 'Consultas comerciales' },
    '제품 선정, 견적 및 납품 관련 문의를 안내합니다.': { en: 'Contact us about product selection, quotations and delivery.', vi: 'Liên hệ để được tư vấn chọn sản phẩm, báo giá và giao hàng.', es: 'Consúltenos sobre selección de productos, presupuestos y entregas.' },
    '본사 · 나주공장': { en: 'Head office · Naju plant', vi: 'Trụ sở · Nhà máy Naju', es: 'Sede · Planta de Naju' },
    '지사 · 화성공장': { en: 'Branch · Hwaseong plant', vi: 'Chi nhánh · Nhà máy Hwaseong', es: 'Sucursal · Planta de Hwaseong' },
    '전라남도 나주시 왕곡면 혁신산단 5길 107': { en: '107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Korea', vi: '107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Hàn Quốc', es: '107 Hyeoksinsandan 5-gil, Wanggok-myeon, Naju-si, Jeollanam-do, Corea' },
    '경기도 화성시 장안면 수촌길 119-8번지': { en: '119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Korea', vi: '119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Hàn Quốc', es: '119-8 Suchon-gil, Jangan-myeon, Hwaseong-si, Gyeonggi-do, Corea' },
    '전화번호': { en: 'Telephone', vi: 'Điện thoại', es: 'Teléfono' },
    '팩스번호': { en: 'Fax', vi: 'Fax', es: 'Fax' },
    '큰 지도에서 보기': { en: 'Open larger map', vi: 'Mở bản đồ lớn', es: 'Abrir mapa grande' },
    '시앤파워텍 본사 나주공장 지도': { en: 'Map of C&P Powertech Naju head office and plant', vi: 'Bản đồ trụ sở và nhà máy Naju của C&P Powertech', es: 'Mapa de la sede y planta de Naju de C&P Powertech' },
    '시앤파워텍 지사 화성공장 지도': { en: 'Map of C&P Powertech Hwaseong branch and plant', vi: 'Bản đồ chi nhánh và nhà máy Hwaseong của C&P Powertech', es: 'Mapa de la sucursal y planta de Hwaseong de C&P Powertech' },
    '제품명과 설치 환경을 준비해 주시면 더욱 빠르게 확인할 수 있습니다.': { en: 'Have the product name and installation details ready for faster assistance.', vi: 'Chuẩn bị tên sản phẩm và thông tin lắp đặt để được hỗ trợ nhanh hơn.', es: 'Tenga preparados el producto y los datos de instalación para agilizar la atención.' },
    '전화 문의 031-351-6338': { en: 'Call 031-351-6338', vi: 'Gọi 031-351-6338', es: 'Llamar al 031-351-6338' },
    '대표이사': { en: 'CEO', vi: 'Giám đốc điều hành', es: 'Director general' },
    '주소': { en: 'Address', vi: 'Địa chỉ', es: 'Dirección' },
    '전화': { en: 'Telephone', vi: 'Điện thoại', es: 'Teléfono' },
    '팩스': { en: 'Fax', vi: 'Fax', es: 'Fax' },
    '나주공장': { en: 'Naju plant', vi: 'Nhà máy Naju', es: 'Planta de Naju' },
    '언어 선택': { en: 'Select language', vi: 'Chọn ngôn ngữ', es: 'Seleccionar idioma' },
    '닫기': { en: 'Close', vi: 'Đóng', es: 'Cerrar' },
  };

  function detectLocale() {
    const saved = localStorage.getItem('cnp-locale');
    if (supported.includes(saved)) return saved;
    const browser = (navigator.language || 'ko').slice(0, 2).toLowerCase();
    return supported.includes(browser) ? browser : 'ko';
  }

  let locale = detectLocale();

  function translate(source, lang = locale) {
    if (lang === 'ko') return source;
    return phrases[source]?.[lang] || source;
  }

  function applyText(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'OPTION'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!textNodes.has(node)) textNodes.set(node, node.nodeValue);
      const original = textNodes.get(node);
      const source = original.trim();
      const value = translate(source);
      node.nodeValue = original.replace(source, value);
    });

    root.querySelectorAll('[aria-label], [alt]').forEach((element) => {
      if (!attributes.has(element)) attributes.set(element, { aria: element.getAttribute('aria-label'), alt: element.getAttribute('alt') });
      const original = attributes.get(element);
      if (original.aria) element.setAttribute('aria-label', translate(original.aria));
      if (original.alt) element.setAttribute('alt', translate(original.alt));
    });

    const originalTitle = document.documentElement.dataset.originalTitle || document.title;
    document.documentElement.dataset.originalTitle = originalTitle;
    document.title = locale === 'ko' ? originalTitle : pageTitles[originalTitle]?.[locale] || originalTitle;
    document.documentElement.lang = locale;
    document.querySelectorAll('.lang-select').forEach((select) => { select.value = locale; });
  }

  function setLocale(next) {
    if (!supported.includes(next)) return;
    locale = next;
    localStorage.setItem('cnp-locale', locale);
    applyText();
    document.dispatchEvent(new CustomEvent('cnp:locale', { detail: { locale } }));
  }

  function init() {
    document.querySelectorAll('.lang-select').forEach((select) => select.addEventListener('change', (event) => setLocale(event.target.value)));
    applyText();
  }

  window.CNP_I18N = {
    get locale() { return locale; },
    init,
    setLocale,
    t: translate,
  };
})();
