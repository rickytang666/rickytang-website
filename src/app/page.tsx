import { externalLinks } from "@/data/links";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-20">
      <h1 className="text-3xl font-bold mb-8">Ricky Tang</h1>

      {/* About Section (truncated) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="mb-4">I am a software engineering student at the University of Waterloo</p>
        <div className="flex gap-4 mb-2">
          <a href={externalLinks.github} className="btn btn-sm btn-outline">GitHub</a>
          <a href={externalLinks.linkedin} className="btn btn-sm btn-outline">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" className="btn btn-sm btn-outline">Resume</a>
        </div>
        <a href="/about" className="text-blue-500 underline ml-2">View more</a>
      </section>

      {/* Featured Projects Section (truncated) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <ul className="list-disc pl-6 mb-2">
          <li>Project 1 <span className="italic">(Placeholder)</span></li>
          <li>Project 2 <span className="italic">(Placeholder)</span></li>
          <li>Project 3 <span className="italic">(Placeholder)</span></li>
        </ul>
        <a href="/projects" className="text-blue-500 underline ml-2">View more</a>
      </section>

      {/* Tech Skills Section (full) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tech Skills</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-medium mb-2">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline">JavaScript</span>
              <span className="badge badge-outline">TypeScript</span>
              <span className="badge badge-outline">Python</span>
              <span className="badge badge-outline">C++</span>
              <span className="badge badge-outline">Other...</span>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tools / Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline">React</span>
              <span className="badge badge-outline">Next.js</span>
              <span className="badge badge-outline">Tailwind CSS</span>
              <span className="badge badge-outline">DaisyUI</span>
              <span className="badge badge-outline">Node.js</span>
              <span className="badge badge-outline">Other...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section (full) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Awards</h2>
        <ul className="list-disc pl-6">
          <li>Award 1 <span className="italic">(Placeholder)</span></li>
          <li>Award 2 <span className="italic">(Placeholder)</span></li>
        </ul>
      </section>
    </main>
  );
}
