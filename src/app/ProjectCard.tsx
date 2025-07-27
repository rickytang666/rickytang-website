"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  imgIdx: number;
  onImageClick: (dir: 1 | -1) => void;
  containerHeight?: number;
}

export default function ProjectCard({ project, imgIdx, onImageClick, containerHeight = 400 }: ProjectCardProps) {
  const imgSrc = project.images[imgIdx];
  const [natural, setNatural] = useState<{ width: number; height: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  let imgStyle: React.CSSProperties = { width: '100%', height: 'auto', position: 'absolute', left: 0 };
  let wrapperStyle: React.CSSProperties = { height: containerHeight, position: 'relative', background: 'black', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem', overflow: 'hidden' };

  if (natural && containerWidth) {
    const scaledHeight = containerWidth * (natural.height / natural.width);
    if (scaledHeight < containerHeight) {
      // Center vertically
      imgStyle = {
        ...imgStyle,
        top: `calc(50% - ${scaledHeight / 2}px)`
      };
    } else {
      // Align to top, crop bottom
      imgStyle = {
        ...imgStyle,
        top: 0
      };
    }
  } else {
    imgStyle = { ...imgStyle, top: 0 };
  }

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition w-full">
      <div
        ref={containerRef}
        className="w-full"
        style={wrapperStyle}
        onClick={e => { e.preventDefault(); onImageClick(1); }}
        onContextMenu={e => { e.preventDefault(); onImageClick(-1); }}
        title="Left click: next image, Right click: previous image"
      >
        <Image
          src={imgSrc}
          alt={project.title}
          width={natural?.width || 800}
          height={natural?.height || containerHeight}
          style={imgStyle}
          unoptimized
          onLoadingComplete={img => setNatural({ width: img.naturalWidth, height: img.naturalHeight })}
        />
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {imgIdx + 1} / {project.images.length}
        </div>
      </div>
      <div className="card-body px-8 py-6">
        <h3 className="card-title text-2xl mb-2">{project.title}</h3>
        {project.description.map((para, idx) => (
          <p key={idx} className="text-base mb-2 leading-relaxed">{para}</p>
        ))}
        <div className="card-actions mt-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-outline">GitHub</a>
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary">Website</a>
          )}
        </div>
      </div>
    </div>
  );
} 