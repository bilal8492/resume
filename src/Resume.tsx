import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DownloadIcon, Github, Linkedin, Mail, Globe } from "lucide-react";

const resumeData = {
  name: "Bilal Ansari",
  title: "Software Developer",
  summary:
    "Highly skilled and innovative Software Developer with 3.5+ years of experience in designing and building high-quality mobile and web applications. Proficient in React Native, React, and other latest web technologies, with a strong focus on hybrid mobile app development. Committed to delivering exceptional user experiences and staying up-to-date with industry trends.",
  contact: {
    email: "m.bilal8492@gmail.com",
    website: "https://bilalansari.in",
    linkedIn: "https://www.linkedin.com/in/bilal8492/",
    github: "https://github.com/bilal8492",
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["React", "React Native", "Bootstrap"],
    stateManagement: ["MobX"],
    tools: ["Git", "GitHub", "Npm/Yarn", "Firebase", "Detox", "Jest"],
  },
  experience: [
    {
      title: "React Native Developer",
      company: "Catalyst Media Integrated",
      duration: "2022-07-25 - Present",
      location: "Mumbai, India",
      details: [
        "Developed innovative hybrid mobile apps using React Native, MobX, and Firebase, including e-commerce, social networking, and utility apps.",
        "Worked on Jebel Ali Racecourse (JARC), a racegoer mobile app with real-time updates and results.",
        "Built society management (Huna Properties) and DREC tenants apps for property management.",
        "Implemented efficient state management with MobX and integrated Firebase for real-time data sync, authentication, and cloud storage.",
        "Utilized Detox for unit testing and integrated payment gateways and push notifications.",
      ],
    },
    {
      title: "Software Developer",
      company: "Tekno Point",
      duration: "2021-06-01 - 2022-07-23",
      location: "Mumbai, India",
      details: [
        "Developed hybrid mobile applications for iOS and Android using React Native.",
        "Worked on the HireStar mobile application, responsible for UI/UX and full development.",
        "Implemented features like image upload, post sharing, web view integration, and state management.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Mumbai University",
      graduationYear: "2021",
    },
  ],
  projects: [
    {
      name: "WhatSend",
      description:
        "Built a small application using React to send WhatsApp messages without saving contact numbers.",
      technologies: ["React", "JavaScript"],
      link: "https://bilal8492.github.io/WhatSend/",
    },
  ],
  languages: ["English (Fluent)", "Hindi (Fluent)", "Urdu (Fluent)"],
};

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/bilal_resume.pdf"; // Ensure the PDF is in the public directory
    link.download = "Bilal_Ansari_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen p-2 sm:px-8 sm:py-4 md:p-0 bg-gradient-to-r from-blue-50 via-white to-gray-100 text-sm sm:text-base">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="sm:px-8 sm:py-4 p-2 shadow-lg rounded-2xl border border-gray-200 bg-white">
            <CardContent>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-xl sm:text-4xl font-bold text-gray-800">
                    {resumeData.name}
                  </h1>
                  <p className="text-sm sm:text-xl text-gray-500">
                    {resumeData.title}
                  </p>
                </div>
                <div>
                  <Button
                    onClick={downloadResume}
                    className="sm:text-sm sm:px-3 sm:py-2 px-6 py-3"
                    aria-label="Download Resume"
                  >
                    <DownloadIcon />
                  </Button>
                </div>
              </div>
              <div className="text-center mb-4">
                <p className="mt-2 text-left text-gray-600 sm:text-sm text-xs leading-relaxed">
                  {resumeData.summary}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                  Contact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p className="flex items-center">
                    <Mail />{" "}
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      target="_blank"
                      className=" pl-2 text-blue-600 hover:underline"
                    >
                      {resumeData.contact.email}
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Globe />{" "}
                    <a
                      href={resumeData.contact.website}
                      target="_blank"
                      className="pl-2 text-blue-600 hover:underline"
                    >
                      bilalansari.in
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Linkedin />{" "}
                    <a
                      href={resumeData.contact.linkedIn}
                      target="_blank"
                      className="pl-2 text-blue-600 hover:underline"
                    >
                      @bilal8492
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Github />{" "}
                    <a
                      href={resumeData.contact.github}
                      target="_blank"
                      className="pl-2 text-blue-600 hover:underline"
                    >
                      @bilal8492
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                  Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Languages
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.languages.map((skill, index) => (
                        <li className="text-sm" key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Frameworks
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.frameworks.map((skill, index) => (
                        <li className="text-sm" key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">Tools</h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.tools.map((skill, index) => (
                        <li className="text-sm" key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Sate Management
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {resumeData.skills.stateManagement.map((skill, index) => (
                        <li className="text-sm" key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                  Experience
                </h2>
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold text-gray-700">
                      {job.title} - {job.company}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {job.duration} | {job.location}
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.details.map((detail, i) => (
                        <li className="text-sm" key={i}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                  Education
                </h2>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-xl font-bold text-gray-700">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {edu.institution} - {edu.graduationYear}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
