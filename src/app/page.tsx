import { externalLinks } from "@/data/links";
import ProjectPreviewSection from './ProjectPreviewSection';
import ViewMoreButton from './ViewMoreButton';

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
          Welcome to my studio of pixels, projects, and passion.
        </h1>
        <div className="flex flex-col gap-1 mb-4">
          <p className="mb-4 text-lg text-foreground">
            I am an incoming Software Engineering student at the University of Waterloo with a passion for full-stack development and human-computer interaction. I love building things that make life simpler and more meaningful.
          </p>
          <p className="mb-4 text-lg text-foreground">
            I am always learning something new and turning ideas into real, usable projects. Whether it is a hackathon or a personal tool, I am driven by curiosity and the hope to make a difference.
          </p>
          <p className="mb-4 text-lg text-foreground">
            Feel free to reach out!
          </p>
        </div>
        {/* Contact Buttons - responsive flex */}
        {/* make the icon + text normal text without the btn, on hover change color to primary */}
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

      {/* Tech Skills Section (full) */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
          <IconTerminal2 stroke={2} className="w-8 h-8 text-primary" />
          Tech Skills
        </h2>
        <div className="flex flex-col gap-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <IconCode stroke={2} className="w-5 h-5 text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://go-skill-icons.vercel.app/api/icons?i=cpp&theme=dark" className="w-10 h-10" alt="c++" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=python&theme=dark" className="w-10 h-10" alt="python" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=processing&theme=dark" className="w-10 h-10" alt="processing" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=javascript&theme=dark" className="w-10 h-10" alt="javascript" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=typescript&theme=dark" className="w-10 h-10" alt="typescript" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=html&theme=dark" className="w-10 h-10" alt="html" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=css&theme=dark" className="w-10 h-10" alt="css" />
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <IconTool stroke={2} className="w-5 h-5 text-primary" />
              Tools / Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://go-skill-icons.vercel.app/api/icons?i=react&theme=dark" className="w-10 h-10" alt="react" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=nextjs&theme=dark" className="w-10 h-10" alt="nextjs" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=nodejs&theme=dark" className="w-10 h-10" alt="nodejs" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=express&theme=dark" className="w-10 h-10" alt="express" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=postgresql&theme=dark" className="w-10 h-10" alt="postgresql" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=supabase&theme=dark" className="w-10 h-10" alt="supabase" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=tailwind&theme=dark" className="w-10 h-10" alt="tailwind" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=daisyui&theme=dark" className="w-10 h-10" alt="daisyui" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=shadcn&theme=dark" className="w-10 h-10" alt="shadcn" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=git&theme=dark" className="w-10 h-10" alt="git" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=github&theme=dark" className="w-10 h-10" alt="github" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=vercel&theme=dark" className="w-10 h-10" alt="vercel" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=figma&theme=dark" className="w-10 h-10" alt="figma" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=latex&theme=dark" className="w-10 h-10" alt="latex" />
            </div>
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
