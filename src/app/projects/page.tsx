import type { Metadata } from "next";
import ProjectsClient from "@/app/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects - Ricky Tang",
  description:
    "Explore Ricky's projects, from AI-powered fitness companions to sustainable living tools. Leveling up skills, one project at a time.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
