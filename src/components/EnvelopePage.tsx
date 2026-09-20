import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RotateCcw, Award } from 'lucide-react';

interface EnvelopePageProps {
  onRestart: () => void;
}

export function EnvelopePage({ onRestart }: EnvelopePageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Shoot romantic golden and burgundy confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#742520', '#c59b48', '#f5e5c9', '#e8a598']
        });
      } catch {
        // Safe fallback
      }
    }
  };

  return (
    <div
      id="journal-envelope-page"
      className="relative w-full h-full min-h-[700px] p-4 sm:p-8 md:p-12 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Background Decorative Flourishes */}
      <div className="absolute top-10 left-10 text-[#c59b48]/30 pointer-events-none text-xs">✦</div>
      <div className="absolute top-16 right-12 text-[#c59b48]/25 pointer-events-none text-xs">★</div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-xl mx-auto mb-2">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm font-serif-title uppercase tracking-[0.3em] text-[#742520] font-semibold block"
        >
          FOREVER
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif-title font-medium text-[#2a1b14] mt-1 tracking-wide"
        >
          To My Loving Partner,
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-handwritten text-lg sm:text-xl text-[#7a5a48] mt-0.5 tracking-wide"
        >
          Seven years down, a lifetime of tomorrows to go.
        </motion.p>
      </div>

      {/* Center Interactive Envelope / Love Vows */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-4 max-w-xl mx-auto w-full">
        {!isOpen ? (
          /* Sealed Envelope Mode */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            onClick={handleOpenEnvelope}
            className="w-full max-w-md bg-[#eadecc] p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#c4b39e] cursor-pointer text-center relative overflow-hidden group"
          >
            {/* Envelope flap lines */}
            <div className="absolute inset-x-0 top-0 h-28 border-b border-[#c4b39e] bg-[#e3d5c2] [clip-path:polygon(0_0,100%_0,50%_100%)] shadow-sm" />

            {/* Wax Seal Centerpiece */}
            <div className="relative z-20 my-10 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-[#742520] border-2 border-[#94342d] shadow-xl flex items-center justify-center text-[#f7e6c4] cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full border border-dashed border-[#e6c986]/60 flex flex-col items-center justify-center">
                  <span className="font-serif-title font-bold text-lg tracking-widest">A ♥ P</span>
                </div>
              </motion.div>

              <div className="mt-5 space-y-1">
                <p className="font-serif-title text-base sm:text-lg font-semibold text-[#3a261a]">
                  A Letter for Pasan's Eyes Only
                </p>
                <p className="font-handwritten text-base text-[#742520] font-medium">
                  Tap to break the wax seal & unfold my promise
                </p>
              </div>
            </div>

            {/* Vintage Postmark Stamp */}
            <div className="absolute bottom-4 right-4 border border-[#742520]/40 rounded-full w-14 h-14 flex flex-col items-center justify-center text-[#742520]/60 rotate-[-12deg] text-[9px] font-serif-title pointer-events-none">
              <span>SPECIAL</span>
            </div>
          </motion.div>
        ) : (
          /* Unfolded Vow Paper */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full bg-[#fcfaf5] p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#decbb8] text-center relative"
            >
              <div className="w-16 h-4 washi-tape-burgundy absolute -top-2 left-1/2 -translate-x-1/2 rotate-[-1deg]" />

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#742520]/10 text-[#742520] text-xs font-serif-title tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Happy 7th Anniversary, My Dearest Pasan</span>
              </div>

              {/* Sinhala Deep Affection Message */}
              <div className="my-3 py-2 px-3 bg-[#faf3e8] rounded-xl border border-[#e8d7c0]">
                <p className="font-sinhala text-base sm:text-lg text-[#742520] font-semibold leading-relaxed">
                  " පසන්... ඔබයි මගේ සදාකාලික ආදරය!"
                </p>
                <p className="text-xs text-[#705646] font-serif-title italic mt-1">
                  (I love you with all my heart, Pasan... You are my forever.)
                </p>
              </div>

              {/* Emotional Promise */}
              <p className="font-handwritten text-xl sm:text-2xl text-[#362319] leading-relaxed my-4">
                Thank you for loving me at my best, and protecting me at my worst. You are the kindest soul, my greatest adventure, and my eternal home.
              </p>

              <div className="pt-2 border-t border-[#ebd8c5] flex items-center justify-between">
                <span className="text-xs font-serif-title text-[#96722c] uppercase tracking-widest">
                  A ♡ P • Forever
                </span>
                <span className="font-handwritten text-2xl text-[#742520] font-bold">
                  Yours Always, Anjiii ♡
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-3 border-t border-[#c59b48]/20 flex items-center justify-between text-[#8b7262] mt-2">
        <button
          id="restart-journal-btn"
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 text-xs font-serif-title text-[#742520] hover:text-[#94342d] transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Read from the beginning</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs font-serif-title text-[#742520]">
          <Heart className="w-3.5 h-3.5 fill-[#742520]" />
          <span>Anjana & Pasan</span>
        </div>
      </div>
    </div>
  );
}
