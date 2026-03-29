
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-indigo-600 flex items-center gap-2">
            <i className="fa-solid fa-shield-halved"></i>
            <span>Phạm Thanh Tuấn</span>
          </Link>
          <ul className="flex gap-4 md:gap-6 font-medium text-gray-600 text-sm md:text-base">
            <li>
              <Link to="/" className={isActive('/') ? 'text-indigo-600' : 'hover:text-indigo-600 transition'}>Home</Link>
            </li>
            <li>
              <Link to="/blog" className={isActive('/blog') ? 'text-indigo-600' : 'hover:text-indigo-600 transition'}>Blog</Link>
            </li>
            <li>
              <Link to="/certificates" className={isActive('/certificates') ? 'text-indigo-600' : 'hover:text-indigo-600 transition'}>Certificates</Link>
            </li>
            <li>
              <Link to="/profile" className={isActive('/profile') ? 'text-indigo-600' : 'hover:text-indigo-600 transition'}>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4 text-white font-bold">Blog Phạm Thanh Tuấn</p>
          <p className="text-sm mb-6">Đồ án học phần - Chuyên ngành Công nghệ phần mềm</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/nhoctuan507" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="https://www.facebook.com/tuan.pham.679755?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fa-brands fa-linkedin text-xl"></i></a>
          </div>
          <p className="text-xs">&copy; 2024-2025 Phạm Thanh Tuấn. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
