import React from "react";
import ReactPlayer from "react-player";

// Render a YouTube video player

export default function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://youtu.be/y5Cm8b4pN-s?si=OvUfCN7pV2KdjVwX"
      controls={true}
      width={1200}
      height={630}
      light={true}
    />
  );
}
