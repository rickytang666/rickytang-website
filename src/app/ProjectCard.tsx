"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  imgIdx: number;
  onImageClick: (dir: 1 | -1) => void;
  containerHeight?: number;
}

export default function ProjectCard({ project, imgIdx, onImageClick, containerHeight = 400 }: ProjectCardProps) {
  const [naturalMap, setNaturalMap] = useState<Record<string, { width: number; height: number }>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<1 | -1 | null>(null);
  const [displayIdx, setDisplayIdx] = useState(imgIdx);
  const [lastSlideDirection, setLastSlideDirection] = useState<1 | -1 | null>(null);

  // Update container width on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Slide handler
  const handleSlide = (dir: 1 | -1) => {
    if (isSliding) return;
    setSlideDirection(dir);
    setIsSliding(true);
    
    setTimeout(() => {
      onImageClick(dir);
      setDisplayIdx(getNextIdx(dir));
      setIsSliding(false);
      setSlideDirection(null);
      setLastSlideDirection(dir);
    }, 300);
  };

  // Calculate next index
  const getNextIdx = (dir: 1 | -1) => {
    const len = project.images.length;
    return (displayIdx + dir + len) % len;
  };

  // For vertical centering
  const getImgStyle = (imgNatural: { width: number; height: number } | undefined) => {
    if (imgNatural && containerWidth) {
      const scaledHeight = containerWidth * (imgNatural.height / imgNatural.width);
      if (scaledHeight < containerHeight) {
        return { top: `calc(50% - ${scaledHeight / 2}px)` };
      }
    }
    return { top: 0 };
  };

  // Carousel track style
  const wrapperStyle: React.CSSProperties = {
    height: containerHeight,
    position: 'relative',
    background: 'black',
    borderTopLeftRadius: '0.75rem',
    borderTopRightRadius: '0.75rem',
    overflow: 'hidden'
  };

  // Always show [current, next, prev] in track to prevent DOM reordering
  const currentImg = project.images[displayIdx];
  const nextImg = project.images[getNextIdx(1)];
  const prevImg = project.images[getNextIdx(-1)];

  // Determine track order based on recent slide direction
  let trackImages: string[];
  if (lastSlideDirection === -1 && !isSliding) {
    // After prev slide, reorder to [prev, current, next] so prev is in left slot
    trackImages = [prevImg, currentImg, nextImg];
  } else {
    // Normal order: [current, next, prev]
    trackImages = [currentImg, nextImg, prevImg];
  }

  // Track transform based on slide direction
  let trackTransform = 'translateX(0)';
  if (isSliding) {
    if (slideDirection === 1) {
      // Next: animate from 0 to -33.33% (show next image)
      trackTransform = 'translateX(-33.33%)';
    } else if (slideDirection === -1) {
      // Prev: animate from 0 to 33.33% (show prev image)
      trackTransform = 'translateX(33.33%)';
    }
  }

  const trackStyle: React.CSSProperties = {
    display: 'flex',
    width: '300%', // 3 images
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    transition: isSliding ? 'transform 0.3s cubic-bezier(.7,0,.3,1)' : 'none',
    transform: trackTransform
  };

  // Natural sizes from cache
  const getNatural = (src: string) => naturalMap[src];

  // On image load, cache its natural size
  const handleImgLoad = (src: string) => (img: HTMLImageElement) => {
    setNaturalMap(prev => {
      if (prev[src]) return prev;
      return { ...prev, [src]: { width: img.naturalWidth, height: img.naturalHeight } };
    });
  };

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition w-full border-2 border-gray-400/30">
      <div
        ref={containerRef}
        className="w-full border-b border-gray-300/50 relative"
        style={wrapperStyle}
      >
        {/* Carousel track */}
        <div style={trackStyle}>
          {trackImages.map((imgSrc, i) => (
            <div key={imgSrc + '-' + i} style={{ width: '100%', position: 'relative' }}>
              <Image
                src={imgSrc}
                alt={project.title}
                width={getNatural(imgSrc)?.width || 800}
                height={getNatural(imgSrc)?.height || containerHeight}
                style={{ width: '100%', height: 'auto', position: 'absolute', left: 0, right: 0, ...getImgStyle(getNatural(imgSrc)) }}
                unoptimized
                onLoadingComplete={handleImgLoad(imgSrc)}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={() => handleSlide(-1)}
              disabled={isSliding}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              title="Previous image"
            >
              <IconChevronLeft stroke={2} className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleSlide(1)}
              disabled={isSliding}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              title="Next image"
            >
              <IconChevronRight stroke={2} className="w-5 h-5" />
            </button>
          </>
        )}
        
        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
          {imgIdx + 1} / {project.images.length}
        </div>
      </div>
      
      <div className="card-body px-4 sm:px-8 py-6">
        <h3 className="card-title text-2xl mb-2">{project.title}</h3>
        {project.description.map((para, idx) => (
          <p key={idx} className="text-base mb-2 leading-relaxed">{para}</p>
        ))}
        {/* Tech Stack Section */}
        <div className="flex flex-wrap gap-2 mb-4 align-center">
          {project.id === '1' && (
            <>
              <Image src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" width={40} height={40} className="h-10 p-1 rounded-md bg-gray-800" unoptimized />
              <Image src="https://skillicons.dev/icons?i=supabase" alt="supabase" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=vercel" alt="Vercel" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '2' && (
            <>
              <Image src="https://skillicons.dev/icons?i=processing" alt="Processing" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '3' && (
            <>
              <Image src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=express" alt="Express" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=react" alt="React" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '4' && (
            <>
              <Image src="https://skillicons.dev/icons?i=html" alt="html" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=css" alt="css" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=javascript" alt="javascript" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '5' && (
            <>
              <Image src="https://skillicons.dev/icons?i=processing" alt="Processing" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '6' && (
            <>
              <Image src="https://skillicons.dev/icons?i=python" alt="Python" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '7' && (
            <>
              <Image src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=express" alt="Express" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
          {project.id === '8' && (
            <>
              <Image src="https://skillicons.dev/icons?i=processing" alt="Processing" width={40} height={40} className="w-10 h-10" unoptimized />
            </>
          )}
        </div>
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