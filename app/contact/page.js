"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const ContactPage = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden and below
    visible: { opacity: 1, y: 0 }, // Visible state: fully shown and at normal position
  };

  const hierarchyData = [
    {
      title: 'Our Conveners',
      members: [
        { name: 'Er. Harbinder Singh', role: 'Convener' , phone:'+91 7889231615', src:'/Logos/Harbinder.jpg'},
        { name: 'Dr. Akashdeep Sharma', role: 'Co-Convener' , phone:'+91 7889231615', src:'/Logos/Akash.jpg' },
      ],
    },
    {
      title: 'Our Coordination Faculty',
      members: [
        { name: 'Prof A. P. Singh', role: 'Faculty'  , phone:'+91 7889231615', src:'/Logos/Amrinder.jpg' },
        { name: 'Prof. Shuchi Gupta', role: 'Faculty' , phone:'+91 7889231615', src:'/Logos/Suchi.jpg' },
        { name: 'Er. Hema Setia', role: 'Faculty' , phone:'+91 7889231615', src:'/Logos/Suchi.jpg' },
        { name: 'Dr. Vivek Pahwa', role: 'Faculty' , phone:'+91 7889231615', src:'/Logos/Vivek.jpg' },
        { name: 'Dr. Sukhvir Singh', role: 'Faculty' , phone:'+91 7889231615', src:'/Logos/Sukhvir.jpg' },
      ],
    },
    {
      title: 'Our Coordinators',
      members: [
        { name: 'Chakshush K Sharma', role: 'Goonj Coordinator', phone:'+91 7889231615', src:'/Logos/Goonj Coordinator.png' },
        { name: 'Shivani Sahgal', role: 'Cultural Coordinator', phone:'+91 8303926514', src:'/Logos/Cultural Coordinator.png'},
        { name: 'Mrityunjay Singh', role: 'Technical Coordinator', phone:'+91 9416027624', src:'/Logos/Technical Coordinator.png'},
        { name: 'Saksham Gupta', role: 'Financial Coordinator', phone:'+91 7018883576', src:'/Logos/Financial Coordinator.png'},
      ],
    },
  ];
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [scrambledTitles, setScrambledTitles] = useState({});

  const handleSubmit = (e) => {
  };

  const inputClasses = "w-full bg-white/10 backdrop-blur-sm rounded-lg border border-orange-500/20 p-3 text-white placeholder:text-white/50 focus:outline-none focus:border-cyan-500/50 transition-colors";

  const SocialIcon = ({ icon: Icon, href, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 bg-white/10 rounded-lg border border-orange-500/20 hover:bg-white/20 transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.a>
  );

  return (
    <main className="relative bg-[#0D0221] py-48 min-h-screen flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0221] via-[#1A0F1F] to-[#0D0221] opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#FFA500]/5 mix-blend-overlay" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(255, 165, 0, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        
        <div className="min-h-screen backdrop-blur-sm text-gray-200 overflow-x-hidden no-scrollbar">
      {/* Hero Section */}
      <motion.div
        className="relative text-white pb-12 sm:pb-16"
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto  text-center relative z-10 ">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-cyan-400 animate__animated animate__fadeIn"
          >
            MEET OUR TEAM
          </motion.h1>
          <motion.h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
            The Faces Behind Goonj
          </motion.h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 mx-auto mt-4" />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto  sm:px-6 ">
        {hierarchyData.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mt-8">
            <h3 className="text-lg sm:text-3xl font-semibold text-orange-500 text-center mb-12">
              {section.title}
            </h3>
            <div
              className="flex gap-6 justify-center"
            >
              {section.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="w-[250px] h-[260px] text-center bg-black/20 backdrop-blur-sm h-full border border-orange-500/20 rounded-lg hover:bg-[#0D0221] transition-colors"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5, delay : member.delay}}
                  whileHover={{ scale: 1.05 }}
                >
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mt-4">
                    <Image
                    src={`${member.src}`}
                    alt={`${member.name}`}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                    </div>
                  
                  <CardHeader className="pb-1">
                    <CardTitle className="text-lg font-bold text-gray-100">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{member.role}</p>
                    <p className="flex items-center justify-center text-gray-400 py-3">
                      <Phone className="mr-3 w-4 h-4" />
                      <a href="tel:{member.phone}">{member.phone}</a>
                    </p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto pt-20"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-orange-50 mb-2 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Contact Us
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pt-10"
          >
            {/* Contact Form */}
            <motion.form
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={inputClasses}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={inputClasses}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={inputClasses}
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className={inputClasses}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white font-semibold py-3 rounded-lg hover:brightness-110 transition-all"
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20"
              >
                <h3 className="text-xl text-white font-semibold mb-4">Visit Us</h3>
                <p className="text-white/80">
                  University Institute of Engineering and Technology,
                  <br />
                  Panjab University,
                  <br />
                  Sector 25, Chandigarh
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20"
              >
                <h3 className="text-xl text-white font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-white/80">
                  <p>Email: contact@goonj.com</p>
                  <p>Phone: +91 78892 31615</p>
                </div>
              </motion.div>

              {/* Social Media Section */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20"
              >
                <h3 className="text-xl text-white font-semibold mb-4">Connect With Us</h3>
                <motion.div
                  className="flex gap-4 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <SocialIcon
                    icon={Instagram}
                    href="https://instagram.com/goonj"
                    label="Follow us on Instagram"
                  />
                  <SocialIcon
                    icon={Facebook}
                    href="https://facebook.com/goonj"
                    label="Like us on Facebook"
                  />
                  <SocialIcon
                    icon={Youtube}
                    href="https://youtube.com/goonj"
                    label="Subscribe to our YouTube channel"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <motion.div
            className="absolute inset-0 border-t-2 border-l-2 border-orange-500/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <motion.div
            className="absolute inset-0 border-b-2 border-r-2 border-cyan-500/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </div>

      </div>
    </main>
  );
};

export default ContactPage;
