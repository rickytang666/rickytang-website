"use client";
import React, { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function ProjectsPage() {
  const [imageIndexes, setImageIndexes] = useState<{ [id: string]: number }>({});

  const handleImageClick = (projectId: string, dir: 1 | -1) => {
    setImageIndexes(prev => {
      const current = prev[projectId] || 0;
      const project = projects.find(p => p.id === projectId);
      if (!project) return prev;
      const total = project.images.length;
      const next = (current + dir + total) % total;
      return { ...prev, [projectId]: next };
    });
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center">My Projects</h1>
      <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(450px,1fr))]">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            imgIdx={imageIndexes[project.id] || 0}
            onImageClick={(dir: 1 | -1) => handleImageClick(project.id, dir)}
          />
        ))}
      </div>
    </div>
  );
}
