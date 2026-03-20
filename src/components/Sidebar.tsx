import React from 'react';

const mostViewed = [
  { id: 1, title: "Giá vàng SJC tiếp tục phá kỷ lục, vượt mốc 90 triệu đồng" },
  { id: 2, title: "Lãi suất tiết kiệm ngân hàng nào cao nhất hiện nay?" },
  { id: 3, title: "Chứng khoán 'đỏ lửa' phiên cuối tuần, VN-Index mất 15 điểm" },
  { id: 4, title: "Chuyên gia cảnh báo rủi ro khi 'lướt sóng' bất động sản ven đô" },
  { id: 5, title: "Tỷ giá USD/VND hạ nhiệt sau động thái của Ngân hàng Nhà nước" }
];

const hotNews = [
  {
    id: 1,
    title: "Israel không kích dữ dội Beirut, căng thẳng leo thang",
    image: "https://picsum.photos/seed/me1/120/80",
    comments: 124
  },
  {
    id: 2,
    title: "Hội đồng Bảo an LHQ họp khẩn về tình hình Trung Đông",
    image: "https://picsum.photos/seed/me2/120/80",
    comments: 89
  },
  {
    id: 3,
    title: "Giá dầu thế giới tăng vọt do lo ngại xung đột lan rộng",
    image: "https://picsum.photos/seed/me3/120/80",
    comments: 56
  },
  {
    id: 4,
    title: "Mỹ kêu gọi các bên kiềm chế, tránh chiến tranh toàn diện",
    image: "https://picsum.photos/seed/me4/120/80",
    comments: 210
  },
  {
    id: 5,
    title: "Châu Âu chuẩn bị kịch bản sơ tán công dân khỏi vùng chiến sự",
    image: "https://picsum.photos/seed/me5/120/80",
    comments: 45
  }
];

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-8">
      {/* Xem nhiều */}
      <div>
        <div className="border-t border-[#e5e5e5] mb-3">
          <h3 className="text-[16px] font-bold text-[#222] mt-3">Xem nhiều</h3>
        </div>
        <div className="flex flex-col">
          {mostViewed.map((item, index) => (
            <article key={item.id} className="flex gap-3 py-3 border-b border-[#e5e5e5] last:border-0">
              <span className="text-3xl font-bold text-[#e5e5e5] leading-none mt-1">{index + 1}</span>
              <h4 className="text-[14px] font-medium text-[#222] leading-snug hover:text-[#076bce] cursor-pointer">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </div>

      {/* Tin nóng Trung Đông */}
      <div>
        <div className="border-t border-[#e5e5e5] mb-4">
          <h3 className="text-[16px] font-bold text-[#222] mt-3">Tiêu điểm Trung Đông</h3>
        </div>
        <div className="flex flex-col gap-4">
          {hotNews.map((item) => (
            <article key={item.id} className="flex gap-3 border-b border-[#e5e5e5] pb-4 last:border-0">
              <a href="#" className="shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-[120px] h-[75px] object-cover rounded bg-[#f7f7f7]"
                  referrerPolicy="no-referrer"
                />
              </a>
              <h4 className="text-[14px] font-medium text-[#222] leading-snug">
                <a href="#" className="hover:text-[#076bce]">{item.title}</a>
              </h4>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
