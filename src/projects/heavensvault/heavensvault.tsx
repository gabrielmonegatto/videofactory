import React from "react";
import { AbsoluteFill, Audio, Video } from "remotion";
import * as z from "zod";

export const heavensVaultSchema = z.object({
  audioUrl: z.string().url(),
  videoUrl: z.string().url(),
});

export const HeavensVault: React.FC<z.infer<typeof heavensVaultSchema>> = ({
  audioUrl,
  videoUrl,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Video src={videoUrl} />
      <Audio src={audioUrl} />
    </AbsoluteFill>
  );
};

// Calcula automaticamente duração pelo áudio
export const getHeavensVaultMetadata = async ({ props }) => {
  const audio = await fetch(props.audioUrl);
  const buffer = await audio.arrayBuffer();
  const context = new AudioContext();
  const decoded = await context.decodeAudioData(buffer);
  const durationInSeconds = decoded.duration;
  return {
    durationInFrames: Math.round(durationInSeconds * 30),
    fps: 30,
    width: 1080,
    height: 1920,
  };
};
