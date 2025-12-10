import React, { useState } from 'react';
import { Card } from './Card';
import { CASE_STUDIES } from '../constants';
import { BookOpen, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const ModelSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <div className="animate-fade-in">
      {/* The 3-Step Model */}
      <Card>
        <h2 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          2. 核心教學：故事的三大積木
        </h2>
        <p className="text-gray-600 mb-6">
          無論形狀如何變化，支撐故事骨架的永遠是這三個步驟。這是一個萬用的寫作公式。
        </p>

        <div className="flex flex-col gap-4">
          {/* Step 1 */}
          <div className="flex items-stretch bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary text-white w-16 md:w-20 p-2 flex items-center justify-center font-bold text-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <span className="text-2xl">1</span>
                <span className="text-xs uppercase mt-1">Intro</span>
              </div>
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                <BookOpen className="w-5 h-5 text-gray-400" />
                引言 (Exposition)
              </div>
              <strong className="block text-accent mb-2">Who? Where? Want?</strong>
              <p className="text-gray-600 mb-2">建立故事的基礎。讓觀眾快速理解角色是誰、在哪裡、想要什麼（動機）。</p>
              <p className="text-sm text-gray-500 italic">👉 關鍵：如果你不關心角色，就不會關心故事。</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-stretch bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm ring-1 ring-accent/20">
            <div className="bg-accent text-white w-16 md:w-20 p-2 flex items-center justify-center font-bold text-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <span className="text-2xl">2</span>
                <span className="text-xs uppercase mt-1">Conflict</span>
              </div>
            </div>
            <div className="p-6 flex-1 bg-orange-50/30">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                <AlertTriangle className="w-5 h-5 text-accent" />
                衝突 (Conflict)
              </div>
              <strong className="block text-accent mb-2">But... Problem!</strong>
              <p className="text-gray-600 mb-2">推動故事的核心。角色遇到了阻礙（外在敵人或內在恐懼）。沒有衝突，就沒有故事。</p>
              <p className="text-sm text-gray-500 italic">👉 關鍵：這是故事強度 (Intensity) 上升的階段。</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-stretch bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary text-white w-16 md:w-20 p-2 flex items-center justify-center font-bold text-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <span className="text-2xl">3</span>
                <span className="text-xs uppercase mt-1">End</span>
              </div>
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                解決 (Resolution)
              </div>
              <strong className="block text-accent mb-2">So...</strong>
              <p className="text-gray-600">收束故事。角色如何面對？結局是喜是悲？觀眾獲得了什麼情感滿足？</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Case Studies */}
      <Card>
        <h2 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          3. 案例分析 (Case Studies)
        </h2>
        
        <div className="flex flex-wrap gap-2 mb-6 print:hidden">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseId(study.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCaseId === study.id 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Display Active Case (Screen) */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 animate-fade-in print:hidden">
            <h3 className="text-xl font-bold text-gray-700 border-b border-gray-200 pb-2 mb-4">
               {activeCase.icon} {activeCase.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                 <span className="font-bold text-primary whitespace-nowrap">鉤子 (Hook)：</span>
                 <span className="text-gray-700">{activeCase.hook}</span>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-accent whitespace-nowrap">衝突 (Conflict)：</span>
                 <span className="text-gray-700">{activeCase.conflict}</span>
              </li>
              <li className="flex gap-3">
                 <span className="font-bold text-primary whitespace-nowrap">解決 (Resolution)：</span>
                 <span className="text-gray-700">{activeCase.resolution}</span>
              </li>
            </ul>
        </div>

        {/* Print Only: Show All Cases */}
        <div className="hidden print:block space-y-6">
           {CASE_STUDIES.map(study => (
             <div key={study.id} className="border border-black p-4 rounded">
                <h4 className="font-bold mb-2">{study.icon} {study.title}</h4>
                <p><strong>Hook:</strong> {study.hook}</p>
                <p><strong>Conflict:</strong> {study.conflict}</p>
                <p><strong>Resolution:</strong> {study.resolution}</p>
             </div>
           ))}
        </div>
      </Card>
    </div>
  );
};