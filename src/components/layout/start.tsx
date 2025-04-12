"use client";
import DELAY from "@/constants/DELAY";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import Social from "../shared/social";
import DURATION from "@/constants/DURATION";

const Start = () => {
  const t = useTranslations("HomePage.start");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 600]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ ease: "circOut", duration: 1, delay: DELAY }}
        style={{ y }}
      >
        <div
          className={`h-[120vh] w-full bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat`}
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
      </motion.div>

      {/* Основной контент */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION, delay: DELAY + 0.2 }}
          className="text-center"
        >
          <motion.h1
            className="text-gradient mb-6 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION, delay: DELAY + 0.2 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="text-gradient mx-auto mb-8 max-w-2xl text-base text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION, delay: DELAY + 0.4 }}
          >
            {t("description")}
          </motion.p>

          {/* Кнопки */}
          <motion.div
            className="mb-12 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION, delay: DELAY + 0.6 }}
          >
            <Link
              href="#work"
              className="bg-gradient-2 rounded-lg bg-gradient-to-r px-6 py-3 font-medium text-white hover:opacity-90 active:opacity-90 md:px-8 md:py-4"
            >
              {t("viewProjects")}
            </Link>
            <Link
              href="#contacts"
              className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-600/20 active:bg-blue-600/20 md:px-8 md:py-4"
            >
              {t("contactMe")}
            </Link>
          </motion.div>

          {/* Социальные сети */}
          <Social />
        </motion.div>

        {/* Скролл индикатор */}
        <motion.div
          className="absolute bottom-8 hidden md:block"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION, delay: DELAY + 2 }}
          >
            <Link href="#work">
              <HiArrowDown className="text-3xl text-gray-400" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Start;
