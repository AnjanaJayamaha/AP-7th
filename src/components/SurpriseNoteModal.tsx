import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';

interface SurpriseNoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Lines of the emotional note to be revealed sequentially
const NOTE_PARAGRAPHS = [
    {
        lines: [
            "I’m sorry I couldn’t give you the surprise I had planned for July 25.",
            "I really wanted to make that day extra special for you,",
            "but somehow time slipped away from me."
        ]
    },
    {
        lines: [
            "So… this may be a little late,",
            "but the love behind it isn’t. ♡"
        ]
    },
    {
        lines: [
            "Thank you for being part of my life for all these years,",
            "and for making even the simplest moments feel special."
        ]
    },
    {
        lines: [
            "Happy 7th Anniversary, Luv."
        ],
        highlight: true
    },
    {
        lines: [
            "A little late, but always from my heart. ♡"
        ]
    }
];

export function SurpriseNoteModal({ isOpen, onClose }: SurpriseNoteModalProps) {
    // Flatten paragraphs into an array of indexed lines for typing
    const allLines: { pIdx: number; lIdx: number; text: string; highlight?: boolean }[] = [];
    NOTE_PARAGRAPHS.forEach((p, pIdx) => {
        p.lines.forEach((l, lIdx) => {
            allLines.push({ pIdx, lIdx, text: l, highlight: p.highlight });
        });
    });

    // State to track typed characters per line
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showSignature, setShowSignature] = useState(false);
    const [showPostscript, setShowPostscript] = useState(false);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Reset states when opening
    useEffect(() => {
        if (isOpen) {
            setCurrentLineIndex(0);
            setCurrentCharIndex(0);
            setIsFinished(false);
            setShowSignature(false);
            setShowPostscript(false);
        } else {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [isOpen]);

    // Typing effect engine
    useEffect(() => {
        if (!isOpen || isFinished) return;

        if (currentLineIndex < allLines.length) {
            const activeTargetText = allLines[currentLineIndex].text;

            if (currentCharIndex < activeTargetText.length) {
                // Typing character by character
                const char = activeTargetText[currentCharIndex];
                const delay = char === ',' || char === '…' ? 140 : char === '.' ? 180 : 28;

                timerRef.current = setTimeout(() => {
                    setCurrentCharIndex((prev) => prev + 1);
                }, delay);
            } else {
                // Line completed, pause briefly before next line
                timerRef.current = setTimeout(() => {
                    setCurrentLineIndex((prev) => prev + 1);
                    setCurrentCharIndex(0);
                }, 220);
            }
        } else {
            // All body lines finished typing!
            setIsFinished(true);
            timerRef.current = setTimeout(() => {
                setShowSignature(true);
                timerRef.current = setTimeout(() => {
                    setShowPostscript(true);
                }, 600);
            }, 350);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isOpen, currentLineIndex, currentCharIndex, isFinished, allLines]);

    // Quick skip / tap to reveal all instantly
    const handleInstantReveal = () => {
        if (!isFinished) {
            if (timerRef.current) clearTimeout(timerRef.current);
            setCurrentLineIndex(allLines.length);
            setCurrentCharIndex(0);
            setIsFinished(true);
            setShowSignature(true);
            setShowPostscript(true);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    id="surprise-note-backdrop"
                    className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 select-none"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {/* Dimmed backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-[#160d09]/75 backdrop-blur-[3px]"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                    />

                    {/* Floating heart particles in background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{
                                    y: [-30, -180],
                                    x: [0, (i % 2 === 0 ? 30 : -30)],
                                    opacity: [0, 0.45, 0]
                                }}
                                transition={{
                                    duration: 5 + i * 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.9,
                                    ease: "easeInOut"
                                }}
                                className="absolute text-[#94342d]/40 text-sm"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    bottom: '15%'
                                }}
                            >
                                ♥
                            </motion.div>
                        ))}
                    </div>

                    {/* Handwritten Journal Note Card */}
                    <motion.div
                        id="surprise-note-modal"
                        initial={{ opacity: 0, scale: 0.88, rotate: -2, y: 25 }}
                        animate={{ opacity: 1, scale: 1, rotate: -0.5, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotate: 1, y: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleInstantReveal();
                        }}
                        className="relative w-full max-w-[460px] max-h-[90vh] overflow-y-auto no-scrollbar bg-[#faf5ec] text-[#2c1d15] rounded-xl p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(20,10,5,0.65)] border border-[#e4d6c3] cursor-default"
                        style={{
                            backgroundImage: `
                radial-gradient(#dacbb7 0.65px, transparent 0.65px),
                linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(246,238,225,0.9))
              `,
                            backgroundSize: '24px 24px, 100% 100%'
                        }}
                    >
                        {/* Antique Washi tape at top center */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 washi-tape-burgundy rotate-[0.8deg] z-20 opacity-85 shadow-sm" />

                        {/* Tiny pressed flower detail in top-left corner */}
                        <div className="absolute top-3 left-3.5 opacity-70 pointer-events-none z-10 flex items-center gap-1">
                            <svg width="22" height="26" viewBox="0 0 40 50" fill="none">
                                <path d="M20 48 Q 18 28, 20 12" stroke="#684f3c" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="20" cy="12" r="6.5" fill="#882b25" opacity="0.8" />
                                <circle cx="16" cy="10" r="4" fill="#c59b48" opacity="0.75" />
                                <path d="M19 28 Q 12 24, 11 20" stroke="#684f3c" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M20 34 Q 27 30, 29 27" stroke="#684f3c" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Top Right: Tiny "July 25" handwritten date */}
                        <div className="absolute top-3.5 right-11 pointer-events-none text-right">
                            <div className="inline-block border border-[#882b25]/30 rounded-full px-2 py-0.5 bg-[#f5ecdd]/60">
                                <span className="font-handwritten text-xs sm:text-sm text-[#882b25] tracking-wide font-medium">
                                    July 25 ♡
                                </span>
                            </div>
                        </div>

                        {/* Close Button ("X") */}
                        <button
                            id="close-surprise-note-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            title="Close note"
                            className="absolute top-3 right-3 p-1.5 rounded-full text-[#7a5a48] hover:text-[#2a1b14] hover:bg-[#ede0ce] transition-colors z-20"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Note Header */}
                        <div className="pt-3 sm:pt-4 pb-2 border-b border-[#c59b48]/25 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                                <span className="text-[#882b25] text-sm">✦</span>
                                <h3 className="font-handwritten text-2xl sm:text-[26px] font-semibold text-[#6e221d] tracking-wide">
                                    A little note from me ♡
                                </h3>
                                <span className="text-[#882b25] text-sm">✦</span>
                            </div>
                            <p className="text-[10px] font-serif-title uppercase tracking-widest text-[#947c6b] mt-0.5">
                                personal keepsake • from Anjana
                            </p>
                        </div>

                        {/* Handwritten Message Body */}
                        <div className="py-4 sm:py-5 space-y-3.5 text-[#2c1b12] text-base sm:text-lg font-handwritten leading-relaxed">
                            {NOTE_PARAGRAPHS.map((paragraph, pIdx) => (
                                <div key={pIdx} className="space-y-1">
                                    {paragraph.lines.map((line, lIdx) => {
                                        // Find flat index
                                        const flatIdx = allLines.findIndex((l) => l.pIdx === pIdx && l.lIdx === lIdx);

                                        let renderedText = "";
                                        let isCurrentlyTypingThisLine = false;

                                        if (flatIdx < currentLineIndex) {
                                            // Already finished typing this line
                                            renderedText = line;
                                        } else if (flatIdx === currentLineIndex) {
                                            // Currently typing this line
                                            renderedText = line.substring(0, currentCharIndex);
                                            isCurrentlyTypingThisLine = true;
                                        } else {
                                            // Haven't reached this line yet
                                            renderedText = "";
                                        }

                                        if (!renderedText && !isCurrentlyTypingThisLine) {
                                            return null;
                                        }

                                        const isHighlight = paragraph.highlight;

                                        return (
                                            <p
                                                key={lIdx}
                                                className={`${isHighlight
                                                    ? 'text-lg sm:text-xl font-semibold text-[#742520] pt-1'
                                                    : 'text-[#382419]'
                                                    }`}
                                            >
                                                <span>{renderedText}</span>
                                                {isCurrentlyTypingThisLine && (
                                                    <motion.span
                                                        animate={{ opacity: [1, 0, 1] }}
                                                        transition={{ duration: 0.7, repeat: Infinity }}
                                                        className="inline-block w-[2px] h-4 bg-[#882b25] ml-0.5 align-middle"
                                                    />
                                                )}
                                            </p>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Signature Area */}
                        <div className="pt-2 flex flex-col items-end">
                            <AnimatePresence>
                                {showSignature && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-right pr-2"
                                    >
                                        <span className="font-handwritten text-xl sm:text-2xl font-bold text-[#6e221d] block">
                                            — Kehlan
                                        </span>
                                        <span className="text-[11px] font-serif-title text-[#947c6b] italic tracking-wide block mt-0.5">
                                            with all my love
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Bottom Special Sentiment & Subtle Floating Heart */}
                        <div className="mt-4 pt-3 border-t border-[#c59b48]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7e6555] font-handwritten">
                            {showPostscript ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.9 }}
                                    className="w-full flex items-center justify-between gap-2"
                                >
                                    <span className="text-sm sm:text-base text-[#882b25] font-medium flex items-center gap-1">
                                        <span>I still wanted you to have this. ♡</span>
                                        <motion.span
                                            animate={{
                                                scale: [1, 1.25, 1],
                                                rotate: [0, 6, -6, 0]
                                            }}
                                            transition={{
                                                duration: 2.2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="inline-block text-[#882b25]"
                                        >
                                            ♥
                                        </motion.span>
                                    </span>


                                </motion.div>
                            ) : (
                                <div className="w-full flex items-center justify-between text-[11px] font-serif-title text-[#a08b7a]">
                                    <span className="italic">writing from the heart...</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleInstantReveal();
                                        }}
                                        className="text-[10px] uppercase tracking-wider text-[#882b25] hover:underline"
                                    >
                                        Reveal all
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}