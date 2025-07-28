import Link from 'next/link';

interface ViewMoreButtonProps {
  href: string;
  children?: React.ReactNode;
}

export default function ViewMoreButton({ href, children = "View more" }: ViewMoreButtonProps) {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center gap-2 btn btn-outline hover:btn-primary transition-all duration-300 group rounded-full relative border-2 hover:pr-8"
    >
      <span className="font-medium">{children}</span>
      <svg 
        className="w-4 h-4 absolute right-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </Link>
  );
} 