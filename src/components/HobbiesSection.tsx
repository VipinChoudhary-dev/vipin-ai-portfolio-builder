
import React from 'react';
import { VideoIcon, Code, Film } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HobbiesSection = () => {
  const hobbies = [
    {
      title: 'AI & ML Experimentation',
      description: 'Exploring cutting-edge artificial intelligence and machine learning technologies through hands-on projects and research.',
      icon: Code
    },
    {
      title: 'Video Editing',
      description: 'Creating and editing videos using professional tools like Canva, CapCut, and DaVinci Resolve to bring stories to life.',
      icon: VideoIcon
    },
    {
      title: 'Shadowed Voices',
      description: 'Managing a horror YouTube channel featuring original narrations and storytelling, combining creative writing with audio-visual production.',
      icon: Film
    }
  ];

  return (
    <section id="hobbies" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hobbies & Interests
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            When I'm not coding or studying, you'll find me exploring these creative and technical pursuits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card 
              key={index} 
              className="glass border-primary/20 overflow-hidden card-hover h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <hobby.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold">{hobby.title}</h3>
                  <p className="text-foreground/80">{hobby.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* YouTube Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Shadowed Voices - Horror YouTube Channel</h3>
            <p className="text-foreground/80">
              Check out my horror YouTube channel where I create and narrate original scary stories.
            </p>
          </div>
          
          <div className="glass p-4 border border-primary/20 rounded-lg overflow-hidden">
            <div className="aspect-video rounded-md overflow-hidden bg-black/50 flex items-center justify-center">
              <div className="text-center p-6">
                <Film size={48} className="mx-auto text-primary/50 mb-4" />
                <p className="text-foreground/80">
                  YouTube channel preview will be embedded here.
                </p>
                <p className="text-foreground/60 text-sm mt-2">
                  (Connect your actual YouTube channel for a live preview)
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VideoIcon size={18} />
              <span>Visit Shadowed Voices on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
