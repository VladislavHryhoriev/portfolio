"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Tag from "../shared/tag";
import Title from "../shared/title";
import Container from "./container";

const About = () => {
  const t = useTranslations("HomePage.about");

  return (
    <section className="min-h-screen bg-black">
      <Container>
        <Title title={t("title")} />

        <div className="flex flex-col flex-wrap gap-8 md:flex-row">
          {/* Левая колонка - Изображение */}
          <div className="flex-1/5">
            <Card className="mx-auto size-56 overflow-hidden border-gray-800 p-0 md:mx-0 md:size-auto">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image src="/hero.jpg" alt="About me" fill />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - Описание */}
          <div className="flex-1/2 space-y-4">
            <Card className="border-gray-800">
              <CardContent className="px-6">
                <p className="text-base text-gray-400">{t("description")}</p>
              </CardContent>
            </Card>

            {/* Skills */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {skills.map((skill) => (
                <Card key={skill.title} className="border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        {skill.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item) => (
                        <Tag key={item.name} title={item.name} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
