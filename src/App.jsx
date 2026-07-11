import { useState, useEffect } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'

  // Detect which section is in view to set active class in nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset for navbar height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeeeeepo", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(null), 5000); // clear message after 5 seconds
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  // Nav link click helper
  const handleNavClick = (sectionId) => {
    setMenuActive(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          Code-with-<span className="logo-accent">Krishna</span>
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
          <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h3>Hello, I'm</h3>
          <h1>Krishna Prasad</h1>
          <p>Python & Django Enthusiast | MCA Graduate</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/racherla-krishna-prasad-1337b1245/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Python-With-Krishna" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:racherlakrishnaprasad4241@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="hero-buttons">
            <button className="btn" onClick={() => handleNavClick('projects')}>
              View My Work <i className="fas fa-arrow-right"></i>
            </button>
            <a 
              href="https://drive.google.com/file/d/19Z_jReYv7k-W87wapALvbnhGhqw86n6d/view?usp=drive_link" 
              className="btn btn-outline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
        <div className="hero-img">
          <div className="hero-img-backdrop"></div>
          <img src="/assets/portfilio-removebg-preview.png" alt="Krishna Prasad" />
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="section about" id="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief insight into who I am and my professional aspirations</p>
        <div className="container split-container">
          <div className="about-img">
            <img src="/assets/portfilio.png" alt="About Me" />
          </div>
          <div className="about-text">
            <h2>Developing with Logic and Dedication</h2>
            <p>
              I am an <strong>MCA graduate</strong> with a strong passion for building reliable and scalable applications, 
              especially using <strong>Python</strong> and <strong>SQL</strong>. I enjoy solving real-world problems by 
              converting complex requirements into clean, efficient, and maintainable solutions.
            </p>
            <p>
              During my academic journey, I worked on multiple projects such as a <strong>Bike Rental Management System</strong> 
              and an <strong>Automated Resume Screening Tool using NLP</strong>. These projects helped me gain hands-on 
              experience in backend logic, database design, data processing, and practical problem-solving.
            </p>
            <p>
              I have experience working with <strong>Python, Django, FastAPI, SQL, and HTML/CSS</strong>, and I am currently 
              improving my skills in <strong>Python Fullstack development</strong>. I am also exploring modern technologies 
              like <strong>Artificial Intelligence</strong> and <strong>data-driven applications</strong> to build smarter systems.
            </p>
            <p>
              I consider myself a continuous learner who enjoys experimenting with new tools, writing clean and understandable code, 
              and improving application performance. I value consistency, logical thinking, and attention to detail in everything I build.
            </p>
            <p>
              Currently, I am seeking an opportunity where I can grow as a software professional, contribute to meaningful projects, 
              and learn from experienced developers while delivering impactful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section services" id="services">
        <h2 className="section-title">My Expertise</h2>
        <p className="section-subtitle">The primary services and solutions I focus on providing</p>
        <div className="cards-grid">
          <div className="card">
            <i className="fas fa-code"></i>
            <h3>Python Development</h3>
            <p>Building efficient backend logic, scripts, automation utilities, and REST APIs using Python and core libraries.</p>
          </div>
          <div className="card">
            <i className="fas fa-database"></i>
            <h3>Database Management</h3>
            <p>Designing schemas, writing optimized queries, managing relationships, and securing data with SQL and MySQL.</p>
          </div>
          <div className="card">
            <i className="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>Creating interactive and highly responsive modern user interfaces using HTML, CSS, JavaScript, and React.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section projects" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A showcase of some recent systems I have designed and built</p>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-img">
              <img src="/assets/project2.png" alt="Easy Bike Rental System" />
            </div>
            <div className="project-info">
              <h3>Easy Bike Rental System</h3>
              <p>
                A web-based platform designed to simplify the rental process. It features discrete modules for 
                administrators and users, preventing duplicate bookings by validating availability in real-time.
              </p>
              <div className="tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Python-With-Krishna" target="_blank" rel="noopener noreferrer">
                  View Code <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-img">
              <img src="/assets/project!.png" alt="Automated Resume Screening" />
            </div>
            <div className="project-info">
              <h3>Automated Resume Screening</h3>
              <p>
                An intelligent system leveraging Natural Language Processing to analyze, match, and rank resume text 
                against job descriptions using TF-IDF vectorization and cosine similarity.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>NLP</span>
                <span>Streamlit</span>
                <span>Machine Learning</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Python-With-Krishna/Automated-Resume-Screening-NLP" target="_blank" rel="noopener noreferrer">
                  View Code <i className="fab fa-github"></i>
                </a>
                <a href="https://automate-resume-screening-nlp.streamlit.app/" target="_blank" rel="noopener noreferrer">
                  Live Demo <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills" id="skills">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">My core stack, tools, and technical concepts that I use day-to-day</p>
        <div className="skills-grid">
          <div className="skill-category-card">
            <h3 className="skill-category-title">Frontend</h3>
            <div className="skill-badges">
              <span className="badge"><i className="fab fa-html5"></i> HTML</span>
              <span className="badge"><i className="fab fa-css3-alt"></i> CSS</span>
              <span className="badge"><i className="fab fa-js"></i> JavaScript</span>
              <span className="badge"><i className="fab fa-react"></i> React</span>
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Backend & DB</h3>
            <div className="skill-badges">
              <span className="badge"><i className="fab fa-python"></i> Python</span>
              <span className="badge"><i className="devicon-fastapi-plain colored"></i> FastAPI</span>
              <span className="badge"><i className="fas fa-database"></i> SQL / MySQL</span>
              <span className="badge"><i className="fas fa-server"></i> Django</span>
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Tools</h3>
            <div className="skill-badges">
              <span className="badge"><i className="fab fa-git-alt"></i> Git</span>
              <span className="badge"><i className="fab fa-github"></i> GitHub</span>
              <span className="badge"><i className="fas fa-terminal"></i> VS Code</span>
            </div>
          </div>

          <div className="skill-category-card">
            <h3 className="skill-category-title">Concepts</h3>
            <div className="skill-badges">
              <span className="badge"><i className="fas fa-brain"></i> DSA</span>
              <span className="badge"><i className="fas fa-network-wired"></i> OOPs</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education" id="education">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic history and learning milestones</p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <img src="/assets/Palamuru_University_logo.png" alt="Palamuru University Logo" className="college-logo" />
                <div>
                  <h3>Master of Computer Applications - MCA</h3>
                  <p className="college-name">Palamuru University, Telangana</p>
                  <span className="duration">2022 - 2024</span>
                </div>
              </div>
              <div className="card-body">
                <p><b>Grade:</b> 7.70 CGPA</p>
                <p className="description">
                  Graduated with a focus on advanced software paradigms. Acquired deep understandings in programming language theory,
                  database designs, network models, web technologies, and computational architectures.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="card-header">
                <img src="/assets/DonBosco Logo.jpg" alt="Don Bosco College Logo" className="college-logo" />
                <div>
                  <h3>B.Sc. Computer Science</h3>
                  <p className="college-name">Don Bosco Degree College, Hyderabad</p>
                  <span className="duration">2020 - 2023</span>
                </div>
              </div>
              <div className="card-body">
                <p><b>Grade:</b> 8.5 CGPA</p>
                <p className="description">
                  Developed foundational roots in object-oriented programming (OOPs), relational databases, and low-level computer logic,
                  along with basic hardware and electronics training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Have an opportunity, a project proposal, or just want to say hi? Drop a message!</p>
        <div className="contact-wrapper">
          <form onSubmit={handleFormSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            
            <button type="submit" className="btn" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? (
                <>Sending Message... <i className="fas fa-spinner fa-spin"></i></>
              ) : (
                <>Send Message <i className="fas fa-paper-plane"></i></>
              )}
            </button>

            {formStatus === 'success' && (
              <p style={{ color: '#10b981', textAlign: 'center', fontWeight: '500', marginTop: '10px' }}>
                <i className="fas fa-check-circle"></i> Message sent successfully! I will get back to you shortly.
              </p>
            )}
            {formStatus === 'error' && (
              <p style={{ color: '#ef4444', textAlign: 'center', fontWeight: '500', marginTop: '10px' }}>
                <i className="fas fa-exclamation-circle"></i> Failed to send the message. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="new-footer">
        <h2 className="footer-name">Krishna Prasad</h2>
        <ul className="footer-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
        </ul>
        <div className="footer-socials">
          <a href="mailto:racherlakrishnaprasad4241@gmail.com"><i className="fas fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/racherla-krishna-prasad-1337b1245" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Python-With-Krishna" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Krishna Prasad. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
