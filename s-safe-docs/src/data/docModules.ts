// Docusaurus không có hook lấy đầy đủ cây sidebar ở trang thường, nên khai báo tay, khớp sidebars.ts.
export type DocModule = {
  id: string;
  href: string;
  vi: string;
  en: string;
};

export type DocModuleGroup = {
  vi: string;
  en: string;
  kind: 'meta' | 'product';
  items: DocModule[];
};

export const DOC_GROUPS: DocModuleGroup[] = [
  {
    vi: 'Cấu hình hệ thống',
    en: 'System Setup',
    kind: 'meta',
    items: [
      {
        id: 'system-requirements',
        href: '/yeu-cau-he-thong',
        vi: 'Yêu cầu hệ thống',
        en: 'System Requirements',
      },
      {
        id: 'installation',
        href: '/installation',
        vi: 'Hướng dẫn cài đặt',
        en: 'Installation Guide',
      },
    ],
  },
  {
    vi: 'Hướng dẫn sử dụng',
    en: 'User Guide',
    kind: 'meta',
    items: [
      {
        id: 'trang-chu',
        href: '/huong-dan-su-dung/trang-chu',
        vi: 'Giới thiệu Trang chủ',
        en: 'Homepage Overview',
      },
    ],
  },
  {
    vi: 'Hệ thống',
    en: 'System',
    kind: 'product',
    items: [
      {
        id: 'bo-dieu-khien',
        href: '/huong-dan-su-dung/bo-dieu-khien',
        vi: 'Quản lý Bộ điều khiển',
        en: 'Controller Management',
      },
      {
        id: 'quan-ly-cua',
        href: '/huong-dan-su-dung/quan-ly-cua',
        vi: 'Quản lý Cửa (Door)',
        en: 'Door Management',
      },
      {
        id: 'quan-ly-camera',
        href: '/huong-dan-su-dung/quan-ly-camera',
        vi: 'Quản lý Camera',
        en: 'Camera Management',
      },
      {
        id: 'quan-ly-thang-may',
        href: '/huong-dan-su-dung/quan-ly-thang-may',
        vi: 'Quản lý Thang máy',
        en: 'Elevator Management',
      },
      {
        id: 'quan-ly-tai-khoan',
        href: '/huong-dan-su-dung/quan-ly-tai-khoan',
        vi: 'Quản lý Tài khoản',
        en: 'Account Management',
      },
    ],
  },
  {
    vi: 'Quản lý',
    en: 'Management',
    kind: 'product',
    items: [
      {
        id: 'nguoi-dung-the',
        href: '/huong-dan-su-dung/nguoi-dung-the',
        vi: 'Người dùng thẻ',
        en: 'Cardholders',
      },
      {
        id: 'nhom-dung-the',
        href: '/huong-dan-su-dung/nhom-dung-the',
        vi: 'Nhóm người dùng thẻ',
        en: 'Cardholder Groups',
      },
      {
        id: 'quan-ly-khach-vang-lai',
        href: '/huong-dan-su-dung/quan-ly-khach-vang-lai',
        vi: 'Khách vãng lai',
        en: 'Visitors',
      },
      {
        id: 'quy-tac-truy-cap',
        href: '/huong-dan-su-dung/quy-tac-truy-cap',
        vi: 'Quy tắc truy cập',
        en: 'Access Rules',
      },
      {
        id: 'lich-truy-cap',
        href: '/huong-dan-su-dung/lich-truy-cap',
        vi: 'Lịch truy cập',
        en: 'Access Schedules',
      },
      {
        id: 'quan-ly-vung',
        href: '/huong-dan-su-dung/quan-ly-vung',
        vi: 'Vùng (E-Map)',
        en: 'Area',
      },
      {
        id: 'cham-cong',
        href: '/huong-dan-su-dung/cham-cong',
        vi: 'Chấm công',
        en: 'Attendance',
      },
    ],
  },
  {
    vi: 'Giám sát',
    en: 'Monitoring',
    kind: 'product',
    items: [
      {
        id: 'bao-cao',
        href: '/huong-dan-su-dung/bao-cao',
        vi: 'Báo cáo',
        en: 'Reports',
      },
      {
        id: 'audit-trail',
        href: '/huong-dan-su-dung/audit-trail',
        vi: 'Audit trail',
        en: 'Audit trail',
      },
      {
        id: 'giam-sat-su-kien',
        href: '/huong-dan-su-dung/giam-sat-su-kien',
        vi: 'Giám sát sự kiện',
        en: 'Event Monitoring',
      },
      {
        id: 'bao-dong',
        href: '/huong-dan-su-dung/bao-dong',
        vi: 'Báo động',
        en: 'Alarms',
      },
      {
        id: 'hang-rao-dien-tu',
        href: '/huong-dan-su-dung/hang-rao-dien-tu',
        vi: 'Hàng rào điện tử',
        en: 'Electric Fence (Geofence)',
      },
      {
        id: 'tu-dong-hoa',
        href: '/huong-dan-su-dung/tu-dong-hoa',
        vi: 'Tự động hóa',
        en: 'Automation',
      },
      {
        id: 'canh-bao',
        href: '/huong-dan-su-dung/canh-bao',
        vi: 'Cảnh báo',
        en: 'Warning',
      },
    ],
  },
];
