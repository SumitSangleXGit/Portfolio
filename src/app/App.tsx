import { useState } from "react";
import {
  Menu,
  X,
  Download,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Database,
  Palette,
  Wrench,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { EducationCard } from "./components/EducationCard";
import { CertificationCard } from "./components/CertificationCard";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skillsData = [
    {
      title: "Frontend Development",
      icon: Code2,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap ",
        "JavaScript",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      gradient:
        "bg-gradient-to-br from-purple-500 to-purple-600",
      skills: ["PHP (Laravel)", "Node.js (Basics)", "SQL"],
    },
    {
      title: "Design Tools",
      icon: Palette,
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600",
      skills: ["Figma", "Photoshop", "Illustrator"],
    },
    {
      title: "Other Skills",
      icon: Wrench,
      gradient:
        "bg-gradient-to-br from-indigo-500 to-indigo-600",
      skills: [
        "Git & GitHub",
        "API Integration",
        "ServiceNow (Learning)",
      ],
    },
  ];

  const projects = [
    {
      title: "WanderVista Travels",
      subtitle: "Travel Agency Website",
      description:
        "A modern, responsive travel website designed to showcase tour packages and collect customer inquiries.",
      tech: "HTML, CSS, JavaScript",
      image:
        "https://images.unsplash.com/photo-1700936206550-d58812a80512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NzgxMDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Breakfast / Nasta Point",
      subtitle: "Local Food Business Website",
      description:
        "A clean and simple website for a multi-branch breakfast center, highlighting menu, location, and contact details.",
      tech: "HTML, CSS, JavaScript",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzdGF1cmFudCUyMHdlYnNpdGV8ZW58MXx8fHwxNzY3ODc5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "Developer Portfolio",
      description:
        "A responsive portfolio website to showcase skills, projects, and professional background.",
      tech: "HTML, CSS, JavaScript, React",
      image:
        "https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njc4NTM1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const certifications = [
    { title: "Welcome to ServiceNow", status: "" },
    { title: "ITSM Fundamentals", status: "Learning" },
    { title: "Frontend & Web Development Courses", status: "" },
    {
      title: "Continuous self-learning through projects",
      status: "",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-xl text-gray-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sumit Sangale
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 mb-3 text-sm uppercase tracking-wider">
                Welcome to my portfolio
              </p>
              <h1
                className="text-5xl md:text-6xl mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sumit Sangale
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                Web Designer | Frontend Developer | <br />
                Aspiring Full-Stack Developer
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                I design and build clean, responsive, and
                user-friendly websites using modern web
                technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3ODY2MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-3xl shadow-lg">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  I am a{" "}
                  <span className="text-blue-600">
                    MSc Computer Science student
                  </span>{" "}
                  with hands-on experience in Web Design and
                  Frontend Development.
                </p>
                <p>
                  I have completed a{" "}
                  <span className="text-purple-600">
                    PHP Laravel Web Development internship
                  </span>
                  , where I worked on real-world projects and
                  improved my problem-solving skills.
                </p>
                <p>
                  I enjoy creating visually appealing,
                  responsive websites and I am a fast learner,
                  always excited to explore new technologies
                  like React, Node.js, and ServiceNow.
                </p>
                <p>
                  My goal is to build a strong career in the IT
                  industry and contribute to impactful digital
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              A collection of my recent work showcasing web
              design and development skills
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <ExperienceCard
              title="Web Development Intern – PHP Laravel"
              description={[
                "Worked on website development, frontend integration, and backend logic.",
                "Gained experience in real-world project structure, teamwork, and client-based development.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto grid gap-6">
            <EducationCard
              degree="MSc Computer Science"
              description="Postgraduate Student"
            />
            <EducationCard
              degree="Bachelor's Degree in Computer Science"
              description="Undergraduate Studies"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Certifications & Learning
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-xl max-w-2xl mx-auto">
              Interested in working together or hiring me?
              <br />
              Let's connect and build something great.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Email
                    </p>
                    <a
                      href="mailto:sumitsangale2002@gmail.com"
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      sumitsangale2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Location
                    </p>
                    <p className="text-gray-900">India</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="linkedin.com/in/sumit-sangale-126066251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/SumitSangleXGit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Designed & Built by{" "}
            <span className="text-white">Sumit Sangale</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}