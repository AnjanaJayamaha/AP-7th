import { useState, useRef, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { CoverPage } from './CoverPage';
import { LetterPage } from './LetterPage';
import { CuteBoyPage } from './CuteBoyPage';
import { ScrapbookPage } from './ScrapbookPage';
import { JourneyCardsPage } from './JourneyCardsPage';
import { EnvelopePage } from './EnvelopePage';

interface JournalBookProps {
  onPageChange?: (pageIndex: number) => void;
  initialPage?: number;
}

export function JournalBook({ onPageChange, initialPage = 0 }: JournalBookProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = 6;

  // Touch handling for mobile swipe left / right
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      const next = currentPage + 1;
      setCurrentPage(next);
      onPageChange?.(next);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      const next = currentPage - 1;
      setCurrentPage(next);
      onPageChange?.(next);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
      onPageChange?.(pageIndex);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Detect horizontal swipe (ignore if mostly vertical scroll)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swiped left -> next page
        goToNextPage();
      } else {
        // Swiped right -> previous page
        goToPrevPage();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Chapter labels for quick bookmark navigation
  const pageTitles = [
    'Cover ♡',
    'Letter ♡',
    'My Cute Boy ♡',
    'Moments ♡',
    'Journey ♡',
    'Vows ♡'
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none">
      {/* Ribbon Tabs for Navigation */}
      <nav aria-label="Journal Page Navigation" className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto max-w-full px-2 py-1 no-scrollbar">
        {pageTitles.map((title, idx) => (
          <button
            key={idx}
            id={`nav-bookmark-${idx}`}
            onClick={() => goToPage(idx)}
            className={`px-3 py-1.5 rounded-t-lg text-xs font-serif-title tracking-wider transition-all duration-300 flex items-center gap-1 border-t border-x ${currentPage === idx
              ? 'bg-[#faf6ee] text-[#742520] font-bold border-[#c59b48] shadow-sm -translate-y-0.5'
              : 'bg-[#2a1a13]/80 text-[#b5a191] hover:text-[#faf6ee] border-transparent hover:bg-[#38241b]'
              }`}
          >
            <Bookmark className={`w-3 h-3 ${currentPage === idx ? 'text-[#c59b48] fill-[#c59b48]' : 'text-transparent'}`} />
            <span>{title}</span>
          </button>
        ))}
      </nav>

      {/* 3D Physical Journal Container */}
      <div
        className="relative w-full [perspective:1400px] flex justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Book Outer Leather Backing / Spine */}
        <div className="w-full rounded-2xl bg-[#281912] p-2 sm:p-3 md:p-4 book-shadow border border-[#4a3224] relative">
          {/* Left leather binder spine ridge */}
          <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-5 bg-gradient-to-r from-[#170e0a] via-[#352016] to-[#281912] rounded-l-2xl pointer-events-none z-30 shadow-inner" />

          {/* Golden spine stitching line */}
          <div className="absolute left-3 sm:left-5 top-4 bottom-4 w-px border-r border-dashed border-[#c59b48]/30 pointer-events-none z-30" />

          {/* Paper Edge Multi-Layer Effect on Right and Bottom */}
          <div className="absolute right-1 sm:right-2 top-3 bottom-3 w-2 sm:w-3 bg-[#e8deca] rounded-r shadow-md pointer-events-none z-10 border-r border-[#d4c6ae]" />
          <div className="absolute right-2 sm:right-3 top-4 bottom-4 w-1.5 bg-[#dfd3bd] rounded-r pointer-events-none z-10" />
          <div className="absolute left-4 right-4 bottom-1 sm:bottom-2 h-2 bg-[#dfd3bd] rounded-b pointer-events-none z-10" />

          {/* Physical Journal Page with Real Texture and Turning Animation */}
          <div className="relative w-full overflow-hidden rounded-xl bg-[#faf6ee] paper-texture paper-grain min-h-[500px] md:min-h-[600px] shadow-lg border border-[#e8ddc9]">
            {/* Spine Inner Shadow (page gutter) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 page-spine-shadow pointer-events-none z-20" />

            {/* Right Outer Edge Shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 page-right-edge pointer-events-none z-20" />

            {/* Page Turning Animated Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, rotateY: -7, x: 20 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 7, x: -20 }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="w-full h-full"
              >
                {currentPage === 0 && <CoverPage onOpen={goToNextPage} />}
                {currentPage === 1 && <LetterPage onNextPage={goToNextPage} />}
                {currentPage === 2 && <CuteBoyPage onNextPage={goToNextPage} onPrevPage={goToPrevPage} />}
                {currentPage === 3 && <ScrapbookPage onNextPage={goToNextPage} />}
                {currentPage === 4 && <JourneyCardsPage onNextPage={goToNextPage} />}
                {currentPage === 5 && <EnvelopePage onRestart={() => goToPage(0)} />}
              </motion.div>
            </AnimatePresence>

            {/* Subtle Desktop Clickable Turn Zones */}
            {currentPage > 0 && (
              <div
                onClick={goToPrevPage}
                className="hidden md:block absolute left-0 top-0 bottom-0 w-16 z-25 cursor-w-resize hover:bg-black/[0.015] transition-colors"
                title="Turn to previous page"
              />
            )}
            {currentPage < totalPages - 1 && (
              <div
                onClick={goToNextPage}
                className="hidden md:block absolute right-0 top-0 bottom-0 w-16 z-25 cursor-e-resize hover:bg-black/[0.015] transition-colors"
                title="Turn to next page"
              />
            )}
          </div>
        </div>
      </div>

      {/* External Page Turn Arrows for Accessibility & Convenience */}
      <div className="w-full flex items-center justify-between mt-4 px-3 sm:px-6">
        <button
          id="journal-nav-prev-btn"
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-serif-title tracking-wider transition-all duration-200 border ${currentPage === 0
            ? 'opacity-30 cursor-not-allowed border-transparent text-[#7a6454]'
            : 'bg-[#2a1a13] text-[#f5ebd7] hover:bg-[#38241b] border-[#c59b48]/30 shadow-md'
            }`}
          aria-label="Previous journal page"
        >
          <ChevronLeft className="w-4 h-4 text-[#c59b48]" />
          <span>Previous Page</span>
        </button>

        {/* Page counter dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === idx
                ? 'bg-[#c59b48] w-6'
                : 'bg-[#4a3224] hover:bg-[#7a6245]'
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        <button
          id="journal-nav-next-btn"
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-serif-title tracking-wider transition-all duration-200 border ${currentPage === totalPages - 1
            ? 'opacity-30 cursor-not-allowed border-transparent text-[#7a6454]'
            : 'bg-[#742520] text-[#f5ebd7] hover:bg-[#882b25] border-[#c59b48]/40 shadow-md'
            }`}
          aria-label="Next journal page"
        >
          <span>Next Page</span>
          <ChevronRight className="w-4 h-4 text-[#e8c983]" />
        </button>
      </div>

      {/* Swipe / Page Turn Instruction */}
      <p className="text-[11px] text-[#8e7666] font-serif-title mt-2 tracking-widest uppercase">
        {currentPage === 0 ? 'Click "Open our story" or click right edge' : 'Swipe or click page edge to turn'}
      </p>
    </div>
  );
}