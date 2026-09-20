import { useState, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { SongTrack } from '../types';
import { romanticAudio } from '../utils/audioEngine';

interface MusicPlayerProps {
  playlist: SongTrack[];
}

export function MusicPlayer({ playlist }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = playlist[0];

  useEffect(() => {
    const unsub = romanticAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsub;
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      romanticAudio.pause();
    } else {
      if (currentSong) {
        romanticAudio.playTrack(currentSong.audioUrl, currentSong.melodyKey);
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        id="bg-music-toggle-btn"
        onClick={handleTogglePlay}
        aria-label={isPlaying ? "Pause background music" : "Play Piyath Rajapakse background song"}
        title={isPlaying ? "Pause music (යළි හමුවෙන්නේ කෙදිනද අපි)" : "Play music (යළි හමුවෙන්නේ කෙදිනද අපි)"}
        className={`group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border transition-all duration-300 shadow-lg ${isPlaying
          ? 'bg-[#742520] border-[#c59b48] text-[#fdfaf3] shadow-[#742520]/40 ring-2 ring-[#c59b48]/40 scale-105'
          : 'bg-[#241712]/90 hover:bg-[#341d15] border-[#c59b48]/40 text-[#c59b48] hover:text-[#fdfaf3] backdrop-blur-md'
          }`}
      >
        {/* Pulsing gentle ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#c59b48] animate-ping opacity-30 pointer-events-none" />
        )}

        {/* Music icon with subtle animation */}
        {isPlaying ? (
          <Pause className="w-5 h-5 fill-current" />
        ) : (
          <Music className="w-5 h-5 transition-transform group-hover:scale-110" />
        )}

        {/* Minimal hovering tooltip on desktop */}
        <span className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded-md bg-[#180e0a]/95 px-2.5 py-1 text-[11px] font-serif-title tracking-wider text-[#e6c986] border border-[#c59b48]/20 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
          {isPlaying ? 'Pause Background Music' : 'Play Song ♪'}
        </span>
      </button>
    </div>
  );
}
