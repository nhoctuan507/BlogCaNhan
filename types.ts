
export interface BlogPost {
  id: string;
  title: string;
  category: 'Java' | 'JavaScript';
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
  pdfUrl?: string; // Đường dẫn đến file PDF chứng chỉ
  certificateImage?: string; // Ảnh chứng chỉ thật (nếu khác với thumbnail)
}

export interface Skill {
  name: string;
  level: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
}
