import Image from 'next/image';

export default function MasLogo({ className, width, height } : { className?: string, width?: number, height?: number }) {
  return (
    <Image
      src="/mas.png"
      width={width || 100}
      height={height || 100}
      alt="Company logo"
      className={`${className} animate-pulse`}
    />
  );
}
