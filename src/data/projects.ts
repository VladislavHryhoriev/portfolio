type Locale = "en" | "ua" | "ru";

interface Project {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
  tags: string[];
  github: string;
  website: string;
}

export const projects: Project[] = [
  {
    title: {
      en: "Photo Collection",
      ua: "Фотоальбом",
      ru: "Фотоальбом",
    },
    description: {
      en: "Photo Collection for a photo studio.",
      ua: "Фотоальбом для фотостудії.",
      ru: "Фотоальбом для фотостудии.",
    },
    image: "/projects/photo-collection.webp",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Firebase",
      "MongoDB",
      "WebSocket",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "AWS",
      "CI/CD",
      "Kubernetes",
    ],
    github: "https://github.com/yourusername/project1",
    website: "https://yourwebsite.com/project1",
  },

  {
    title: {
      en: "Canvas Painter",
      ua: "Малювальник",
      ru: "Рисовальник",
    },
    description: {
      en: "Canvas Painter is a simple canvas painting tool.",
      ua: "Малювальник - це простий інструмент для малювання на полотні.",
      ru: "Рисовальник - это простой инструмент для рисования на полотне.",
    },
    image: "/projects/canvas-painter.webp",
    tags: [
      "Node.js",
      "MongoDB",
      "WebSocket",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/yourusername/project2",
    website: "https://yourwebsite.com/project2",
  },

  {
    title: {
      en: "School Game",
      ua: "Шкільна гра",
      ru: "Школьная игра",
    },
    description: {
      en: "School Game game and a platform for creating and playing educational games.",
      ua: "Шкільна гра і платформа для створення та гри в освітні ігри.",
      ru: "Школьная игра и платформа для создания и игры в образовательные игры.",
    },
    image: "/projects/school-game.webp",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project4",
    website: "https://yourwebsite.com/project4",
  },

  {
    title: {
      en: "Draggable Todo List",
      ua: "Перетягувальний список завдань",
      ru: "Перетаскиваемый список задач",
    },
    description: {
      en: "Draggable Todo List is a simple todo list that allows you to drag and drop tasks.",
      ua: "Перетягувальний список завдань дозволяє перетягувати таки завдання.",
      ru: "Перетаскиваемый список задач позволяет перетаскивать их.",
    },
    image: "/projects/draggable-todo.webp",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project5",
    website: "https://yourwebsite.com/project5",
  },
];
