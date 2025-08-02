import { externalLinks } from '../data/links';

export default function Footer() {
  return (
    <footer className="min-w-full bg-muted text-foreground py-6 px-4 flex flex-col items-center mt-auto">
      <div className="flex gap-6 mb-3">
        <a href={externalLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">GitHub</a>
        <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">Resume</a>
        <a href={externalLinks.websiteRepo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">Source</a>
      </div>
      <div className="text-sm opacity-80">© {new Date().getFullYear()} Ricky Tang</div>
      <div className="text-sm opacity-80 flex items-center justify-items-center mt-2 gap-1">
        <p className="text-md">Made with</p>
        <div className="flex items-center gap-1">
          <img src="https://go-skill-icons.vercel.app/api/icons?i=nextjs&theme=dark" className="w-6 h-6" alt="nextjs" />
          <img src="https://go-skill-icons.vercel.app/api/icons?i=tailwind&theme=dark" className="w-6 h-6" alt="tailwind" />
          <img src="https://go-skill-icons.vercel.app/api/icons?i=shadcn&theme=dark" className="w-6 h-6" alt="shadcn" />
          <img src="https://go-skill-icons.vercel.app/api/icons?i=daisyui&theme=dark" className="w-6 h-6" alt="daisyui" />
        </div>
      </div>
    </footer>
  );
}
