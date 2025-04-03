
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  About Me
                </span>
              </h2>
              <div className="h-1 w-20 bg-primary/50 rounded"></div>
            </div>
            
            <div className="space-y-6 text-lg">
              <p className="text-foreground/80">
                I'm a passionate engineering student at RV Institute of Technology and Management, 
                specializing in Information Science & Engineering. My journey in technology is 
                driven by a deep curiosity for AI, Machine Learning, and software development.
              </p>
              <p className="text-foreground/80">
                Currently, I'm focused on building applications that leverage AI and machine 
                learning to solve real-world problems. My flagship project, StudyMate, aims to 
                revolutionize the way students learn and interact with educational content through 
                intelligent technologies.
              </p>
              <p className="text-foreground/80">
                Beyond academics, I'm actively involved in multiple tech communities and clubs 
                where I collaborate with like-minded individuals to explore cutting-edge technologies
                and mentor newcomers.
              </p>

              <div className="pt-4">
                <p className="flex items-center gap-2 text-foreground/70">
                  <span className="text-primary">📍</span> Bengaluru, Karnataka, India
                </p>
                <p className="flex items-center gap-2 text-foreground/70">
                  <span className="text-primary">📧</span> vipinchoudhary0911@gmail.com
                </p>
                <p className="flex items-center gap-2 text-foreground/70">
                  <span className="text-primary">📱</span> +91 9019944095
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Education
                </span>
              </h2>
              <div className="h-1 w-20 bg-primary/50 rounded"></div>
            </div>
            
            <div className="timeline-item">
              <Card className="glass border-primary/20 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-primary/10 text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">RV Institute of Technology and Management</h3>
                      <p className="text-foreground/70 mt-1">B.E. in Information Science & Engineering</p>
                      
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Calendar size={16} />
                          <span>2023 - 2027</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <Award size={16} />
                          <span>CGPA: 8.9</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-primary/90">Relevant Coursework:</h4>
                        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            Advanced Java
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            Basic Machine Learning & AI
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            Operating Systems
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                            Database Systems
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass border-primary/20 p-4 rounded-lg">
                  <p className="font-medium">English</p>
                  <p className="text-sm text-foreground/70">Professional Proficiency</p>
                </div>
                <div className="glass border-primary/20 p-4 rounded-lg">
                  <p className="font-medium">Hindi</p>
                  <p className="text-sm text-foreground/70">Native Proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
