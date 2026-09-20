import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Heart } from 'lucide-react';
import { PhotoMemory } from '../types';

interface PhotoModalProps {
  photo: PhotoMemory | null;
  onClose: () => void;
}

export function PhotoModal({ photo, onClose }: PhotoModalProps) {
  return (
    <AnimatePresence>
      {photo && (
        <div
          id="photo-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#140c09]/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Floating Physical Photograph */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20, rotate: photo.rotation * 1.5 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-lg bg-white p-4 sm:p-6 rounded-xl shadow-2xl border border-[#e5dacf] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Washi Tape top anchor */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape rotate-[-1deg] shadow-sm z-20" />

            {/* Close Button */}
            <button
              id="photo-modal-close-btn"
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#362319]/10 hover:bg-[#742520] text-[#362319] hover:text-white flex items-center justify-center transition-colors z-20"
              aria-label="Close photograph view"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo frame container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#20140e]">
              <img
                src={photo.src}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98]"
              />
              <img
                src="/images/3.jpeg"
                alt="Extra image 1"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] mt-2"
              />
              <img
                src="/images/7.jpeg"
                alt="Extra image 2"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] mt-2"
              />
              <img
                src="/images/12.jpeg"
                alt="Extra image 3"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] mt-2"
              />
              <img
                src="/images/25.jpeg"
                alt="Extra image 4"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] mt-2"
              />
            </div>

            {/* Polaroid Handwritten Caption Section */}
            <div className="pt-4 pb-1 text-center">
              <h3 className="text-xl sm:text-2xl font-serif-title font-semibold text-[#2a1b14]">
                {photo.title}
              </h3>

              <p className="font-handwritten text-xl sm:text-2xl text-[#523b2e] mt-1 leading-relaxed">
                "{photo.caption}"
              </p>

              {photo.extendedNote && (
                <p className="text-xs sm:text-sm text-[#7a6454] font-serif-title italic mt-2 px-2 border-t border-[#f0e8d8] pt-2">
                  {photo.extendedNote}
                </p>
              )}

              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-[#a08b7b] font-serif-title uppercase tracking-wider">
                {photo.date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#c59b48]" />
                    {photo.date}
                  </span>
                )}
                <span>•</span>
                <span className="flex items-center gap-1 text-[#742520]">
                  <Heart className="w-3 h-3 fill-[#742520]" />
                  Anjana & Pasan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
