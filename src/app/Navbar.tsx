"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Icons
import {
  IconUser,
  IconHome,
  IconFolders,
  IconFileCv,
  IconLayoutSidebarRightExpandFilled,
  IconX,
} from "@tabler/icons-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
        {/* desktop navbar */}
        {/* before hovering on the navbar: low opacity & saturation for LOGO; hover on the NAVBAR: full opacity & saturation for the LOGO */}
        {/* make the increase blur when hovered */}
        <div className="navbar bg-base-100/80 backdrop-blur-xs fixed top-0 left-0 right-0 z-50 border-b border-base-300/20 group hover:backdrop-blur-md transition-all duration-300">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost px-2">
              <Image src="/logo_ricfinity.svg" alt="Logo" width={120} height={40} className="h-8 w-auto opacity-70 saturate-80 transition-all duration-300 group-hover:opacity-100 group-hover:saturate-150 group-hover:drop-shadow-lg group-hover:shadow-lg group-hover:shadow-primary/50" />
            </Link>
          </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link href="/" className="btn btn-accent btn-soft rounded-full text-lg">Home</Link></li>
            <li><Link href="/about" className="btn btn-accent btn-soft rounded-full text-lg">About</Link></li>
            <li><Link href="/projects" className="btn btn-accent btn-soft rounded-full text-lg">Projects</Link></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          {/* mobile menu */}
          {/* include resume in the list */}
          {/* make the section FULL height animate from the right of the screen,
           - have a close button in the top right corner,
           - width ~ 60% of screen, 
           - background color base-100,
           - when expanded, make it like a modal,
           - auto close when clicking on a link
           - home, about, projects, resume
           - basically like a google site implementation
           - that's it
           */}
          
          {/* Mobile menu button */}
          <button 
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <IconLayoutSidebarRightExpandFilled stroke={2} className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay - rendered outside navbar to avoid constraints */}
      {isMounted && isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-[200px] bg-base-100 shadow-xl">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="btn btn-circle btn-sm btn-ghost"
              >
                <IconX stroke={2} className="w-5 h-5" />
              </button>
            </div>
            
            {/* Menu items - with icons*/}
            <div className="flex flex-col p-6 space-y-4">
              <Link 
                href="/" 
                className="btn btn-ghost justify-start text-lg h-12"
                onClick={closeMobileMenu}
              >
                <IconHome stroke={2} className="w-5 h-5" />
                Home
              </Link>
              <Link 
                href="/about" 
                className="btn btn-ghost justify-start text-lg h-12"
                onClick={closeMobileMenu}
              >
                <IconUser stroke={2} className="w-5 h-5" />
                About
              </Link>
              <Link 
                href="/projects" 
                className="btn btn-ghost justify-start text-lg h-12"
                onClick={closeMobileMenu}
              >
                <IconFolders stroke={2} className="w-5 h-5" />
                Projects
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost justify-start text-lg h-12"
                onClick={closeMobileMenu}
              >
                <IconFileCv stroke={2} className="w-5 h-5" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
