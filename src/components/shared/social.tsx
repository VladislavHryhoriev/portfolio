import DELAY from "@/constants/DELAY";
import DURATION from "@/constants/DURATION";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

const Social = () => {
  return (
    <motion.div
      className="flex justify-center gap-6 text-2xl text-gray-400"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION, delay: DELAY + 1 }}
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
  );
};

export default Social;
