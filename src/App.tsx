/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { parseData } from './data';
import { ArrowUp, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

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
                <p>Đơn vị: Vnđ/Lượng</p>
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
                <tr 
                  className={cn(
                    "border-b border-[#e5e5e5] hover:bg-[#fcfcfc] cursor-pointer transition-colors",
                    expandedRow === product.id && "bg-[#fcfcfc]"
                  )}
                  onClick={() => toggleRow(product.id)}
                >
                  <td className="py-4 px-4 font-bold text-[#222] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span>{product.name}</span>
                      {product.name.toLowerCase().includes('1kilo') && (
                        <span className="text-[12px] font-normal text-[#757575] mt-0.5">Vnđ/Kg</span>
                      )}
                    </div>
                    {expandedRow === product.id ? (
                      <ChevronUp className="w-4 h-4 text-[#999]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#999]" />
                    )}
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
                {expandedRow === product.id && (
                  <tr className="bg-[#fcfcfc] border-b border-[#e5e5e5]">
                    <td colSpan={3} className="p-4 md:p-6">
                      <div className="h-[340px] w-full pb-4">
                        <h3 className="text-[15px] font-bold mb-4 text-center text-[#222]">Biểu đồ giá {product.name}</h3>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={product.history} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                            <XAxis 
                              dataKey="date" 
                              tickFormatter={(val) => val.substring(0, 5)}
                              tick={{ fontSize: 12, fill: '#757575' }} 
                              tickMargin={10}
                              axisLine={false}
                              tickLine={false}
                              minTickGap={20}
                            />
                            <YAxis 
                              tickFormatter={(value) => new Intl.NumberFormat('vi-VN', { notation: "compact", compactDisplay: "short" }).format(value)}
                              tick={{ fontSize: 12, fill: '#757575' }}
                              axisLine={false}
                              tickLine={false}
                              domain={['auto', 'auto']}
                              width={60}
                            />
                            <Tooltip 
                              formatter={(value: number) => [formatPrice(value) + ' ₫', '']}
                              labelFormatter={(label) => `Ngày: ${label}`}
                              contentStyle={{ borderRadius: '4px', border: '1px solid #e5e5e5', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontSize: '13px' }}
                            />
                            <Legend wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
                            <Line 
                              type="monotone" 
                              dataKey="buy" 
                              name="Mua vào" 
                              stroke="#076bce" 
                              strokeWidth={2} 
                              dot={{ r: 3, fill: '#076bce', strokeWidth: 0 }} 
                              activeDot={{ r: 5 }} 
                            />
                            <Line 
                              type="monotone" 
                              dataKey="sell" 
                              name="Bán ra" 
                              stroke="#e53935" 
                              strokeWidth={2} 
                              dot={{ r: 3, fill: '#e53935', strokeWidth: 0 }} 
                              activeDot={{ r: 5 }} 
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

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
