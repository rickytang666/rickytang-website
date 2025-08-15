"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

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
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:mt-5 lg:px-5 flex justify-center">
        <div className="w-[75%]">
          <div className="flex items-center justify-between h-20 px-6 lg:px-10 rounded-full bg-white/10 backdrop-blur-md border border-sidebar-border/30 hover:border-primary/40 shadow-xl shadow-foreground hover:shadow-3xl hover:shadow-black/30 transition-all duration-300 group relative overflow-hidden">
            {/* 3D depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full"></div>
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-full"></div>
            {/* Content with relative positioning for 3D layering */}
            <div className="relative z-10 flex items-center">
              <Link href="/" className="px-2">
                <Image
                  src="/logo_ricfinity.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="h-10 lg:h-12 w-auto saturate-80 transition-all duration-300 group-hover:saturate-150"
                />
              </Link>
            </div>

            <div className="relative z-10 flex items-center gap-8">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold drop-shadow-md hover:drop-shadow-lg"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold drop-shadow-md hover:drop-shadow-lg"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold drop-shadow-md hover:drop-shadow-lg"
                >
                  Projects
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-200 text-2xl font-bold drop-shadow-md hover:drop-shadow-lg"
                >
                  Resume
                </Link>
                <ThemeToggle />
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <IconLayoutSidebarRightExpandFilled
                  stroke={2}
                  className="w-8 h-8 text-foreground drop-shadow-md"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - rendered outside navbar to avoid constraints */}
      {isMounted && isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-[170px] bg-sidebar shadow-xl border-l border-sidebar-border">
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
            <div className="flex flex-col p-6 space-y-4 justify-items-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconHome stroke={2} className="w-5 h-5" />
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconUser stroke={2} className="w-5 h-5" />
                About
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconFolders stroke={2} className="w-5 h-5" />
                Projects
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-sidebar-foreground hover:text-primary transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconFileCv stroke={2} className="w-5 h-5" />
                Resume
              </a>

              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center text-lg text-sidebar-foreground justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
