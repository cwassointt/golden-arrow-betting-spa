import { SVGProps } from "react";

export const CrownIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M8 22l8 22h32l8-22-12 8-12-16-12 16-12-8z" />
    <path d="M14 50h36" />
    <circle cx="8" cy="22" r="2.5" fill="currentColor" />
    <circle cx="56" cy="22" r="2.5" fill="currentColor" />
    <circle cx="32" cy="14" r="2.5" fill="currentColor" />
  </svg>
);

export const CrownSolidIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M3 8l4 9h10l4-9-5 3-4-6-4 6-5-3zm2 11h14v2H5z" />
  </svg>
);

export const TrophyOutlineIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M20 8h24v14a12 12 0 01-24 0V8z" />
    <path d="M20 14H10v4a8 8 0 008 8" />
    <path d="M44 14h10v4a8 8 0 01-8 8" />
    <path d="M26 36h12l-2 8h-8l-2-8z" />
    <path d="M22 50h20" />
    <path d="M20 56h24" />
  </svg>
);
