import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen } from 'lucide-react';
import { coverData } from '../data/journalData';
import { SurpriseNoteModal } from './SurpriseNoteModal';

interface CoverPageProps {
  onOpen: () => void;
}

export function CoverPage({ onOpen }: CoverPageProps) {
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  return (
    <div
      id="journal-cover-page"
      className="relative w-full h-full min-h-[640px] md:min-h-[700px] flex flex-col items-center justify-between p-6 sm:p-10 md:p-14 text-center cursor-pointer select-none overflow-hidden"
      onClick={() => {
        if (!isNoteOpen) {
          onOpen();
        }
      }}
    >
      {/* Background Video with Blur */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-[3px] opacity-70 scale-105"
        >
          <source src="/images/2.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#1c120c]/40" />
      </div>

      {/* Background vintage frame & decorative borders */}
      <div className="absolute inset-3 sm:inset-5 border border-[#c59b48]/30 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-5 sm:inset-7 border border-[#c59b48]/15 rounded-xl pointer-events-none z-0" />

      {/* Antique corner accents */}
      <div className="absolute top-6 left-6 text-[#c59b48]/40 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M2 26V2H26" strokeWidth="1.5" />
          <circle cx="6" cy="6" r="2.5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 text-[#c59b48]/40 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M26 26V2H2" strokeWidth="1.5" />
          <circle cx="22" cy="6" r="2.5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 text-[#c59b48]/40 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M2 2V26H26" strokeWidth="1.5" />
          <circle cx="6" cy="22" r="2.5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 text-[#c59b48]/40 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor">
          <path d="M26 2V26H2" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Floating subtle ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: [-20, -120],
              x: [0, (i % 2 === 0 ? 25 : -25)],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
            className="absolute text-[#c59b48]/40 text-xs"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '10%'
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="relative z-10 pt-4"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#e6c986] mt-2 font-serif-title drop-shadow-md">
          {coverData.anniversaryYear}
        </p>
      </motion.div>

      {/* Centerpiece: Side-by-Side Layout */}
      <div className="relative z-10 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-12 py-6">

        {/* Left Side: Title & Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 max-w-sm">
          {/* Main Title: ANJANA ♥ PASAN */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif-title font-semibold tracking-wide text-[#faf6ee] flex flex-col md:flex-row items-center md:items-baseline gap-2 drop-shadow-lg"
          >
            <span>ANJANA</span>
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                filter: ["drop-shadow(0 0 0px #742520)", "drop-shadow(0 0 8px rgba(255,100,100,0.6))", "drop-shadow(0 0 0px #742520)"]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#ff5c5c] inline-block mx-2 text-2xl md:text-4xl"
            >
              ♥
            </motion.span>
            <span>PASAN</span>
          </motion.h1>

          {/* Delicate Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="text-xs md:text-sm text-[#e6c986] font-serif-title italic mt-2 mb-6 leading-relaxed drop-shadow"
          >
            {coverData.subtitle}
          </motion.p>

          {/* Bottom Action Prompt: "Open our story →" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center md:items-start w-full"
          >
            <button
              id="open-story-button"
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-[#742520]/90 hover:bg-[#882b25] backdrop-blur-sm text-[#faf6ee] font-serif-title tracking-wider text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#c59b48]/60"
            >
              <span>{coverData.buttonPrompt}</span>
              <BookOpen className="w-4 h-4 text-[#e8c983] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Small Handcrafted Heart Surprise Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-6 flex flex-col items-center md:items-start select-none ml-0 md:ml-4"
            >
              <div className="flex items-center gap-3">
                <motion.button
                  id="open-surprise-note-btn"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsNoteOpen(true);
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  animate={{
                    y: [0, -3, 0],
                    filter: [
                      "drop-shadow(0 2px 6px rgba(255,100,100,0.3))",
                      "drop-shadow(0 4px 12px rgba(255,100,100,0.6))",
                      "drop-shadow(0 2px 6px rgba(255,100,100,0.3))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="group relative cursor-pointer focus:outline-none flex items-center justify-center"
                  title="Open a secret note"
                >
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 100 95" className="w-full h-full text-[#b3352d] group-hover:text-[#ff5c5c] transition-colors">
                      <path d="M50,88 C44,81 12,56 6,36 C-1,16 14,3 32,5 C42,6 47,15 50,19 C53,15 58,6 68,5 C86,3 101,16 94,36 C88,56 56,81 50,88 Z" fill="currentColor" stroke="#e8c983" strokeWidth="2.8" strokeDasharray="4 3" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[#faebd7] text-sm font-handwritten select-none pb-0.5 pointer-events-none group-hover:scale-110 transition-transform">
                      ♡
                    </span>
                  </div>
                </motion.button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsNoteOpen(true);
                  }}
                  className="font-handwritten text-sm md:text-base text-[#000] hover:text-[#ffffff] transition-colors tracking-wide cursor-pointer focus:outline-none"
                >
                  Click my Heart ♡
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Image with Animations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="relative flex items-center justify-center h-[220px] md:h-[280px] w-full max-w-[180px] md:max-w-[220px]"
        >
          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative w-full aspect-[4/5] bg-white/10 backdrop-blur-md p-2.5 rounded-xl shadow-2xl border border-[#e8c983]/40 rotate-[-2deg] transition-all duration-500 z-20"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 washi-tape rotate-[-1.5deg] z-20 opacity-90" />
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-[#f4eee6]/50">
              <img src="/images/9.jpeg" alt="Anjana and Pasan" className="w-full h-full object-cover filter contrast-[1.05] brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b14]/40 to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-4 right-2 rotate-[-8deg] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-[#e8c983]/30">
              <span className="font-handwritten text-[#742520] text-lg font-bold">us ♡</span>
            </div>
          </motion.div>

          {/* Floating animated hearts around the image */}
          <motion.div
            animate={{ y: [-10, -40], opacity: [0, 1, 0], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-4 right-[-10%] text-[#ff5c5c] text-xl z-30 pointer-events-none drop-shadow-md"
          >
            ❤
          </motion.div>
          <motion.div
            animate={{ y: [0, -50], opacity: [0, 0.8, 0], scale: [0.6, 1.1, 0.6], x: [0, -15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-[-15%] text-[#e8c983] text-lg z-30 pointer-events-none drop-shadow-md"
          >
            ♥
          </motion.div>
        </motion.div>
      </div>

      {/* The Handwritten Surprise Note Modal */}
      <SurpriseNoteModal
        isOpen={isNoteOpen}
        onClose={() => setIsNoteOpen(false)}
      />
    </div>
  );
}