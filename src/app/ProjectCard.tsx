"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Inline } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Project } from '../data/projects';

// Icons
import {
  IconBrandGithub,
  IconDeviceDesktop,
} from '@tabler/icons-react';

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
    background: 'var(--color-background)',
    borderTopLeftRadius: '0.75rem',
    borderTopRightRadius: '0.75rem',
    overflow: 'hidden'
  };

  const currentImg = project.images[imgIdx];
  const getNatural = (src: string) => naturalMap[src];

  // On image load, cache its natural size
  const handleImgLoad = (src: string) => (img: HTMLImageElement) => {
    setNaturalMap(prev => {
      if (prev[src]) return prev;
      return { ...prev, [src]: { width: img.naturalWidth, height: img.naturalHeight } };
    });
  };

  // Prepare slides for inline carousel
  const slides = project.images.map(src => ({ src }));

  return (
    <div className="card bg-card shadow-lg hover:shadow-2xl transition w-full rounded-xl border-2 border-border">
      <div
        ref={containerRef}
        className="w-full relative border-b border-border"
        style={wrapperStyle}
      >
        {project.images.length > 1 ? (
          /* Inline Carousel for multiple images */
          <Lightbox
            slides={slides}
            index={imgIdx}
            plugins={[Inline]}
            inline={{
              style: {
                width: "100%",
                height: "100%",
                maxWidth: "100%",
              },
            }}
            carousel={{
              finite: false,
              preload: 1,
            }}
            animation={{
              fade: 300,
              swipe: 300,
            }}
            render={{
              iconNext: () => <span className="text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center absolute right-1 top-1/2 transform -translate-y-1/2 z-10"><IconArrowRight stroke={2} className="w-6 h-6 text-primary" /></span>,
              iconPrev: () => <span className="text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center absolute left-1 top-1/2 transform -translate-y-1/2 z-10"><IconArrowLeft stroke={2} className="w-6 h-6 text-primary" /></span>,
            }}
          />
        ) : (
          /* Simple image for single image */
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src={currentImg}
              alt={project.title}
              width={getNatural(currentImg)?.width || 800}
              height={getNatural(currentImg)?.height || containerHeight}
              style={{ width: '100%', height: 'auto', position: 'absolute', left: 0, right: 0, ...getImgStyle(getNatural(currentImg)) }}
              unoptimized
              onLoadingComplete={handleImgLoad(currentImg)}
            />
          </div>
        )}
      </div>
      
      <div className="card-body px-4 sm:px-8 py-6">
        <h3 className="card-title text-2xl mb-2 text-card-foreground">{project.title}</h3>
        {project.description.map((para, idx) => (
          <p key={idx} className="text-base mb-2 leading-relaxed text-foreground">{para}</p>
        ))}
        {/* Tech Stack Section */}
        <div className="flex flex-wrap gap-2 mb-4 align-middle">
          {project.id === '1' && (
            <>
              <Image src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=supabase" alt="supabase" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://skillicons.dev/icons?i=vercel" alt="Vercel" width={40} height={40} className="w-10 h-10" unoptimized />
              <Image src="https://go-skill-icons.vercel.app/api/icons?i=gemini&theme=dark" alt="Gemini" width={40} height={40} className="w-10 h-10" unoptimized />
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
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-outline border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full align-middle">
            <IconBrandGithub stroke={2} className="w-5 h-5" />
            GitHub
          </a>
          {/* what color is suitable for website? */}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-outline border-fuchsia-500 text-foreground hover:bg-fuchsia-500 hover:text-white rounded-full align-middle">
              <IconDeviceDesktop stroke={2} className="w-5 h-5" />
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 