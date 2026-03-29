
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  const recentPosts = BLOG_POSTS.slice(-3).reverse();

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/certificates/AnhNenHome.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Chào mừng bạn đến với Blog của Tuấn</h1>
            <p className="text-indigo-200 text-xl md:text-2xl mb-8 font-semibold italic">"Mỗi bước đi là một bước gần thành công"</p>
            <p className="text-lg md:text-xl mb-10 text-indigo-100 leading-relaxed">
              Nơi mình chia sẻ những trải nghiệm thực tế về lập trình Java & JavaScript 
              dưới góc nhìn của một sinh viên chuyên ngành Công nghệ phần mềm.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/blog" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Đọc Blog
              </Link>
              <Link to="/profile" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Về mình
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/certificates/images/anhdaidien.jpg" 
              alt="Profile Picture" 
              className="h-80 w-auto border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Mục tiêu của Blog</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-code text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Chia sẻ kiến thức</h3>
            <p className="text-gray-600">Tổng hợp và hệ thống hóa kiến thức lập trình từ cơ bản đến nâng cao phục vụ học tập.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-user-shield text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Công nghệ phần mềm</h3>
            <p className="text-gray-600">Định hướng lập trình chuyên nghiệp, xây dựng ứng dụng chất lượng cao với best practices.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-rocket text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Đam mê công nghệ</h3>
            <p className="text-gray-600">Lan tỏa cảm hứng lập trình Web và Game đến cộng đồng sinh viên Công nghệ Thông tin.</p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Bài viết mới nhất</h2>
            <Link to="/blog" className="text-indigo-600 font-bold hover:underline">Xem tất cả</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 text-indigo-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-indigo-600 font-bold text-sm flex items-center gap-1">
                    Đọc bài viết <i className="fa-solid fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
