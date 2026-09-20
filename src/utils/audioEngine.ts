/**
 * Romantic Audio Engine
 * Plays the MP3 song (Piyath Rajapakse - Yali Hamuwenne Kedinada Api)
 * directly via HTML5 Audio with user interaction handling and volume control.
 */

class RomanticAudioEngine {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying = false;
  private volume = 0.7;
  private listeners: ((playing: boolean) => void)[] = [];
  private currentAudioUrl = '/audio/yali_hamuwenne_kedinada_api.mp3';

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement(): HTMLAudioElement {
    if (!this.audioElement && typeof window !== 'undefined') {
      this.audioElement = new Audio(this.currentAudioUrl);
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;
      this.audioElement.preload = 'auto';

      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener('error', (e) => {
        console.error('Audio playback error on MP3:', e, this.audioElement?.error);
        this.isPlaying = false;
        this.notify();
      });
    }
    return this.audioElement!;
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach(cb => cb(this.isPlaying));
  }

  /**
   * Directly plays the MP3 file
   */
  public async playTrack(audioUrl?: string) {
    const audio = this.initAudioElement();
    const targetUrl = audioUrl || this.currentAudioUrl;

    try {
      if (audio.src !== targetUrl && !audio.src.endsWith(targetUrl)) {
        audio.src = targetUrl;
        audio.load();
      }

      audio.volume = this.volume;
      await audio.play();
      this.isPlaying = true;
      this.notify();
    } catch (err) {
      console.warn('Playback could not start:', err);
      this.isPlaying = false;
      this.notify();
    }
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  public stopMelody() {
    this.pause();
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const romanticAudio = new RomanticAudioEngine();