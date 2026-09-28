// Danh sách module tài liệu, đồng bộ thủ công với cấu trúc trong sidebars.ts.
// Dùng cho trang chủ (lưới card) và trang /export (chọn lọc tải PDF).
//
// Docusaurus không expose đầy đủ cây sidebar (label/href) qua hook dùng được
// ở trang thường (useAllDocsData chỉ trả metadata rút gọn của từng version,
// không có danh sách item) - nên phải khai báo tay ở đây, khớp với sidebars.ts.
//
// icon/tabIcon: lấy trực tiếp từ bộ icon gốc của phần mềm S-Safe.Admin
// (Assets/ và Assets/tab_icon/) để đồng bộ hình ảnh với app thật.
// 3 mục không phải module thật của phần mềm (system-requirements,
// installation, trang-chu) vẫn dùng icon vẽ tay (className) như cũ.

const ICON_BASE = '/img/product-icons';
const TAB_ICON_BASE = '/img/product-icons/tab';

export type DocModule = {
  id: string;
  href: string;
  className: string;
  icon?: string;
  tabIcon?: string;
  vi: string;
  en: string;
};

export type DocModuleGroup = {
  vi: string;
  en: string;
  /** 'product': module thật trong dashboard phần mềm. 'meta': trang tài liệu thuần (không có trong app). */
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
        className: 'icon-he-thong',
        icon: `${ICON_BASE}/system-requirements_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/system-requirements_icon_tab.png`,
        vi: 'Yêu cầu hệ thống',
        en: 'System Requirements',
      },
      {
        id: 'installation',
        href: '/installation',
        className: 'icon-cai-dat',
        icon: `${ICON_BASE}/installation_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/installation_icon_tab.png`,
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
        className: 'icon-sach',
        icon: `${ICON_BASE}/trang-chu_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/trang-chu_icon_tab.png`,
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
        className: 'icon-chip',
        icon: `${ICON_BASE}/controllers_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/controller_icon_tab.png`,
        vi: 'Quản lý Bộ điều khiển',
        en: 'Controller Management',
      },
      {
        id: 'quan-ly-cua',
        href: '/huong-dan-su-dung/quan-ly-cua',
        className: 'icon-cua',
        icon: `${ICON_BASE}/doors_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/door_icon_tab.png`,
        vi: 'Quản lý Cửa (Door)',
        en: 'Door Management',
      },
      {
        id: 'quan-ly-camera',
        href: '/huong-dan-su-dung/quan-ly-camera',
        className: 'icon-camera',
        icon: `${ICON_BASE}/cameras_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/camera_icon_tab.png`,
        vi: 'Quản lý Camera',
        en: 'Camera Management',
      },
      {
        id: 'quan-ly-thang-may',
        href: '/huong-dan-su-dung/quan-ly-thang-may',
        className: 'icon-thang-may',
        icon: `${ICON_BASE}/elevator_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/elevator_icon_tab.png`,
        vi: 'Quản lý Thang máy',
        en: 'Elevator Management',
      },
      {
        id: 'quan-ly-tai-khoan',
        href: '/huong-dan-su-dung/quan-ly-tai-khoan',
        className: 'icon-tai-khoan',
        icon: `${ICON_BASE}/admin_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/admin_icon_tab.png`,
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
        className: 'icon-the-nhan-su',
        icon: `${ICON_BASE}/cardholders_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/cardholder_icon_tab.png`,
        vi: 'Người dùng thẻ',
        en: 'Cardholders',
      },
      {
        id: 'nhom-dung-the',
        href: '/huong-dan-su-dung/nhom-dung-the',
        className: 'icon-nhom-the',
        icon: `${ICON_BASE}/cardholder_groups_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/cardholdergroup_icon_tab.png`,
        vi: 'Nhóm người dùng thẻ',
        en: 'Cardholder Groups',
      },
      {
        id: 'quan-ly-khach-vang-lai',
        href: '/huong-dan-su-dung/quan-ly-khach-vang-lai',
        className: 'icon-khach',
        icon: `${ICON_BASE}/visitors_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/visitor_icon_tab.png`,
        vi: 'Khách vãng lai',
        en: 'Visitors',
      },
      {
        id: 'quy-tac-truy-cap',
        href: '/huong-dan-su-dung/quy-tac-truy-cap',
        className: 'icon-quy-tac',
        icon: `${ICON_BASE}/access_rules_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/accessrule_icon_tab.png`,
        vi: 'Quy tắc truy cập',
        en: 'Access Rules',
      },
      {
        id: 'lich-truy-cap',
        href: '/huong-dan-su-dung/lich-truy-cap',
        className: 'icon-lich',
        icon: `${ICON_BASE}/schedules_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/schedule_icon_tab.png`,
        vi: 'Lịch truy cập',
        en: 'Access Schedules',
      },
      {
        id: 'quan-ly-vung',
        href: '/huong-dan-su-dung/quan-ly-vung',
        className: 'icon-vung',
        icon: `${ICON_BASE}/area_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/area_icon_tab.png`,
        vi: 'Vùng (E-Map)',
        en: 'Area',
      },
      {
        id: 'cham-cong',
        href: '/huong-dan-su-dung/cham-cong',
        className: 'icon-cham-cong',
        icon: `${ICON_BASE}/time_attendance_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/time_attendance_icon_tab.png`,
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
        className: 'icon-bao-cao',
        icon: `${ICON_BASE}/reports_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/reports_icon_tab.png`,
        vi: 'Báo cáo',
        en: 'Reports',
      },
      {
        id: 'audit-trail',
        href: '/huong-dan-su-dung/audit-trail',
        className: 'icon-audit-trail',
        icon: `${ICON_BASE}/audittrail_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/audittrail_icon_tab.png`,
        vi: 'Audit trail',
        en: 'Audit trail',
      },
      {
        id: 'giam-sat-su-kien',
        href: '/huong-dan-su-dung/giam-sat-su-kien',
        className: 'icon-giam-sat',
        icon: `${ICON_BASE}/event_log_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/eventlog_icon_tab.png`,
        vi: 'Giám sát sự kiện',
        en: 'Event Monitoring',
      },
      {
        id: 'bao-dong',
        href: '/huong-dan-su-dung/bao-dong',
        className: 'icon-bao-dong',
        icon: `${ICON_BASE}/alarm_setup_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/alarm_setup_icon_tab.png`,
        vi: 'Báo động',
        en: 'Alarms',
      },
      {
        id: 'hang-rao-dien-tu',
        href: '/huong-dan-su-dung/hang-rao-dien-tu',
        className: 'icon-hang-rao',
        icon: `${ICON_BASE}/geofence_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/geofence_icon_tab.png`,
        vi: 'Hàng rào điện tử',
        en: 'Electric Fence (Geofence)',
      },
      {
        id: 'tu-dong-hoa',
        href: '/huong-dan-su-dung/tu-dong-hoa',
        className: 'icon-tu-dong-hoa',
        icon: `${ICON_BASE}/automation_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/automation_icon_tab.png`,
        vi: 'Tự động hóa',
        en: 'Automation',
      },
      {
        id: 'canh-bao',
        href: '/huong-dan-su-dung/canh-bao',
        className: 'icon-canh-bao',
        icon: `${ICON_BASE}/alarm_monitoring_icon.png`,
        tabIcon: `${TAB_ICON_BASE}/alarm_monitoring_icon_tab.png`,
        vi: 'Cảnh báo',
        en: 'Warning',
      },
    ],
  },
];
