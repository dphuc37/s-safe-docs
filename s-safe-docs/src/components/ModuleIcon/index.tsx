import React, { type ReactNode } from 'react';

// Cùng bộ icon/màu đang dùng cho sidebar (xem src/css/custom.css),
// tái sử dụng ở đây cho card trang chủ và trang chọn tải PDF.
const ICONS: Record<string, { color: string; paths: ReactNode }> = {
  'icon-he-thong': {
    color: '#2ecc71',
    paths: (
      <>
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </>
    ),
  },
  'icon-cai-dat': {
    color: '#9b59b6',
    paths: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  'icon-sach': {
    color: '#f1c40f',
    paths: (
      <>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  'icon-chip': {
    color: '#3498db',
    paths: (
      <>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </>
    ),
  },
  'icon-cua': {
    color: '#e67e22',
    paths: (
      <>
        <path d="M3 3h18v18H3z" />
        <path d="M3 3v18h14V3H3z" />
        <circle cx="14" cy="12" r="1" />
      </>
    ),
  },
  'icon-camera': {
    color: '#e74c3c',
    paths: (
      <>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
  },
  'icon-thang-may': {
    color: '#1abc9c',
    paths: (
      <>
        <path d="M7 20V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <polyline points="8 10 12 6 16 10" />
        <polyline points="8 14 12 18 16 14" />
      </>
    ),
  },
  'icon-tai-khoan': {
    color: '#00cec9',
    paths: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  'icon-the-nhan-su': {
    color: '#e84393',
    paths: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v4" />
        <circle cx="12" cy="8" r="3" />
      </>
    ),
  },
  'icon-nhom-the': {
    color: '#30336b',
    paths: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  'icon-khach': {
    color: '#e17055',
    paths: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11V7a2 2 0 0 0-2-2h-4" />
        <path d="M16 19h4a2 2 0 0 0 2-2v-4" />
      </>
    ),
  },
  'icon-quy-tac': {
    color: '#f1c40f',
    paths: (
      <path d="M21 2l-2 2m-1.5 1.5L16 7m-1.5 1.5L13 10M12 2A7 7 0 1 0 12 16a7 7 0 0 0 0-14zm-4 9.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
    ),
  },
  'icon-lich': {
    color: '#3f51b5',
    paths: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  'icon-vung': {
    color: '#2ecc71',
    paths: (
      <>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </>
    ),
  },
  'icon-cham-cong': {
    color: '#ff9f43',
    paths: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </>
    ),
  },
  'icon-bao-cao': {
    color: '#00a8ff',
    paths: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      </>
    ),
  },
  'icon-giam-sat': {
    color: '#ff4757',
    paths: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  'icon-bao-dong': {
    color: '#e11d48',
    paths: (
      <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),
  },
  'icon-tu-dong-hoa': {
    color: '#8e44ad',
    paths: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  'icon-canh-bao': {
    color: '#f39c12',
    paths: (
      <>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
  },
  'icon-hang-rao': {
    color: '#00d2d3',
    paths: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 14h18" />
      </>
    ),
  },
  'icon-audit-trail': {
    color: '#6366f1',
    paths: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  },
};

const FALLBACK = {
  color: '#64748b',
  paths: <circle cx="12" cy="12" r="9" />,
};

export default function ModuleIcon({
  className,
  src,
  size = 28,
}: {
  className?: string;
  /** Ảnh icon gốc của phần mềm (ưu tiên dùng khi có, thay cho SVG vẽ tay). */
  src?: string;
  size?: number;
}): ReactNode {
  if (src) {
    return <img src={src} width={size} height={size} alt="" aria-hidden="true" />;
  }

  const icon = (className && ICONS[className]) || FALLBACK;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={icon.color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon.paths}
    </svg>
  );
}
