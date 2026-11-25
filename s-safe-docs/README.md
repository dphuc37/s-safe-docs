# S-Safe Documentation

Trang tài liệu hướng dẫn S-Safe, xây dựng bằng [Fumadocs](https://fumadocs.dev) trên Next.js. Hỗ trợ tiếng Việt (mặc định, không có tiền tố) và tiếng Anh (`/en`).

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Cấu trúc

- `content/docs/<nhóm>/<trang>.mdx`: nội dung tiếng Việt; `<trang>.en.mdx`: bản tiếng Anh.
- `content/docs/<nhóm>/meta.json` và `meta.en.json`: tên nhóm và thứ tự trang trong thanh bên.
- URL được giữ như cũ: `/yeu-cau-he-thong`, `/installation`, `/huong-dan-su-dung/<trang>` (xem `slugs` trong `src/lib/source.ts`).
- `public/img/`: ảnh chụp phần mềm, logo (`brand/`) và icon thanh bên (`icons/`).
- `src/app/[lang]/(site)/export`: trang xuất tài liệu ra PDF (chọn trang, gộp, in ra PDF bằng trình duyệt).

## Triển khai (Vercel)

Framework Preset của project Vercel phải là **Next.js**. Thư mục gốc (Root Directory) là `s-safe-docs`.
