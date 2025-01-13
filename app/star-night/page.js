"use client";
import React, { useState } from 'react';
import { Music, PartyPopper, MousePointerClick } from 'lucide-react';

const StarNightPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [revealedPercentage, setRevealedPercentage] = useState(0);
  const [isScratching, setIsScratching] = useState(false);
  const [showFinalReveal, setShowFinalReveal] = useState(false);

  const handleMouseMove = (e) => {
    if (!isScratching) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    
    const newPercentage = Math.min(revealedPercentage + 0.8, 100);
    setRevealedPercentage(newPercentage);
    
    if (newPercentage >= 100 && !showFinalReveal) {
      setShowFinalReveal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-4 mt-14">
      {/* Header */}
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Star Night
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          The biggest reveal of the year
        </p>
      </div>

      {/* Scratch Card */}
      <div className="max-w-2xl mx-auto bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm">
        <div 
          className="relative h-64 bg-gray-900 rounded-lg cursor-pointer overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseLeave={() => setIsScratching(false)}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            handleMouseMove({
              clientX: touch.clientX,
              clientY: touch.clientY,
              currentTarget: e.currentTarget
            });
          }}
        >
          {/* Scratch overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"
            style={{
              maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent ${revealedPercentage}%, black 100%)`
            }}
          />
          
          {/* Instructions */}
          {revealedPercentage < 5 && (
            <div className="absolute inset-0 flex items-center justify-center animate-bounce">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MousePointerClick className="w-5 h-5" />
                <span>Click and drag to reveal!</span>
              </div>
            </div>
          )}
          
          {/* Hidden content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold mb-2">Mystery Guest</p>
              <p className="text-lg">Keep scratching to reveal!</p>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>{revealedPercentage.toFixed(0)}% revealed</span>
            <span>{revealedPercentage >= 100 ? 'Complete!' : 'Keep going!'}</span>
          </div>
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${revealedPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Final reveal popup */}
      {showFinalReveal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-purple-900/90 p-8 rounded-xl max-w-lg mx-4 w-full text-center">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Coming Soon
            </h2>
            <div className="flex justify-center gap-4 mt-4">
              <Music className="w-8 h-8 text-purple-400 animate-bounce" />
              <PartyPopper className="w-8 h-8 text-pink-400 animate-bounce delay-100" />
            </div>
            <p className="mt-4 text-lg text-gray-300">
              Get ready for an unforgettable night!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarNightPage;