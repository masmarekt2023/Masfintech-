"use client"

import { useEffect, useRef } from 'react';

export default function SpecialGraphic({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const svg = svgRef.current;
      if (!svg) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } = svg.getBoundingClientRect();
      const offsetX = ((clientX - left) / width - 0.5) * 45; 
      const offsetY = ((clientY - top) / height - 0.5) * 45; 

      svg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };
    

    
    const card = svgRef.current?.parentElement;
    card?.addEventListener('mousemove', handleMouseMove);
    return () => {
      card?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`w-full h-full bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 ${className}`}>
      <svg ref={svgRef} className="w-full h-full transition-transform duration-500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"> {/* Increased duration for smoother transition */}
        <path fill="#FF6F61" d="M43.2,-74.4C55.7,-66.7,63.9,-55.1,69.2,-42.9C74.5,-30.7,76.9,-17.8,77.1,-5.1C77.3,7.6,75.3,20.2,69.2,30.2C63.1,40.2,52.9,47.6,42.1,53.6C31.3,59.6,19.9,64.2,7.1,67.1C-5.7,70,-19.9,71.3,-32.1,67.1C-44.3,62.9,-54.5,53.2,-61.3,41.8C-68.1,30.4,-71.5,17.2,-72.6,3.9C-73.7,-9.4,-72.5,-23,-66.6,-34.1C-60.7,-45.2,-50.1,-53.8,-38.7,-61.1C-27.3,-68.4,-13.7,-74.3,0.5,-74.9C14.7,-75.5,29.4,-70.9,43.2,-74.4Z" transform="translate(100 100)" />
        <path fill="#FF6F61" d="M21.6,-37.2C27.9,-33.4,31.9,-27.6,34.6,-21.4C37.3,-15.2,38.5,-8.9,38.6,-2.5C38.7,3.8,37.7,10.1,34.6,15.1C31.5,20.1,26.5,23.8,21.1,26.8C15.6,29.8,9.9,32.1,3.5,33.6C-2.8,35.1,-9.9,35.6,-16.1,33.6C-22.2,31.6,-27.3,27.1,-30.6,20.9C-33.9,14.7,-35.7,6.9,-36.3,-2.1C-36.8,-11.1,-36.3,-22.1,-33.3,-28.4C-30.3,-34.7,-24.9,-36.3,-19.3,-40.7C-13.7,-45.1,-6.8,-52.2,0.2,-52.5C7.3,-52.8,14.7,-46.9,21.6,-37.2Z" transform="translate(100 100) scale(0.5)" />
        <path fill="#FF6F61" d="M10.8,-18.6C13.9,-16.7,15.9,-13.8,17.3,-10.7C18.6,-7.6,19.2,-4.4,19.3,-1.3C19.3,1.9,18.8,5,17.3,7.5C15.8,10,13.2,11.9,10.6,13.4C7.8,14.9,5,15.9,1.8,16.8C-1.4,17.7,-4.9,18.1,-8,16.8C-11.1,15.5,-13.6,12.5,-15.3,9.4C-17,6.3,-18,3.1,-18.2,-1.1C-18.4,-5.3,-17.7,-10.5,-16.6,-14.2C-15.2,-17.9,-13.1,-20.1,-9.6,-22.3C-6.1,-24.5,-3,-26.1,0.1,-26.3C3.2,-26.5,6.9,-25.1,10.8,-18.6Z" transform="translate(100 100) scale(0.25)" />
      </svg>
    </div>
  );
}
