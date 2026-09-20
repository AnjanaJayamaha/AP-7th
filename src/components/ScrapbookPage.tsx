import { useState } from 'react';
import { motion } from 'motion/react';
import { photoMemories } from '../data/journalData';
import { PhotoMemory } from '../types';
import { PhotoModal } from './PhotoModal';
import { Sparkles, Calendar, Maximize2 } from 'lucide-react';

interface ScrapbookPageProps {
  onNextPage?: () => void;
}

export function ScrapbookPage({ onNextPage }: ScrapbookPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoMemory | null>(null);

  // Group photos according to specified layout:
  // 2 medium at top, 1 larger landscape in center, 2 smaller at bottom
  const topPhotos = [photoMemories[0], photoMemories[1]];
  const centerPhoto = photoMemories[2];
  const bottomPhotos = [photoMemories[3], photoMemories[4]];

  return (
    <div
      id="journal-scrapbook-page"
      className="relative w-full h-full min-h-[700px] p-4 sm:p-8 md:p-12 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Background Scrapbook Doodles & Stars */}
      <div className="absolute top-12 left-10 text-[#c59b48]/35 pointer-events-none text-sm">✦</div>
      <div className="absolute top-24 right-16 text-[#c59b48]/25 pointer-events-none text-xs">★</div>
      <div className="absolute bottom-28 left-8 text-[#c59b48]/30 pointer-events-none text-xs">✦</div>
      <div className="absolute bottom-20 right-14 text-[#c59b48]/25 pointer-events-none text-xs">★</div>

      {/* Tiny Hand-Drawn Arrow & Note Doodle */}
      <div className="absolute top-28 right-8 sm:right-16 pointer-events-none hidden sm:block z-10">
        <div className="flex items-center gap-1 text-[#742520]/60 rotate-[6deg]">
          <span className="font-handwritten text-xs sm:text-sm">our memories</span>
          <svg width="24" height="18" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12 Q 18 4, 28 16" strokeLinecap="round" />
            <path d="M22 16 L 28 16 L 27 10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Pressed Flower Scrapbook Decoration */}
      <div className="absolute top-8 left-4 sm:left-6 pointer-events-none z-10">
        <div className="w-12 h-16 opacity-75 rotate-[-15deg]">
          <svg viewBox="0 0 80 100" className="w-full h-full text-[#742520]/50">
            <path d="M40 90 Q 38 50, 42 20" stroke="#684f3c" strokeWidth="1.5" fill="none" />
            <circle cx="42" cy="20" r="10" fill="#9e3b33" opacity="0.75" />
            <circle cx="36" cy="16" r="6" fill="#c59b48" opacity="0.6" />
          </svg>
          <div className="absolute top-6 left-1 w-6 h-2.5 washi-tape-burgundy rotate-[18deg] opacity-70" />
        </div>
      </div>

      {/* Page Header */}
      <div className="relative z-10 text-center max-w-xl mx-auto mb-4 sm:mb-6">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm font-serif-title uppercase tracking-[0.3em] text-[#742520] font-semibold block"
        >
          CHAPTER II
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif-title font-medium text-[#2a1b14] mt-1 tracking-wide"
        >
          Moments We Keep
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-handwritten text-lg sm:text-xl text-[#7a5a48] mt-0.5 tracking-wide"
        >
          A few moments from our seven-year story.
        </motion.p>
      </div>

      {/* Scrapbook Collage Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
        {/* DESKTOP ASYMMETRIC COLLAGE (hidden on tiny screens, flex-col on mobile) */}
        <div className="space-y-4 sm:space-y-6 py-2">

          {/* Top Row: 2 Medium Polaroid Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center">
            {topPhotos.map((photo, i) => (
              <PolaroidCard
                key={photo.id}
                photo={photo}
                delay={0.4 + i * 0.2}
                onSelect={() => setSelectedPhoto(photo)}
                size="medium"
              />
            ))}
          </div>

          {/* Center: 1 Larger Landscape Photo */}
          <div className="flex justify-center px-1 sm:px-6">
            <PolaroidCard
              photo={centerPhoto}
              delay={0.8}
              onSelect={() => setSelectedPhoto(centerPhoto)}
              size="large-landscape"
            />
          </div>

          {/* Bottom Row: 2 Smaller Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 items-center justify-items-center">
            {bottomPhotos.map((photo, i) => (
              <PolaroidCard
                key={photo.id}
                photo={photo}
                delay={1.0 + i * 0.2}
                onSelect={() => setSelectedPhoto(photo)}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-4 border-t border-[#c59b48]/20 flex items-center justify-between text-[#8b7262] mt-4">
        <div className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#742520]/80">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b48]" />
          <span>Click any photograph to enlarge & read note</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-serif-title tracking-wider uppercase text-[#8e7666]">
            Page 3 of 5
          </span>
          {onNextPage && (
            <button
              id="scrapbook-page-turn-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNextPage();
              }}
              className="text-xs font-serif-title text-[#742520] hover:text-[#94342d] underline underline-offset-4 tracking-wider transition-colors"
            >
              Turn page →
            </button>
          )}
        </div>
      </div>

      {/* Photo Lightbox Popup */}
      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
}

interface PolaroidCardProps {
  photo: PhotoMemory;
  delay: number;
  onSelect: () => void;
  size: 'small' | 'medium' | 'large-landscape';
}

function PolaroidCard({ photo, delay, onSelect, size }: PolaroidCardProps) {
  // Determine sizing classes
  const containerClasses = {
    small: 'w-full max-w-[210px] sm:max-w-[240px]',
    medium: 'w-full max-w-[260px] sm:max-w-[290px]',
    'large-landscape': 'w-full max-w-[360px] sm:max-w-[500px]',
  }[size];

  const aspectClass = size === 'large-landscape' ? 'aspect-[16/9]' : 'aspect-square';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative group ${containerClasses}`}
      onClick={onSelect}
    >
      {/* Washi Tape Strip with different color styles & angles */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 z-20 pointer-events-none transition-transform duration-300 ${photo.washiColor === 'burgundy'
            ? 'washi-tape-burgundy'
            : photo.washiColor === 'gold'
              ? 'washi-tape bg-[#e6c986]/70'
              : 'washi-tape'
          }`}
        style={{
          transform: `translateX(-50%) rotate(${photo.washiRotation}deg)`,
        }}
      />

      {/* Polaroid Card Frame */}
      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: 0,
          boxShadow: '0 20px 35px -8px rgba(40, 25, 15, 0.32)',
          transition: { duration: 0.25, ease: "easeOut" }
        }}
        className="polaroid-frame p-2.5 sm:p-3 pb-3 sm:pb-4 rounded-lg cursor-pointer bg-white border border-[#eae2d5]"
        style={{
          transform: `rotate(${photo.rotation}deg)`,
        }}
      >
        {/* Photo Image */}
        <div className={`relative w-full ${aspectClass} overflow-hidden rounded bg-[#1e140e]`}>
          <img
            src={photo.src}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick Enlarge Hint on Hover */}
          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#1b110c]/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>

        {/* Handwritten Polaroid Caption & Date */}
        <div className="pt-2 px-1 text-center">
          <p className="font-handwritten text-base sm:text-lg text-[#322016] font-medium leading-tight line-clamp-2">
            {photo.caption}
          </p>

          {photo.date && (
            <p className="text-[10px] sm:text-[11px] font-serif-title uppercase tracking-wider text-[#a08b7a] mt-1 flex items-center justify-center gap-1">
              <Calendar className="w-3 h-3 text-[#c59b48]" />
              {photo.date}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
