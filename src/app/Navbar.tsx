"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import { ThemeToggle } from '@/components/theme-toggle';

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

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
        {/* desktop navbar */}
        {/* before hovering on the navbar: low opacity & saturation for LOGO; hover on the NAVBAR: full opacity & saturation for the LOGO */}
        {/* make the increase blur when hovered */}
        <div className="fixed top-0 left-0 right-0 z-50 lg:mt-5 lg:px-5">
          <div className="lg:mx-auto lg:w-[85%]">
            <div className="navbar z-[3] h-20 bg-sidebar/50 backdrop-blur-xs group hover:bg-sidebar/70 hover:backdrop-blur-lg transition-all duration-300 lg:rounded-full lg:px-10 dark:drop-shadow-xl dark:drop-shadow-white/30 dark:hover:drop-shadow-white/50 drop-shadow-xl drop-shadow-black/30 hover:drop-shadow-black/50">
              <div className="navbar-start">
                <Link href="/" className="px-2">
                  <Image
                    src="/logo_ricfinity.svg"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="h-10 lg:h-12 w-auto opacity-90 saturate-80 transition-all duration-300 neon group-hover:opacity-100 group-hover:saturate-200"
                  />
                </Link>
              </div>
            
            <div className="navbar-end">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                <Link 
                  href="/" 
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold"
                >
                  About
                </Link>
                <Link 
                  href="/projects" 
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold"
                >
                  Projects
                </Link>
                <Link 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold"
                >
                  Resume
                </Link>
                <ThemeToggle />
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="btn btn-ghost lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <IconLayoutSidebarRightExpandFilled stroke={2} className="w-8 h-8" />
              </button>
            </div>
          </div>
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
          <div className="absolute right-0 top-0 h-full w-[250px] bg-sidebar shadow-xl border-l border-sidebar-border">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="text-sidebar-foreground hover:text-primary transition-colors duration-200"
              >
                <IconX stroke={2} className="w-6 h-6" />
              </button>
            </div>
            
            {/* Menu items - with icons*/}
            <div className="flex flex-col p-6 space-y-4 bg-sidebar">
              <Link 
                href="/" 
                className="flex items-center gap-3 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                <IconHome stroke={2} className="w-5 h-5" />
                Home
              </Link>
              <Link 
                href="/about" 
                className="flex items-center gap-3 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                <IconUser stroke={2} className="w-5 h-5" />
                About
              </Link>
              <Link 
                href="/projects" 
                className="flex items-center gap-3 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                <IconFolders stroke={2} className="w-5 h-5" />
                Projects
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                <IconFileCv stroke={2} className="w-5 h-5" />
                Resume
              </a>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center gap-3 text-lg text-sidebar-foreground">
                <span>Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
