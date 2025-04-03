
import React from 'react';
import { Code, Database, Briefcase, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'Java', proficiency: 85 },
    { name: 'C', proficiency: 80 },
    { name: 'SQL', proficiency: 75 },
  ];
  
  const toolsSkills = [
    { name: 'VS Code', proficiency: 90 },
    { name: 'Eclipse', proficiency: 75 },
    { name: 'MySQL', proficiency: 80 },
  ];
  
  const coreSkills = [
    { name: 'AI & Machine Learning', proficiency: 70 },
    { name: 'Database Management', proficiency: 85 },
    { name: 'Software Development', proficiency: 80 },
    { name: 'Problem Solving', proficiency: 85 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Technical Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded mx-auto"></div>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            My technical toolkit includes programming languages, development tools, and specialized skills
            in AI and database management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="glass border-primary/20 overflow-hidden card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              
              <div className="space-y-6">
                {programmingSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Tools & IDEs */}
          <Card className="glass border-primary/20 overflow-hidden card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold">Tools & IDEs</h3>
              </div>
              
              <div className="space-y-6">
                {toolsSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Core Skills */}
          <Card className="glass border-primary/20 overflow-hidden card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-semibold">Core Skills</h3>
              </div>
              
              <div className="space-y-6">
                {coreSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Technology expertise graphic */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-center">Technology Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Java', icon: '☕' },
              { name: 'C', icon: '🧩' },
              { name: 'AI & ML', icon: '🤖' },
              { name: 'Database', icon: '🗃️' },
              { name: 'VS Code', icon: '📝' },
              { name: 'Eclipse', icon: '🌓' },
              { name: 'MySQL', icon: '🐬' },
              { name: 'Video Editing', icon: '🎬' },
            ].map((tech) => (
              <div 
                key={tech.name}
                className="glass border-primary/20 p-4 rounded-lg text-center card-hover"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
