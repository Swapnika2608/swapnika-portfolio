import React from 'react';
import { motion } from 'framer-motion';
import profile from "./assets/profile.jpg";

// Hero Banner
const Hero = ({ name, title, summary, contact }) => (
  <section className="min-h-screen" id="home">
    <div className="container">
      <div className="grid md:grid-cols-2 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, I'm <span className="text-indigo-600">{name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-lg"
          >
            SDE Intern @ Amazon | Full-Stack Developer | Serverless + MERN
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-4 flex gap-3"
          >
          </motion.div>

          <div className="mt-8 flex gap-4">
            <a
              href={contact.resume}
              target="_blank"
              className="btn btn-primary"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="btn btn-secondary"
              style={{
                border: '2px solid #4f46e5',
                color: '#4f46e5',
                background: 'transparent'
              }}
            >
              View Projects
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="btn"
              style={{
                border: '2px solid #4f46e5',
                color: '#4f46e5',
                background: 'transparent'
              }}
            >
              Contact
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <img 
            src={profile} 
            alt="Veerlapati Swapnika"
            className="profile-image"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Experience Section
const Experience = ({ items }) => (
  <section id="experience">
    <div className="container">
      <h2 className="mb-8">Experience</h2>
      <div className="space-y-6">
        {items.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="card"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3>{exp.role}</h3>
                <p className="text-gray-600" style={{fontSize: '0.875rem'}}>{exp.company} — {exp.period}</p>
                {exp.techStack && (
                  <p className="text-gray-600 mt-2" style={{fontSize: '0.875rem'}}>
                    <strong>Tech Stack:</strong> {exp.techStack}
                  </p>
                )}
              </div>
              <div className="text-gray-600" style={{fontSize: '0.875rem'}}>{exp.location}</div>
            </div>

            <ul className="mt-4 text-gray-700">
              {exp.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Certifications Section
const Certifications = ({ certificates }) => (
  <section id="certifications">
    <div className="container">
      <h2 className="mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="card bg-gradient"
          >
            <h4 className="mt-3">{cert.title}</h4>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-600" style={{fontSize: '0.875rem'}}>Issued by: {cert.issuer}</p>
              <p className="text-gray-600" style={{fontSize: '0.875rem'}}>Issued: {cert.date}</p>
            </div>
            <p className="mt-3 text-gray-700" style={{fontSize: '0.875rem'}}>
              {cert.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < cert.description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            {cert.note && (
              <p className="mt-2 text-gray-500 italic" style={{fontSize: '0.75rem'}}>{cert.note}</p>
            )}
            <div className="mt-4">
              <a href={cert.link} target="_blank" className="btn btn-primary" style={{fontSize: '0.875rem', padding: '0.5rem 1rem'}}>
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Project Card
const ProjectCard = ({ p }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="card bg-gradient"
  >
    <h4>{p.title}</h4>
    <div className="text-gray-600 mt-1" style={{fontSize: '0.875rem'}}>{p.stack}</div>
    <p className="mt-4 text-gray-700">{p.desc}</p>
    <div className="mt-4 flex gap-4">
      {p.live && (
        <a href={p.live} target='_blank' className="skill-tag">Live</a>
      )}
      {p.repo && (
        <a href={p.repo} target='_blank' className="skill-tag">Repo</a>
      )}
    </div>
  </motion.div>
);

// Projects Section
const Projects = ({ projects }) => (
  <section id="projects" className="bg-gray-50">
    <div className="container">
      <h2 className="mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </div>
  </section>
);

// Skills
const Skills = ({ skillGroups }) => (
  <section id="skills">
    <div className="container">
      <h2 className="mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="skill-group">
            <h4 className="skill-group-title">{group.category}</h4>
            <div className="flex flex-wrap gap-3 mt-3">
              {group.skills.map((skill, j) => (
                <div key={j} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact / Footer
const Contact = ({ contact }) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    alert('Email copied to clipboard!');
  };

  return (
    <footer id="contact">
      <div className="container">
        <h3>Let's build something great together</h3>
        <p className="mt-4 text-lg">Looking for SDE Intern / Full-time roles - let's connect.</p>
        
        <div className="mt-6 flex justify-center gap-6">
          <a href={`mailto:${contact.email}`} className="contact-icon" title="Email">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          
          <a href={contact.linkedin} target="_blank" className="contact-icon" title="LinkedIn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a href="https://github.com/Swapnika2608" target="_blank" className="contact-icon" title="GitHub">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        
        <div className="mt-4 flex justify-center">
          <button onClick={copyEmail} className="email-copy-btn">
            {contact.email} <span className="copy-icon">📋</span>
          </button>
        </div>
        
        <p className="mt-8" style={{fontSize: '0.875rem', opacity: 0.8}}>© {new Date().getFullYear()} {contact.name}. Built with ❤️</p>
      </div>
    </footer>
  );
};

// Top navigation with mobile hamburger menu
const Nav = ({ contact }) => {
  const [activeSection, setActiveSection] = React.useState('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'certifications', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="container">
        <a href="#home">Swapnika</a>
        
        {/* Mobile hamburger button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="nav-links">
          <a href={contact.resume} target="_blank">Resume</a>
          <a href="https://github.com/Swapnika2608" target="_blank">GitHub</a>
          <a href="#projects" className={activeSection === 'projects' ? 'nav-active' : ''}>Projects</a>
          <a href="#experience" className={activeSection === 'experience' ? 'nav-active' : ''}>Experience</a>
          <a href="#certifications" className={activeSection === 'certifications' ? 'nav-active' : ''}>Certificates</a>
          <a href="#skills" className={activeSection === 'skills' ? 'nav-active' : ''}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'nav-active' : ''}>Contact</a>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <a href={contact.resume} target="_blank" onClick={() => setIsMenuOpen(false)}>Resume</a>
            <a href="https://github.com/Swapnika2608" target="_blank" onClick={() => setIsMenuOpen(false)}>GitHub</a>
            <a href="#projects" className={activeSection === 'projects' ? 'nav-active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className={activeSection === 'experience' ? 'nav-active' : ''} onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#certifications" className={activeSection === 'certifications' ? 'nav-active' : ''} onClick={() => setIsMenuOpen(false)}>Certificates</a>
            <a href="#skills" className={activeSection === 'skills' ? 'nav-active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact" className={activeSection === 'contact' ? 'nav-active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

// Single-file Portfolio App (Default export)
export default function Portfolio() {
  const data = {
    name: 'Veerlapati Swapnika',
    title: 'Full-Stack Developer',
    summary:
      'I build scalable web applications with modern technologies and create seamless user experiences.',
    contact: {
      name: 'Veerlapati Swapnika',
      email: 'veerlapatiswapnika26@gmail.com',
      phone: '+91 6304898539',
      linkedin: 'https://www.linkedin.com/in/veerlapati-swapnika/',
      resume: 'https://drive.google.com/file/d/1CYpdcQo4-U1nCyezYri7hEMsYDWIZDiO/view?usp=drivesdk'
    },
    experience: [
      {
        company: 'Amazon',
        role: 'Software Development Engineer Intern',
        period: 'Jun 2025 - Aug 2025',
        location: 'Bangalore',
        techStack: 'AWS Lambda • DynamoDB • CloudWatch • TypeScript • CloudFront • IAM • CodeCommit • CodeBuild • CodeDeploy • CodePipeline',
        points: [
          'Built a serverless xApp OTA Rollout Tracking System for real-time app version monitoring across Amazon ABI devices.',
          'Solved lack of visibility by enabling live rollout % tracking instead of manual partner reports.',
          'Reduced daily manual effort by 4–5 hours and enabled real-time OTA deployment visibility.',
          'Created internal unique-device counting (no external device registry dependency) for ~99.9% accurate metrics',
          'Developed on AWS Lambda + DynamoDB with CloudWatch monitoring + alerts for reliability and auditability'
        ]
      }
    ],
    projects: [
      {
        title: 'Library Management System',
        stack: 'MERN, TypeScript, Redux Toolkit',
        desc: 'Full-featured library app with role-based auth, 24 REST APIs, admin dashboard, loan workflow and search filters.',
        repo: 'https://github.com/Swapnika2608/Library-Management-System',
        live: 'https://library-management-system-azure-three.vercel.app/'
      },
      {
        title: 'Wikipedia Search Application',
        stack: 'HTML, CSS, JavaScript, Bootstrap, REST API',
        desc: 'Custom search UI that fetches results from Wikipedia API and supports details view.',
        repo: '#',
        live: '#'
      }
    ],
    certificates: [
      {
        title: 'Amazon Internship Completion Certificate',
        issuer: 'Amazon',
        date: 'Aug 2025',
        description: 'Certified for successful completion of SDE Internship.',
        link: 'https://drive.google.com/uc?export=download&id=1vkls33KJSIE3YB1ksEDIxKau7L_C4iuJ',
        note: 'Digitally signed & verifiable certificate'
      },
      {
        title: 'DSA Certification',
        issuer: 'Amazon Future Engineer Scholar Program + FFE',
        date: 'Feb 2025',
        description: 'Data Structures and Algorithms certification with consistent\n80%+ performance.',
        link: 'https://drive.google.com/uc?export=download&id=17VUGenGtuJz1cJMTiNdcG1Gws0pl7a7S'
      }
    ],
    skillGroups: [
      {
        category: 'Backend / Programming Languages',
        skills: ['Java', 'Python', 'JavaScript', 'TypeScript']
      },
      {
        category: 'Frontend',
        skills: ['ReactJS', 'HTML', 'CSS']
      },
      {
        category: 'Database',
        skills: ['MongoDB']
      },
      {
        category: 'Tools',
        skills: ['Git', 'Redux Toolkit', 'Power BI', 'Postman']
      }
    ]
  };

  return (
    <div>
      <Nav contact={data.contact} />
      <main>
        <Hero name={data.name} title={data.title} summary={data.summary} contact={data.contact} />
        <Experience items={data.experience} />
        <Certifications certificates={data.certificates} />
        <Projects projects={data.projects} />
        <Skills skillGroups={data.skillGroups} />
        <Contact contact={data.contact} />
      </main>
    </div>
  );
}