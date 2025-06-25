import { Coffee, Settings, Database } from "lucide-react";

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600">{skill}</span>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? 'bg-primary' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const additionalSkills = [
    "Eclipse IDE", "Visual Studio Code", "Postman", "SQL Server",
    "Teamwork", "Project Management", "Time Management", "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust and scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Core Java Skills */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-primary text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Core Java</h3>
            </div>
            <div className="space-y-3">
              <SkillBar skill="Core Java" level={5} />
              <SkillBar skill="JavaScript" level={4} />
              <SkillBar skill="HTML/CSS" level={4} />
              <SkillBar skill="Problem Solving" level={5} />
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-accent text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Frameworks</h3>
            </div>
            <div className="space-y-3">
              <SkillBar skill="Spring Boot" level={5} />
              <SkillBar skill="Angular" level={4} />
              <SkillBar skill="AngularJS" level={4} />
              <SkillBar skill="Bootstrap" level={4} />
            </div>
          </div>

          {/* Database & Tools */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-secondary text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Database & Tools</h3>
            </div>
            <div className="space-y-3">
              <SkillBar skill="MySQL" level={5} />
              <SkillBar skill="MSSQL" level={4} />
              <SkillBar skill="Git" level={5} />
              <SkillBar skill="BitBucket" level={4} />
            </div>
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-slate-700 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
