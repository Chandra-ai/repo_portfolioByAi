import { User, Calendar, MapPin, Code, Briefcase, Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate Java developer with a strong foundation in enterprise application development
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get to know me</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a dedicated Java developer with expertise in building scalable enterprise applications. 
              My journey in software development started with a passion for problem-solving and has evolved 
              into a comprehensive skill set covering full-stack development, database design, and system architecture.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and following industry best practices. 
              I'm always eager to learn new technologies and contribute to innovative projects that make a difference.
            </p>
            <button className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors duration-200">
              <Download className="mr-2" size={16} />
              Download Resume
            </button>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Personal Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="w-6 text-primary mr-3" />
                <span className="text-slate-600">Name: <span className="font-semibold text-slate-900">Chandrasekhar Moharana</span></span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 text-primary mr-3" />
                <span className="text-slate-600">Age: <span className="font-semibold text-slate-900">25 years</span></span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 text-primary mr-3" />
                <span className="text-slate-600">Location: <span className="font-semibold text-slate-900">Mumbai, India</span></span>
              </div>
              <div className="flex items-center">
                <Code className="w-6 text-primary mr-3" />
                <span className="text-slate-600">Specialization: <span className="font-semibold text-slate-900">Java Development</span></span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-6 text-primary mr-3" />
                <span className="text-slate-600">Status: <span className="font-semibold text-accent">Available for hire</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
