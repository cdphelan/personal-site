"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, FileText, BarChart2, ChevronDown, GraduationCap, ChartSpline, CircuitBoard, Shell } from "lucide-react";

export default function HomePage() {
  const [showIcons, setShowIcons] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowIcons(true), 200); // show after 200ms
    return () => clearTimeout(timer);
  }, []);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cards = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Research",
      subtitle: "Health, technology and behavioral science.",
      content: "Deep dive into how humans interact with emerging tech in clinical, social, and real-world settings."
    },
    {
      icon: <CircuitBoard className="w-6 h-6" />,
      title: "Data Science",
      subtitle: "From machine learning to mixed methods—turning data into direction.",
      content: "Applying ML/NLP to understand recovery, behavior, and digital health at scale."
    },    
    {
      icon: <ChartSpline className="w-6 h-6" />,
      title: "Data Visualization",
      subtitle: "Clean, intuitive visuals that reveal what matters in complex datasets.",
      content: "Building charts, dashboards, and explorable tools that highlight clarity and insight."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Science Communication",
      subtitle: "Insights and storytelling that make research accessible and impactful.",
      content: "Crafting narratives that turn data into compelling, understandable stories across formats."
    },
    {
      icon: <Shell className="w-6 h-6" />,
      title: "Side Quests",
      subtitle: "Other coding projects.",
      content: "Crafting narratives that turn data into compelling, understandable stories across formats."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-[200]" style={{ fontFamily: "var(--font-spectral)" }}>Chanda Phelan Kane</h1>
        <p className="text-lg md:text-xl mt-4 max-w-lg text-center font-sans">
          Data scientist and UX researcher specializing in health tech solutions that improve human outcomes.
        </p>

<motion.div
  className="flex justify-center gap-6 py-12"
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
    },
    {
      icon: <Github />,
      label: "GitHub",
      href: "https://github.com/cdphelan",
    },
    {
      icon: <BarChart2 />,
      label: "Tableau",
      href: "https://public.tableau.com/app/profile/chanda.phelan.kane/vizzes",
    },
    {
      icon: <GraduationCap />,
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=tE7VIc0AAAAJ&hl=en",
    },
    {
      icon: <FileText />,
      label: "CV.pdf",
      href: "/cv.pdf",
    }
  ].map(({ icon, label, href }, i) => (
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
      className="group flex flex-col items-center"
    >
      {/* Gray circle icon container */}
      <div className="p-4 rounded-full shadow-lg bg-gray-100 hover:bg-gray-200 transition">
        <div className="text-2xl">{icon}</div>
      </div>

      {/* Hover-reveal label underneath (outside the box) */}
      <div className="mt-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </div>
    </motion.a>
  ))}
</motion.div>

      </div>

{/*
      <div className="grid gap-6 px-4 pb-12 max-w-4xl mx-auto font-sans mt-[-10rem]">
        {cards.map((card, i) => (
            <Card key={i} className="p-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleCard(i)}
              >
                <div className="flex items-center gap-3">
                  {card.icon}
                  <div>
                    <h2 className="text-2xl font-serif mb-1">{card.title}</h2>
                    <p className="text-sm text-gray-600">{card.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCard === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {expandedCard === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2 text-sm text-gray-700"
                  >
                    <p>{card.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
        ))}
      </div>
*/}
      <p className="text-sm text-gray-500 mt-2 text-center">
        Portfolio & Digital CV. Last updated 5/31/2025.
      </p>
    </div>
  );
}