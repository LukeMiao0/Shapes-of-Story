import React, { useState } from 'react';
import { Card } from './Card';
import { RANDOM_TOPICS } from '../constants';
import { RandomTopic } from '../types';
import { Dices, Printer } from 'lucide-react';

export const PracticeSection: React.FC = () => {
  const [topic, setTopic] = useState<RandomTopic | null>(null);
  const [userTitle, setUserTitle] = useState('');

  const drawTopic = () => {
    const random = RANDOM_TOPICS[Math.floor(Math.random() * RANDOM_TOPICS.length)];
    setTopic(random);
    setUserTitle(`${random.title} - ${random.hook}`);
  };

  return (
    <div className="animate-fade-in">
      <Card>
        <h2 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          4. 學生實作：故事發展軸線
        </h2>
        <p className="text-gray-600 mb-6">
          請結合我們學到的「故事形狀」與「三步模型」。現在，你要創造自己的故事。
        </p>

        {/* Randomizer */}
        <div className="bg-orange-50 border-2 border-dashed border-accent rounded-xl p-6 text-center mb-8 print:border-gray-300">
          <h4 className="text-lg font-bold text-orange-800 mb-4 print:hidden">🎲 沒有靈感？抽一張卡牌！</h4>
          <button 
            onClick={drawTopic}
            className="bg-accent text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all flex items-center justify-center mx-auto gap-2 print:hidden"
          >
            <Dices className="w-5 h-5" />
            <span>隨機產生一個故事鉤子</span>
          </button>

          {topic && (
            <div className="mt-6 text-left bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm animate-fade-in print:block print:shadow-none print:border print:mt-0">
               <h4 className="text-lg font-bold text-accent mb-2 mt-0">🎯 {topic.title}</h4>
               <p className="mb-2 text-gray-800"><strong>鉤子：</strong>{topic.hook}</p>
               <p className="text-sm text-gray-500 italic">💡 {topic.hint}</p>
            </div>
          )}
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h3 className="text-lg font-bold text-gray-600 border-b pb-2 mb-3">第一步：設定題目與鉤子</h3>
            <label className="block text-sm font-bold text-gray-700 mb-1">故事標題 / 鉤子 (Hook)：</label>
            <input 
              type="text" 
              value={userTitle}
              onChange={(e) => setUserTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
              placeholder="請填寫你的故事標題或抽到的鉤子..." 
            />
          </div>

          <div>
             <h3 className="text-lg font-bold text-gray-600 border-b pb-2 mb-3">第二步：填寫三步內容</h3>
             
             <div className="space-y-4">
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">1. 引言 (Exposition) - 角色是誰？動機為何？</label>
                   <textarea rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="例：主角在什麼情境下？他原本想做什麼？" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">2. 衝突 (Conflict) - 發生了什麼阻礙？(這是故事強度上升的關鍵)</label>
                   <textarea rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none" placeholder="例：遇到什麼突發狀況？外在敵人或內心恐懼是什麼？" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">3. 解決 (Resolution) - 如何收尾？</label>
                   <textarea rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="例：最後如何解決問題？結局是喜是悲？" />
                </div>
             </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-600 border-b pb-2 mb-3">第三步：繪製你的故事軸線</h3>
            <p className="text-sm text-gray-500 mb-4">請在下圖中標示出你的故事走向。你的「衝突」在哪裡達到最高點 (Climax)？</p>
            
            <div className="relative h-72 border-l-2 border-b-2 border-gray-800 ml-8 mb-4 bg-dots bg-[length:20px_20px]">
               {/* CSS background pattern simulation via Tailwind arbitary values */}
               <div className="absolute inset-0 opacity-20" style={{ 
                 backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
               }}></div>

               <div className="absolute -top-6 -left-20 w-24 text-right text-sm font-bold text-gray-700">故事強度<br/>(Intensity) ↑</div>
               <div className="absolute -bottom-8 right-0 text-sm font-bold text-gray-700">時間 (Time) →</div>
               <div className="absolute bottom-2 left-2 text-xs text-gray-400">開始</div>
               <div className="absolute bottom-2 right-2 text-xs text-gray-400">結束</div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 italic text-xl select-none pointer-events-none">
                 (請列印後在此處繪製曲線)
               </div>
            </div>
          </div>
        </form>

        <button 
          onClick={() => window.print()}
          className="w-full mt-8 bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 print:hidden"
        >
          <Printer className="w-6 h-6" />
          完成並列印 / 另存 PDF
        </button>
      </Card>
    </div>
  );
};