import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationCard = ({ 
  degree, 
  institution, 
  location, 
  duration, 
  cgpa 
}: {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <GraduationCap className="text-primary" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{degree}</h3>
          <p className="text-lg text-slate-700 font-medium mb-3">{institution}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          <div className="mt-3">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              CGPA: {cgpa}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Biju Pattnaik University of Technology (BPUT)",
      location: "Odisha",
      duration: "2020 – 2022",
      cgpa: "8.33/10"
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "Utkal University",
      location: "Odisha", 
      duration: "2017 – 2020",
      cgpa: "7.88/10"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic foundation in computer science and applications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}