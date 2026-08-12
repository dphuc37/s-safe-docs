import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// MẸO TỐI ƯU: Tự động bắt mạch xem Docusaurus đang build cho ngôn ngữ nào (en hay vi)
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'vi';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [

    // ==========================================
    // NHÓM 1: CẤU HÌNH HỆ THỐNG / SYSTEM SETUP
    // ==========================================
    {
      type: 'html',
      // Nếu là tiếng Anh (en) thì hiện "System Setup", ngược lại hiện "Cấu hình hệ thống"
      value: currentLocale === 'en'
        ? '<span class="sidebar-divider">System Setup</span>'
        : '<span class="sidebar-divider">Cấu hình hệ thống</span>',
      defaultStyle: true,
    },
    'system-requirements',
    'installation',

    // ==========================================
    // NHÓM 2: HƯỚNG DẪN SỬ DỤNG / USER GUIDE
    // ==========================================
    {
      type: 'html',
      // Nếu là tiếng Anh (en) thì hiện "User Guide", ngược lại hiện "Hướng dẫn sử dụng"
      value: currentLocale === 'en'
        ? '<span class="sidebar-divider">User Guide</span>'
        : '<span class="sidebar-divider">Hướng dẫn sử dụng</span>',
      defaultStyle: true,
    },
    'huong-dan-su-dung/trang-chu',
    'huong-dan-su-dung/bo-dieu-khien',
    'huong-dan-su-dung/quan-ly-cua',
    'huong-dan-su-dung/quan-ly-camera',
    'huong-dan-su-dung/quan-ly-thang-may',
    'huong-dan-su-dung/quan-ly-tai-khoan',
    'huong-dan-su-dung/nguoi-dung-the',
    'huong-dan-su-dung/nhom-dung-the',
    'huong-dan-su-dung/quan-ly-khach-vang-lai',
    'huong-dan-su-dung/quy-tac-truy-cap',
    'huong-dan-su-dung/lich-truy-cap',
    'huong-dan-su-dung/quan-ly-vung',
    'huong-dan-su-dung/cham-cong',
    'huong-dan-su-dung/bao-cao',
    'huong-dan-su-dung/audit-trail',
    'huong-dan-su-dung/giam-sat-su-kien',
    'huong-dan-su-dung/bao-dong',
    'huong-dan-su-dung/hang-rao-dien-tu',
    'huong-dan-su-dung/tu-dong-hoa',
    'huong-dan-su-dung/canh-bao',
  ],
};

export default sidebars;