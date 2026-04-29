import { SVGProps } from "react";

export const TelegramIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M21.86 3.39a1.5 1.5 0 00-1.55-.23L2.9 10.17a1.2 1.2 0 00.06 2.24l4.34 1.43 2.06 6.4a1 1 0 001.66.42l2.5-2.32 4.46 3.27a1.5 1.5 0 002.36-.93l3.18-15.05a1.5 1.5 0 00-.66-1.24zM10 14.4l-.32 4.05-1.36-4.23 9.6-6.46L10 14.4z" />
  </svg>
);

export const InstagramIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
