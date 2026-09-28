import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// MẸO TỐI ƯU: Tự động bắt mạch xem Docusaurus đang build cho ngôn ngữ nào (en hay vi)
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'vi';

function divider(vi: string, en: string) {
  return {
    type: 'html' as const,
    value: `<span class="sidebar-divider">${currentLocale === 'en' ? en : vi}</span>`,
    defaultStyle: true,
  };
}

const sidebars: SidebarsConfig = {
  tutorialSidebar: [

    // ==========================================
    // NHÓM 1: CẤU HÌNH HỆ THỐNG / SYSTEM SETUP
    // ==========================================
    divider('Cấu hình hệ thống', 'System Setup'),
    'system-requirements',
    'installation',

    // ==========================================
    // NHÓM 2: HƯỚNG DẪN SỬ DỤNG / USER GUIDE
    // Chia theo đúng 3 nhóm trên Dashboard thật của phần mềm:
    // Hệ thống / Quản lý / Giám sát
    // ==========================================
    divider('Hướng dẫn sử dụng', 'User Guide'),
    'huong-dan-su-dung/trang-chu',

    divider('Hệ thống', 'System'),
    'huong-dan-su-dung/bo-dieu-khien',
    'huong-dan-su-dung/quan-ly-cua',
    'huong-dan-su-dung/quan-ly-camera',
    'huong-dan-su-dung/quan-ly-thang-may',
    'huong-dan-su-dung/quan-ly-tai-khoan',

    divider('Quản lý', 'Management'),
    'huong-dan-su-dung/nguoi-dung-the',
    'huong-dan-su-dung/nhom-dung-the',
    'huong-dan-su-dung/quan-ly-khach-vang-lai',
    'huong-dan-su-dung/quy-tac-truy-cap',
    'huong-dan-su-dung/lich-truy-cap',
    'huong-dan-su-dung/quan-ly-vung',
    'huong-dan-su-dung/cham-cong',

    divider('Giám sát', 'Monitoring'),
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
