/**
 * PASADO - Web Audio API Sound Synthesizer
 * Generates smooth, micro-sound effects natively without external audio asset dependencies.
 */

class SoundEffects {
  constructor() {
    this.audioCtx = null;
    const stored = localStorage.getItem('nursphere_sound_enabled');
    this.soundEnabled = (stored !== null ? stored !== 'false' : localStorage.getItem('pasado_sound_enabled') !== 'false');
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
    localStorage.setItem('nursphere_sound_enabled', this.soundEnabled);
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

  // ==========================================
  // Web Speech API - Text-to-Speech (TTS)
  // ==========================================
  speak(text, onStartCallback, onEndCallback) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn("Speech synthesis not supported in this browser.");
      if (onEndCallback) onEndCallback();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any active speech

      if (!text || text.trim() === '') {
        if (onEndCallback) onEndCallback();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95; // Slightly slower, clear cadence for medical terminology
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      // Attempt to pick a natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const preferredVoice = voices.find(v => (v.lang === 'en-PH' || v.lang === 'en-US' || v.lang.startsWith('en')) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
        if (preferredVoice) utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        if (onStartCallback) onStartCallback();
      };

      utterance.onend = () => {
        if (onEndCallback) onEndCallback();
      };

      utterance.onerror = (e) => {
        console.warn("Speech synthesis error:", e);
        if (onEndCallback) onEndCallback();
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis exception:", err);
      if (onEndCallback) onEndCallback();
    }
  }

  stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  isSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }
}
const soundManager = new SoundEffects();

if (typeof window !== 'undefined') window.soundManager = soundManager;
if (typeof globalThis !== 'undefined') globalThis.soundManager = soundManager;

