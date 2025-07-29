import Image from 'next/image';

// Icons
import {
  IconUser,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";

import { externalLinks } from '@/data/links';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:max-w-[85%]">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-2">
        <IconUser stroke={2} className="w-10 h-10" />
        About Me
      </h1>
      
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center xl:items-center">
        {/* Image Section */}
        <div className="flex align-center justify-center xl:justify-start w-full xl:w-[400px] xl:flex-shrink-0">
          <div className="relative w-[375px] h-[375px] md:w-[500px] md:h-[500px] xl:w-[550px] xl:h-[550px] overflow-hidden opacity-80 hover:opacity-100transition-all duration-300">
            <Image
              src="/about/myself.jpg"
              alt="Ricky Tang"
              fill
              className="object-contain hover:saturate-150 transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 md:space-y-6 xl:flex-1">
          {/* About Me - Paragraphs */}
          <div className="space-y-5 mb-10">
            <p className="leading-relaxed text-base md:text-lg">
              My name is Ricky Tang, an incoming Software Engineering student at the University of Waterloo.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg">
              I love building meaningful projects — the kind I genuinely enjoy making, and that just might help someone along the way. Whether it&apos;s at a hackathon or in my free time, I find joy in turning ideas into products that solve real problems.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg">
              One of the things I value most is continuous improvement. I love to learn something new every day, even if it&apos;s small. I enjoy exploring the frontier of technology, staying curious, and keeping up with how the world is changing.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg">
              I&apos;ve participated in multiple hackathons, and each time I try to build something entirely new. It&apos;s not just about the end result — it&apos;s about growing creatively, technically, and personally through the challenge.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg">
              Beyond coding, I&apos;m a huge fan of table tennis, photography, and running. I love doing data analysis on track & field stats, solving Rubik&apos;s cubes, biking, and working out. I&apos;m also passionate about video editing and graphic design — creative outlets that help me express and recharge.
            </p>
            
            <p className="leading-relaxed text-base md:text-lg">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me!
            </p>
          </div>
          
          {/* Contact Buttons - flex for responsiveness */}
          {/* make the icon + text normal text without the btn, on hover change color to light pink */}
          <div className="flex flex-wrap gap-7 mb-2">
            <a href={externalLinks.github} target="_blank" className="text-base sm:text-lg flex items-center gap-1 hover:text-pink-300">
              <IconBrandGithub stroke={2} className="w-5 h-5" />
              Github
            </a>
            <a href={externalLinks.linkedin} target="_blank" className="text-base sm:text-lg flex items-center gap-1 hover:text-pink-300">
              <IconBrandLinkedin stroke={2} className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" className="text-base sm:text-lg flex items-center gap-1 hover:text-pink-300">
              <IconFileCv stroke={2} className="w-5 h-5" />
              Resume
            </a>
            <a href={`mailto:${externalLinks.email}`} target="_blank" className="text-base sm:text-lg flex items-center gap-1 hover:text-pink-300">
              <IconMail stroke={2} className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
