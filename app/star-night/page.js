"use client";
import React, { useState } from 'react';
import ScratchToReveal from '@/components/ui/scratchReveal';
import { Music, PartyPopper, MousePointerClick } from 'lucide-react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const StarNightPage = () => {
  const handleComplete = () => {
  };
  return (
    <BackgroundBeamsWithCollision className=" bg-gradient-to-b from-purple-900 to-black text-white p-4 mt-14">
      {/* Header */}
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-[3.75rem] md:text-[6rem] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Star Night
        </h1>
        <p className="text-[1.25rem] md:text-[1.5rem] text-gray-300">
          The biggest reveal of the year
        </p>
      </div>

      {/* Scratch Card */}
      <div className='flex justify-center items-center max-w-2xl mx-auto bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm'>
      <ScratchToReveal
        width={500}
        height={300}
        minScratchPercentage={90}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 mb-8"
        onComplete={handleComplete}
        gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
      >
           <div className="bg-purple-900/90 p-8 rounded-xl w-full h-full text-center flex flex-col items-center justify-center">
             <div className="flex justify-center gap-4 mt-4">
               <Music className="w-8 h-8 text-purple-400 animate-bounce z-[0]" />
             <h2 className="text-[2.25rem] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
               Coming Soon
             </h2>
               <PartyPopper className="w-8 h-8 text-pink-400 animate-bounce delay-100" />
             </div>
             <p className="mt-4 text-lg text-gray-300">
               Get ready for an unforgettable night!
             </p>
           </div>
      </ScratchToReveal>
    </div>
    </BackgroundBeamsWithCollision>
    
  );
};

export default StarNightPage;