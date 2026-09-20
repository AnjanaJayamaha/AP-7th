import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, X, Maximize2, Award, Camera, CheckCircle2, User } from 'lucide-react';
import { pasanSoloPhotos, pasanBoyfriendDuties } from '../data/pasanDutiesData';
import { BoyfriendDutyItem, PasanSoloPhotoItem } from '../types';

interface CuteBoyPageProps {
    onNextPage?: () => void;
    onPrevPage?: () => void;
}

export function CuteBoyPage({ onNextPage }: CuteBoyPageProps) {
    const [selectedDuty, setSelectedDuty] = useState<BoyfriendDutyItem | null>(null);
    const [selectedSoloPhoto, setSelectedSoloPhoto] = useState<PasanSoloPhotoItem | null>(null);

    return (
        <div
            id="cute-boy-journal-page"
            className="relative w-full h-full min-h-[720px] p-4 sm:p-7 md:p-10 flex flex-col justify-between select-none overflow-x-hidden"
        >
            {/* Background Scrapbook Doodles & Stickers */}
            <div className="absolute top-8 left-8 text-[#c59b48]/30 pointer-events-none text-base">✦</div>
            <div className="absolute top-20 right-10 text-[#742520]/25 pointer-events-none text-sm">★</div>
            <div className="absolute bottom-28 left-6 text-[#742520]/20 pointer-events-none text-xs">♡</div>
            <div className="absolute bottom-16 right-12 text-[#c59b48]/25 pointer-events-none text-sm">✦</div>

            {/* Top Secret Badge / Playful Stamp Doodle */}
            <div className="absolute top-6 right-6 sm:right-10 pointer-events-none z-10 rotate-[8deg]">
                <div className="border border-dashed border-[#742520]/40 bg-[#f4ebd9]/80 px-2.5 py-1 rounded shadow-sm text-center">
                    <span className="text-[10px] font-serif-title uppercase tracking-widest text-[#742520] font-semibold block">
                        CONFIDENTIAL
                    </span>
                    <span className="font-handwritten text-xs text-[#8a332a]">for Pasan's eyes only ♡</span>
                </div>
            </div>

            {/* Main Header Section */}
            <div className="relative z-10 text-center max-w-2xl mx-auto mb-7 sm:mb-9 pt-2">
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#742520]/10 border border-[#742520]/20 text-[#742520] text-xs font-serif-title tracking-[0.2em] uppercase font-medium mb-2"
                >

                    <span>The Secret Dossier</span>

                </motion.div>

                {/* Main Page Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="text-lg sm:text-3xl md:text-4xl font-serif-title font-semibold text-[#2a1b14] tracking-wide flex items-center justify-center gap-2 sm:gap-3"
                >
                    <span>"A quiet collection dedicated to my favorite human in the world."</span>
                    <motion.span
                        animate={{ scale: [1, 1.22, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-[#742520] inline-block"
                    >
                        ♡
                    </motion.span>
                </motion.h2>


            </div>

            {/* ========================================================================= */}
            {/* 1. FIRST: DISPLAY HIS OWN PHOTOS                                          */}
            {/* ========================================================================= */}
            <div className="relative z-10 max-w-4xl mx-auto w-full mb-10">
                <div className="text-center mb-5">
                    <span className="text-[11px] font-serif-title uppercase tracking-[0.25em] text-[#8e7666] font-semibold">
                        Gallery of Him
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-title font-semibold text-[#2a1b14] mt-0.5">
                        The Boy Behind the Smile ✨
                    </h3>
                    <p className="font-handwritten text-base sm:text-lg text-[#664d3d] mt-1">
                        Just him being his handsome, effortless self.
                    </p>
                </div>

                {/* Solo Photos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 px-1">
                    {pasanSoloPhotos.map((photo, index) => (
                        <SoloPolaroidCard
                            key={photo.id}
                            photo={photo}
                            index={index}
                            onSelect={() => setSelectedSoloPhoto(photo)}
                        />
                    ))}
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 2. DIVIDER LINE & TOPIC: BOYFRIEND DUTIES / BABY DOLL TREATMENTS           */}
            {/* ========================================================================= */}
            <div className="relative z-10 max-w-3xl mx-auto w-full my-8 sm:my-12 text-center">
                {/* Handcrafted Divider Line */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c59b48]/70 to-[#742520]/50" />
                    <div className="flex items-center gap-1.5 text-[#742520] px-2 font-serif-title text-sm">
                        <span>✦</span>
                        <span className="text-base">♡</span>
                        <span>✦</span>
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#c59b48]/70 to-[#742520]/50" />
                </div>

                {/* Topic Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1 rounded-full bg-[#742520]/10 border border-[#742520]/25 text-[#742520] text-xs font-serif-title uppercase tracking-[0.2em] font-semibold mb-2"
                >
                    Special Edition • Chapter Archive
                </motion.div>

                {/* Prominent Topic Heading */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl sm:text-2xl md:text-3xl font-serif-title font-semibold text-[#2a1b14] tracking-wide"
                >
                    Baby Doll Treatments from Him ♡
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-handwritten text-lg sm:text-2xl text-[#742520] mt-1.5 font-medium"
                >
                    "When he does his boyfriend duties & takes care of me like his baby doll..."
                </motion.p>

                <p className="text-xs sm:text-sm font-serif-title text-[#8e7666] italic mt-1.5 max-w-md mx-auto">
                    A secretly collected archive of inside jokes, patience tests, and everyday kindness over seven years.
                </p>
            </div>

            {/* ========================================================================= */}
            {/* 3. BOYFRIEND DUTIES PHOTOS GRID (10 CARDS)                                */}
            {/* ========================================================================= */}
            <div className="relative z-10 flex-1 max-w-4xl mx-auto w-full mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 sm:px-2">
                    {pasanBoyfriendDuties.map((duty, index) => (
                        <DutyPolaroidCard
                            key={duty.id}
                            duty={duty}
                            index={index}
                            onSelect={() => setSelectedDuty(duty)}
                        />
                    ))}
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 4. OFFICIAL CERTIFICATE BOX AT BOTTOM                                     */}
            {/* ========================================================================= */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative z-10 max-w-xl mx-auto w-full p-4 sm:p-5 rounded-xl bg-[#fdfaf3] border-2 border-dashed border-[#c59b48]/50 shadow-md text-center my-4 select-text"
            >
                {/* Decorative wax seal badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#742520] text-[#faf6ee] text-[10px] font-serif-title tracking-[0.25em] uppercase flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3 h-3 text-[#e6c986]" />
                    <span>Official Evaluation</span>
                </div>

                <p className="font-handwritten text-xl sm:text-2xl text-[#2a1b14] font-semibold pt-1 leading-snug">
                    "Officially certified:
                    <br />
                    <span className="text-[#742520]">Best Boyfriend Duties — 7 years and counting. ♡</span>"
                </p>

                <div className="mt-3 pt-2 border-t border-[#c59b48]/20 flex items-center justify-between px-2 text-[#7a6454]">
                    <span className="text-[11px] font-serif-title uppercase tracking-widest flex items-center gap-1 text-[#8b6b55]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5e8b4e]" />
                        Grade: A+++ with distinctions
                    </span>

                    <span className="font-handwritten text-base sm:text-lg text-[#6e221d] font-bold">
                        — Your girl, Anjana
                    </span>
                </div>
            </motion.div>

            {/* Page Footer Navigation Hints */}
            <div className="relative z-10 pt-3 border-t border-[#c59b48]/20 flex items-center justify-between text-[#8b7262] mt-2">
                <div className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#742520]/80">
                    <Sparkles className="w-3.5 h-3.5 text-[#c59b48]" />
                    <span>Click any card to read inside-story & enlarge</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-[11px] font-serif-title tracking-wider uppercase text-[#8e7666]">
                        Secret Chapter
                    </span>
                    {onNextPage && (
                        <button
                            id="cute-boy-next-page-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onNextPage();
                            }}
                            className="text-xs font-serif-title text-[#742520] hover:text-[#94342d] underline underline-offset-4 tracking-wider transition-colors"
                        >
                            Turn to Memories →
                        </button>
                    )}
                </div>
            </div>

            {/* Enlarged Photo & Story Lightbox for Duties */}
            <AnimatePresence>
                {selectedDuty && (
                    <DutyDetailModal
                        duty={selectedDuty}
                        onClose={() => setSelectedDuty(null)}
                    />
                )}
            </AnimatePresence>

            {/* Enlarged Lightbox for Solo Photos */}
            <AnimatePresence>
                {selectedSoloPhoto && (
                    <SoloPhotoDetailModal
                        photo={selectedSoloPhoto}
                        onClose={() => setSelectedSoloPhoto(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

// 1. Solo Polaroid Card Component
interface SoloPolaroidCardProps {
    photo: PasanSoloPhotoItem;
    index: number;
    onSelect: () => void;
}

function SoloPolaroidCard({ photo, index, onSelect }: SoloPolaroidCardProps) {
    const [imageLoaded, setImageLoaded] = useState(true);

    const washiClasses = {
        burgundy: 'washi-tape-burgundy',
        gold: 'washi-tape bg-[#e6c986]/70',
        kraft: 'washi-tape'
    }[photo.washiColor];

    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
            whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 20,
                boxShadow: '0 18px 30px -8px rgba(40, 25, 15, 0.35)',
                transition: { duration: 0.22, ease: 'easeOut' }
            }}
            onClick={onSelect}
            className="relative group cursor-pointer"
            style={{
                transform: `rotate(${photo.rotation}deg)`
            }}
        >
            {/* Tape strip */}
            <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 z-20 pointer-events-none transition-transform duration-300 ${washiClasses}`}
                style={{
                    transform: `translateX(-50%) rotate(${photo.rotation * -1.3}deg)`
                }}
            />

            {/* Polaroid Frame */}
            <div className="polaroid-frame p-3 pb-3.5 rounded-lg bg-white border border-[#eae2d5] flex flex-col justify-between h-full">
                {/* Portrait Photo Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded bg-[#1e140e]">
                    {imageLoaded ? (
                        <img
                            src={photo.image}
                            alt={photo.title}
                            onError={() => setImageLoaded(false)}
                            className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#f3ece0] text-[#7a6454] p-3 text-center">
                            <User className="w-8 h-8 text-[#c59b48] mb-1.5" />
                            <span className="font-handwritten text-sm text-[#742520] font-semibold">{photo.title}</span>
                            <span className="text-[9px] font-serif-title uppercase text-[#9e8878] mt-1">
                                Drop in {photo.image}
                            </span>
                        </div>
                    )}

                    {/* Quick Enlarge Hint on Hover */}
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#1b110c]/65 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3" />
                    </div>

                    {/* Sticker Pill */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#faf5ec]/90 backdrop-blur-xs text-[#5e221d] text-[10px] font-handwritten font-semibold border border-[#d6c5b0] shadow-xs rotate-[-2deg]">
                        {photo.tag}
                    </div>
                </div>

                {/* Text Area */}
                <div className="pt-2 px-1 text-center">
                    <h4 className="font-serif-title font-semibold text-sm text-[#2a1b14] leading-snug group-hover:text-[#742520] transition-colors">
                        {photo.title}
                    </h4>
                    <p className="font-handwritten text-sm sm:text-base text-[#5a4335] leading-snug line-clamp-2 mt-0.5">
                        {photo.caption}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// 2. Duty Polaroid Card Component
interface DutyPolaroidCardProps {
    duty: BoyfriendDutyItem;
    index: number;
    onSelect: () => void;
}

function DutyPolaroidCard({ duty, index, onSelect }: DutyPolaroidCardProps) {
    const [imageLoaded, setImageLoaded] = useState(true);

    const washiClasses = {
        burgundy: 'washi-tape-burgundy',
        gold: 'washi-tape bg-[#e6c986]/70',
        kraft: 'washi-tape'
    }[duty.washiColor];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
            whileHover={{
                scale: 1.03,
                rotate: 0,
                zIndex: 20,
                boxShadow: '0 20px 35px -8px rgba(40, 25, 15, 0.35)',
                transition: { duration: 0.25, ease: 'easeOut' }
            }}
            onClick={onSelect}
            className="relative group cursor-pointer"
            style={{
                transform: `rotate(${duty.rotation}deg)`
            }}
        >
            {/* Washi tape strip at top */}
            <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 z-20 pointer-events-none transition-transform duration-300 ${washiClasses}`}
                style={{
                    transform: `translateX(-50%) rotate(${duty.rotation * -1.2}deg)`
                }}
            />

            {/* Card Body (Polaroid style) */}
            <div className="polaroid-frame p-3 pb-4 rounded-lg bg-white border border-[#eae2d5] flex flex-col justify-between h-full">
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded bg-[#1e140e]">
                    {imageLoaded ? (
                        <img
                            src={duty.image}
                            alt={duty.title}
                            onError={() => setImageLoaded(false)}
                            className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#f3ece0] text-[#7a6454] p-3 text-center">
                            <Camera className="w-7 h-7 text-[#c59b48] mb-1" />
                            <span className="font-handwritten text-sm text-[#742520]">Add {duty.dutyNumber} photo</span>
                            <span className="text-[10px] font-serif-title uppercase text-[#9e8878] mt-0.5">
                                {duty.image}
                            </span>
                        </div>
                    )}

                    {/* Quick Enlarge Hint on Hover */}
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#1b110c]/65 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3" />
                    </div>

                    {/* Playful sticker pill in photo corner */}
                    {duty.stickerText && (
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#faf5ec]/90 backdrop-blur-xs text-[#5e221d] text-[10px] font-handwritten font-semibold border border-[#d6c5b0] shadow-xs rotate-[-2deg]">
                            {duty.stickerText}
                        </div>
                    )}
                </div>

                {/* Text Area */}
                <div className="pt-2.5 px-1 flex-1 flex flex-col justify-between">
                    <div>
                        {/* Duty Number Badge */}
                        <div className="flex items-center justify-between text-[11px] font-serif-title uppercase tracking-widest text-[#94342d] font-semibold mb-1">
                            <span>{duty.dutyNumber}</span>
                            <span className="text-[#c59b48] text-xs">★</span>
                        </div>

                        {/* Funny Title */}
                        <h4 className="font-serif-title font-semibold text-sm sm:text-base text-[#2a1b14] leading-snug mb-1.5 group-hover:text-[#742520] transition-colors">
                            {duty.title}
                        </h4>
                    </div>

                    {/* Handwritten Caption */}
                    <p className="font-handwritten text-base sm:text-lg text-[#5a4335] leading-snug line-clamp-3 mt-1">
                        {duty.caption}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// 3. Detail Lightbox Modal for Duties
interface DutyDetailModalProps {
    duty: BoyfriendDutyItem;
    onClose: () => void;
}

function DutyDetailModal({ duty, onClose }: DutyDetailModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#160d09]/80 backdrop-blur-[3px]"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-lg bg-[#faf6ee] rounded-2xl p-5 sm:p-7 shadow-2xl border border-[#e4d6c3] max-h-[92vh] overflow-y-auto no-scrollbar"
                style={{
                    backgroundImage: `
            radial-gradient(#dacbb7 0.65px, transparent 0.65px),
            linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(246,238,225,0.9))
          `,
                    backgroundSize: '24px 24px, 100% 100%'
                }}
            >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape-burgundy rotate-[0.5deg] z-20" />

                <button
                    onClick={onClose}
                    title="Close note"
                    className="absolute top-3 right-3 p-1.5 rounded-full text-[#7a5a48] hover:text-[#2a1b14] hover:bg-[#ede0ce] transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center pt-2 pb-3 border-b border-[#c59b48]/25">
                    <span className="text-xs font-serif-title uppercase tracking-[0.25em] text-[#742520] font-semibold">
                        {duty.dutyNumber}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-title font-semibold text-[#2a1b14] mt-1 leading-snug">
                        {duty.title}
                    </h3>
                </div>

                <div className="my-4 relative rounded-xl overflow-hidden border border-[#d6c5b0] bg-[#221610] shadow-md">
                    <img
                        src={duty.image}
                        alt={duty.title}
                        className="w-full max-h-[340px] sm:max-h-[380px] object-contain mx-auto"
                    />
                    {duty.stickerText && (
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#faf5ec]/95 text-[#742520] text-xs font-handwritten font-bold border border-[#d6c5b0] shadow-sm">
                            {duty.stickerText}
                        </div>
                    )}
                </div>

                <div className="space-y-3 bg-[#fdfaf3] p-4 rounded-xl border border-[#e8dccb]">
                    <div>

                        <p className="font-handwritten text-lg sm:text-xl text-[#3a2519] leading-relaxed">
                            "{duty.caption}"
                        </p>
                    </div>

                    {duty.insideJokeNote && (
                        <div className="pt-2 border-t border-[#c59b48]/20">
                            <span className="text-[10px] font-serif-title uppercase tracking-widest text-[#742520] block font-medium">
                                Anjana's Secret Commentary:
                            </span>
                            <p className="font-handwritten text-base sm:text-lg text-[#614534] leading-relaxed mt-0.5">
                                {duty.insideJokeNote}
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#c59b48]/25 flex items-center justify-between text-xs text-[#8e7666] font-serif-title">
                    <span className="flex items-center gap-1 text-[#742520]">
                        <Heart className="w-3.5 h-3.5 fill-current" />
                    </span>
                    <button
                        onClick={onClose}
                        className="underline underline-offset-2 hover:text-[#2a1b14]"
                    >
                        Back to scrapbook
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

// 4. Detail Lightbox Modal for Solo Photos
interface SoloPhotoDetailModalProps {
    photo: PasanSoloPhotoItem;
    onClose: () => void;
}

function SoloPhotoDetailModal({ photo, onClose }: SoloPhotoDetailModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#160d09]/80 backdrop-blur-[3px]"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-md bg-[#faf6ee] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#e4d6c3] max-h-[92vh] overflow-y-auto no-scrollbar"
                style={{
                    backgroundImage: `
            radial-gradient(#dacbb7 0.65px, transparent 0.65px),
            linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(246,238,225,0.9))
          `,
                    backgroundSize: '24px 24px, 100% 100%'
                }}
            >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 washi-tape-burgundy rotate-[-0.8deg] z-20" />

                <button
                    onClick={onClose}
                    title="Close note"
                    className="absolute top-3 right-3 p-1.5 rounded-full text-[#7a5a48] hover:text-[#2a1b14] hover:bg-[#ede0ce] transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center pt-2 pb-2 border-b border-[#c59b48]/25">
                    <span className="text-xs font-serif-title uppercase tracking-[0.25em] text-[#742520] font-semibold">
                        {photo.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-title font-semibold text-[#2a1b14] mt-1">
                        {photo.title}
                    </h3>
                </div>

                <div className="my-4 relative rounded-xl overflow-hidden border border-[#d6c5b0] bg-[#221610] shadow-md">
                    <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full max-h-[380px] object-contain mx-auto"
                    />
                </div>

                <div className="bg-[#fdfaf3] p-4 rounded-xl border border-[#e8dccb] text-center">
                    <p className="font-handwritten text-lg sm:text-xl text-[#3a2519] leading-relaxed">
                        "{photo.caption}"
                    </p>
                    {photo.date && (
                        <span className="text-[11px] font-serif-title text-[#947c6b] block mt-2 uppercase tracking-wider">
                            {photo.date} • with all my love ♡
                        </span>
                    )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#c59b48]/25 flex items-center justify-between text-xs text-[#8e7666] font-serif-title">
                    <span className="text-[#742520] flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-current" />
                        <span>Pasan</span>
                    </span>
                    <button
                        onClick={onClose}
                        className="underline underline-offset-2 hover:text-[#2a1b14]"
                    >
                        Back to scrapbook
                    </button>
                </div>
            </motion.div>
        </div>
    );
}