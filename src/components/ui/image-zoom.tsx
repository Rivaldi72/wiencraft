"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function ImageZoomProvider({ children }: Props) {
  return (
    <PhotoProvider
      speed={() => 300}
      maskOpacity={0.85}
      loadingElement={<div className="animate-pulse bg-[oklch(0.90_0.025_75)] w-full h-full" />}
    >
      {children}
    </PhotoProvider>
  );
}

export function ZoomableImage({ src, children }: { src: string; alt: string; children: React.ReactNode }) {
  return (
    <PhotoView src={src}>
      <div className="cursor-zoom-in">
        {children}
      </div>
    </PhotoView>
  );
}
