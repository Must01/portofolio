// src/components/AboutSection.jsx
import { Code, Database, Server, Globe } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      desc: "Laravel • React • Vite • Tailwind CSS • Bootstrap • REST APIs",
    },
    {
      icon: Database,
      title: "Databases",
      desc: "MySQL • SQLite • MongoDB • Eloquent ORM",
    },
    {
      icon: Server,
      title: "Back-End Services",
      desc: "Authentication • CRUD • MVC Architecture • File Uploads  • PDF Generation",
    },
    {
      icon: Globe,
      title: "Tools & Platforms",
      desc: "GitHub • Photoshop • VS Code • Laravel Cloud • Figma",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Laravel & React Developer | ISTA NTIC Graduate
            </h3>
            <p className="text-muted-foreground">
              I’m a full-stack web developer based in Morocco, specialized in
              building secure, scalable, and visually responsive web
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground">
              I recently graduated from{" "}
              <a
                href="https://maps.app.goo.gl/qjk8SRBptbocQTRv5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                OFPPT ISTA NTIC Guelmim{" "}
              </a>
              with a diploma in full-stack development. I’ve built tools like a
              certificate generator, currency converter, blog CMS, and both
              Archive & Talabati Platform for the{" "}
              <a
                href="https://maps.app.goo.gl/AMzhBLeQ1WS3CgNw7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Court of Appeal of Guelmim
              </a>
              , using Laravel & React and various databases (MySQL, SQLite,
              MongoDB).
            </p>

            <p className="text-muted-foreground">
              My goal is to bring real-world solutions to clients — websites
              that load fast, look great, and work seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-card/90 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
