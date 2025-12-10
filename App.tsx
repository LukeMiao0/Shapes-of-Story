import React, { useState } from 'react';
import { Section } from './types';
import { IntroSection } from './components/IntroSection';
import { ModelSection } from './components/ModelSection';
import { PracticeSection } from './components/PracticeSection';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.INTRO);

  const renderSection = () => {
    switch (currentSection) {
      case Section.INTRO:
        return <IntroSection />;
      case Section.MODEL:
        return <ModelSection />;
      case Section.PRACTICE:
        return <PracticeSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-primary text-white py-8 text-center print:bg-white print:text-black print:border-b-2 print:border-black print:py-0 print:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">高中敘事力課程</h1>
        <p className="text-white/80 text-lg print:text-black">形狀、積木與軸線：從結構到劇本</p>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-700 sticky top-0 z-50 shadow-md print:hidden">
        <div className="max-w-4xl mx-auto flex justify-center">
          <button
            onClick={() => setCurrentSection(Section.INTRO)}
            className={`px-6 py-4 text-sm md:text-base font-medium transition-colors border-b-4 ${
              currentSection === Section.INTRO
                ? 'bg-white/10 border-accent text-white'
                : 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            第一節：故事的形狀
          </button>
          <button
            onClick={() => setCurrentSection(Section.MODEL)}
            className={`px-6 py-4 text-sm md:text-base font-medium transition-colors border-b-4 ${
              currentSection === Section.MODEL
                ? 'bg-white/10 border-accent text-white'
                : 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            重點：三步模型
          </button>
          <button
            onClick={() => setCurrentSection(Section.PRACTICE)}
            className={`px-6 py-4 text-sm md:text-base font-medium transition-colors border-b-4 ${
              currentSection === Section.PRACTICE
                ? 'bg-white/10 border-accent text-white'
                : 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            第二節：實作練習
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 mt-8 print:mt-0 print:w-full print:max-w-none">
        
        {/* Screen View: Conditional Rendering */}
        <div className="print:hidden">
            {renderSection()}
        </div>

        {/* Print View: Show All Sections stacked */}
        <div className="hidden print:block space-y-8">
            <IntroSection />
            <div className="break-before-page"></div>
            <ModelSection />
            <div className="break-before-page"></div>
            <PracticeSection />
        </div>
      </main>
    </div>
  );
};

export default App;