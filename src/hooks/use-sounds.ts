import { useCallback, useEffect, useRef } from "react";

export const useSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const [pressRes, releaseRes] = await Promise.all([
          fetch("/assets/keycap-sounds/press.mp3"),
          fetch("/assets/keycap-sounds/release.mp3"),
        ]);
        const [pressArr, releaseArr] = await Promise.all([
          pressRes.arrayBuffer(),
          releaseRes.arrayBuffer(),
        ]);
        const [pressBuf, releaseBuf] = await Promise.all([
          ctx.decodeAudioData(pressArr),
          ctx.decodeAudioData(releaseArr),
        ]);
        pressBufferRef.current = pressBuf;
        releaseBufferRef.current = releaseBuf;
      } catch (err) {
        // sounds are optional - fail silently
      }
    };
    loadSound();
    return () => { audioContextRef.current?.close(); };
  }, []);

  const playSoundBuffer = useCallback((buffer: AudioBuffer | null) => {
    try {
      const ctx = audioContextRef.current;
      if (!ctx || !buffer) return;
      if (ctx.state === "suspended") ctx.resume();
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.detune.value = (Math.random() * 200) - 100;
      const gain = ctx.createGain();
      gain.gain.value = 0.4;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
    } catch {}
  }, []);

  const playPressSound = useCallback(() => playSoundBuffer(pressBufferRef.current), [playSoundBuffer]);
  const playReleaseSound = useCallback(() => playSoundBuffer(releaseBufferRef.current), [playSoundBuffer]);

  return { playPressSound, playReleaseSound };
};
