type Props = {
  label: string;
  className?: string;
};

export const ImagePlaceholder = ({ label, className = "" }: Props) => (
  <div
    className={`flex items-center justify-center bg-[#E0E0E0] border border-neutral-300 ${className}`}
    role="img"
    aria-label={label}
  >
    <span className="font-display text-neutral-500 text-sm md:text-base tracking-widest uppercase">
      {label}
    </span>
  </div>
);
