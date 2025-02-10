"use client";
import { useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import SponserCTA from "../components/sponsercta";
import { FlaskConical, Dna } from 'lucide-react';
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const SponsorPage = () => {
	  const gridRef = useRef(null);
    const sponsorTiers = [
        {
            title: "Platinum Partners",
            icon: FlaskConical,
            description: "Leading pharmaceutical and biotech innovators",
            perks: ["Premium recognition", "Research showcase", "Innovation hub access"],
            color: [
              "from-emerald-400 to-cyan-400",
              "from-amber-400 to-yellow-400",
              "from-blue-400 to-indigo-400",
            ],
            sponsors: [
              // Column1
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739188259/PVR_Logo_kellkh.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189328/ChicagoPizza_ihl9jb.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189329/Malabar_Gold_and_Diamonds_New_Logo_nlwtqg.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190311/RedBull_etm0en.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190310/PaperBoat_zmk25l.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190954/theka_dv76qd.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190954/Geeks_For_geeks_j67g7p.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190954/Decathlon_syetpk.png",
                },
                // Column2
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189329/SBI_logo_bsemjw.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189329/vivo_cucdyb.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189329/RollXpress_radqeh.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190310/BarbequeNation_uet3kz.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190311/Expert_Education_Visa_bc4nv3.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190314/PuPulse_xs6m0u.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190953/BostonBites_o61el2.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190954/dainik_bhaskar_drjufk.png",
                },
                // Column3
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189329/coding-ninjas_zeix4z.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739189329/unstop_toigwf.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190310/RanglaTV_cvb9vs.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190310/yourpedia_logo_lx1h6j.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190310/Jal_qtlpfm.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190955/Roadies_a3brzu.jpg",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190958/The_Souled_store_dflyyv.png",
                },
                {
                  name: "Sponsor Name",
                  type: "Sponsor Title",
                  image:"https://res.cloudinary.com/dalvl67sv/image/upload/v1739190958/coco_nmdngp.png",
                },
            ]
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <main ref={gridRef} className="relative bg-[#0A192F] py-44 min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

            {/* Enhanced Biotech SVG Patterns */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Right Pattern */}
                <motion.div 
                    className="absolute top-16 right-16 md:top-24 md:right-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                        {/* DNA Helix Pattern */}
                        <motion.path
                            d="M200 50 C 250 100, 150 150, 200 200 S 150 250, 200 300"
                            stroke="url(#biotech_gradient)"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />

                        {/* Molecule Nodes */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.circle
                                key={i}
                                cx={200 + Math.cos(i * Math.PI/2) * 60}
                                cy={200 + Math.sin(i * Math.PI/2) * 60}
                                r="4"
                                fill="url(#biotech_gradient)"
                                initial={{ scale: 0 }}
                                animate={{ 
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.5,
                                    repeat: Infinity
                                }}
                            />
                        ))}

                        {/* Cell Structure */}
                        <motion.path
                            d="M150 150 Q 200 100, 250 150 T 350 150"
                            stroke="url(#biotech_gradient)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        />

                        <defs>
                            <linearGradient id="biotech_gradient" x1="0" y1="0" x2="400" y2="400">
                                <stop stopColor="#10B981" />
                                <stop offset="0.5" stopColor="#06B6D4" />
                                <stop offset="1" stopColor="#10B981" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
                {/* Bottom Left Pattern */}
                <motion.div 
                    className="absolute bottom-16 left-16 md:bottom-24 md:left-24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                        {/* Protein Structure Pattern */}
                        <motion.path
                            d="M100 200 Q 150 150, 200 200 T 300 200"
                            stroke="url(#biotech_gradient_2)"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />

                        {/* Amino Acid Chain */}
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.g key={i}>
                                <motion.circle
                                    cx={120 + i * 40}
                                    cy={200}
                                    r="6"
                                    fill="url(#biotech_gradient_2)"
                                    initial={{ scale: 0 }}
                                    animate={{ 
                                        scale: [0.8, 1, 0.8],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.3,
                                        repeat: Infinity
                                    }}
                                />
                                <motion.line
                                    x1={126 + i * 40}
                                    y1={200}
                                    x2={154 + i * 40}
                                    y2={200}
                                    stroke="url(#biotech_gradient_2)"
                                    strokeWidth="1.5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.3,
                                        repeat: Infinity
                                    }}
                                />
                            </motion.g>
                        ))}

                        {/* Cell Membrane */}
                        <motion.path
                            d="M50 300 C 100 280, 150 320, 200 300 S 300 280, 350 300"
                            stroke="url(#biotech_gradient_2)"
                            strokeWidth="1.5"
                            strokeDasharray="8 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity
                            }}
                        />

                        <defs>
                            <linearGradient id="biotech_gradient_2" x1="400" y1="400" x2="0" y2="0">
                                <stop stopColor="#06B6D4" />
                                <stop offset="0.5" stopColor="#10B981" />
                                <stop offset="1" stopColor="#06B6D4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.div
                        className="w-20 h-20 mx-auto mb-8 relative"
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl"
                            animate={{
                                rotate: [0, 180],
                                borderRadius: ["20%", "50%", "20%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        <motion.div
                            className="absolute inset-1 bg-[#0A192F] rounded-2xl"
                            animate={{
                                rotate: [180, 0],
                                borderRadius: ["20%", "50%", "20%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        <Dna className="absolute inset-0 m-auto w-10 h-10 text-emerald-500" />
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text mb-6">
                        Our Partners in Innovation
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
                        Meet the pioneering organizations advancing biotechnology research and development
                    </p>
                </motion.div>

                {/* Sponsors Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16"
                    ref={gridRef}
                >
                    {sponsorTiers.map((tier, index) => (
                      <ParallaxScroll tier={tier} key={tier.title} />
                    ))}
                </motion.div>

                {/* Enhanced CTA Section */}
                <SponserCTA />
            </div>
        </main>
    );
};

export default SponsorPage;
