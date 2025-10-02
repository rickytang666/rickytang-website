import { externalLinks } from "@/data/links";
import ProjectPreviewSection from "@/components/project-preview-section";
import ViewMoreButton from "@/components/view-more-button";
import TechWheelPicker from "@/components/tech-skill-wheel-picker";
import AwardCard from "@/components/award-card";
import { languages, tools } from "@/data/tech-skills";
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
  title: "Home - Ricky Tang",
  description: "Meet Ricky Tang, an aspiring software engineer.",
};

export default function Home() {
  return (
    <main className="w-full max-w-4xl lg:max-w-5xl mx-auto flex flex-col gap-16 sm:gap-18 md:gap-21 lg:gap-25">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-5 text-foreground">
        Hello! 👋 I&apos;m Ricky.
      </h1>

      {/* About Section (truncated) */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-15 text-foreground">
          Welcome to my digital workshop where ideas become reality.
        </h1>
        <div className="flex flex-col gap-1 mb-6 sm:mb-8 md:mb-10">
          <p className="mb-4 text-base sm:text-lg text-foreground">
            I&apos;m a{" "}
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
            that improve our lives.
          </p>
          <p className="mb-4 text-base sm:text-lg text-foreground">
            I focus on user experience and creating tools that people actually
            want to use. I believe in chasing small improvements day by day is
            the key to thrive in this tech-driven world, and I truly value
            persistence in everything I do.
          </p>
        </div>
        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-8 md:mb-10 justify-center">
          <a
            href={externalLinks.github}
            target="_blank"
            className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
          >
            <IconBrandGithub stroke={2} className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={externalLinks.linkedin}
            target="_blank"
            className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
          >
            <IconBrandLinkedin stroke={2} className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
          >
            <IconFileCv stroke={2} className="w-5 h-5" />
            Resume
          </a>
        </div>
        <div className="flex justify-center">
          <ViewMoreButton href="/about">More about me</ViewMoreButton>
        </div>
      </section>

      {/* Featured Projects Section (truncated) */}
      <ProjectPreviewSection />

      {/* Tech Skills Section with Wheel Picker */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-15 flex items-center gap-2 text-foreground">
          <IconTerminal2 stroke={2} className="w-8 h-8 text-primary" />
          Tech Skills
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex justify-center items-center gap-2 text-foreground">
              <IconCode stroke={2} className="w-6 h-6 text-primary" />
              Languages
            </h3>
            <TechWheelPicker skills={languages} />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex justify-center items-center gap-2 text-foreground">
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
          <AwardCard
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
            imgAlt="Canadian Team Mathematics Competition"
            title="2025 Canadian Team Mathematics Competition"
            result="3rd Place"
          />
          <AwardCard
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
            imgAlt="Canadian Team Mathematics Competition"
            title="2025 Euclid Mathematics Contest"
            result="Top 5%"
          />
          <AwardCard
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
            imgAlt="Canadian Team Mathematics Competition"
            title="2024 Canadian Senior Mathematics Contest"
            result="Top 2%"
          />
          <AwardCard
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
            imgAlt="Canadian Team Mathematics Competition"
            title="2024 Fermat Mathematics Contest"
            result="Top 2%"
            additionalInfo="Honour Roll"
          />
        </div>
      </section>
    </main>
  );
}
