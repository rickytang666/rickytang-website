import { externalLinks } from '../data/links';

export default function Footer() {
  return (
    <footer className="w-full bg-base-200 text-base-content py-6 px-4 flex flex-col items-center mt-auto">
      <div className="flex gap-6 mb-2">
        <a href={externalLinks.github} target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a>
        <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link link-hover">Resume</a>
        <a href={externalLinks.websiteRepo} target="_blank" rel="noopener noreferrer" className="link link-hover">Source</a>
      </div>
      <div className="text-xs opacity-70">© {new Date().getFullYear()} Ricky Tang</div>
    </footer>
  );
}
