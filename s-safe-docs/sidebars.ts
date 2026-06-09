import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [

    // ==========================================
    // NHÓM 1: GETTING STARTED
    // ==========================================
    {
      type: 'html',
      value: '<span class="sidebar-divider">Cấu hình hệ thống</span>',
      defaultStyle: true,
    },
    'system-requirements',
    'installation',

    // ==========================================
    // NHÓM 2: USER GUIDE
    // ==========================================
    {
      type: 'html',
      value: '<span class="sidebar-divider">Hướng dẫn sử dụng</span>',
      defaultStyle: true,
    },
    'huong-dan-su-dung/trang-chu',
    'huong-dan-su-dung/bo-dieu-khien',
    'huong-dan-su-dung/quan-ly-cua',
    'huong-dan-su-dung/quan-ly-camera',
    'huong-dan-su-dung/quan-ly-thang-may',
    'huong-dan-su-dung/nguoi-dung-the',
    'huong-dan-su-dung/nhom-dung-the',
    'huong-dan-su-dung/quan-ly-khach-vang-lai',
    'huong-dan-su-dung/quy-tac-truy-cap',
    'huong-dan-su-dung/lich-truy-cap',
    'huong-dan-su-dung/quan-ly-vung',
    'huong-dan-su-dung/cham-cong',
    'huong-dan-su-dung/bao-cao',
    'huong-dan-su-dung/giam-sat-su-kien',
    'huong-dan-su-dung/bao-dong',
    'huong-dan-su-dung/tu-dong-hoa',
    'huong-dan-su-dung/canh-bao',
    'huong-dan-su-dung/hang-rao-dien-tu',
    'huong-dan-su-dung/quan-ly-tai-khoan',
  ],
};

export default sidebars;