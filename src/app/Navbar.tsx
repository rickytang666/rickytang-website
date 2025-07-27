"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-base-300/20">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost px-2">
          <Image src="/logo_ricfinity.svg" alt="Logo" width={120} height={40} className="h-8 w-auto" />
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href="/" className="px-4 py-2 hover:bg-base-200 rounded-lg">Home</Link></li>
          <li><Link href="/about" className="px-4 py-2 hover:bg-base-200 rounded-lg">About</Link></li>
          <li><Link href="/projects" className="px-4 py-2 hover:bg-base-200 rounded-lg">Projects</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mr-2">
          Resume
        </a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
