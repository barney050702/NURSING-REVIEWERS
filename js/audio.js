/**
 * PASADO - Web Audio API Sound Synthesizer
 * Generates smooth, micro-sound effects natively without external audio asset dependencies.
 */

class SoundEffects {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = localStorage.getItem('pasado_sound_enabled') !== 'false';
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('pasado_sound_enabled', this.soundEnabled);
    return this.soundEnabled;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainValue = 0.08) {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainValue, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCorrect() {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.06, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playIncorrect() {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const notes = [261.63, 233.08]; // C4, Bb3 (gentle soft low tone)
      notes.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        gain.gain.setValueAtTime(0.05, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.2);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.2);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playComplete() {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const chord = [523.25, 659.25, 783.99, 1046.50];
      chord.forEach(freq => {
        this.playTone(freq, 'sine', 0.6, 0.05);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playClick() {
    this.playTone(400, 'sine', 0.04, 0.02);
  }
}
const soundManager = new SoundEffects();

if (typeof window !== 'undefined') window.soundManager = soundManager;
if (typeof globalThis !== 'undefined') globalThis.soundManager = soundManager;
