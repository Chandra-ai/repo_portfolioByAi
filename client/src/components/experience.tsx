import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional journey in full-stack Java development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Full Stack Java Developer</h3>
                    <div className="flex items-center text-lg text-slate-700 font-medium mb-3">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      <span>ApMoSys Technologies Pvt Ltd</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">Jan 2022 – Present</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Navi Mumbai</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Developed and maintained full-stack web applications using Java, Spring Boot, and Angular</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Collaborated with cross-functional teams to gather requirements and deliver scalable solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Designed and implemented RESTful APIs and database schemas using MySQL and MSSQL</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Utilized version control systems (Git, BitBucket) for collaborative development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Applied agile methodologies and project management principles for timely delivery</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Spring Boot", "Angular", "AngularJS", "MySQL", "MSSQL", "HTML/CSS", "Bootstrap", "Git", "BitBucket", "Eclipse IDE", "Postman"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-slate-600">
              <span className="font-semibold text-primary">3+ years</span> of professional experience in full-stack development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}