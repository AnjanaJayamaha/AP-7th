import { JournalBook } from './components/JournalBook';
import { MusicPlayer } from './components/MusicPlayer';
import { sinhalaPlaylist } from './data/journalData';
import { Heart } from 'lucide-react';

export default function App() {

  return (
    <div className="min-h-[100dvh] w-full max-w-[100vw] overflow-y-auto overflow-x-hidden no-scrollbar bg-[#1c1410] text-[#f2ebd9] flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 relative selection:bg-[#742520]/40">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#742520]/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#c59b48]/10 blur-[140px]" />
      </div>

      {/* Floating Sinhala Audio Player */}
      <MusicPlayer playlist={sinhalaPlaylist} />

      {/* Top Header Badge */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between py-2 sm:py-3 border-b border-[#c59b48]/15 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#c59b48] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-serif-title text-[#e6c986]">
            7th Anniversary Keepsake
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-serif-title text-[#d4c3b2]">
          <span className="font-semibold text-[#faf6ee]">Anjana</span>
          <Heart className="w-3 h-3 text-[#742520] fill-[#742520] inline" />
          <span className="font-semibold text-[#faf6ee]">Pasan</span>
          <span className="text-[10px] text-[#c59b48] ml-2 hidden sm:inline">2019 — 2026</span>
        </div>
      </header>

      {/* Main Interactive Journal Area */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto">
        <JournalBook />
      </main>

      {/* Aesthetic Footer */}
      <footer className="relative z-10 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between py-3 border-t border-[#c59b48]/15 mt-4 text-[11px] text-[#9e8878] font-serif-title mb-6">
        <p className="flex items-center gap-1.5">
          <span>Crafted with endless love for Pasan by Anjana</span>
          <span className="text-[#742520]">♡</span>
        </p>
        <p className="mt-1 sm:mt-0 italic text-[#b89b88]">
          "And if I could go back to that very first moment, I would choose it all over again."
        </p>
      </footer>
    </div>
  );
}
