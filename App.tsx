
import React, { useState, useEffect, useCallback } from 'react';
import { REFINED_PLAN, ISAIAH_INFO } from './constants';
import { ReadingDay } from './types';

const App: React.FC = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [selectedDayId, setSelectedDayId] = useState<number | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('isaiah_progress');
    if (saved) {
      try {
        setCompletedDays(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('isaiah_progress', JSON.stringify(completedDays));
  }, [completedDays]);

  const toggleComplete = (id: number) => {
    setCompletedDays(prev => 
      prev.includes(id) ? prev.filter(dayId => dayId !== id) : [...prev, id]
    );
    setSelectedDayId(null);
  };

  const resetProgress = () => {
    if (window.confirm("정말 모든 통독 진행 상황을 초기화하시겠습니까?")) {
      setCompletedDays([]);
    }
  };

  const progressPercent = Math.round((completedDays.length / REFINED_PLAN.length) * 100);

  const getWeekTheme = (week: number) => {
    const themes = [
      "심판과 정결의 부르심",
      "열방을 향한 여호와의 주권",
      "심판 뒤에 숨겨진 구원의 손길",
      "역사를 주관하시는 위로의 주",
      "회복을 향한 위대한 약속",
      "고난받는 종을 통한 대속",
      "시온의 영광과 찬송의 회복",
      "새 하늘과 새 땅의 소망"
    ];
    return themes[week - 1] || "말씀으로의 여정";
  };

  const getWeekRange = (week: number) => {
    const weekDays = REFINED_PLAN.filter(d => d.week === week);
    if (weekDays.length === 0) return "";
    return `${weekDays[0].dateDisplay.split(' (')[0]} ~ ${weekDays[weekDays.length - 1].dateDisplay.split(' (')[0]}`;
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-[#fdfcfb] text-slate-800 pb-20 overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-[#6b705c] text-white pt-10 pb-12 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <i className="fa-solid fa-scroll text-9xl -rotate-12"></i>
        </div>
        
        <h1 className="serif text-3xl font-bold mb-4 tracking-tight">이사야서 8주 통독</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-sm leading-relaxed space-y-2">
          <p><span className="font-bold opacity-80 mr-2 underline decoration-white/30">저자</span> {ISAIAH_INFO.author}</p>
          <p><span className="font-bold opacity-80 mr-2 underline decoration-white/30">연도</span> {ISAIAH_INFO.period}</p>
          <p className="opacity-90 mt-2 italic leading-snug">
            "{ISAIAH_INFO.description}"
          </p>
        </div>
      </header>

      {/* Progress Card */}
      <div className="px-6 -mt-6">
        <div className="bg-white rounded-3xl shadow-lg p-5 flex flex-col animate-fade-in border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-slate-400 text-xs font-bold tracking-wider uppercase">현재 진행률</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#6b705c]">{completedDays.length}</span>
                <span className="text-slate-400 font-medium">/ {REFINED_PLAN.length} 일</span>
              </div>
            </div>
            <button 
              onClick={resetProgress}
              className="bg-red-50 text-red-500 p-3 rounded-2xl hover:bg-red-100 transition-colors"
              title="초기화"
            >
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>
          
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-[#b7b7a4] h-full transition-all duration-700 ease-out" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-xs font-bold text-slate-400">{progressPercent}% 완료</p>
        </div>
      </div>

      {/* Reading Plan List */}
      <main className="px-4 mt-8 space-y-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(weekNum => (
          <div key={weekNum} className="animate-fade-in" style={{ animationDelay: `${weekNum * 0.1}s` }}>
            <div className="mb-4 ml-2">
              <h2 className="serif text-xl font-bold flex items-center gap-2 text-[#6b705c]">
                <span className="w-8 h-8 rounded-full bg-[#cb997e] text-white flex items-center justify-center text-sm">{weekNum}</span>
                {weekNum}주차 : {getWeekTheme(weekNum)}
              </h2>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest ml-10 mt-0.5 opacity-70">
                {getWeekRange(weekNum)}
              </p>
            </div>
            
            <div className="space-y-3">
              {REFINED_PLAN.filter(day => day.week === weekNum).map(day => {
                const isCompleted = completedDays.includes(day.id);
                const isSelected = selectedDayId === day.id;

                return (
                  <div 
                    key={day.id}
                    className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-emerald-50 border-emerald-100' 
                        : 'bg-white border-slate-100 shadow-sm'
                    } border`}
                  >
                    <div 
                      onClick={() => setSelectedDayId(isSelected ? null : day.id)}
                      className="p-4 flex items-center justify-between cursor-pointer active:scale-95 transition-transform"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-bold leading-none ${
                          isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <span className="text-[10px] opacity-70 mb-0.5 uppercase">Day</span>
                          <span className="text-lg">{day.id}</span>
                        </div>
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-[#ffe8d6] text-[#cb997e]'}`}>
                              {day.dateDisplay}
                            </p>
                            <p className={`text-[10px] font-bold ${isCompleted ? 'text-emerald-500/50' : 'text-slate-300'}`}>
                              {day.chapters}
                            </p>
                          </div>
                          <h3 className={`font-semibold leading-tight text-sm ${isCompleted ? 'text-emerald-800' : 'text-slate-700'}`}>
                            {day.title}
                          </h3>
                        </div>
                      </div>
                      
                      {isCompleted && (
                        <div className="text-emerald-500">
                          <i className="fa-solid fa-circle-check text-xl"></i>
                        </div>
                      )}
                    </div>

                    {/* Action Overlay */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-around px-6 animate-fade-in">
                        <button 
                          onClick={() => toggleComplete(day.id)}
                          className={`flex-1 mx-2 py-3 rounded-xl font-bold text-sm transition-all ${
                            isCompleted 
                              ? 'bg-slate-100 text-slate-600' 
                              : 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                          }`}
                        >
                          {isCompleted ? '완료 취소하기' : '읽기 완료하기'}
                        </button>
                        <button 
                          onClick={() => setSelectedDayId(null)}
                          className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-600"
                        >
                          <i className="fa-solid fa-xmark text-xl"></i>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </main>

      {/* Footer Info */}
      <footer className="mt-12 text-center text-slate-400 text-xs pb-10">
        <p className="mt-1 italic">"주의 말씀은 내 발에 등이요 내 길에 빛이니이다"</p>
      </footer>

      {/* Sticky Bottom Summary */}
      <div className="fixed bottom-4 left-4 right-4 bg-white/80 backdrop-blur-lg border border-white/50 shadow-2xl rounded-3xl p-3 flex items-center justify-between z-50 animate-fade-in md:max-w-md md:mx-auto">
        <div className="flex items-center gap-3 ml-2">
          <div className="w-10 h-10 bg-[#6b705c] rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-leaf"></i>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none">전체 진행도</p>
            <p className="text-sm font-bold text-slate-700">{progressPercent}% 성취</p>
          </div>
        </div>
        <div className="mr-2">
           <p className="text-xs font-bold text-white bg-[#cb997e] px-4 py-2 rounded-2xl shadow-sm">
            {completedDays.length} / {REFINED_PLAN.length} 일
           </p>
        </div>
      </div>
    </div>
  );
};

export default App;
