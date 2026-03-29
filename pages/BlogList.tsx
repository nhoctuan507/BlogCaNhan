
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogList: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Java' | 'JavaScript'>('All');

  const filteredPosts = filter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Tất cả bài viết</h1>
        <p className="text-gray-600">Nơi lưu giữ hành trình chinh phục Java và JavaScript</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {['All', 'Java', 'JavaScript'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              filter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">Đọc ngay</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded text-[10px] font-bold text-white uppercase ${post.category === 'Java' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs font-medium">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
              <div className="text-indigo-600 font-bold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform">
                Khám phá <i className="fa-solid fa-chevron-right ml-2 text-[10px]"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
