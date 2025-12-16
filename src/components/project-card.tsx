"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Inline } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Project } from "../data/projects";

// Icons
import { IconBrandGithub, IconDeviceDesktop } from "@tabler/icons-react";

interface ProjectCardProps {
  project: Project;
  imgIdx: number;
  containerHeight?: number;
}

export default function ProjectCard({
  project,
  imgIdx,
  containerHeight = 400,
}: ProjectCardProps) {
  const [naturalMap, setNaturalMap] = useState<
    Record<string, { width: number; height: number }>
  >({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // Update container width on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // For vertical centering
  const getImgStyle = (
    imgNatural: { width: number; height: number } | undefined
  ) => {
    if (imgNatural && containerWidth) {
      const scaledHeight =
        containerWidth * (imgNatural.height / imgNatural.width);
      if (scaledHeight < containerHeight) {
        return { top: `calc(50% - ${scaledHeight / 2}px)` };
      }
    }
    return { top: 0 };
  };

  // Carousel track style
  const wrapperStyle: React.CSSProperties = {
    height: containerHeight,
  };

  const currentImg = project.images[imgIdx];
  const getNatural = (src: string) => naturalMap[src];

  // On image load, cache its natural size
  const handleImgLoad = (src: string) => (img: HTMLImageElement) => {
    setNaturalMap((prev) => {
      if (prev[src]) return prev;
      return {
        ...prev,
        [src]: { width: img.naturalWidth, height: img.naturalHeight },
      };
    });
  };

  // Prepare slides for inline carousel
  const slides = project.images.map((src) => ({ src }));

  return (
    <div className="card bg-card hover:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] active:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] focus:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] transition-all duration-500 w-full rounded-xl border-1 border-border hover:border-primary active:border-primary focus:border-primary">
      <div
        ref={containerRef}
        className="p-3 overflow-hidden"
        style={wrapperStyle}
      >
        {project.images.length > 1 ? (
          /* Inline Carousel for multiple images */
          <div className="w-full h-full relative p-2 bg-black rounded-xl flex items-center justify-center overflow-hidden">
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
                iconNext: () => (
                  <span className="text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center absolute right-1 top-1/2 transform -translate-y-1/2 z-10">
                    <IconArrowRight
                      stroke={2}
                      className="w-6 h-6 text-primary"
                    />
                  </span>
                ),
                iconPrev: () => (
                  <span className="text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center absolute left-1 top-1/2 transform -translate-y-1/2 z-10">
                    <IconArrowLeft
                      stroke={2}
                      className="w-6 h-6 text-primary"
                    />
                  </span>
                ),
              }}
            />
          </div>
        ) : (
          /* Simple image for single image */
          <div className="w-full h-full relative p-2 bg-black rounded-xl flex items-center justify-center">
            <Image
              src={currentImg}
              alt={project.title}
              width={getNatural(currentImg)?.width || 800}
              height={getNatural(currentImg)?.height || containerHeight}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "100%",
                objectFit: "contain",
                ...getImgStyle(getNatural(currentImg)),
              }}
              unoptimized
              onLoadingComplete={handleImgLoad(currentImg)}
            />
          </div>
        )}
      </div>

      <div className="card-body px-4 sm:px-8 py-6 flex flex-col">
        <h3 className="card-title text-2xl mb-2 text-card-foreground">
          {project.title}
        </h3>
        <div className="flex-grow">
          {project.description.map((para, idx) => (
            <div
              key={idx}
              className="text-sm sm:text-base mb-2 leading-relaxed text-foreground"
            >
              {para}
            </div>
          ))}
        </div>
        {/* Tech Stack Section */}
        <div className="flex flex-wrap gap-2 mb-3 align-middle">
          {project.stack.map((item, index) => {
            const isString = typeof item === "string";
            const name = isString ? item : item.name;
            const iconUrl =
              !isString && item.icon
                ? item.icon
                : `https://go-skill-icons.vercel.app/api/icons?i=${name.toLowerCase()}&theme=dark`;

            return (
              <Image
                key={index}
                src={iconUrl}
                alt={name}
                width={30}
                height={30}
                unoptimized
              />
            );
          })}
        </div>
        <div className="card-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-outline border-primary text-foreground hover:bg-primary active:bg-primary focus:bg-primary hover:text-primary-foreground active:text-primary-foreground focus:text-primary-foreground rounded-full align-middle"
          >
            <IconBrandGithub stroke={2} className="w-5 h-5" />
            GitHub
          </a>
          {/* what color is suitable for website? */}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md btn-outline border-fuchsia-500 text-foreground hover:bg-fuchsia-500 active:bg-fuchsia-500 focus:bg-fuchsia-500 hover:text-white active:text-white focus:text-white rounded-full align-middle"
            >
              <IconDeviceDesktop stroke={2} className="w-5 h-5" />
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
