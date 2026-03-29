
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
          <div className="px-8 pb-12 -mt-24 text-center">
            <img 
              src="/certificates/images/anhdaidien.jpg" 
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";
              }}
              alt="Phạm Thanh Tuấn" 
              className="w-48 h-48 rounded-full border-8 border-white mx-auto shadow-md object-cover mb-6 bg-gray-200"
            />
            <h1 className="text-4xl font-bold mb-2">Phạm Thanh Tuấn</h1>
            <p className="text-indigo-600 font-medium text-lg mb-6">Sinh viên năm 4 | Chuyên ngành Công nghệ phần mềm</p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-600 mb-8">
              <a href="mailto:nhoctuan507@gmail.com" className="flex items-center gap-2 hover:text-indigo-600"><i className="fa-solid fa-envelope"></i> nhoctuan507@gmail.com</a>
              <span className="flex items-center gap-2"><i className="fa-solid fa-location-dot"></i> TP. Hồ Chí Minh</span>
              <a href="https://www.facebook.com/tuan.pham.679755?locale=vi_VN" target="_blank" className="flex items-center gap-2 hover:text-indigo-600"><i className="fa-brands fa-facebook"></i> Facebook</a>
              <a href="https://github.com/nhoctuan507" target="_blank" className="flex items-center gap-2 hover:text-indigo-600"><i className="fa-brands fa-github"></i> GitHub</a>
            </div>

            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-justify">
              Xin chào! Mình là Tuấn, hiện đang là sinh viên năm cuối chuyên ngành Công nghệ phần mềm tại HUTECH. 
              Với niềm đam mê mãnh liệt dành cho phát triển phần mềm, mình luôn cố gắng học hỏi mỗi ngày để hoàn thiện kỹ năng. 
              Tập trung chính vào Java và JavaScript, mình tin rằng một dòng code tốt không chỉ là code chạy được, 
              mà còn phải là code sạch, dễ đọc và dễ bảo trì.
            </p>
          </div>
        </div>

        {/* Connect Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <i className="fa-solid fa-share-nodes text-indigo-600"></i> Kết nối với tôi
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <a href="mailto:nhoctuan507@gmail.com" className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group hover:bg-indigo-50">
              <i className="fa-solid fa-envelope text-xl text-gray-700 group-hover:text-indigo-600 group-hover:scale-110 transition-transform"></i>
              <span className="font-medium text-gray-700 group-hover:text-indigo-600">Gmail</span>
            </a>
            <a href="https://www.facebook.com/tuan.pham.679755?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group hover:bg-indigo-50">
              <i className="fa-brands fa-facebook text-xl text-gray-700 group-hover:text-indigo-600 group-hover:scale-110 transition-transform"></i>
              <span className="font-medium text-gray-700 group-hover:text-indigo-600">Facebook</span>
            </a>
            <a href="tel:0933563455" className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group hover:bg-indigo-50">
              <i className="fa-solid fa-phone text-xl text-gray-700 group-hover:text-indigo-600 group-hover:scale-110 transition-transform"></i>
              <span className="font-medium text-gray-700 group-hover:text-indigo-600">0933563455</span>
            </a>
            <a href="https://github.com/nhoctuan507" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group hover:bg-indigo-50">
              <i className="fa-brands fa-github text-xl text-gray-700 group-hover:text-indigo-600 group-hover:scale-110 transition-transform"></i>
              <span className="font-medium text-gray-700 group-hover:text-indigo-600">GitHub</span>
            </a>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Sở thích cá nhân</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <i className="fa-solid fa-gamepad text-2xl"></i>
              </div>
              <span className="font-medium text-gray-700">Chơi game</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <i className="fa-solid fa-music text-2xl"></i>
              </div>
              <span className="font-medium text-gray-700">Nghe nhạc</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <i className="fa-solid fa-book-open text-2xl"></i>
              </div>
              <span className="font-medium text-gray-700">Đọc truyện</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <i className="fa-solid fa-film text-2xl"></i>
              </div>
              <span className="font-medium text-gray-700">Xem phim</span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <i className="fa-solid fa-folder-open text-indigo-600"></i> Dự án đã thực hiện
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://github.com/nhoctuan507/Tuan_Store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Tuan_Store</h4>
              <p className="text-gray-600 text-sm mb-3">Đồ án chuyên ngành | Vai trò: Full Stack Developer</p>
              <span className="text-indigo-500 text-sm font-medium flex items-center gap-1">
                Xem trên GitHub <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            <a 
              href="https://github.com/nhoctuan507/BlogCaNhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">BlogCaNhan</h4>
              <p className="text-gray-600 text-sm mb-3">Đồ án môn học Lập trình mạng máy tính</p>
              <span className="text-indigo-500 text-sm font-medium flex items-center gap-1">
                Xem trên GitHub <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
          </div>
        </div>

        {/* Skills & Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-layer-group text-indigo-600"></i> Kỹ năng chuyên môn
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-gray-700">Java / Spring Boot</span>
                  <span className="text-indigo-600 font-bold">75%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full w-[75%] shadow-sm"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-gray-700">JavaScript / React</span>
                  <span className="text-indigo-600 font-bold">70%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-yellow-400 h-3 rounded-full w-[70%] shadow-sm"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-gray-700">Software Development / Web</span>
                  <span className="text-indigo-600 font-bold">80%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full w-[80%] shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-indigo-600"></i> Hành trình học tập
            </h3>
            <div className="border-l-2 border-indigo-200 ml-4 space-y-8 relative">
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1 shadow"></div>
                <h4 className="font-bold text-indigo-700">Năm 4 - Hoàn thiện & Tốt nghiệp</h4>
                <p className="text-gray-400 text-xs mb-1">2025</p>
                <p className="text-sm text-gray-600">Hoàn thành đồ án tốt nghiệp về Công nghệ phần mềm và chuẩn bị cho sự nghiệp chuyên nghiệp.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-indigo-400 rounded-full -left-[9px] top-1"></div>
                <h4 className="font-bold text-gray-700">Năm 3 - Chuyên sâu Bảo mật</h4>
                <p className="text-gray-400 text-xs mb-1">2024</p>
                <p className="text-sm text-gray-600">Nghiên cứu sâu về Pentest, Web Security và đạt chứng chỉ Cisco Networking.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-indigo-300 rounded-full -left-[9px] top-1"></div>
                <h4 className="font-bold text-gray-700">Năm 2 - Phát triển Phần mềm</h4>
                <p className="text-gray-400 text-xs mb-1">2023</p>
                <p className="text-sm text-gray-600">Học lập trình hướng đối tượng nâng cao với Java và làm quen với phát triển Web.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-indigo-200 rounded-full -left-[9px] top-1"></div>
                <h4 className="font-bold text-gray-700">Năm 1 - Nhập môn CNTT</h4>
                <p className="text-gray-400 text-xs mb-1">2022</p>
                <p className="text-sm text-gray-600">Bắt đầu hành trình tại HUTECH với các môn cơ sở ngành và thuật toán.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
