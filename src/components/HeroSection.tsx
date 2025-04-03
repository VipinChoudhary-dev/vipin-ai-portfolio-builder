
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const skills = ['Java', 'C', 'Database Management', 'AI & ML', 'Software Development'];

const HeroSection = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const typeSpeed = isDeleting ? 100 : 200;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentSkill) {
        // Pause at complete word
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      } else if (isDeleting && displayText === '') {
        // Move to next word
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        return;
      }

      setDisplayText(
        isDeleting
          ? currentSkill.substring(0, displayText.length - 1)
          : currentSkill.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentSkillIndex, isDeleting, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />
      
      {/* Floating particles/shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>{" "}
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Vipin Choudhary
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            an aspiring software engineer passionate about{" "}
            <span className="inline-block h-8 relative">
              <span className="absolute text-primary font-mono">{displayText}</span>
              <span className="absolute w-1 h-full ml-1 bg-primary animate-blink-cursor"></span>
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              asChild
              className="bg-primary/90 hover:bg-primary text-white gap-2 py-6 text-lg"
            >
              <a href="#projects">
                View My Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-background/50 border-primary/20 text-foreground/90 hover:bg-primary/10 gap-2 py-6 text-lg"
            >
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://github.com/VipinChoudhary-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass card-hover"
            >
              <Github className="h-6 w-6 text-primary" />
              <span className="font-medium">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/vipin-choudhary-06971732b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass card-hover"
            >
              <Linkedin className="h-6 w-6 text-primary" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="mailto:vipinchoudhary0911@gmail.com" 
              className="flex items-center gap-3 p-4 rounded-lg glass card-hover"
            >
              <Mail className="h-6 w-6 text-primary" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
        <span className="text-xs text-foreground/60 mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;
