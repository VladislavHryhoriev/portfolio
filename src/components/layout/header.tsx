"use client";
import DELAY from "@/constants/DELAY";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FC } from "react";

interface HeaderProps {
  activeSection: string;
}

const Header: FC<HeaderProps> = ({ activeSection }) => {
  const t = useTranslations("HomePage");
  const { scrollY } = useScroll();

  const headerBg = useTransform(scrollY, [0, 100], ["#0000", "#000a"]);
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"],
  );
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["1px solid #fff0", "1px solid #fff1"],
  );
  const headerPadding = useTransform(scrollY, [0, 100], ["2rem", "0.5rem"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const fontWeight = useTransform(scrollY, [0, 100], [500, 400]);
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 40px 10px #0000", "0 0 40px 10px #000f"],
  );

  const navigation = [
    { href: "#start", label: t("menu.start") },
    { href: "#work", label: t("menu.work") },
    { href: "#about", label: t("menu.about") },
    { href: "#contacts", label: t("menu.contacts") },
    { href: "cv.pdf", label: t("menu.cv") },
  ];

  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-60 shadow-2xl shadow-black"
      style={{
        boxShadow: headerShadow,
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        borderBottom: borderOpacity,
      }}
    >
      <div className="container mx-auto">
        {/* header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: DELAY }}
          style={{ padding: headerPadding }}
        >
          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="gradient-text flex items-center text-4xl font-bold"
              style={{ scale: logoScale }}
            >
              <span className="text-2xl">{"<"}</span>
              <span className="text-4xl font-bold">VH</span>
              <span className="text-2xl">{"/>"}</span>
            </motion.div>

            {/* logo-blur */}
            <motion.div
              className="gradient-text fixed flex items-center text-4xl font-bold blur-sm"
              style={{ scale: logoScale }}
            >
              <span className="text-2xl">{"<"}</span>
              <span className="text-4xl font-bold">VH</span>
              <span className="text-2xl">{"/>"}</span>
            </motion.div>
          </Link>

          {/* navigation */}
          <div className="flex items-center gap-4 text-xl font-medium">
            <div className="flex items-center uppercase">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-all hover:text-pink-500 last:hover:text-yellow-400",
                    activeSection === item.href && "text-purple-500",
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: DELAY + index * 0.1 }}
                    style={{ fontWeight: fontWeight }}
                    className="relative px-4 py-2"
                  >
                    {item.label}
                    <span className="text-muted-foreground text-xs">
                      {"/>"}
                    </span>
                  </motion.span>
                </Link>
              ))}
            </div>
            {/* <div className="flex items-center gap-2 text-2xl">
              <Link
                href="tg://resolve?domain=VladislavHryhoriev"
                className="hover:text-red-400"
              >
                <RiTelegram2Fill />
              </Link>
              <Link
                href="https://github.com/VladislavHryhoriev"
                className="hover:text-red-400"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://linkedin.com/in/vladislavhryhoriev"
                className="hover:text-red-400"
              >
                <FaLinkedin />
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
