import { externalLinks } from "../data/links";

// icons
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconBrandLeetcode,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-muted text-foreground px-5 py-5 flex flex-col gap-6 items-center mt-auto">
      <p className="text-lg">© {new Date().getFullYear()} Ricky Tang</p>

      <div className="flex gap-5 items-center">
        {/* this svg is slightly too big 😫 */}
        <a
          href={externalLinks.websiteRepo}
          target="_blank"
          rel="noopener noreferrer"
          title="source"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-[1.375rem] h-[1.375rem]"
          >
            <g fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3.25 0A2.25 2.25 0 001 2.25v10.5A2.25 2.25 0 003.25 15h.25a.75.75 0 000-1.5h-.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75H13.5v3h-3a.75.75 0 000 1.5h3.25c.69 0 1.25-.56 1.25-1.25V1.25C15 .56 14.44 0 13.75 0H3.25zM13.5 9V1.5H3.25a.75.75 0 00-.75.75v6.878c.235-.083.487-.128.75-.128H13.5z"
                clipRule="evenodd"
              ></path>
              <path d="M5.5 12a.5.5 0 00-.5.5v3a.5.5 0 00.777.416L7 15.101l1.223.815A.5.5 0 009 15.5v-3a.5.5 0 00-.5-.5h-3z"></path>
            </g>
          </svg>
        </a>
        <a
          href={externalLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          title="github"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <IconBrandGithub stroke={2} className="w-6 h-6" />
        </a>
        <a
          href={externalLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <IconBrandLinkedin stroke={2} className="w-6 h-6" />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="resume"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <IconFileCv stroke={2} className="w-6 h-6" />
        </a>
        <a
          href={externalLinks.email}
          target="_blank"
          rel="noopener noreferrer"
          title="email"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <IconMail stroke={2} className="w-6 h-6" />
        </a>
        <a
          href={externalLinks.devpost}
          target="_blank"
          rel="noopener noreferrer"
          title="devpost"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href={externalLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          title="leetcode"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <IconBrandLeetcode stroke={2} className="w-6 h-6" />
        </a>
      </div>

      <div className="text-base flex items-center justify-items-center gap-1">
        <p>Made with</p>
        <div className="flex items-center gap-1">
          <img
            title="Next.js"
            src="https://go-skill-icons.vercel.app/api/icons?i=nextjs&theme=dark"
            className="w-6 h-6"
            alt="nextjs"
          />
          <img
            title="Tailwind CSS"
            src="https://go-skill-icons.vercel.app/api/icons?i=tailwind&theme=dark"
            className="w-6 h-6"
            alt="tailwind"
          />
          <img
            title="shadcn/ui"
            src="https://go-skill-icons.vercel.app/api/icons?i=shadcn&theme=dark"
            className="w-6 h-6"
            alt="shadcn"
          />
          <img
            title="daisyUI"
            src="https://go-skill-icons.vercel.app/api/icons?i=daisyui&theme=dark"
            className="w-6 h-6"
            alt="daisyui"
          />
        </div>
      </div>
    </footer>
  );
}
