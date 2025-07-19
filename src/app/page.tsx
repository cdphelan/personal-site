"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, FileText, BarChart2, ChevronDown, GraduationCap, ChartSpline, CircuitBoard, Shell } from "lucide-react";

export default function HomePage() {
  const [showIcons, setShowIcons] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [hasScrolledToFilters, setHasScrolledToFilters] = useState(false);

  const { scrollY } = useScroll();
  
  // Define scroll ranges for the animation
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const scrollProgress = useTransform(scrollY, [0, heroHeight * 0.75], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIcons(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollProgress.onChange((progress) => {
      if (progress > 0.5 && !hasScrolledToFilters) {
        setHasScrolledToFilters(true);
      }
    });
    return unsubscribe;
  }, [scrollProgress, hasScrolledToFilters]);

  const skillCategories = [
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Research",
      key: "research"
    },
    {
      icon: <CircuitBoard className="w-4 h-4" />,
      title: "Data Science",
      key: "data-science"
    },    
    {
      icon: <ChartSpline className="w-4 h-4" />,
      title: "Data Visualization",
      key: "data-viz"
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Science Communication",
      key: "sci-comm"
    },
    {
      icon: <Shell className="w-4 h-4" />,
      title: "Side Quests",
      key: "side-quests"
    }
  ];

  const toggleFilter = (key: string) => {
    setActiveFilters(prev => 
      prev.includes(key) 
        ? prev.filter(f => f !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen p-4 relative">
      <motion.h1 className="text-5xl md:text-7xl font-serif font-[200] text-center mb-8" style={{ fontFamily: "var(--font-spectral)", y: useTransform(scrollY, [0, heroHeight], [0, -75]) }}>
          Chanda Phelan Kane
        </motion.h1>
        <motion.p className="text-lg md:text-xl mt-8 mb-8 max-w-lg text-center font-sans" style={{ y: useTransform(scrollY, [0, heroHeight], [0, -200]) }}>
          Human-computer interaction researcher focused on addiction, recovery, and digital health for a more equitable future.
        </motion.p>

        <div className="mt-6 text-center">
  <p className="text-lg font-medium mb-2">
    Here from RSMj? Check out our interactive dashboard:
  </p>
  <a
    href="https://canntalk-dashboard.streamlit.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block transition-transform hover:scale-105"
  >
    <img
      src="/img/canntalk.png"
      alt="Click to view the dashboard"
      className="rounded-xl shadow-lg mx-auto"
      style={{ maxWidth: "50%", height: "auto" }}
    />
    <p className="mt-2 text-blue-600 underline text-sm">
      Tap the image to explore the dashboard →
    </p>
  </a>
</div>

         <motion.div
          className="flex justify-center gap-6 py-16 mt-6"
          style={{ y: useTransform(scrollY, [0, heroHeight], [0, -300]) }}
          initial="hidden"
          animate={showIcons ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: <Linkedin />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/chanda-phelan-kane-a8470517/",
              skillConnection: "sci-comm"
            },
            {
              icon: <Github />,
              label: "GitHub",
              href: "https://github.com/cdphelan",
              skillConnection: "data-science"
            },
            {
              icon: <BarChart2 />,
              label: "Tableau",
              href: "https://public.tableau.com/app/profile/chanda.phelan.kane/vizzes",
              skillConnection: "data-viz"
            },
            {
              icon: <GraduationCap />,
              label: "Scholar",
              href: "https://scholar.google.com/citations?user=tE7VIc0AAAAJ&hl=en",
              skillConnection: "research"
            },
            {
              icon: <FileText />,
              label: "CV.pdf",
              href: "/cv.pdf",
              skillConnection: "research"
            }
          ].map(({ icon, label, href, skillConnection }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`group flex flex-col items-center transition-all duration-300 ${
                activeFilters.includes(skillConnection) 
                  ? 'ring-2 ring-blue-300 ring-opacity-50' 
                  : ''
              }`}
            >
              <div className="p-4 rounded-full shadow-lg bg-gray-100 hover:bg-gray-200 transition">
                <div className="text-2xl">{icon}</div>
              </div>
              <div className="mt-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {label}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Simple chevron at bottom of hero - fades out on scroll */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            opacity: useTransform(scrollY, [0, heroHeight * 0.3], [1, 0])
          }}
        >
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </motion.div>
      </div>

      {/* Parallax wrapper for remaining content*/}
      <motion.div
        style={{
          y: useTransform(scrollY, [0, heroHeight], [0, -500])
        }}
      >

      {/* Skills Section Header (starts offscreen) */}
      <div className="pt-20 pb-8">
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold text-center" 
          style={{ fontFamily: "var(--font-spectral)" }}
        >
          What I Do
        </h2>
      </div>


      {/* Skills Section */}
        
   {/* Scroll-driven Skill Filters - COMMENTED OUT */}
        {/*
        <div className="pt-20 px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            initial="hidden"
            animate={scrollProgress.get() > 0.3 ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {skillCategories.map((skill, i) => {
              return (
                <motion.button
                  key={skill.key}
                  onClick={() => toggleFilter(skill.key)}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      scale: 1.3
                    },
                    visible: { 
                      opacity: 1, 
                      scale: 1
                    }
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    activeFilters.includes(skill.key)
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
                  }`}
                  title={skill.title} // Tooltip for accessibility
                >
                  {skill.icon}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
        */}

        {/* Content Cards */}
        <div className="px-4 max-w-4xl mx-auto">
              <p>
              I am a Human-Computer Interaction Ph.D. researcher who works at the intersection of <strong>user-centered design, computational social science,</strong> and <strong>addiction</strong>. See me talk about some of my research here.
              </p>

              <div className="flex justify-center w-full mt-4">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/63SU1k-vmCA?si=0jqNpC3j92ZZZr-V" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
  
              <h3 className="text-xl font-semibold font-serif mt-6 mb-3"
              style={{ fontFamily: "var(--font-spectral)" }}>Research paths</h3>
              <ol className="mb-4">
                <li><strong>1. Digital social reshaping:</strong> how technology affects how people with addiction access treatment and recovery support, especially on social media.</li>
                <li><strong>2. Research infrastructure:</strong> creating transparent analysis pipelines and applying user-centered design principles in interdisciplinary collaborations.</li>
             </ol>

             <p>
             <em>This site is still under construction. Please connect with me using my social & portfolio links above for more.</em>
             </p>


        </div>


        {/* Projects Section - Only appears after filters are revealed */}
{/*        {hasScrolledToFilters && (
          <motion.div
            className="mt-12 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center text-gray-500 py-20">
              <p>Projects will appear here based on selected filters</p>
              <p className="text-sm mt-2">
                Active filters: {activeFilters.length > 0 ? activeFilters.join(', ') : 'All'}
              </p>
            </div>
          </motion.div>
        )}*/}

            {/* Footer */}
      <div className="text-center pb-8 mt-8">
        <p className="text-sm text-gray-500">
          Portfolio & Digital CV. Last updated July 19, 2025.
        </p>
      </div>

      </motion.div>

    </div>
  );
}
