import { externalLinks } from "@/data/links";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ViewMoreButton from "./ViewMoreButton";
import TechWheelPicker from "@/app/TechWheelPicker";
import { languages, tools } from "@/data/techSkills";
import type { Metadata } from "next";

// Icons
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconTerminal2,
  IconCode,
  IconTool,
  IconAward,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Home -Ricky Tang",
  description:
    "Meet Ricky Tang, an incoming Software Engineering student at the University of Waterloo",
};

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-25">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-5 text-foreground">
        Hello! 👋 I&apos;m Ricky.
      </h1>

      {/* About Section (truncated) */}
      <section>
        <h1 className="text-2xl sm:text-3xl text-center font-bold mb-15 text-foreground">
          Welcome to my digital workshop where ideas become reality.
        </h1>
        <div className="flex flex-col gap-1 mb-10">
          <p className="mb-4 text-lg text-foreground">
            I'm an incoming{" "}
            <a
              className="link font-semibold"
              href={externalLinks.softwareEngineering}
              target="_blank"
            >
              Software Engineering
            </a>{" "}
            student at the University of Waterloo who builds{" "}
            <a
              className="link font-semibold"
              href={externalLinks.github}
              target="_blank"
            >
              full-stack applications
            </a>{" "}
            that solve real problems.
          </p>
          <p className="mb-4 text-lg text-foreground">
            I focus on user experience and creating tools that people actually
            want to use. I believe in chasing small improvements day by day is
            the key to thrive in this tech-driven world, and I truly value
            persistence in everything I do.
          </p>
        </div>
        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-7 mb-10 justify-center">
          <a
            href={externalLinks.github}
            target="_blank"
            className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
          >
            <IconBrandGithub stroke={2} className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={externalLinks.linkedin}
            target="_blank"
            className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
          >
            <IconBrandLinkedin stroke={2} className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
          >
            <IconFileCv stroke={2} className="w-5 h-5" />
            Resume
          </a>
        </div>
        <div className="flex justify-center">
          <ViewMoreButton href="/about" children="More about me" />
        </div>
      </section>

      {/* Featured Projects Section (truncated) */}
      <ProjectPreviewSection />

      {/* Tech Skills Section with Wheel Picker */}
      <section>
        <h2 className="text-3xl font-bold mb-15 flex items-center gap-2 text-foreground">
          <IconTerminal2 stroke={2} className="w-8 h-8 text-primary" />
          Tech Skills
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 flex justify-center items-center gap-2 text-foreground">
              <IconCode stroke={2} className="w-6 h-6 text-primary" />
              Languages
            </h3>
            <TechWheelPicker skills={languages} />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 flex justify-center items-center gap-2 text-foreground">
              <IconTool stroke={2} className="w-6 h-6 text-primary" />
              Tools / Technologies
            </h3>
            <TechWheelPicker skills={tools} />
          </div>
        </div>
      </section>

      {/* Awards Section (cards) */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
          <IconAward stroke={2} className="w-8 h-8 text-primary" />
          Awards
        </h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <div className="card bg-card hover:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] transition-all duration-300 w-full rounded-xl border-1 border-border hover:border-primary flex p-5 justify-start items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
              alt="Canadian Team Mathematics Competition"
              className="w-[80%] mb-4"
            />
            <h4 className="text-lg font-semibold flex justify-center items-center text-foreground text-center mb-1">
              2025 Canadian Team Mathematics Competition
            </h4>
            <h3 className="text-2xl font-bold flex justify-center items-center text-primary">
              3rd Place
            </h3>
          </div>
          <div className="card bg-card hover:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] transition-all duration-300 w-full rounded-xl border-1 border-border hover:border-primary flex p-5 justify-start items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
              alt="Canadian Team Mathematics Competition"
              className="w-[80%] mb-4"
            />
            <h4 className="text-lg font-semibold flex justify-center items-center text-foreground text-center mb-1">
              2025 Euclid Mathematics Contest
            </h4>
            <h3 className="text-2xl font-bold flex justify-center items-center text-primary">
              Top 5%
            </h3>
          </div>
          <div className="card bg-card hover:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] transition-all duration-300 w-full rounded-xl border-1 border-border hover:border-primary flex p-5 justify-start items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
              alt="Canadian Team Mathematics Competition"
              className="w-[80%] mb-4"
            />
            <h4 className="text-lg font-semibold flex justify-center items-center text-foreground text-center mb-1">
              2024 Canadian Senior Mathematics Contest
            </h4>
            <h3 className="text-2xl font-bold flex justify-center items-center text-primary">
              Top 2%
            </h3>
          </div>
          <div className="card bg-card hover:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] transition-all duration-300 w-full rounded-xl border-1 border-border hover:border-primary flex p-5 justify-start items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
              alt="Canadian Team Mathematics Competition"
              className="w-[80%] mb-4"
            />
            <h4 className="text-lg font-semibold flex justify-center items-center text-foreground text-center mb-1">
              2024 Fermat Mathematics Contest
            </h4>
            <h3 className="text-2xl font-bold flex justify-center items-center text-primary mb-1">
              Top 2%
            </h3>
            <h4 className="text-lg font-semibold flex justify-center items-center text-fuchsia-400 text-center">
              Honour Roll
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
