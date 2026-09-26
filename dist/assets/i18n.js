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
    'Reliable power,': { en: 'Reliable power,', vi: 'Nguồn điện tin cậy,', es: 'Energía confiable,' },
    'built precisely.': { en: 'built precisely.', vi: 'chế tạo chính xác.', es: 'fabricada con precisión.' },
    '시앤파워텍은 배전선로용 개폐기와 변압기를 제조합니다. 제품 설계부터 생산, 시험까지 한 곳에서 관리합니다.': { en: 'C&P Powertech manufactures switches and transformers for distribution lines. We manage product design, production and testing in one place.', vi: 'C&P Powertech sản xuất thiết bị đóng cắt và máy biến áp cho lưới phân phối. Thiết kế, sản xuất và thử nghiệm được quản lý tại một nơi.', es: 'C&P Powertech fabrica interruptores y transformadores para redes de distribución. Gestionamos el diseño, la producción y las pruebas en un solo lugar.' },
    '제품 살펴보기': { en: 'Explore products', vi: 'Xem sản phẩm', es: 'Ver productos' },
    'SCROLL TO EXPLORE': { en: 'SCROLL TO EXPLORE', vi: 'CUỘN ĐỂ KHÁM PHÁ', es: 'DESPLÁZATE PARA EXPLORAR' },
    '전력기기의 기본은': { en: 'Precision is the basis', vi: 'Độ chính xác là nền tảng', es: 'La precisión es la base' },
    '정확한 제조입니다': { en: 'of reliable equipment', vi: 'của thiết bị tin cậy', es: 'de equipos confiables' },
    '2013년 설립 이후 배전선로용 개폐기, 보호기기와 변압기를 생산해 왔습니다. 나주공장을 기반으로 제품 조립과 시험설비를 운영합니다.': { en: 'Since 2013, we have produced distribution switches, protection equipment and transformers. Our Naju plant houses product assembly and testing facilities.', vi: 'Từ năm 2013, chúng tôi sản xuất thiết bị đóng cắt, thiết bị bảo vệ và máy biến áp phân phối. Nhà máy Naju vận hành dây chuyền lắp ráp và thử nghiệm.', es: 'Desde 2013 fabricamos interruptores, equipos de protección y transformadores de distribución. Nuestra planta de Naju alberga el montaje y las pruebas.' },
    '회사 설립': { en: 'Company founded', vi: 'Thành lập công ty', es: 'Fundación de la empresa' },
    '임직원': { en: 'Employees', vi: 'Nhân viên', es: 'Empleados' },
    '주요 배전기기 정격전압': { en: 'Primary equipment voltage', vi: 'Điện áp định mức chính', es: 'Tensión nominal principal' },
    '시앤파워텍 상호 변경': { en: 'Renamed C&P Powertech', vi: 'Đổi tên thành C&P Powertech', es: 'Cambio de nombre a C&P Powertech' },
    '배전 환경에 맞춘 제품군': { en: 'Products for distribution networks', vi: 'Sản phẩm cho lưới phân phối', es: 'Productos para redes de distribución' },
    '가공선로, 지중선로, 변압기와 보호기기로 구분해 필요한 제품을 빠르게 찾을 수 있습니다.': { en: 'Find equipment by overhead lines, underground lines, transformers and protection devices.', vi: 'Tìm thiết bị theo nhóm đường dây trên không, đường dây ngầm, máy biến áp và thiết bị bảo vệ.', es: 'Encuentre equipos por líneas aéreas, líneas subterráneas, transformadores y dispositivos de protección.' },
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
    '배전 전력기기를': { en: 'We design and manufacture', vi: 'Chúng tôi thiết kế và sản xuất', es: 'Diseñamos y fabricamos' },
    '직접 설계하고': { en: 'power distribution', vi: 'thiết bị phân phối', es: 'equipos de distribución' },
    '생산합니다': { en: 'equipment', vi: 'điện', es: 'eléctrica' },
    '시앤파워텍은 2013년 설립된 전력기기 제조기업입니다. 배전선로에 사용하는 고장구간 자동개폐기, 친환경 부하개폐기, 변압기와 보호기기를 생산합니다.': { en: 'C&P Powertech is a power equipment manufacturer founded in 2013. We produce automatic sectionalizing switches, environmentally considerate load break switches, transformers and protection equipment.', vi: 'C&P Powertech là nhà sản xuất thiết bị điện được thành lập năm 2013. Chúng tôi sản xuất thiết bị phân đoạn tự động, dao cắt tải thân thiện với môi trường, máy biến áp và thiết bị bảo vệ.', es: 'C&P Powertech es un fabricante de equipos eléctricos fundado en 2013. Producimos seccionadores automáticos, interruptores de carga de menor impacto ambiental, transformadores y equipos de protección.' },
    '나주공장에서 조립, 배선, 세팅, 절연유 주입과 검사를 진행하며 제품 품질을 관리합니다.': { en: 'At our Naju plant, we manage assembly, wiring, setup, insulating-oil filling and inspection.', vi: 'Tại nhà máy Naju, chúng tôi quản lý lắp ráp, đi dây, cài đặt, nạp dầu cách điện và kiểm tra.', es: 'En la planta de Naju gestionamos montaje, cableado, ajuste, llenado de aceite aislante e inspección.' },
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
