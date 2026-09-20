import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { journeyCards } from '../data/journalData';
import { Sparkles, Play, Pause, RotateCw, Image as ImageIcon, X } from 'lucide-react';

interface JourneyCardsPageProps {
  onNextPage?: () => void;
}

function resolveImageUrl(rawUrl?: string): string {
  if (!rawUrl) return '/images/37.jpeg';
  let clean = rawUrl.trim();
  // Strip accidental 'public/' prefix if user wrote public/assets/...
  if (clean.startsWith('public/')) {
    clean = '/' + clean.slice('public/'.length);
  }
  if (!clean.startsWith('/') && !clean.startsWith('http')) {
    clean = '/' + clean;
  }
  return clean;
}

export function JourneyCardsPage({ onNextPage }: JourneyCardsPageProps) {
  // Continuous 3D rotation angles (horizontal and vertical)
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(-10);
  const [isAutoSpinning, setIsAutoSpinning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragStartAngle = useRef<{ rotY: number; rotX: number }>({ rotY: 0, rotX: -10 });
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  const totalCards = journeyCards.length;

  // Precompute Fibonacci sphere distribution (evenly distributed 3D sphere points)
  const spherePoints = useMemo(() => {
    const points: { x: number; y: number; z: number }[] = [];
    const phi = Math.PI * (Math.sqrt(5) - 1); // Golden angle ~2.399 rad

    for (let i = 0; i < totalCards; i++) {
      // y ranges from +1 (top pole) to -1 (bottom pole)
      const y = 1 - (i / (totalCards - 1 || 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      points.push({ x, y, z });
    }
    return points;
  }, [totalCards]);

  // Smooth continuous multi-axis orbital auto-rotation
  useEffect(() => {
    const animateSphere = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (isAutoSpinning && !isDragging) {
        // Multi-axis rotation gives realistic planetary orbital drift
        setRotationY((prev) => (prev + delta * 0.022) % 360);
        setRotationX((prev) => -10 + Math.sin(time * 0.0004) * 12);
      }

      animationFrameRef.current = requestAnimationFrame(animateSphere);
    };

    animationFrameRef.current = requestAnimationFrame(animateSphere);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoSpinning, isDragging]);

  // Interactive drag / swipe across 360 degrees (all directions)
  const handlePointerDown = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStartPos.current = { x: clientX, y: clientY };
    dragStartAngle.current = { rotY: rotationY, rotX: rotationX };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartPos.current.x;
    const deltaY = clientY - dragStartPos.current.y;
    const sensitivity = 0.4;

    setRotationY((dragStartAngle.current.rotY + deltaX * sensitivity) % 360);
    // Constrain pitch between -60 and +60 deg to maintain clean viewing
    const newRotX = Math.max(-60, Math.min(60, dragStartAngle.current.rotX - deltaY * sensitivity * 0.7));
    setRotationX(newRotX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="journal-journey-page"
      className="relative w-full h-full min-h-[640px] md:min-h-[720px] p-3 sm:p-6 md:p-8 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Background Vintage Doodles */}
      <div className="absolute top-6 left-8 text-[#c59b48]/30 pointer-events-none text-base">✦</div>
      <div className="absolute top-10 right-12 text-[#742520]/25 pointer-events-none text-sm">★</div>
      <div className="absolute bottom-16 left-10 text-[#742520]/20 pointer-events-none text-xs">♡</div>
      <div className="absolute bottom-20 right-10 text-[#c59b48]/25 pointer-events-none text-sm">✦</div>

      {/* Chapter Badge */}
      <div className="absolute top-4 right-4 sm:right-8 pointer-events-none z-10 rotate-[4deg]">
        <div className="border border-dashed border-[#c59b48]/50 bg-[#fbf6ec]/90 px-3 py-1 rounded shadow-xs text-center">
          <span className="text-[10px] font-serif-title uppercase tracking-widest text-[#742520] font-semibold block">
            CHAPTER III
          </span>
          <span className="font-handwritten text-xs text-[#8a332a]">3D Memory Globe ♡</span>
        </div>
      </div>

      {/* Minimal Header (No bulky notes or texts) */}
      <div className="relative z-10 text-center max-w-xl mx-auto pt-1 mb-1">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#742520]/10 border border-[#742520]/20 text-[#742520] text-xs font-serif-title tracking-[0.2em] uppercase font-medium">
          <Sparkles className="w-3 h-3 text-[#c59b48]" />
          <span>Orbital Photo Sphere</span>
          <Sparkles className="w-3 h-3 text-[#c59b48]" />
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-title font-semibold text-[#2a1b14] mt-1 tracking-wide">
          Our 360° Memory Sphere
        </h2>

        <p className="font-serif-title text-xs text-[#8c7362] mt-0.5">
          Drag horizontally & vertically to explore all {totalCards} memories orbiting in 3D space
        </p>
      </div>

      {/* Control Bar: Orbit auto-spin toggle & photo counter */}
      <div className="relative z-20 flex items-center justify-between max-w-md mx-auto w-full px-4 py-1">
        <button
          onClick={() => setIsAutoSpinning(!isAutoSpinning)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffaf2]/90 hover:bg-[#f4e9d8] border border-[#d8c7b4] text-[#553b2c] text-xs font-serif-title transition-colors shadow-xs"
        >
          {isAutoSpinning ? (
            <>
              <Pause className="w-3 h-3 text-[#742520]" />
              <span>Pause Spin</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#5e8b4e]" />
              <span>Auto Spin</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-1.5 text-xs font-serif-title text-[#742520] bg-[#fffaf2]/90 border border-[#e5d8c7] px-3 py-1 rounded-full shadow-xs">
          <ImageIcon className="w-3 h-3 text-[#c59b48]" />
          <span>{totalCards} Orbiting Photos</span>
        </div>

        <button
          onClick={() => {
            setRotationY(0);
            setRotationX(-10);
          }}
          title="Reset globe view"
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#fffaf2]/90 hover:bg-[#f4e9d8] border border-[#d8c7b4] text-[#553b2c] text-xs font-serif-title transition-colors shadow-xs"
        >
          <RotateCw className="w-3 h-3 text-[#c59b48]" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 3D GLOBE SPHERE CONTAINER (Pure Photos Only - Scrolling All Directions)  */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex-1 flex items-center justify-center my-auto min-h-[380px] sm:min-h-[440px] md:min-h-[480px]">
        {/* Interactive 3D Sphere Stage */}
        <div
          id="journey-globe-stage"
          className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none"
          onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
          onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handlePointerUp}
        >
          {/* Subtle Ambient Golden Celestial Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[280px] sm:w-[440px] md:w-[540px] h-[130px] sm:h-[180px] md:h-[210px] rounded-[50%] border border-[#c59b48]/30 shadow-[0_0_30px_rgba(197,155,72,0.15)]"
              style={{
                transform: `rotateX(${75 + rotationX * 0.3}deg) rotateZ(${rotationY * 0.2}deg)`
              }}
            />
            <div
              className="w-[220px] sm:w-[350px] md:w-[430px] h-[100px] sm:h-[140px] md:h-[170px] rounded-[50%] border border-dotted border-[#742520]/25"
              style={{
                transform: `rotateX(${55 - rotationX * 0.2}deg) rotateZ(${-rotationY * 0.2}deg)`
              }}
            />
          </div>

          {/* Central Golden Heart Core */}
          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#faf3e7] via-[#fffdf9] to-[#f4e6d4] border border-[#c59b48]/60 flex items-center justify-center pointer-events-none shadow-md">
            <span className="text-base sm:text-lg animate-pulse">❤️</span>
          </div>

          {/* 3D Orbiting Pure Photo Nodes (No Text, No Notes) */}
          {journeyCards.map((card, index) => {
            const pt = spherePoints[index] || { x: 0, y: 0, z: 1 };

            // Convert Euler rotations to 3D Matrix Coordinates
            const radY = (rotationY * Math.PI) / 180;
            const radX = (rotationX * Math.PI) / 180;

            // 1. Rotate around Y axis
            const x1 = pt.x * Math.cos(radY) + pt.z * Math.sin(radY);
            const y1 = pt.y;
            const z1 = -pt.x * Math.sin(radY) + pt.z * Math.cos(radY);

            // 2. Rotate around X axis
            const x2 = x1;
            const y2 = y1 * Math.cos(radX) - z1 * Math.sin(radX);
            const z2 = y1 * Math.sin(radX) + z1 * Math.cos(radX);

            // Responsive sphere radius
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const radius = isMobile ? 135 : 220;

            const screenX = x2 * radius;
            const screenY = y2 * (radius * 0.78); // Slightly flattened for panoramic perspective
            const screenZ = z2; // -1 (back) to +1 (front)

            // Normalized depth: 0 at rear, 1 at front
            const depthNorm = (screenZ + 1) / 2;

            // Scale: 0.55x at back, 1.25x at front
            const scale = 0.55 + depthNorm * 0.7;
            // Opacity: 0.35 at back, 1.0 at front
            const opacity = 0.35 + depthNorm * 0.65;
            // Z-Index: ensure front images overlap back ones correctly
            const zIndex = Math.round(depthNorm * 100) + 10;
            // Blur back images for depth-of-field
            const blur = screenZ < -0.3 ? Math.round((-0.3 - screenZ) * 2.5) : 0;

            const resolvedSrc = resolveImageUrl(card.image || card.src);

            return (
              <div
                key={card.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(resolvedSrc);
                }}
                title="Click to view full photo"
                className="absolute cursor-pointer transition-shadow"
                style={{
                  transform: `translate3d(${screenX}px, ${screenY}px, 0px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: blur > 0 ? `blur(${blur}px)` : 'none',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out, opacity 0.1s ease-out'
                }}
              >
                {/* Pure Image Polaroids / Rounded Tiles - NO NOTES */}
                <div
                  className={`group relative p-1.5 sm:p-2 rounded-xl bg-white border transition-all duration-300 flex flex-col items-center ${screenZ > 0.6
                      ? 'border-[#c59b48] shadow-[0_12px_28px_rgba(116,37,32,0.32)] ring-2 ring-[#c59b48]/60 bg-[#fffdfa]'
                      : 'border-[#dfd3c3] shadow-md hover:border-[#742520] hover:scale-105'
                    } w-[78px] sm:w-[102px] md:w-[118px]`}
                >
                  {/* Photo Frame (Square aspect, high contrast) */}
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#241712] border border-[#f0e6d6]">
                    <img
                      src={resolvedSrc}
                      alt={`Memory #${card.id}`}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const stage = Number(target.dataset.fallbackStage || '0');
                        const raw = card.image || card.src || '';
                        const filename = raw.split('/').pop() || '';

                        if (stage === 0) {
                          target.dataset.fallbackStage = '1';
                          if (target.src.includes('/images/')) {
                            target.src = `/assets/${filename}`;
                          } else {
                            target.src = `/images/${filename}`;
                          }
                        } else if (stage === 1) {
                          target.dataset.fallbackStage = '2';
                          target.src = `/assets/images/${filename}`;
                        } else if (stage === 2) {
                          target.dataset.fallbackStage = '3';
                          const backups = ['/images/37.jpeg', '/images/3.jpeg', '/images/7.jpeg', '/images/40.jpeg', '/images/25.jpeg'];
                          target.src = backups[card.id % backups.length];
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Front glowing indicator */}
                    {screenZ > 0.7 && (
                      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#c59b48] ring-1 ring-white animate-ping" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Zoom Modal when any photo is clicked */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg max-h-[85vh] rounded-2xl overflow-hidden bg-[#1c120c] border-2 border-[#c59b48] shadow-2xl p-2"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPhoto}
                alt="Enlarged Memory"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[78vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Footer Navigation */}
      <div className="relative z-10 pt-2 border-t border-[#c59b48]/20 flex items-center justify-between text-[#8b7262]">
        <div className="flex items-center gap-1.5 text-xs font-serif-title tracking-wider text-[#742520]/80">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b48]" />
          <span>3D Orbital Sphere • {totalCards} Photos</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-serif-title tracking-wider uppercase text-[#8e7666]">
            Page 5 of 6
          </span>
          {onNextPage && (
            <button
              id="journey-page-turn-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNextPage();
              }}
              className="text-xs font-serif-title text-[#742520] hover:text-[#94342d] underline underline-offset-4 tracking-wider transition-colors"
            >
              Turn to Final Vows →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}