import { externalLinks } from "@/data/links";
import ProjectPreviewSection from './ProjectPreviewSection';
import ViewMoreButton from './ViewMoreButton';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-15">

      <h1 className="text-5xl font-bold text-center mb-12">Hello👋! I&apos;m Ricky.</h1>

      {/* About Section (truncated) */}
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-8">
          Welcome to my studio of pixels, projects, and passion.
        </h1>
        <div className="flex flex-col gap-1 text-lg">
          <p className="mb-4">
            I am an incoming Software Engineering student at the University of Waterloo with a passion for full-stack development and human-computer interaction. I love building things that make life simpler and more meaningful.
          </p>
          <p className="mb-4">
            I am always learning something new and turning ideas into real, usable projects. Whether it is a hackathon or a personal tool, I am driven by curiosity and the hope to make a difference.
          </p>
          <p className="mb-4">
            Feel free to reach out!
          </p>
        </div>
        <div className="flex gap-4 mb-2">
          <a href={externalLinks.github} className="btn btn-sm btn-outline">GitHub</a>
          <a href={externalLinks.linkedin} className="btn btn-sm btn-outline">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" className="btn btn-sm btn-outline">Resume</a>
        </div>
        <div className="flex justify-center mt-4">
          <ViewMoreButton href="/about"/>
        </div>
      </section>

      {/* Featured Projects Section (truncated) */}
      <ProjectPreviewSection />

      {/* Tech Skills Section (full) */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-8">Tech Skills</h2>
        <div className="flex flex-col gap-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://skillicons.dev/icons?i=cpp" className="w-10 h-10" alt="c++" />
              <img src="https://skillicons.dev/icons?i=python" className="w-10 h-10" alt="python" />
              <img src="https://skillicons.dev/icons?i=processing" className="w-10 h-10" alt="processing" />
              <img src="https://skillicons.dev/icons?i=javascript" className="w-10 h-10" alt="javascript" />
              <img src="https://skillicons.dev/icons?i=typescript" className="w-10 h-10" alt="typescript" />
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Tools / Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <img src="https://skillicons.dev/icons?i=html" className="w-10 h-10" alt="html" />
              <img src="https://skillicons.dev/icons?i=css" className="w-10 h-10" alt="css" />
              <img src="https://skillicons.dev/icons?i=tailwind" className="w-10 h-10" alt="tailwind" />
              <img src="https://skillicons.dev/icons?i=react" className="w-10 h-10" alt="react" />
              <img src="https://skillicons.dev/icons?i=nextjs" className="w-10 h-10" alt="nextjs" />
              <img src="https://skillicons.dev/icons?i=nodejs" className="w-10 h-10" alt="nodejs" />
              <img src="https://skillicons.dev/icons?i=express" className="w-10 h-10" alt="express" />
              <img src="https://skillicons.dev/icons?i=postgresql" className="w-10 h-10" alt="postgresql" />
              <img src="https://skillicons.dev/icons?i=supabase" className="w-10 h-10" alt="supabase" />
              <img src="https://go-skill-icons.vercel.app/api/icons?i=daisyui" className="w-10 h-10" alt="daisyui" />
              <img src="https://skillicons.dev/icons?i=git" className="w-10 h-10" alt="git" />
              <img src="https://skillicons.dev/icons?i=github" className="w-10 h-10" alt="github" />
              <img src="https://skillicons.dev/icons?i=vercel" className="w-10 h-10" alt="vercel" />
              <img src="https://skillicons.dev/icons?i=figma" className="w-10 h-10" alt="figma" />
              <img src="https://skillicons.dev/icons?i=latex" className="w-10 h-10" alt="latex" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section (full) */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-8">Awards</h2>
        <ul className="list-disc pl-6">
          <li>3rd Place in Canadian Team Mathematics Competition</li>
          <li>Top 2% in the 2024 Canadian Senior Mathematics Contest</li>
        </ul>
      </section>
    </main>
  );
}
