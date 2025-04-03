
import React from 'react';
import { Github, ExternalLink, BookOpen, Code, Layers, BookOpen as BookOpenIcon } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "StudyMate Application",
      description: "A student assistance app integrating tests, assignments, games, video lectures, and AI chatbot with Speech-to-Text (Vosk API).",
      technologies: ["Java", "MySQL", "AI", "ML", "VS Code"],
      githubLink: "https://github.com/VipinChoudhary-dev/StudyMate-2.0",
      features: [
        "Interactive quizzes and assessments",
        "AI-powered chatbot assistance",
        "Video lecture integration",
        "Speech-to-Text capabilities",
        "Game-based learning modules"
      ],
      completion: "3rd Semester (Ongoing Updates)",
      role: "Lead Developer"
    },
    {
      title: "Shadowed Voices",
      description: "A horror YouTube channel featuring original narrations, currently developing custom tools for content creation and video editing.",
      technologies: ["Video Editing", "Audio Processing", "Content Creation"],
      externalLink: "#",
      features: [
        "Original horror stories",
        "Voice modulation",
        "Atmospheric sound design",
        "Visual storytelling techniques"
      ]
    },
    {
      title: "AI Experimentation",
      description: "Various small projects exploring machine learning algorithms and AI applications, focusing on practical implementations.",
      technologies: ["Python", "TensorFlow", "NLP"],
      features: [
        "Natural language processing demos",
        "Basic machine learning models",
        "Data visualization experiments"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              My Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one has been an opportunity
            to learn and grow my skills in software development and AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass border-primary/20 overflow-hidden card-hover flex flex-col h-full"
            >
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground/70 mb-2 flex items-center gap-2">
                    <Layers size={16} className="text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-foreground/70 mb-2 flex items-center gap-2">
                    <Code size={16} className="text-primary" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Additional Info */}
                {project.completion && (
                  <div className="mt-4">
                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                      <BookOpenIcon size={16} className="text-primary" />
                      <span>{project.completion}</span>
                    </p>
                  </div>
                )}
                
                {project.role && (
                  <div className="mt-2">
                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                      <BookOpen size={16} className="text-primary" />
                      <span>Role: {project.role}</span>
                    </p>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="px-6 py-4 bg-secondary/30 flex justify-between">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    View Repository
                  </a>
                )}
                
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
                
                {!project.githubLink && !project.externalLink && (
                  <span className="text-foreground/60 text-sm">In Development</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
