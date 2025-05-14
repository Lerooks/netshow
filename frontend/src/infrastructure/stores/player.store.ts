import { makeAutoObservable } from "mobx";

class PlayerStore {
  isPlaying = false;
  duration = 0;
  played = 0;
  playedSeconds = 0;
  buffered = 0;
  volume = 0.8;
  isMuted = false;
  isFullscreen = false;
  showControls = true;
  isReady = false;
  isSeeking = false;
  error: Error | null = null;
  playbackRate = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setProgress({
    played,
    playedSeconds,
    loaded,
  }: {
    played: number;
    playedSeconds: number;
    loaded: number;
  }) {
    if (!this.isSeeking) {
      this.played = played;
      this.playedSeconds = playedSeconds;
      this.buffered = loaded;
    }
  }

  play() {
    this.isPlaying = true;
    this.showControls = true;
  }

  pause() {
    this.isPlaying = false;
    this.showControls = true;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
      return;
    }

    this.play();
  }

  seekTo(seconds: number) {
    if (seconds < 0) seconds = 0;
    if (seconds > this.duration) seconds = this.duration;
    this.playedSeconds = seconds;
    this.played = this.duration > 0 ? seconds / this.duration : 0;
  }

  setPlayed(played: number) {
    this.played = played;
  }

  setPlayedSeconds(seconds: number) {
    this.playedSeconds = seconds;
  }

  setDuration(duration: number) {
    this.duration = Math.max(0, duration);
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (volume > 0 && this.isMuted) {
      this.isMuted = false;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    this.showControls = true;
  }

  setShowControls(show: boolean) {
    this.showControls = show;
  }

  setIsReady(ready: boolean) {
    this.isReady = ready;
    if (ready) this.showControls = true;
  }

  setError(error: Error) {
    this.error = error;
    console.error("Player error:", error);
  }

  setPlaybackRate(rate: number) {
    const validRates = [0.5, 0.75, 1, 1.25, 1.5, 2];
    this.playbackRate = validRates.includes(rate) ? rate : 1;
  }

  get currentTime() {
    return this.playedSeconds;
  }

  get remainingTime() {
    return this.duration - this.playedSeconds;
  }

  get formattedCurrentTime() {
    return this.formatTime(this.playedSeconds);
  }

  get formattedDuration() {
    return this.formatTime(this.duration);
  }

  private formatTime(seconds: number): string {
    const date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }
}

export const playerStore = new PlayerStore();
