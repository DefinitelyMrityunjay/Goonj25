import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationFrame } from 'framer-motion';
import { ArrowRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

const galleryItems = [
    {
        id: 1,
        title: "Sports",
        description: "An exciting display of athleticism across multiple sports events.",
        type: "featured",
        src: "/Past_Gallery/sports.jpg",
        layout: "tall"
    },
    {
        id: 2,
        title: "Games",
        description: "Fun and engaging games brought students together in friendly competition.",
        type: "regular",
        src: "/Past_Gallery/games.jpg"
    },
    {
        id: 3,
        title: "Dance Performance",
        description: "Energetic and elegant choreography captivated the audience.",
        type: "regular",
        src: "/Past_Gallery/dance-performance.jpg"
    },
    {
        id: 4,
        title: "Band Performance",
        description: "Mesmerizing musical performances by talented bands.",
        type: "wide",
        src: "/Past_Gallery/band-performance.jpg"
    },
    {
        id: 5,
        title: "Nukkad Natak",
        description: "Street plays highlighting social and cultural issues.",
        type: "featured",
        src: "/Past_Gallery/nukkad-natak.jpg",
        layout: "wide"
    },
    {
        id: 6,
        title: "Hackathon",
        description: "Innovative coding marathons solving real-world problems.",
        type: "regular",
        src: "/Past_Gallery/hackathon.jpg"
    },
    {
        id: 7,
        title: "Parvinder Singh",
        description: "Laughter-filled session by Parvinder.",
        type: "regular",
        src: "/Past_Gallery/comedian.jpg"
    },
    {
        id: 8,
        title: "DJ Night",
        description: "An electrifying night with groovy beats and dance.",
        type: "wide",
        src: "/Past_Gallery/dj-night.jpg"
    },
    {
        id: 9,
        title: "Mr. and Mrs. Goonj",
        description: "A showcase of charm, wit, and talent to crown the best.",
        type: "featured",
        src: "/Past_Gallery/mr-mrs-goonj.jpg",
        layout: "tall"
    },
    {
        id: 10,
        title: "Solo Dance",
        description: "Individual performers lit up the stage with their moves.",
        type: "regular",
        src: "/Past_Gallery/solo-dance.jpg"
    },
    {
        id: 11,
        title: "Talent Hunt",
        description: "An open platform for showcasing diverse talents.",
        type: "regular",
        src: "/Past_Gallery/talent-hunt.jpg"
    },
    {
        id: 12,
        title: "Star Night",
        description: "A grand evening with spectacular performances by stars.",
        type: "wide",
        src: "/Past_Gallery/star-night.jpg"
    },
    {
        id: 13,
        title: "Chess",
        description: "A battle of wits and strategy in intense chess matches.",
        type: "featured",
        src: "/Past_Gallery/chess.jpg",
        layout: "tall"
    },
    {
        id: 14,
        title: "Stalls by Students",
        description: "Creative and innovative stalls showcasing student talents and ideas.",
        type: "regular",
        src: "/Past_Gallery/student-stalls.jpg"
    },
    {
        id: 15,
        title: "IPL Auction",
        description: "Exciting mock IPL auction with students as team owners.",
        type: "regular",
        src: "/Past_Gallery/ipl-auction.jpg"
    },
    {
        id: 16,
        title: "Solo Singing",
        description: "Melodious solo singing performances by talented vocalists.",
        type: "wide",
        src: "/Past_Gallery/solo-singing.jpg"
    },
    {
        id: 17,
        title: "Blood Donation",
        description: "A noble initiative for saving lives through blood donation camps.",
        type: "featured",
        src: "/Past_Gallery/blood-donation.jpg",
        layout: "wide"
    },
    {
        id: 18,
        title: "Food Stalls",
        description: "A delightful spread of cuisines offered by food stalls.",
        type: "regular",
        src: "/Past_Gallery/food-stalls.jpg"
    },
    {
        id: 19,
        title: "Kavi Sammelan",
        description: "A mesmerizing evening of poetry and literary expressions.",
        type: "regular",
        src: "/Past_Gallery/kavi-sammelan.jpg"
    },
    {
        id: 20,
        title: "Marathon",
        description: "A high-energy marathon marking the spirit of unity and health.",
        type: "wide",
        src: "/Past_Gallery/marathon.jpg"
    },
    {
        id: 21,
        title: "Logo",
        description: "Beautiful GOONJ.",
        type: "featured",
        src: "/Past_Gallery/Logo.jpg",
        type:"wide"
    },
    {
        id: 22,
        title: "Entrance Arch",
        description: "A grand and welcoming entrance decorated with lights and banners.",
        type: "regular",
        src: "/Past_Gallery/entrance-arch.jpg"
    },
    {
        id: 23,
        title: "Photo Frames",
        description: "Photo Frames for memorable photoframes",
        type: "regular",
        src: "/Past_Gallery/props.jpg"
    },
    {
        id: 24,
        title: "Main Stage Decorations",
        description: "A vibrant and eye-catching setup for the central stage.",
        type: "wide",
        src: "/Past_Gallery/main-stage-decor.jpg"
    },
    {
        id: 25,
        title: "Friends Forever",
        description: "A cheerful group of friends enjoying the event together.",
        type: "wide",
        src: "/Past_Gallery/friends-group-1.jpg"
    },
    {
        id: 26,
        title: "Solo Smile",
        description: "A beautiful portrait capturing a student's joyful moment.",
        type: "regular",
        src: "/Past_Gallery/individual-portrait-1.jpg"
    },
    {
        id: 27,
        title: "Team Spirit",
        description: "A lively group photo showcasing camaraderie.",
        type: "wide",
        src: "/Past_Gallery/team-spirit.jpg"
    },
    {
        id: 28,
        title: "Happy Faces",
        description: "Friends posing with radiant smiles during the festivities.",
        type: "regular",
        src: "/Past_Gallery/friends-group-2.jpg"
    },
    {
        id: 29,
        title: "Bonding Moments",
        description: "A small group sharing a moment together.",
        type: "wide",
        src: "/Past_Gallery/bonding-moments.jpg"
    },
    {
        id: 30,
        title: "Side Shot",
        description: "A side shot of a student lost in the moment.",
        type: "regular",
        src: "/Past_Gallery/individual-portrait-2.jpg"
    },
    {
        id: 31,
        title: "Best Friends",
        description: "Two friends sharing a joyful moment during the event.",
        type: "wide",
        src: "/Past_Gallery/two-friends-1.jpg"
    },
    {
        id: 32,
        title: "Radiant Individual",
        description: "A bright and radiant portrait of a student.",
        type: "regular",
        src: "/Past_Gallery/individual-portrait-4.jpg",
    }
];

const BentoGallery = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [paths, setPaths] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [duplicateSets, setDuplicateSets] = useState(2);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
    const [userScrolling, setUserScrolling] = useState(false);
    const scrollTimeout = useRef(null);
    const lastScrollPosition = useRef(0);
    const lastTime = useRef(performance.now());
    const scrollVelocity = useRef(2); // Controls auto-scroll speed

    // Generate duplicate items with unique keys
    const generateDuplicateItems = (numSets) => {
        return Array.from({ length: numSets }, (_, setIndex) =>
            galleryItems.map(item => ({
                ...item,
                id: `${item.id}-${setIndex}`,
            }))
        ).flat();
    };

    const [displayItems, setDisplayItems] = useState(generateDuplicateItems(duplicateSets));

    // Handle user scroll end detection with smooth transition
    const handleScrollEnd = () => {
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
            setUserScrolling(false);
            lastScrollPosition.current = scrollRef.current?.scrollLeft || 0;
        }, 200);
    };

    // Handle scroll events
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            const currentPosition = scrollContainer.scrollLeft;
            setScrollPosition(currentPosition);

            // Detect user scrolling
            if (Math.abs(currentPosition - lastScrollPosition.current) > 1) {
                setUserScrolling(true);
                handleScrollEnd();
            }

            lastScrollPosition.current = currentPosition;
        };

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    // Optimized smooth auto-scroll animation
    useAnimationFrame(() => {
        if (scrollRef.current && autoScrollEnabled && !isDragging && !isHovering && !userScrolling) {
            const scrollContainer = scrollRef.current;
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const scrollThreshold = maxScroll * 0.7;

            // Use a constant velocity for smoother motion
            const scrollSpeed = 3; // Increased speed
            let newPosition = scrollPosition + scrollSpeed;

            // Add new content before reaching the end
            if (newPosition > scrollThreshold) {
                setDuplicateSets(prev => prev + 1);
                setDisplayItems(generateDuplicateItems(duplicateSets + 1));
            }

            // Use requestAnimationFrame for smoother scrolling
            requestAnimationFrame(() => {
                if (scrollContainer) {
                    scrollContainer.scrollLeft = newPosition;
                    setScrollPosition(newPosition);
                    lastScrollPosition.current = newPosition;
                }
            });
        }
    });

    // Group items for the bento grid layout
    const groupedItems = displayItems.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 4);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(item);
        return acc;
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const springConfig = { stiffness: 100, damping: 30, bounce: 0 };

    const titleY = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.25], [-50, -25, 0]),
        springConfig
    );

    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.25], [0.8, 0.9, 1]),
        springConfig
    );

    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.25], [0.5, 0.7, 1]),
        springConfig
    );

    const rotate = useSpring(
        useTransform(scrollYProgress, [0, 0.1, 0.25], [5, 2, 0]),
        springConfig
    );

    const getItemClasses = (type, layout) => {
        switch (type) {
            case 'featured':
                return layout === 'tall'
                    ? 'row-span-2 col-span-1 h-full'
                    : 'row-span-1 col-span-2 w-full';
            case 'wide':
                return 'col-span-2 row-span-1';
            default:
                return 'col-span-1 row-span-1';
        }
    };

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0D0221] via-[#150634] to-[#0D0221]"
        >
            {/* Background patterns and header remain the same... */}
            <div className="sticky top-0 py-16">
                <motion.div
                    style={{ y: titleY }}
                    className="container mx-auto px-4 mb-12 relative z-10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-center text-orange-50 mb-4"
                    >
                        Past <span className="text-orange-400">Glimpses</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-orange-500 mx-auto"
                    />
                </motion.div>

                {/* Gallery */}
                <motion.div
                    ref={scrollRef}
                    style={{
                        scale,
                        opacity,
                        rotateX: rotate,
                        perspective: "1000px"
                    }}
                    className="overflow-x-auto overflow-y-hidden py-10 relative z-10 cursor-grab active:cursor-grabbing"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                >
                    <div className="min-w-max px-4 pb-8">
                        <motion.div className="flex gap-8">
                            {groupedItems.map((group, groupIndex) => (
                                <motion.div
                                    key={groupIndex}
                                    className="grid grid-cols-3 grid-rows-2 gap-4 w-[800px] h-[500px]"
                                    initial={{
                                        y: 50 * (groupIndex + 1),
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1 * groupIndex,
                                    }}
                                >
                                    {group.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            whileHover={{ scale: 1.02 }}
                                            className={`relative group overflow-hidden rounded-xl bg-[#1A0F1F] border border-cyan-500/20 ${getItemClasses(item.type, item.layout)}`}
                                        >
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                                fill
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0221]/90 via-[#150634]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-xl font-bold text-orange-50 mb-2">{item.title}</h3>
                                                    <p className="text-sm text-orange-100/80">{item.description}</p>
                                                </div>
                                            </div>

                                            <motion.div
                                                className="absolute inset-0 border-2 border-orange-500/0 rounded-xl transition-opacity duration-300"
                                                whileHover={{
                                                    borderColor: "rgba(255,165,0,0.2)",
                                                    boxShadow: "0 0 20px rgba(255,165,0,0.1)"
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-2 mt-8 text-orange-100/60 relative z-10"
                >
                    <p className="text-sm">
                        {autoScrollEnabled ?
                            "Scroll Horizontally" :
                            "Manual scroll mode - Click resume for auto-scroll"
                        }
                    </p>
                    <ArrowRight className="w-4 h-4" />
                </motion.div>
            </div>

            {/* Hide Scrollbar */}
            <style jsx global>{`
                .overflow-x-auto::-webkit-scrollbar {
                    display: none;
                }
                .overflow-x-auto {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};
export default BentoGallery;