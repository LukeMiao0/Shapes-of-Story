import React from 'react';
import { Card } from './Card';
import { STORY_SHAPES } from '../constants';
import { MessageCircle } from 'lucide-react';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
      </Card>
    </div>
  );
};