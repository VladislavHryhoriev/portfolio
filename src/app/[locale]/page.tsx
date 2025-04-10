"use client";
import Header from "@/components/layout/header";
import Start from "@/components/layout/start";
import DELAY from "@/constants/DELAY";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("start");

  const [startRef, startInView] = useInView({ threshold: 0.3 });
  const [workRef, workInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [contactsRef, contactsInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  useEffect(() => {
    if (startInView) setActiveSection("#start");
    if (workInView) setActiveSection("#work");
    if (aboutInView) setActiveSection("#about");
    if (contactsInView) setActiveSection("#contacts");
  }, [startInView, workInView, aboutInView, contactsInView]);

  return (
    <div className="relative">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: DELAY + 1, ease: "anticipate" }}
          onAnimationComplete={() => setIsVisible(false)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: DELAY }}
            className="text-gradient text-6xl font-bold"
          >
            Welcome
          </motion.h1>
        </motion.div>
      )}
      <Header activeSection={activeSection} />

      <div ref={startRef} id="start">
        <Start />
      </div>

      <div ref={workRef} id="work" className="h-[100vh]">
        Work Section
      </div>

      <div ref={aboutRef} id="about" className="h-[100vh]">
        About Section
      </div>

      <div ref={contactsRef} id="contacts" className="h-[100vh]">
        Contacts Section
      </div>
    </div>
  );
}
