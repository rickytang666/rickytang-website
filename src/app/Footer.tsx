import { externalLinks } from '../data/links';

export default function Footer() {
  return (
    <footer className="w-full bg-muted text-foreground py-6 px-4 flex flex-col items-center mt-auto">
      {/* make them normal text style, and make the link hover/clicked color primary */}
      <div className="flex gap-6 mb-3">
        <a href={externalLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">GitHub</a>
        <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">Resume</a>
        <a href={externalLinks.websiteRepo} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-primary transition-colors duration-200">Source</a>
      </div>
      <div className="text-sm opacity-80">© {new Date().getFullYear()} Ricky Tang</div>
    </footer>
  );
}
