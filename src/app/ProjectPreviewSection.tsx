"use client";
import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../app/ProjectCard';
import Link from 'next/link';

export default function ProjectPreviewSection() {
  const previewProjects = projects.slice(0, 2);
  const [imageIndexes, setImageIndexes] = useState<{ [id: string]: number }>({});

  const handleImageClick = (projectId: string, dir: 1 | -1) => {
    setImageIndexes(prev => {
      const current = prev[projectId] || 0;
      const project = previewProjects.find(p => p.id === projectId);
      if (!project) return prev;
      const total = project.images.length;
      const next = (current + dir + total) % total;
      return { ...prev, [projectId]: next };
    });
  };

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
      <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(450px,1fr))]">
        {previewProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            imgIdx={imageIndexes[project.id] || 0}
            onImageClick={(dir: 1 | -1) => handleImageClick(project.id, dir)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/projects" className="btn btn-primary btn-lg">View more projects</Link>
      </div>
    </section>
  );
} 