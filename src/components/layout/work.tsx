import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Container from "./container";

const Work = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale() as "en" | "ua" | "ru";

  return (
    <section className="bg-background py-25">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            {t("work.title")}
          </h2>
          <p className="text-muted-foreground text-xl">
            {t("work.description")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="flex h-full flex-col justify-between transition-colors">
                <div>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <motion.img
                        src={project.image}
                        alt={project.title[locale]}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardTitle className="mt-4 text-xl">
                      {project.title[locale]}
                    </CardTitle>
                    <CardDescription>
                      {project.description[locale]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardContent>
                </div>
                <CardFooter className="*:bg-muted flex justify-end gap-2 *:inline-flex *:items-center *:gap-2 *:rounded-full *:px-4 *:py-2 *:transition-colors">
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-pink-600"
                  >
                    <FaGlobe className="size-5" />
                    <span>Website</span>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-purple-600"
                  >
                    <FaGithub className="size-5" />

                    <span>GitHub</span>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Work;
