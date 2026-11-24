# Nguyễn Đại Phú — Portfolio

Portfolio cá nhân xây dựng với React, Vite và Tailwind CSS v4.

## Chạy dự án

```sh
npm install
npm run dev
```

Tạo bản build production:

```sh
npm run build
```

## Deploy lên Cloudflare Pages

Tạo project Pages kết nối với repository và đặt:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 22.12 trở lên (hoặc 24 trở lên)

Đây là ứng dụng SPA tĩnh; Cloudflare Pages tự phục vụ `index.html` cho route gốc.
