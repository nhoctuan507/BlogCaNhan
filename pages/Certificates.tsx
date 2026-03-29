
import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';
import { Certificate } from '../types';

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Chứng chỉ & Thành tựu</h1>
        <p className="text-gray-600">Những cột mốc trên hành trình học tập và phát triển kỹ năng chuyên môn.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {CERTIFICATES.map(cert => (
          <div 
            key={cert.id} 
            onClick={() => setSelectedCert(cert)}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col md:flex-row hover:shadow-lg transition cursor-pointer group"
          >
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <i className="fa-solid fa-magnifying-glass-plus text-white text-2xl"></i>
              </div>
            </div>
            <div className="p-6 md:w-2/3 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">{cert.title}</h3>
                <span className="text-xs font-bold bg-indigo-100 text-indigo-600 px-2 py-1 rounded">Verified</span>
              </div>
              <p className="text-indigo-600 text-sm font-medium mb-4">{cert.issuer}</p>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-xs uppercase font-bold text-gray-400 mb-2">Kỹ năng đạt được:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-auto">
                <span className="text-xs text-gray-400">Ngày cấp: {cert.date}</span>
                <button className="text-indigo-600 text-xs font-bold hover:underline flex items-center gap-1">
                  <i className="fa-solid fa-eye"></i> Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal / Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-6xl w-full h-full max-h-[95vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition shadow-lg"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <img 
              src={selectedCert.certificateImage || selectedCert.image} 
              alt={selectedCert.title} 
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}

      <div className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-3xl p-10 text-white text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Cùng học tập và phát triển</h2>
        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
          Mình luôn tìm kiếm cơ hội để học hỏi các công nghệ mới và đạt được các chứng chỉ chuyên môn sâu hơn trong tương lai.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://netacad.com" target="_blank" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm shadow-md hover:scale-105 transition">Cisco NetAcad</a>
          <a href="https://jsinstitute.org" target="_blank" className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white/10 transition">JS Institute</a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
