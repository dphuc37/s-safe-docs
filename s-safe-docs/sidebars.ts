import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'vi';

function group(vi: string, en: string, items: string[]) {
  return {
    type: 'category' as const,
    label: currentLocale === 'en' ? en : vi,
    collapsible: true,
    collapsed: false,
    items,
  };
}

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    group('Cấu hình hệ thống', 'System Setup', ['system-requirements', 'installation']),

    group('Hướng dẫn sử dụng', 'User Guide', ['huong-dan-su-dung/trang-chu']),

    group('Hệ thống', 'System', [
      'huong-dan-su-dung/bo-dieu-khien',
      'huong-dan-su-dung/quan-ly-cua',
      'huong-dan-su-dung/quan-ly-camera',
      'huong-dan-su-dung/quan-ly-thang-may',
      'huong-dan-su-dung/quan-ly-tai-khoan',
    ]),

    group('Quản lý', 'Management', [
      'huong-dan-su-dung/nguoi-dung-the',
      'huong-dan-su-dung/nhom-dung-the',
      'huong-dan-su-dung/quan-ly-khach-vang-lai',
      'huong-dan-su-dung/quy-tac-truy-cap',
      'huong-dan-su-dung/lich-truy-cap',
      'huong-dan-su-dung/quan-ly-vung',
      'huong-dan-su-dung/cham-cong',
    ]),

    group('Giám sát', 'Monitoring', [
      'huong-dan-su-dung/bao-cao',
      'huong-dan-su-dung/audit-trail',
      'huong-dan-su-dung/giam-sat-su-kien',
      'huong-dan-su-dung/bao-dong',
      'huong-dan-su-dung/hang-rao-dien-tu',
      'huong-dan-su-dung/tu-dong-hoa',
      'huong-dan-su-dung/canh-bao',
    ]),
  ],
};

export default sidebars;
