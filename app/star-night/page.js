"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BandPosterCard, DecorativeSVG, SingerPosterCard, Sparkle } from './star-night-utility';
import { Mic, Music, Heart, Star } from 'lucide-react';

const AboutSection = ({ isVisible }) => (
  <motion.div
    className="w-full max-w-6xl mx-auto px-2 xs:px-4 sm:px-6 mt-8 xs:mt-12 sm:mt-24 py-8 xs:py-12 sm:py-20 space-y-6 xs:space-y-8 sm:space-y-12"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-8 border border-gray-800">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="space-y-3 xs:space-y-4"
        >
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
            About Akhil
          </h3>
          <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
            Akhil Pasreja, a renowned Punjabi singer, songwriter, and performer, gained fame with his hit song &quot;Khaab&quot; in 2016. His unique blend of classical training and modern innovation has captivated audiences worldwide. He made his Bollywood debut with &quot;Duniyaa&quot; from the film &quot;Luka Chuppi&quot; (2019).
          </p>
          <div className="flex flex-wrap items-center gap-2 xs:gap-4 text-gray-400 text-xs xs:text-sm sm:text-base">
            <span className="flex items-center gap-1 xs:gap-2">
              <Music className="w-3 h-3 xs:w-4 xs:h-4" /> 3M+ Followers
            </span>
            <span className="flex items-center gap-1 xs:gap-2">
              <Heart className="w-3 h-3 xs:w-4 xs:h-4" /> 10+ Hit Songs
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="space-y-3 xs:space-y-4"
        >
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
            Achievements
          </h3>
          <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm sm:text-base">
            {[
              'Best Breakthrough Act - Brit Asia TV Music Awards (2017)',
              'TIIFA Award for "Khaab" (2016)',
              'Punjabi Music Best New Age Vocalist Award (2017)',
              'Bollywood Debut - "Duniyaa" (2019)'
            ].map((achievement, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-1.5 xs:gap-2 text-gray-300"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Star className="w-3 h-3 xs:w-4 xs:h-4 text-orange-400 flex-shrink-0" />
                <span className="flex-1">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-6 xs:mt-8 text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <blockquote className="text-xs xs:text-base sm:text-lg italic text-gray-400">
          &quot;Music is the universal language that connects souls across the world.&quot;
        </blockquote>
        <p className="text-orange-400 mt-1.5 xs:mt-2 text-xs xs:text-sm sm:text-base">- Akhil</p>
      </motion.div>
    </div>

    <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-8 border border-gray-800">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="space-y-3 xs:space-y-4"
        >
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
            About Aarambh
          </h3>
          <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">
            Aarambh, formed in Chandigarh, is a dynamic fusion band that brings together classical Indian rhythms with contemporary rock elements. Their innovative sound has earned them a dedicated following across North India, becoming a staple in college festivals.
          </p>
          <div className="flex flex-wrap items-center gap-2 xs:gap-4 text-gray-400 text-xs xs:text-sm sm:text-base">
            <span className="flex items-center gap-1 xs:gap-2">
              <Music className="w-3 h-3 xs:w-4 xs:h-4" /> 500K+ Streams
            </span>
            <span className="flex items-center gap-1 xs:gap-2">
              <Mic className="w-3 h-3 xs:w-4 xs:h-4" /> 100+ Shows
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="space-y-3 xs:space-y-4"
        >
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 text-transparent bg-clip-text">
            Notable Performances
          </h3>
          <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm sm:text-base">
            {[
              'Headliners at Mood Indigo, IIT Bombay (2023)',
              'Winners of Band Wars, BITS Pilani (2022)',
              'Featured at NH7 Weekender (2023)',
              'Opening Act for Indian Ocean (2022)'
            ].map((highlight, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-1.5 xs:gap-2 text-gray-300"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Star className="w-3 h-3 xs:w-4 xs:h-4 text-orange-400 flex-shrink-0" />
                <span className="flex-1">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-6 xs:mt-8 text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <blockquote className="text-xs xs:text-base sm:text-lg italic text-gray-400">
          &quot;Our music is where tradition meets innovation, creating a bridge between the past and future.&quot;
        </blockquote>
        <p className="text-orange-400 mt-1.5 xs:mt-2 text-xs xs:text-sm sm:text-base">- Aarambh</p>
      </motion.div>
    </div>
  </motion.div>
);
const SingerReveal = () => {
  const [showPoster, setShowPoster] = useState(false);
  const [showRocket, setShowRocket] = useState(true);
  const [showSparkles, setShowSparkles] = useState(false);
  const [showMainExplosion, setShowMainExplosion] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const explosionTimer = setTimeout(() => {
      setShowRocket(false);
      setShowMainExplosion(true);
    }, 1200);

    const sparklesTimer = setTimeout(() => {
      setShowSparkles(true);
    }, 1300);

    const posterTimer = setTimeout(() => {
      setShowMainExplosion(false);
      setShowSparkles(false);
      setShowPoster(true);
    }, 3500);

    const aboutTimer = setTimeout(() => {
      setShowAbout(true);
    }, 4000);

    return () => {
      clearTimeout(explosionTimer);
      clearTimeout(sparklesTimer);
      clearTimeout(posterTimer);
      clearTimeout(aboutTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-start pt-40 sm:pt-60 relative overflow-hidden">
      <DecorativeSVG />
      {showRocket && (
        <motion.div
          initial={{ y: 500, x: '-50%', opacity: 1 }}
          animate={{
            y: 100,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.8, 1],
            ease: "easeOut"
          }}
          className="absolute left-1/2 z-10"
        >
          <div className="relative">
            <div className="w-2 xs:w-3 sm:w-4 h-8 xs:h-12 sm:h-16 bg-gradient-to-b from-orange-500 to-red-600">
              <div className="w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 bg-gray-300 rounded-t-full" />
              <div className="absolute -left-0.5 xs:-left-1 bottom-0 w-0.5 xs:w-1 h-1.5 xs:h-2 sm:h-3 bg-gray-400 rotate-45" />
              <div className="absolute -right-0.5 xs:-right-1 bottom-0 w-0.5 xs:w-1 h-1.5 xs:h-2 sm:h-3 bg-gray-400 -rotate-45" />
            </div>
            <motion.div
              className="absolute -bottom-6 xs:-bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{
                height: ["30px", "60px"],
                opacity: [1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "restart"
              }}
            >
              <div className="w-3 xs:w-4 sm:w-6 h-full bg-gradient-to-t from-transparent via-yellow-500 to-orange-500 rounded-full blur-sm" />
              <div className="w-1.5 xs:w-2 sm:w-3 h-full bg-gradient-to-t from-transparent via-orange-400 to-red-500 rounded-full blur-md" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {showMainExplosion && (
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{
            scale: [0.1, 3],
            opacity: [1, 0]
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div className="w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12 bg-yellow-500 rounded-full blur-lg" />
        </motion.div>
      )}

      {showSparkles && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          {[...Array(60)].map((_, i) => (
            <Sparkle
              key={`spark1-${i}`}
              delay={Math.random() * 0.5}
              x={0}
              y={0}
              size={`w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-2 sm:h-2`}
              duration={2}
              color="bg-yellow-500"
            />
          ))}
          {[...Array(40)].map((_, i) => (
            <Sparkle
              key={`spark2-${i}`}
              delay={Math.random() * 0.5}
              x={0}
              y={0}
              size={`w-0.5 h-0.5 xs:w-1 xs:h-1`}
              duration={1.5}
              color="bg-orange-400"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <Sparkle
              key={`spark3-${i}`}
              delay={Math.random() * 0.5}
              x={0}
              y={0}
              size={`w-1 h-1 xs:w-2 xs:h-2 sm:w-3 sm:h-3`}
              duration={2.5}
              color="bg-red-500"
            />
          ))}
        </div>
      )}

      {showPoster && (
        <div className="flex flex-col items-center w-full px-2 xs:px-4">
          <motion.div
            className="flex flex-col md:flex-row gap-4 xs:gap-6 sm:gap-8 lg:gap-12 items-center justify-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -top-8 xs:-top-16 sm:-top-32 -left-8 xs:-left-16 sm:-left-32 w-16 xs:w-32 sm:w-64 h-16 xs:h-32 sm:h-64 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="url(#paint4_linear)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, rotate: 0 }}
                  animate={{ pathLength: 1, rotate: 360 }}
                  transition={{
                    pathLength: { duration: 2, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />
                <defs>
                  <linearGradient id="paint4_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F97316" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 xs:-bottom-16 sm:-bottom-32 -right-8 xs:-right-16 sm:-right-32 w-16 xs:w-32 sm:w-64 h-16 xs:h-32 sm:h-64 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M40 100C40 60 60 40 100 40C140 40 160 60 160 100C160 140 140 160 100 160C60 160 40 140 40 100Z"
                  stroke="url(#paint5_linear)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="paint5_linear" x1="200" y1="200" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06B6D4" />
                    <stop offset="1" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-50 xs:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                  x="50"
                  y="50"
                  width="300"
                  height="300"
                  stroke="url(#paint6_linear)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, rotate: 0 }}
                  animate={{ pathLength: 1, rotate: 360 }}
                  transition={{
                    pathLength: { duration: 3, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                />
                <defs>
                  <linearGradient id="paint6_linear" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F97316" />
                    <stop offset="0.5" stopColor="#06B6D4" />
                    <stop offset="1" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <SingerPosterCard />
            <BandPosterCard />
          </motion.div>
          <AboutSection isVisible={showAbout} />
        </div>
      )}
    </div>
  );
}

export default SingerReveal;