"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Book,
  Code,
  Users,
  Sparkles,
  Download,
} from "lucide-react";

export default function BrochuresPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / maxScroll;
      setScrollProgress(progress);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownload = (e, brochure) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = brochure.link;
    link.download = `${brochure.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const brochures = [
    {
      title: "Marketing Brochure",
      description:
        "Explore our marketing strategies and success stories that have shaped our brand journey.",
      icon: Book,
      color: "from-pink-600 to-rose-600",
      link: "brochures/marketing_brochure_2025.pdf",
      stats: { pages: 25, lastUpdated: "2025" },
    },
    {
      title: "Technical Brochure",
      description:
        "Dive into our technical specifications, innovative solutions, and engineering excellence.",
      icon: Code,
      color: "from-blue-600 to-cyan-600",
      link: "brochures/marketing_brochure_2025.pdf",
      stats: { pages: 25, lastUpdated: "2025" },
    },
    {
      title: "Cultural Brochure",
      description:
        "Discover our culture, core values, and the vibrant community that drives our success.",
      icon: Users,
      color: "from-purple-600 to-indigo-600",
      link: "brochures/cultural_brochure_2025.pdf",
      stats: { pages: 43, lastUpdated: "2025" },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-28 p-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 blur-3xl transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(88, 28, 135, 0.8), transparent 40%),
            radial-gradient(circle at ${mousePosition.y}px ${mousePosition.x}px, rgba(236, 72, 153, 0.4), transparent 30%)
          `,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Explore Our Brochures
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our curated collection of brochures, packed with all the
            essential details and exciting highlights of our college fest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brochures.map((brochure, index) => (
            <motion.div
              key={brochure.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className={`group rounded-xl p-8 cursor-pointer bg-gray-900/80 backdrop-blur-sm
                          border border-gray-800 hover:border-gray-700 transition-all duration-300
                          ${selectedCard === index
                    ? "ring-2 ring-purple-500"
                    : ""
                  }`}
                style={{
                  height: selectedCard === index ? "auto" : "300px",
                }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${brochure.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />
                <div className="card-main-content">
                  <div className="flex items-center justify-between mb-6 relative">
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-br ${brochure.color}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <brochure.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <motion.button
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(e, brochure);
                      }}
                    >
                      <span className="text-sm">Download</span>
                      <Download className="w-3 h-3" />
                    </motion.button>
                  </div>
                  <div className="relative">
                    <h2
                      className="text-2xl font-semibold mb-3 text-white group-hover:text-transparent 
                                group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 
                                group-hover:to-pink-400 transition-all duration-300"
                    >
                      {brochure.title}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {brochure.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-800 mt-2">
                    <span>{brochure.stats.pages} pages</span>
                    <span>Updated {brochure.stats.lastUpdated}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
