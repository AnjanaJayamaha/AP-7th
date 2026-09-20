import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';
import { letterData } from '../data/journalData';

interface LetterPageProps {
  onNextPage?: () => void;
}

export function LetterPage({ onNextPage }: LetterPageProps) {
  // State to support skipping the writing animation
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  // Line reveal timing:
  // Step 0: Greeting (Dear Pasan,)
  // Step 1: Paragraph 0 ("I still remember...")
  // Step 2: Paragraph 1 ("Somehow, that little beginning...")
  // Step 3: Paragraph 2 ("And if I could go back...")
  // Step 4: Signature ("— Anjana ♡") & Sparkle
  const totalLines = 1 + letterData.paragraphs.length + 1; // greeting + paragraphs + signature

  useEffect(() => {
    if (isRevealed) return;

    const interval = setInterval(() => {
      setActiveLine((prev) => {
        if (prev < totalLines) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1400);

    return () => clearInterval(interval);
  }, [isRevealed, totalLines]);

  const handleSkipOrClick = () => {
    if (!isRevealed && activeLine < totalLines) {
      setIsRevealed(true);
      setActiveLine(totalLines);
    }
  };

  const isLineVisible = (lineIndex: number) => {
    return isRevealed || activeLine >= lineIndex;
  };

  return (
    <div
      id="journal-letter-page"
      onClick={handleSkipOrClick}
      className="relative w-full h-full min-h-[640px] md:min-h-[700px] p-6 sm:p-10 md:p-14 flex flex-col justify-between select-none cursor-pointer overflow-hidden"
    >
      {/* Subtle notebook guide lines in background */}
      <div
        className="absolute inset-x-8 top-32 bottom-20 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, #742520 32px)',
        }}
      />

      {/* Tiny Hand-Drawn Stars & Subtle Antique Flourishes */}
      <div className="absolute top-8 right-10 text-[#c59b48]/40 pointer-events-none text-xs">
        ✦
      </div>
      <div className="absolute top-20 right-20 text-[#c59b48]/30 pointer-events-none text-[10px]">
        ★
      </div>
      <div className="absolute bottom-24 left-10 text-[#c59b48]/35 pointer-events-none text-[10px]">
        ✦
      </div>

      {/* Realistic Tiny Pressed Flower Decoration in top corner */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 pointer-events-none z-10">
        <div className="relative w-16 h-20 opacity-85 rotate-[12deg] transition-opacity">
          {/* Subtle floral silhouette / pressed botanical illustration */}
          <svg viewBox="0 0 100 120" className="w-full h-full text-[#742520]/60 drop-shadow-[0_2px_4px_rgba(42,27,20,0.12)]">
            <path
              d="M50 110 C 50 80, 48 50, 46 25"
              stroke="#583f32"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Small pressed petals */}
            <path d="M46 25 C 40 15, 30 18, 38 28 Z" fill="#8f322b" opacity="0.8" />
            <path d="M46 25 C 42 12, 54 10, 50 24 Z" fill="#742520" opacity="0.85" />
            <path d="M46 25 C 56 18, 62 26, 49 31 Z" fill="#9e3b33" opacity="0.75" />
            <path d="M46 25 C 52 35, 40 38, 43 27 Z" fill="#69221d" opacity="0.9" />
            {/* Tiny dried stem leaves */}
            <path d="M48 60 C 38 52, 34 62, 48 68 Z" fill="#7a6245" opacity="0.65" />
            <path d="M49 80 C 58 74, 62 82, 49 86 Z" fill="#7a6245" opacity="0.65" />
          </svg>
          {/* Small vintage washi tape holding the pressed flower */}
          <div className="absolute top-8 left-2 w-8 h-3 washi-tape rotate-[-24deg] opacity-70" />
        </div>
      </div>

      {/* Top Header: CHAPTER I & It all started with... */}
      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <span className="text-xs sm:text-sm font-serif-title uppercase tracking-[0.3em] text-[#742520] font-semibold">
            {letterData.chapter}
          </span>

          {!isRevealed && activeLine < totalLines && (
            <span className="text-[11px] text-[#9b8373] flex items-center gap-1 font-serif-title italic hover:text-[#742520] transition-colors">
              <Eye className="w-3 h-3" /> tap to reveal all
            </span>
          )}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif-title font-medium text-[#2a1b14] mt-2 mb-6 sm:mb-8 tracking-wide"
        >
          {letterData.title}
        </motion.h2>
      </div>

      {/* Realistic Journal Letter Body */}
      <div className="relative z-10 flex-1 max-w-xl mx-auto w-full flex flex-col justify-center my-auto py-2">
        {/* Salutation: Dear Pasan, */}
        <AnimatePresence>
          {isLineVisible(0) && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-handwritten text-[#2a1b14] font-semibold mb-5 sm:mb-6 tracking-wide"
            >
              {letterData.recipient}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Letter Paragraphs revealing line by line */}
        <div className="space-y-4 sm:space-y-5">
          {letterData.paragraphs.map((paragraph, idx) => {
            const lineNum = idx + 1;
            const visible = isLineVisible(lineNum);

            return (
              <div key={idx} className="min-h-[2rem]">
                <AnimatePresence>
                  {visible && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="text-xl sm:text-2xl md:text-[25px] font-handwritten text-[#362319] leading-[1.75] tracking-wide"
                    >
                      {paragraph}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Signature: — Anjana ♡ */}
        <div className="mt-8 sm:mt-10 min-h-[3rem] flex items-center justify-end">
          <AnimatePresence>
            {isLineVisible(totalLines) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1 }}
                className="relative inline-flex items-center gap-2"
              >
                <span className="text-2xl sm:text-3xl font-handwritten text-[#742520] font-bold tracking-wider">
                  {letterData.signature}
                </span>

                {/* Tiny subtle sparkle near the signature as requested */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#c59b48] inline-block -mt-3"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-[#c59b48]" />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Footer Details: Tiny "A ♡ P" & Page Turn hint */}
      <div className="relative z-10 pt-4 border-t border-[#c59b48]/20 flex items-center justify-between text-[#8b7262]">
        {/* Tiny "A ♡ P" detail near the bottom as requested */}
        <div className="flex items-center gap-1.5 text-xs font-serif-title tracking-widest text-[#742520]/80">
          <span>A</span>
          <span className="text-[10px] text-[#742520]">♡</span>
          <span>P</span>
          <span className="text-[10px] text-[#c59b48] ml-2 font-handwritten text-sm">7 years</span>
        </div>

        {/* Page indicator & Next hint */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-serif-title tracking-wider uppercase text-[#8e7666]">
            Page 2 of 6
          </span>
          {onNextPage && (
            <button
              id="letter-page-turn-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNextPage();
              }}
              className="text-xs font-serif-title text-[#742520] hover:text-[#94342d] underline underline-offset-4 tracking-wider transition-colors ml-3"
            >
              Turn page →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}