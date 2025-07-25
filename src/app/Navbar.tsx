"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  // Track hover state for blur transition
  const [hovered, setHovered] = React.useState(false);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center px-8 w-[65vw] rounded-2xl transition-all duration-300 py-5 ${hovered ? 'bg-black/70 backdrop-blur-lg' : 'bg-black/10 backdrop-blur-sm'}`}
      style={{
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo placeholder: Vercel logo SVG */}
      <Link href="/" aria-label="Home" className="flex items-center">
        <Image src="/vercel.svg" alt="Logo" width={32} height={32} priority />
      </Link>
      <div className="flex items-center gap-8 ml-auto justify-end w-full">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Resume</a>
      </div>
    </nav>
  );
}
