
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Comment } from '../types';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load comments from localStorage
    if (id) {
      const savedComments = localStorage.getItem(`comments_${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [id]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author.trim() || !newComment.content.trim() || !id) return;

    const comment: Comment = {
      id: Date.now().toString(),
      postId: id,
      author: newComment.author.trim(),
      content: newComment.content.trim(),
      date: new Date().toLocaleDateString('vi-VN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
    setNewComment({ author: '', content: '' });
  };

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Không tìm thấy bài viết!</h2>
        <Link to="/blog" className="text-indigo-600 hover:underline">Quay lại danh sách</Link>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-2xl font-bold mt-10 mb-6 text-gray-900 border-l-4 border-indigo-600 pl-4 leading-tight">{line.replace('### ', '')}</h3>);
        i++;
      } else if (line.startsWith('> ')) {
        elements.push(
          <div key={i} className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-xl shadow-sm italic text-indigo-900">
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-quote-left text-indigo-300 text-2xl"></i>
              <p className="leading-relaxed font-medium">{line.replace('> ', '')}</p>
            </div>
          </div>
        );
        i++;
      } else if (line.startsWith('```')) {
        const langHeader = line.replace('```', '').trim().toUpperCase();
        let codeContent = '';
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeContent += lines[i] + '\n';
          i++;
        }
        
        elements.push(
          <div key={i} className="my-8 rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#121212] font-mono">
            {/* Window Header */}
            <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                {langHeader || (post.category === 'JavaScript' ? 'JAVASCRIPT' : 'JAVA')}
              </div>
              <button 
                className="text-gray-500 hover:text-white transition-colors p-1"
                onClick={() => navigator.clipboard.writeText(codeContent.trim())}
                title="Copy code"
              >
                <i className="fa-regular fa-copy text-sm"></i>
              </button>
            </div>
            {/* Code Content - Styled as plain text on black to avoid unwanted highlights */}
            <pre className="p-6 overflow-x-auto text-[14px] leading-relaxed text-[#dcdcdc] scrollbar-code">
              <code className="block whitespace-pre">{codeContent.trim()}</code>
            </pre>
          </div>
        );
        i++;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={i} className="font-bold mt-6 mb-2 text-gray-900 text-lg leading-tight">{line.replace(/\*\*/g, '')}</p>);
        i++;
      } else if (line.startsWith('- ')) {
        elements.push(<li key={i} className="ml-6 mb-3 text-gray-700 leading-relaxed list-disc marker:text-indigo-500">{line.replace('- ', '')}</li>);
        i++;
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2"></div>);
        i++;
      } else {
        elements.push(<p key={i} className="mb-4 text-gray-700 leading-relaxed text-justify">{line}</p>);
        i++;
      }
    }
    return elements;
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/blog" className="text-indigo-600 mb-8 inline-block hover:underline group font-bold transition-all">
        <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Quay lại danh sách
      </Link>
      
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm font-bold flex items-center gap-2">
            <i className="fa-regular fa-calendar-check text-indigo-400"></i>{post.date}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-gray-900 tracking-tight">{post.title}</h1>
        <div className="relative group overflow-hidden rounded-[2.5rem]">
          <img src={post.image} alt={post.title} className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]"></div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-gray-800">
        {renderContent(post.content)}
      </div>

      <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h4 className="text-2xl font-black mb-2 text-gray-900">Hy vọng bạn thích bài viết!</h4>
          <p className="text-gray-500 font-medium">Hành trình học tập luôn rộng mở, hãy cùng nhau phát triển nhé.</p>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all w-14 h-14 flex items-center justify-center shadow-xl hover:-translate-y-2 transform duration-300">
            <i className="fa-brands fa-facebook-f text-xl"></i>
          </button>
          <button className="bg-black text-white p-4 rounded-2xl hover:bg-gray-800 transition-all w-14 h-14 flex items-center justify-center shadow-xl hover:-translate-y-2 transform duration-300">
            <i className="fa-brands fa-github text-xl"></i>
          </button>
          <button className="bg-indigo-500 text-white p-4 rounded-2xl hover:bg-indigo-600 transition-all w-14 h-14 flex items-center justify-center shadow-xl hover:-translate-y-2 transform duration-300">
            <i className="fa-solid fa-link text-xl"></i>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
          <i className="fa-solid fa-comments text-indigo-600"></i>
          Bình luận ({comments.length})
        </h3>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-bold text-gray-700 mb-2">
              Tên của bạn *
            </label>
            <input
              type="text"
              id="author"
              value={newComment.author}
              onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Nhập tên của bạn"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-bold text-gray-700 mb-2">
              Bình luận *
            </label>
            <textarea
              id="content"
              value={newComment.content}
              onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Chia sẻ suy nghĩ của bạn về bài viết..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>
            Gửi bình luận
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <i className="fa-solid fa-comment-slash text-4xl mb-4 text-gray-300"></i>
              <p className="text-lg">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {comment.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{comment.author}</h4>
                      <span className="text-sm text-gray-400">
                        <i className="fa-regular fa-clock mr-1"></i>
                        {comment.date}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
