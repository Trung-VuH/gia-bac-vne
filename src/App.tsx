/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { parseData } from './data';
import { ArrowUp, ArrowDown, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';
import Sidebar from './components/Sidebar';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN').format(price);
}

function formatChange(change: number) {
  const formatted = new Intl.NumberFormat('vi-VN').format(Math.abs(change));
  return formatted;
}

export default function App() {
  const products = useMemo(() => parseData(), []);
  const targetProduct = useMemo(() => products.find(p => p.name === 'Bạc miếng Phú Quý 999 1 lượng'), [products]);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <Header />
      
      <main className="flex-1 w-full max-w-[1160px] mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px]">
          {/* Main Content */}
          <div className="w-full lg:w-[780px] shrink-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 text-[#222]">Giá bạc hôm nay</h1>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[14px] text-[#757575] gap-2">
                <p>
                  Cập nhật lúc: {products[0]?.history[products[0].history.length - 1]?.time} ngày {products[0]?.history[products[0].history.length - 1]?.date}
                </p>
                <p>Đơn vị: VNĐ</p>
              </div>
            </div>

            <div className="overflow-x-auto border border-[#e5e5e5] rounded shadow-sm mb-8">
        <table className="w-full border-collapse text-[15px]">
          <thead>
            <tr className="bg-[#f7f7f7] border-b border-[#e5e5e5]">
              <th className="py-3 px-4 text-left font-bold text-[#757575] w-1/2">Sản phẩm</th>
              <th className="py-3 px-4 text-right font-bold text-[#757575] w-1/4">Mua vào</th>
              <th className="py-3 px-4 text-right font-bold text-[#757575] w-1/4">Bán ra</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <React.Fragment key={product.id}>
                <tr className="border-b border-[#e5e5e5] hover:bg-[#fcfcfc] transition-colors">
                  <td className="py-4 px-4 font-bold text-[#222] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="font-bold text-[#222]">{formatPrice(product.currentBuy)}</div>
                    <div className={cn(
                      "text-[13px] flex items-center justify-end mt-0.5",
                      product.buyChange > 0 ? "text-[#388e3c]" : product.buyChange < 0 ? "text-[#e53935]" : "text-[#757575]"
                    )}>
                      {product.buyChange > 0 && <ArrowUp className="w-3 h-3 mr-0.5" strokeWidth={3} />}
                      {product.buyChange < 0 && <ArrowDown className="w-3 h-3 mr-0.5" strokeWidth={3} />}
                      {product.buyChange !== 0 ? formatChange(product.buyChange) : '-'}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="font-bold text-[#222]">{formatPrice(product.currentSell)}</div>
                    <div className={cn(
                      "text-[13px] flex items-center justify-end mt-0.5",
                      product.sellChange > 0 ? "text-[#388e3c]" : product.sellChange < 0 ? "text-[#e53935]" : "text-[#757575]"
                    )}>
                      {product.sellChange > 0 && <ArrowUp className="w-3 h-3 mr-0.5" strokeWidth={3} />}
                      {product.sellChange < 0 && <ArrowDown className="w-3 h-3 mr-0.5" strokeWidth={3} />}
                      {product.sellChange !== 0 ? formatChange(product.sellChange) : '-'}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {targetProduct && (
        <div className="border border-[#e5e5e5] rounded shadow-sm mb-8 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:px-6 md:py-4 border-b border-[#e5e5e5]">
            <h2 className="text-xl font-bold text-[#222]">{targetProduct.name}</h2>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 border border-[#e5e5e5] rounded text-sm font-medium text-[#444] hover:bg-gray-50 transition-colors">
                7 ngày gần nhất
              </button>
              <button className="p-1.5 border border-[#e5e5e5] rounded text-[#999] hover:bg-gray-50 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[360px] w-full p-4 md:p-6 pb-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={targetProduct.history} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(val) => val.substring(0, 5)}
                  tick={{ fontSize: 12, fill: '#999' }} 
                  tickMargin={12}
                  axisLine={{ stroke: '#e5e5e5' }}
                  tickLine={false}
                  minTickGap={20}
                />
                <YAxis 
                  tickFormatter={(value) => new Intl.NumberFormat('vi-VN', { notation: "compact", compactDisplay: "short" }).format(value)}
                  tick={{ fontSize: 12, fill: '#999' }}
                  axisLine={false}
                  tickLine={false}
                  domain={['auto', 'auto']}
                  width={60}
                />
                <Tooltip 
                  formatter={(value: number, name: string) => [formatPrice(value) + ' ₫', name === 'sell' ? 'Giá bán' : 'Giá mua']}
                  labelFormatter={(label) => `Ngày: ${label}`}
                  contentStyle={{ borderRadius: '4px', border: '1px solid #e5e5e5', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontSize: '13px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sell" 
                  name="sell" 
                  stroke="#a01b3f" 
                  strokeWidth={2.5} 
                  dot={false} 
                  activeDot={{ r: 5, fill: '#a01b3f', strokeWidth: 0 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="buy" 
                  name="buy" 
                  stroke="#899ab5" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  dot={false} 
                  activeDot={{ r: 5, fill: '#899ab5', strokeWidth: 0 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Footer */}
          <div className="relative flex flex-col sm:flex-row items-center p-4 md:px-6 md:py-4 border-t border-[#e5e5e5] mt-4">
            <div className="text-[13px] text-[#999] italic mb-4 sm:mb-0 sm:absolute sm:left-6">
              Dữ liệu cập nhật: {targetProduct.history[targetProduct.history.length - 1]?.date}/2026
            </div>
            <div className="flex items-center justify-center w-full gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2.5px] bg-[#a01b3f]"></div>
                <span className="text-[14px] font-bold text-[#222]">Giá bán</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] border-t-2 border-dashed border-[#899ab5]"></div>
                <span className="text-[14px] font-bold text-[#222]">Giá mua</span>
              </div>
            </div>
          </div>
        </div>
      )}

            <News />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <Sidebar />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
