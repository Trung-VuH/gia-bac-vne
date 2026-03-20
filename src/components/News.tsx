import React from 'react';
import { MessageSquare } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Giá bạc thế giới tăng vọt, trong nước lập đỉnh mới",
    description: "Sáng nay, giá bạc thế giới vượt mốc 30 USD/ounce, kéo theo giá bạc trong nước tăng mạnh lên mức cao nhất trong nhiều năm qua.",
    image: "https://picsum.photos/seed/silver1/300/200",
    time: "2 giờ trước",
    comments: 15
  },
  {
    id: 2,
    title: "Nhà đầu tư chuyển hướng sang bạc khi giá vàng quá cao",
    description: "Với việc giá vàng liên tục lập đỉnh và trở nên đắt đỏ, nhiều nhà đầu tư đang tìm kiếm cơ hội ở thị trường bạc với kỳ vọng sinh lời tốt hơn.",
    image: "https://picsum.photos/seed/silver2/300/200",
    time: "5 giờ trước",
    comments: 42
  },
  {
    id: 3,
    title: "Dự báo giá bạc năm 2026: Còn nhiều dư địa tăng trưởng",
    description: "Các chuyên gia phân tích nhận định nhu cầu công nghiệp và xu hướng chuyển dịch năng lượng xanh sẽ tiếp tục hỗ trợ giá bạc trong dài hạn.",
    image: "https://picsum.photos/seed/silver3/300/200",
    time: "1 ngày trước",
    comments: 8
  },
  {
    id: 4,
    title: "Nhu cầu bạc công nghiệp dự kiến đạt kỷ lục",
    description: "Sự bùng nổ của ngành sản xuất tấm pin mặt trời và xe điện đang thúc đẩy nhu cầu tiêu thụ bạc trên toàn cầu lên mức chưa từng có.",
    image: "https://picsum.photos/seed/silver4/300/200",
    time: "2 ngày trước",
    comments: 23
  }
];

export default function News() {
  return (
    <div className="mt-8 border-t border-[#e5e5e5] pt-6">
      <h2 className="text-xl font-bold mb-4 text-[#222]">Tin tức Giá bạc</h2>
      <div className="flex flex-col gap-6">
        {newsItems.map((item) => (
          <article key={item.id} className="flex flex-col sm:flex-row gap-4 border-b border-[#e5e5e5] pb-6 last:border-0">
            <a href="#" className="shrink-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full sm:w-[240px] h-[140px] object-cover rounded bg-[#f7f7f7]"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-[#222] mb-2 leading-tight">
                <a href="#" className="hover:text-[#076bce]">{item.title}</a>
              </h3>
              <p className="text-[14px] text-[#4f4f4f] mb-2 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center gap-4 mt-auto text-[12px] text-[#757575]">
                <span>{item.time}</span>
                <a href="#" className="flex items-center gap-1 hover:text-[#076bce]">
                  <MessageSquare className="w-3 h-3" />
                  <span>{item.comments}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
