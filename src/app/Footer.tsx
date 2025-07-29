import { externalLinks } from '../data/links';

export default function Footer() {
  return (
    <footer className="w-full bg-base-200 text-base-content py-6 px-4 flex flex-col items-center mt-auto">
      {/* make them normal text style, and make the link hover/clicked color pink-300 */}
      <div className="flex gap-6 mb-3">
        <a href={externalLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-pink-300">GitHub</a>
        <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-pink-300">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-pink-300">Resume</a>
        <a href={externalLinks.websiteRepo} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base flex items-center gap-1 hover:text-pink-300">Source</a>
      </div>
      <div className="text-xs opacity-80">© {new Date().getFullYear()} Ricky Tang</div>
    </footer>
  );
}
