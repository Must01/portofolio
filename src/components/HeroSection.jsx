import { ArrowDown, GitBranch, Star, Users } from "lucide-react";
import profilePic from "@/assets/profile.jpg";

export const HeroSection = ({
  repoCount = 12,
  starCount = 0,
  followerCount = 0,
}) => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col justify-center pt-14 sm:pt-20 lg:pt-15 px-4"
  >
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          <span className="block text-muted-foreground">Hi, I'm</span>
          <span className="block text-primary">Mustapha Bouddahr</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
          Full-Stack Developer | Laravel & React | I build interactive and
          scalable web apps using modern stacks like Laravel, React, MySQL,
          SQLite, and Tailwindcss.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full">
            <GitBranch className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">
              {repoCount}+ Projects
            </span>
          </div>
          {starCount > 0 && (
            <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="font-medium text-foreground">
                {starCount} Stars
              </span>
            </div>
          )}
          {followerCount > 0 && (
            <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-accent" />
              <span className="font-medium text-foreground">
                {followerCount} Followers
              </span>
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-center md:justify-start">
          <a href="#projects" className="cosmic-button inline-block">
            View My Work
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src={profilePic}
            alt="Mustapha Bouddahr"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-1">Scroll</span>
      <ArrowDown className="h-6 w-6 text-primary" />
    </div>
  </section>
);
