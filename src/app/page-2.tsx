"use client";

import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { Github, Linkedin, FileText, BarChart2, BookOpen, Mic } from "lucide-react";

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.on("change", (v) => console.log("scrollYProgress:", v));
  }, [scrollYProgress]);

  // Social icons (static links, shown under name)
  const socialIcons = [
    { icon: <Linkedin />, label: "LinkedIn" },
    { icon: <Github />, label: "GitHub" },
    { icon: <BarChart2 />, label: "Tableau" },
    { icon: <FileText />, label: "CV" },
  ];

  // Identity icons (animated on scroll)
const identityIcons = [
  {
    icon: <BarChart2 />,
    label: "Data Visualization",
    description: "Turning data into stories through thoughtful design and visual clarity.",
  },
  {
    icon: <FileText />,
    label: "Science Communication",
    description: "Bridging academic research and public understanding through writing and media.",
  },
  {
    icon: <Github />,
    label: "Data Science",
    description: "Analyzing, modeling, and understanding complex behavioral datasets.",
  },
  {
    icon: <Linkedin />,
    label: "Research",
    description: "Exploring how people interact with technology to improve well-being and equity.",
  },
];

  // Transforms for straight row to vertical list (centered horizontally, closer Y offsets, shallower scroll range)
const transforms = [
  {
    x: useTransform(scrollYProgress, [0, 0.5], ["-60px", "-200px"]),
    y: useTransform(scrollYProgress, [0, 0.5], ["0px", "0px"]),
  },
  {
    x: useTransform(scrollYProgress, [0, 0.5], ["-20px", "-200px"]),
    y: useTransform(scrollYProgress, [0, 0.5], ["0px", "80px"]),
  },
  {
    x: useTransform(scrollYProgress, [0, 0.5], ["20px", "-200px"]),
    y: useTransform(scrollYProgress, [0, 0.5], ["0px", "160px"]),
  },
  {
    x: useTransform(scrollYProgress, [0, 0.5], ["60px", "-200px"]),
    y: useTransform(scrollYProgress, [0, 0.5], ["0px", "240px"]),
  },
];

  const fadeOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const fadeX = useTransform(scrollYProgress, [0.3, 0.5], [20, 0]);

  return (
    <div className="relative min-h-screen bg-white text-black font-serif">
      {/* Hero Section with a scrollable reveal */}
      <div className="h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Chanda Phelan Kane</h1>
        <p className="text-lg md:text-xl max-w-md mb-4">
          Human-computer interaction researcher and data scientist translating complex insights into action.
        </p>

       <div className="flex justify-center gap-4">

          {socialIcons.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow hover:bg-gray-200"
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Scroll-Driven Icon Animation Section */}
      <div className="relative h-[150vh] w-full flex items-start justify-center">
        <div className="sticky top-0 h-screen w-full flex items-start justify-center pt-0 mt-[-24rem]">
          <div className="relative w-full max-w-sm h-[300px] flex items-center justify-center">
            {identityIcons.map((item, i) => (
              <motion.div
                key={i}
               style={{
                      x: transforms[i].x,
                      y: transforms[i].y,
                      position: "absolute",
                    }}
                className="flex items-center space-x-4 mb-6"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center shadow-md text-xl">
                  {item.icon}
                </div>

                {/* Card: only appears once icon is vertical */}
                <motion.div
                  style={{ opacity: fadeOpacity, x: fadeX }}
                  className="bg-white shadow-lg p-4 rounded-lg w-[220px] text-left hidden sm:block mb-6"
                >
                  <h2 className="text-md font-semibold mb-1">{item.label}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
