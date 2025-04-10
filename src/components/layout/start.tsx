"use client";
import DELAY from "@/constants/DELAY";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { RiTelegram2Fill } from "react-icons/ri";

const Start = () => {
  const t = useTranslations("HomePage");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 600]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ ease: "circOut", duration: 1, delay: DELAY }}
        style={{ y }}
      >
        <div
          className={`h-[120vh] w-full bg-[url('/2bg.jpg')] bg-cover bg-center bg-no-repeat`}
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />
      </motion.div>

      {/* Основной контент */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY + 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-gradient mb-6 text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: DELAY + 0.2 }}
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            className="text-gradient mx-auto mb-8 max-w-2xl text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: DELAY + 0.4 }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Кнопки */}
          <motion.div
            className="mb-12 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: DELAY + 0.6 }}
          >
            <Link
              href="#projects"
              className="bg-gradient-2 transform rounded-lg px-8 py-4 font-medium text-white transition-all hover:scale-105"
            >
              {t("hero.viewProjects")}
            </Link>
            <Link
              href="#contact"
              className="transform rounded-lg border border-blue-600 px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-blue-600/20"
            >
              {t("hero.contactMe")}
            </Link>
          </motion.div>

          {/* Социальные сети */}
          <motion.div
            className="flex justify-center gap-6 text-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="tg://resolve?domain=VladislavHryhoriev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
            >
              <RiTelegram2Fill />
            </Link>
            <Link
              href="https://github.com/VladislavHryhoriev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-400"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/vladislavhryhoriev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-500"
            >
              <FaLinkedin />
            </Link>
          </motion.div>
        </motion.div>

        {/* Скролл индикатор */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: DELAY + 2 }}
          >
            <HiArrowDown className="animate-bounce text-3xl text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Start;
