import React, { useState } from 'react';
import { Card } from './Card';
import { STORY_SHAPES } from '../constants';
import { MessageCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Card>
        <h2 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          1. 暖身提問：故事有形狀嗎？
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
          <h4 className="flex items-center text-blue-700 font-bold mb-2">
            <MessageCircle className="w-5 h-5 mr-2" />
            課堂討論
          </h4>
          <p className="mb-2 text-gray-700">
            請想像你最喜歡的一部電影或小說。如果「Y軸」代表主角的快樂/運氣，「X軸」代表時間。你會畫出一條什麼樣的線？
          </p>
          <p className="text-sm text-gray-500 italic">
            提示：它是一直線嗎？還是像雲霄飛車一樣忽高忽低？
          </p>
        </div>

        <p className="mb-6 text-gray-700">
          馮內果 (Kurt Vonnegut) 提出，幾乎所有故事都符合這 <strong>6種基本形狀</strong>：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-12">
          {STORY_SHAPES.map((shape) => (
            <div 
              key={shape.id} 
              className="bg-white border border-gray-200 rounded-lg p-4 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <strong className="block text-gray-800 mb-1">{shape.id}. {shape.name}</strong>
              <svg className="w-full h-20 my-3 stroke-accent stroke-[3] fill-none" viewBox="0 0 100 50">
                <path d={shape.path} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
              </svg>
              <small className="block text-gray-500 text-sm">
                {shape.engName}<br />
                {shape.example}
              </small>
            </div>
          ))}
        </div>

        {/* New Discussion Section: Idioms */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="flex items-center text-xl font-bold text-gray-700 mb-4">
            <HelpCircle className="w-6 h-6 mr-2 text-accent" />
            思考時間：成語故事的形狀
          </h3>
          <p className="text-gray-600 mb-6">
            如果把我們熟悉的寓言故事畫成圖表，它們會屬於哪一種形狀？點擊卡片看看分析。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <IdiomCard 
              title="🐢 龜兔賽跑" 
              desc="The Tortoise and the Hare"
              answer={
                <>
                  <p className="mb-2"><strong>烏龜：白手起家 (Rise)</strong><br/><span className="text-sm text-gray-500">持續努力，從落後到勝利。</span></p>
                  <p><strong>兔子：伊卡洛斯 (Rise-Fall)</strong><br/><span className="text-sm text-gray-500">過度自信，直線墜落。</span></p>
                </>
              }
            />
            <IdiomCard 
              title="🐎 塞翁失馬" 
              desc="Blessing in Disguise"
              answer={
                <>
                  <p className="mb-2"><strong>複雜波浪 (Sine Wave)</strong></p>
                  <p className="text-sm text-gray-500">福禍相依，壞事變好事，好事變壞事。這是真實人生最常見的形狀（無限循環）。</p>
                </>
              }
            />
            <IdiomCard 
              title="🛶 刻舟求劍" 
              desc="Marking the Boat"
              answer={
                <>
                  <p className="mb-2"><strong>悲劇 / 認知失調</strong></p>
                  <p className="text-sm text-gray-500">隨著船移動（時間流逝），離掉落的劍（目標）越來越遠。這是一條與現實背道而馳的線。</p>
                </>
              }
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

const IdiomCard: React.FC<{title: string, desc: string, answer: React.ReactNode}> = ({ title, desc, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-gray-50 rounded-lg border border-gray-200 cursor-pointer transition-all hover:bg-orange-50 hover:border-accent/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 flex justify-between items-center">
        <div>
          <h4 className="font-bold text-gray-800">{title}</h4>
          <span className="text-xs text-gray-500">{desc}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400"/> : <ChevronDown className="w-5 h-5 text-gray-400"/>}
      </div>
      
      {isOpen && (
        <div className="px-4 pb-4 pt-0 animate-fade-in border-t border-gray-100 mt-2">
           <div className="pt-3 text-sm text-gray-700">
             {answer}
           </div>
        </div>
      )}
    </div>
  );
};