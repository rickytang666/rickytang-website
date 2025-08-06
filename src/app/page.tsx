import { externalLinks } from "@/data/links";
import ProjectPreviewSection from './ProjectPreviewSection';
import ViewMoreButton from './ViewMoreButton';
import TechWheelPicker from '@/app/TechWheelPicker';
import { languages, tools } from '@/data/techSkills';

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

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20 flex flex-col gap-15">

      <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Hello! 👋 I&apos;m Ricky.</h1>

      {/* About Section (truncated) */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">
          Welcome to my digital workshop where ideas become reality.
        </h1>
        <div className="flex flex-col gap-1 mb-4">
          <p className="mb-4 text-lg text-foreground">
            I'm an incoming Software Engineering student at the University of Waterloo who builds full-stack applications that solve real problems. I believe that great software comes from understanding both the technical challenges and the human needs behind them.
          </p>
          <p className="mb-4 text-lg text-foreground">
            I love learning new things every day, even if it's just a small improvement. When I'm not coding, you'll find me playing table tennis, watching track and field events, or running/biking in the city roads.
          </p>
          <p className="mb-4 text-lg text-foreground">
            I'm always up for meaningful tech chats and new challenges!
          </p>
        </div>
        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-7 mb-2 justify-center">
          <a href={externalLinks.github} target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
            <IconBrandGithub stroke={2} className="w-5 h-5" />
            GitHub
          </a>
          <a href={externalLinks.linkedin} target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
            <IconBrandLinkedin stroke={2} className="w-5 h-5" />
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" className="text-base sm:text-lg flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200">
            <IconFileCv stroke={2} className="w-5 h-5" />
            Resume
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <ViewMoreButton href="/about" children="More about me" />
        </div>
      </section>

      {/* Featured Projects Section (truncated) */}
      <ProjectPreviewSection />

      {/* Tech Skills Section with Wheel Picker */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
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

      {/* Awards Section (full) */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
          <IconAward stroke={2} className="w-8 h-8 text-primary" />
          Awards
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>3rd Place in the 2025 Canadian Team Mathematics Competition</li>
          <li>Top 5% in the 2025 Euclid Mathematics Contest</li>
          <li>Top 2% in the 2024 Canadian Senior Mathematics Contest</li>
          <li>Top 2% in the 2024 Fermat Mathematics Contest (Honour Roll)</li>
        </ul>
      </section>
    </main>
  );
}
