"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Users } from 'lucide-react';

export const VideoCard = ({ videoUrl, isHovered, gradientFrom, gradientTo }) => (
    <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full h-full">
            <video
                className="w-full h-full object-cover rounded-lg"
                src={videoUrl}
                autoPlay={isHovered}
                loop
                muted
                playsInline
            >
                Your browser does not support the video tag.
            </video>
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60`} />
        </div>
    </div >
);

export const SingerPosterCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-96 h-[36rem] md:w-[28rem] md:h-[44rem] bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-xl p-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-cyan-500 opacity-20 rounded-xl" />
            <div className="relative h-full w-full bg-gray-900 rounded-lg overflow-hidden">
                <VideoCard
                    videoUrl="/path/to/akhil-video.mp4"
                    isHovered={isHovered}
                    gradientFrom="from-orange-500"
                    gradientTo="to-cyan-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <Mic className="w-24 h-24 text-orange-400 mb-8" />
                        <h2 className="text-7xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-400 text-transparent bg-clip-text tracking-wider mb-6">
                            Akhil
                        </h2>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/10 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-tl-full" />
            </div>
        </div >
    );
};

export const BandPosterCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-96 h-[36rem] md:w-[28rem] md:h-[44rem] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-xl" />
            <div className="relative h-full w-full bg-gray-900 rounded-lg overflow-hidden">
                <VideoCard
                    videoUrl="/path/to/aarambh-video.mp4"
                    isHovered={isHovered}
                    gradientFrom="from-purple-500"
                    gradientTo="to-pink-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <Users className="w-24 h-24 text-purple-400 mb-8" />
                        <h2 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 text-transparent bg-clip-text tracking-wider mb-6">
                            AARAMBH
                        </h2>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500/10 rounded-tl-full" />
            </div>
        </div >
    );
};

export const DecorativeSVG = () => (
    <>
        {/* Top Left Corner - Paisley Pattern */}
        <motion.div
            className="absolute -top-32 -left-32 w-64 h-64 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M0 0C30 0 40 10 40 40C40 70 20 80 0 80"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M10 0C40 0 50 10 50 40C50 70 30 90 0 90"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>

        {/* Bottom Right Corner - Mandala Segment */}
        <motion.div
            className="absolute -bottom-32 -right-32 w-64 h-64 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M100 100C70 100 60 90 60 60C60 30 80 20 100 20"
                    stroke="url(#paint1_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M90 100C60 100 50 90 50 60C50 30 70 10 100 10"
                    stroke="url(#paint1_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="75"
                    cy="75"
                    r="8"
                    stroke="url(#paint1_linear)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                />
                <defs>
                    <linearGradient id="paint1_linear" x1="100" y1="100" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06B6D4" />
                        <stop offset="1" stopColor="#F97316" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>

        {/* Top Right Accent */}
        <motion.div
            className="absolute -top-24 -right-24 w-48 h-48 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M100 0C85 15 80 30 85 50C90 70 95 80 100 90"
                    stroke="url(#paint2_linear)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                    <linearGradient id="paint2_linear" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F97316" />
                        <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>

        {/* Bottom Left Accent */}
        <motion.div
            className="absolute -bottom-24 -left-24 w-48 h-48 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M0 100C15 85 20 70 15 50C10 30 5 20 0 10"
                    stroke="url(#paint3_linear)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                    <linearGradient id="paint3_linear" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06B6D4" />
                        <stop offset="1" stopColor="#F97316" />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    </>
);

export const Sparkle = ({ delay, x, y, size, duration, color }) => (
    <motion.div
        className={`absolute ${size} ${color} rounded-full`}
        initial={{ x, y, opacity: 1 }}
        animate={{
            x: x + (Math.random() - 0.5) * 400,
            y: y + (Math.random() - 0.5) * 400,
            opacity: 0,
            scale: [1, 0.5, 0],
        }}
        transition={{
            duration,
            delay,
            ease: "easeOut"
        }}
    />
);