import Link from 'next/link';

// Icons
import {
  IconArrowRight,
} from '@tabler/icons-react';

interface ViewMoreButtonProps {
  href: string;
  children?: React.ReactNode;
}

export default function ViewMoreButton({ href, children = "View more" }: ViewMoreButtonProps) {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center gap-2 btn btn-outline border-foreground bg-background hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-200 group rounded-full relative border-2 hover:pr-8"
    >
      <span className="font-medium">{children}</span>
      <IconArrowRight 
        className="w-5 h-5 absolute right-2 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" 
        stroke={2}
      />
    </Link>
  );
} 