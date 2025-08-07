"use client";
import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../app/ProjectCard";
import ViewMoreButton from "../app/ViewMoreButton";

// Icons
import { IconFolders } from "@tabler/icons-react";

export default function ProjectPreviewSection() {
  const previewProjects = projects.slice(0, 2);
  const [imageIndexes, setImageIndexes] = useState<{ [id: string]: number }>(
    {}
  );

  const handleImageClick = (projectId: string, dir: 1 | -1) => {
    setImageIndexes((prev) => {
      const current = prev[projectId] || 0;
      const project = previewProjects.find((p) => p.id === projectId);
      if (!project) return prev;
      const total = project.images.length;
      const next = (current + dir + total) % total;
      return { ...prev, [projectId]: next };
    });
  };

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
        <IconFolders stroke={2} className="w-8 h-8 text-primary" />
        Featured Projects
      </h2>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mb-20">
        {previewProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            imgIdx={imageIndexes[project.id] || 0}
            onImageClick={(dir: 1 | -1) => handleImageClick(project.id, dir)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ViewMoreButton href="/projects" children="View more projects" />
      </div>
    </section>
  );
}
