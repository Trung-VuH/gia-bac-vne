import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] mt-12 pt-8 pb-12 bg-white text-[13px] text-[#4f4f4f]">
      <div className="max-w-[1160px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-[#e5e5e5] pb-8">
          <div>
            <ul className="space-y-2 font-bold text-[#222]">
              <li><a href="#" className="hover:text-[#076bce]">Trang chủ</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Video</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Podcasts</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Ảnh</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Infographics</a></li>
            </ul>
            <div className="mt-4 border-t border-[#e5e5e5] pt-4">
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#076bce]">Mới nhất</a></li>
                <li><a href="#" className="hover:text-[#076bce]">Xem nhiều</a></li>
                <li><a href="#" className="hover:text-[#076bce]">Tin nóng</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#076bce]">Thời sự</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Góc nhìn</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Thế giới</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Kinh doanh</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Giải trí</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Thể thao</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Pháp luật</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Giáo dục</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#076bce]">Sức khỏe</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Đời sống</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Du lịch</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Khoa học</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Số hóa</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Xe</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Ý kiến</a></li>
              <li><a href="#" className="hover:text-[#076bce]">Tâm sự</a></li>
            </ul>
          </div>
          
          <div>
            <div className="mb-4">
              <p className="font-bold text-[#222] mb-2">Tải ứng dụng</p>
              <div className="flex gap-2">
                <button className="border border-[#e5e5e5] px-3 py-1.5 rounded hover:bg-[#f7f7f7] text-[#222] font-medium">VnExpress App</button>
              </div>
            </div>
            <div>
              <p className="font-bold text-[#222] mb-2">Liên hệ</p>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#076bce]">Tòa soạn</a></li>
                <li><a href="#" className="hover:text-[#076bce]">Quảng cáo</a></li>
                <li><a href="#" className="hover:text-[#076bce]">Hợp tác bản quyền</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-bold text-[#222] mb-1">Báo tiếng Việt nhiều người xem nhất</p>
            <p>Thuộc Bộ Khoa học và Công nghệ</p>
            <p>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
          </div>
          <div className="text-left md:text-right">
            <p>Tổng biên tập: Phạm Hiếu</p>
            <p>Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội</p>
            <p>© 1997-2026. Toàn bộ bản quyền thuộc VnExpress</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
