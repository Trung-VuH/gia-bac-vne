import React from 'react';
import { Search, User, Home, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-[#e5e5e5] bg-white sticky top-0 z-50">
      <div className="max-w-[1160px] mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-bold text-[#b22222] tracking-tighter">
              VnExpress
            </a>
            <span className="text-sm text-[#757575] hidden md:inline-block border-l border-[#e5e5e5] pl-4">
              Thứ sáu, 20/3/2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm text-[#757575] hover:text-[#222]">
              <span className="hidden md:inline-block">Mới nhất</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-[#757575] hover:text-[#222] border-l border-[#e5e5e5] pl-4">
              <span className="hidden md:inline-block">Tin theo khu vực</span>
            </button>
            <div className="relative hidden md:block ml-4">
              <input 
                type="text" 
                placeholder="Tìm kiếm" 
                className="border border-[#e5e5e5] rounded-full py-1.5 px-4 pr-10 text-[13px] w-[200px] focus:outline-none focus:border-[#076bce]"
              />
              <Search className="w-4 h-4 text-[#757575] absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <button className="flex items-center gap-1 text-sm text-[#757575] hover:text-[#222] md:hidden">
              <Search className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-sm text-[#757575] hover:text-[#222] border-l border-[#e5e5e5] pl-4">
              <User className="w-4 h-4" />
              <span className="hidden md:inline-block">Đăng nhập</span>
            </button>
          </div>
        </div>
        
        {/* Nav bar */}
        <nav className="flex items-center gap-4 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide text-[14px] font-bold text-[#222]">
          <a href="#" className="text-[#757575] hover:text-[#222]"><Home className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#076bce]">Thời sự</a>
          <a href="#" className="hover:text-[#076bce]">Góc nhìn</a>
          <a href="#" className="hover:text-[#076bce]">Thế giới</a>
          <a href="#" className="hover:text-[#076bce]">Video</a>
          <a href="#" className="hover:text-[#076bce]">Podcasts</a>
          <a href="#" className="hover:text-[#076bce]">Kinh doanh</a>
          <a href="#" className="hover:text-[#076bce]">Khoa học</a>
          <a href="#" className="hover:text-[#076bce]">Giải trí</a>
          <a href="#" className="hover:text-[#076bce]">Thể thao</a>
          <a href="#" className="hover:text-[#076bce]">Pháp luật</a>
          <a href="#" className="hover:text-[#076bce]">Giáo dục</a>
          <a href="#" className="hover:text-[#076bce]">Sức khỏe</a>
          <a href="#" className="hover:text-[#076bce]">Đời sống</a>
          <a href="#" className="hover:text-[#076bce]">Du lịch</a>
          <a href="#" className="text-[#757575] hover:text-[#222] ml-auto"><Menu className="w-4 h-4" /></a>
        </nav>
      </div>
    </header>
  );
}
