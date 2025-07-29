import React, { useState } from "react";
import laravel from "@/assets/icons/laravel.png";
import tailwindcss from "@/assets/icons/tailwindcss.png";
import tableplus from "@/assets/icons/tableplus.png";
import github from "@/assets/icons/github.png";
import photoshop from "@/assets/icons/photoshop.png";
const skills = [
  // Frontend
  {
    name: "PHP",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    category: "backend",
    icon: laravel,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: tailwindcss,
  },
  {
    name: "Vite",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },

  // Backend

  {
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  // Databases
  {
    name: "MySQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQLite",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },

  // Tools & Software
  {
    name: "VS Code",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Photoshop",
    category: "tools",
    icon: photoshop,
  },
  {
    name: "Git",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: github,
  },
  {
    name: "Figma",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "XAMPP",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  {
    name: "TablePlus",
    category: "tools",
    icon: tableplus,
  },
];

const categories = [
  { key: "all", label: "All Skills", count: skills.length },
  {
    key: "frontend",
    label: "Frontend",
    count: skills.filter((s) => s.category === "frontend").length,
  },
  {
    key: "backend",
    label: "Backend",
    count: skills.filter((s) => s.category === "backend").length,
  },
  {
    key: "database",
    label: "Database",
    count: skills.filter((s) => s.category === "database").length,
  },
  {
    key: "tools",
    label: "Tools",
    count: skills.filter((s) => s.category === "tools").length,
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // For "all" category, show limited skills initially
  const displayedSkills =
    activeCategory === "all" && !showAll
      ? filteredSkills.slice(0, 6)
      : filteredSkills;

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-br from-secondary/10 to-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveCategory(category.key);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70 bg-background/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center space-y-3 bg-card/60 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-xl hover:bg-card/90 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-2 rounded-full bg-background/80 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg items-center justify-center text-primary font-bold text-sm hidden">
                    {skill.name.charAt(0)}
                  </div>
                </div>
              </div>

              <span className="font-medium text-center text-xs leading-tight group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>

              {/* Animated progress bar */}
              <div className="w-full h-0.5 bg-secondary/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button for "All" category */}
        {activeCategory === "all" && filteredSkills.length > 8 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              {showAll
                ? `Show Less`
                : `Show All (${filteredSkills.length - 8} more)`}
            </button>
          </div>
        )}

        {/* Enhanced Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {categories.slice(1).map((category) => (
            <div
              key={category.key}
              className="bg-card/40 backdrop-blur-sm p-6 rounded-2xl hover:bg-card/60 transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/20"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {category.count}
              </div>
              <div className="text-sm text-muted-foreground capitalize">
                {category.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
