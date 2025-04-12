import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Title from "../shared/title";
import Container from "./container";
import Tag from "../shared/tag";

const Work = () => {
  const t = useTranslations("HomePage.work");
  const locale = useLocale() as "en" | "ua" | "ru";

  return (
    <section className="bg-black">
      <Container>
        <Title title={t("title")} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              className="group flex h-full flex-col justify-between border-gray-800"
              key={project.title.en}
            >
              <div>
                <CardHeader>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={project.image}
                        alt={project.title[locale]}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-all duration-300 group-hover:opacity-0" />
                    </Link>
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
                    <Tag key={tag} title={tag} />
                  ))}
                </CardContent>
              </div>
              <CardFooter className="flex justify-end gap-2 text-sm *:inline-flex *:items-center *:gap-2 *:rounded-full *:border *:border-gray-800 *:px-4 *:py-2 *:transition-colors">
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
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Work;
