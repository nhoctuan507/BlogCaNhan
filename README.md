<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Phạm Thanh Tuấn - Personal Tech Blog

Một blog cá nhân hiện đại được xây dựng với React, TypeScript và Vite, chia sẻ kiến thức về lập trình Java, JavaScript và An ninh mạng.

## 🚀 Tính năng

- 📝 **Blog Posts**: 9 bài viết về Java và JavaScript
- 🏆 **Certificates**: Hiển thị chứng chỉ và thành tựu
- 👤 **Profile**: Trang giới thiệu cá nhân với timeline học tập
- 🎨 **Modern UI**: Giao diện đẹp với Tailwind CSS
- 📱 **Responsive**: Tối ưu cho mọi thiết bị
- ⚡ **Fast**: Xây dựng với Vite để tối ưu hiệu năng

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 19.2.3, TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini API (tùy chọn)

## 📋 Yêu cầu

- Node.js (v18 trở lên)
- npm hoặc yarn

## 🏃 Chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/nhoctuan507/personal-tech-blog.git
cd personal-tech-blog
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cấu hình môi trường (Tùy chọn)

Tạo file `.env.local` trong thư mục gốc:

```env
GEMINI_API_KEY=your_api_key_here
```

> **Lưu ý**: API key chỉ cần thiết nếu bạn muốn sử dụng tính năng AI Assistant. Blog vẫn hoạt động bình thường mà không cần API key.

### 4. Chạy development server

```bash
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:3000`

## 📦 Build cho Production

```bash
npm run build
```

Files sẽ được build vào thư mục `dist/`

## 🌐 Deploy

### Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Truy cập [Vercel](https://vercel.com)
3. Import repository từ GitHub
4. Vercel sẽ tự động detect Vite và deploy

### Netlify

1. Push code lên GitHub
2. Truy cập [Netlify](https://netlify.com)
3. New site from Git → Chọn repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Cài đặt `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Thêm script vào `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Cấu trúc dự án

```
├── components/          # React components
│   └── Layout.tsx       # Layout chính với header/footer
├── pages/              # Các trang của ứng dụng
│   ├── Home.tsx        # Trang chủ
│   ├── BlogList.tsx    # Danh sách bài viết
│   ├── BlogPostDetail.tsx  # Chi tiết bài viết
│   ├── Profile.tsx     # Trang giới thiệu
│   └── Certificates.tsx # Trang chứng chỉ
├── services/           # Services
│   └── geminiService.ts # Gemini AI service
├── public/             # Static files
│   └── certificates/  # Chứng chỉ và ảnh
├── constants.tsx       # Dữ liệu blog posts và certificates
├── types.ts           # TypeScript interfaces
└── vite.config.ts     # Cấu hình Vite
```

## 📝 Thêm nội dung mới

### Thêm bài blog mới

Chỉnh sửa file `constants.tsx`, thêm object mới vào mảng `BLOG_POSTS`:

```typescript
{
  id: 'unique-id',
  title: 'Tiêu đề bài viết',
  category: 'JavaScript' | 'Java',
  date: '2024-12-27',
  image: 'URL_ảnh',
  excerpt: 'Mô tả ngắn',
  content: `Nội dung bài viết với markdown...`
}
```

### Thêm chứng chỉ mới

1. Đặt ảnh chứng chỉ vào `public/certificates/images/`
2. Thêm vào mảng `CERTIFICATES` trong `constants.tsx`:

```typescript
{
  id: 'cert-X',
  title: 'Tên chứng chỉ',
  issuer: 'Tổ chức cấp',
  date: 'Ngày cấp',
  image: 'URL_thumbnail',
  certificateImage: '/certificates/images/ten-file.png',
  skills: ['Kỹ năng 1', 'Kỹ năng 2']
}
```

## 👤 Tác giả

**Phạm Thanh Tuấn**

- Email: nhoctuan507@gmail.com
- GitHub: [@nhoctuan507](https://github.com/nhoctuan507)
- Facebook: [Phạm Thanh Tuấn](https://www.facebook.com/tuan.pham.679755)

## 📄 License

Dự án này được tạo cho mục đích học tập và portfolio cá nhân.

---

⭐ Nếu bạn thấy project này hữu ích, hãy cho một star nhé!
