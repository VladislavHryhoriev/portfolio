"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
              Portfolio
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            <Link
              href="/projects"
              className="transition-colors hover:text-blue-400"
            >
              {t("viewProjects")}
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-blue-400"
            >
              {t("contactMe")}
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              className="mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-7xl font-bold text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="mx-auto mb-12 max-w-2xl text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("description")}
            </motion.p>
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/projects"
                className="transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                {t("viewProjects")}
              </Link>
              <Link
                href="/contact"
                className="transform rounded-lg border border-blue-600 px-8 py-4 transition-all hover:scale-105 hover:bg-blue-600/20"
              >
                {t("contactMe")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-16 text-center text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("skills.title")}
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Frontend", "Backend", "DevOps"].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="transform rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-800/70"
              >
                <h3 className="mb-4 text-2xl font-semibold text-blue-400">
                  {t(`skills.${skill.toLowerCase()}.title`)}
                </h3>
                <p className="text-gray-300">
                  {t(`skills.${skill.toLowerCase()}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-16 text-center text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("featuredProjects")}
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="transform overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-800/70"
              >
                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-blue-400">
                    {t(`projects.project${project}.title`)}
                  </h3>
                  <p className="mb-6 text-gray-300">
                    {t(`projects.project${project}.description`)}
                  </p>
                  <Link
                    href={`/projects/${project}`}
                    className="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
                  >
                    {t("learnMore")} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
