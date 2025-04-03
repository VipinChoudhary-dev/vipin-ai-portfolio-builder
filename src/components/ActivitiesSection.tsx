
import React from 'react';
import { Shield, BookOpen, Rocket, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ActivitiesSection = () => {
  const activities = [
    {
      title: 'Aegis Cyber Security Club',
      role: 'Design Team Member',
      description: 'Contributing to the design and development of security-related projects and awareness campaigns.',
      icon: Shield
    },
    {
      title: 'Google Developer Student Club',
      role: 'Active Member',
      description: 'Participating in workshops, hackathons, and collaborative coding sessions to enhance technical skills.',
      icon: BookOpen
    },
    {
      title: 'Startup Ignition Cell (SIC)',
      role: 'Core Member',
      description: 'Mentoring new members with startup ideas, facilitating brainstorming sessions, and providing technical guidance.',
      icon: Rocket
    }
  ];

  return (
    <section id="activities" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Activities & Leadership
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Beyond academics, I actively participate in various clubs and initiatives to broaden my skills and contribute to the tech community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="glass border-primary/20 overflow-hidden card-hover h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary">
                    <activity.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-primary font-medium">{activity.role}</p>
                  <p className="text-foreground/80">{activity.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications & Achievements */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Certifications & Achievements</h3>
          <Card className="glass border-primary/20 overflow-hidden max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Google Cloud Skill Boost Course</h4>
                  <p className="text-foreground/80 mt-2">
                    Completed the Google Cloud Skill Boost Course twice and received certification, 
                    demonstrating proficiency in cloud technologies and services.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-foreground/70">Completed: 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
