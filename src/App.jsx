import { useState, useEffect } from 'react';
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDatabase,
  FaServer,
  FaDownload,
  FaArrowRight,
  FaBars,
  FaXmark,
  FaCheck,
  FaCircleCheck,
  FaCircleExclamation,
  FaSpinner,
  FaPaperPlane,
  FaArrowUpRightFromSquare,
  FaMotorcycle,
  FaBrain,
  FaCode,
  FaTerminal,
  FaGraduationCap,
  FaLocationDot,
  FaKey,
  FaGoogle,
  FaShieldHalved,
  FaCubes,
  FaGlobe,
  FaHouse,
  FaUser,
  FaNetworkWired,
  FaLayerGroup,
  FaCodeBranch,
  FaMicrochip,
  FaRobot,
  FaCalculator,
  FaFilePdf,
  FaMobileScreen,
  FaDocker,
  FaBolt,
  FaToolbox,
  FaLightbulb,
  FaFolderOpen,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from 'react-icons/fa6';
import {
  SiFastapi,
  SiPostgresql,
  SiDjango,
  SiMysql,
  SiPostman,
  SiStreamlit,
  SiBootstrap,
  SiSpacy,
  SiScikitlearn,
  SiSqlalchemy
} from 'react-icons/si';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('api'); // 'api' or 'nlp'
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'

  // Detect which section is in view to set active class in nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'architecture', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

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
        setTimeout(() => setFormStatus(null), 6000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  // Nav link click helper
  const handleNavClick = (sectionId) => {
    setMenuActive(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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

  const resumeUrl = "https://drive.google.com/file/d/1fa0xS5GsuBiX00fqkj9WCPKTAJQMMsRV/view?usp=drive_link";

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <div className="logo" onClick={() => handleNavClick('home')}>
              <img
                src={`${import.meta.env.BASE_URL}assets/portfilio-removebg-preview.png`}
                alt="Krishna Prasad"
                className="logo-avatar"
              />
              <span className="logo-bracket">&lt;</span>
              <span>Krishna</span>
              <span className="logo-bracket">/&gt;</span>
              <span className="logo-badge">Python Dev</span>
            </div>

            <ul className="nav-links">
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
                  href="#architecture"
                  className={activeSection === 'architecture' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('architecture'); }}
                >
                  Architecture
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
                  href="#projects"
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
                >
                  Projects
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

            <div className="nav-actions">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <FaDownload /> Resume
              </a>
              <button
                className="menu-toggle-btn"
                onClick={() => setMenuActive(!menuActive)}
                aria-label="Toggle navigation menu"
              >
                {menuActive ? <FaXmark /> : <FaBars />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuActive && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-links">
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                <FaHouse /> Home
              </a>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              >
                <FaUser /> About Me
              </a>
              <a
                href="#architecture"
                className={activeSection === 'architecture' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('architecture'); }}
              >
                <FaNetworkWired /> Architecture
              </a>
              <a
                href="#skills"
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
              >
                <FaLayerGroup /> Skills
              </a>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
              >
                <FaCodeBranch /> Projects
              </a>
              <a
                href="#education"
                className={activeSection === 'education' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}
              >
                <FaGraduationCap /> Education
              </a>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                <FaPaperPlane /> Contact
              </a>
            </div>
            <div className="mobile-nav-cta">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-profile-pill">
                <img
                  src={`${import.meta.env.BASE_URL}assets/portfilio-removebg-preview.png`}
                  alt="Krishna Prasad"
                  className="hero-pill-avatar"
                />
                <span className="hero-pill-text">
                  <span className="pulse-dot"></span> Available for Python &amp; Full Stack Roles
                </span>
              </div>

              <div className="hero-greeting">Hi, I'm</div>
              <h1 className="hero-name">Krishna Prasad</h1>
              
              <div className="hero-title">
                <span>Python Backend Developer</span>
                <span className="title-accent">&amp; Full Stack Engineer</span>
              </div>

              <p className="hero-description">
                Specializing in building scalable <strong>RESTful APIs</strong>, robust <strong>database architectures</strong>, 
                and <strong>AI-powered web applications</strong> with clean, maintainable Python code.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => handleNavClick('projects')}>
                  View Projects <FaArrowRight />
                </button>
                <button className="btn btn-secondary" onClick={() => handleNavClick('contact')}>
                  Contact Me <FaEnvelope />
                </button>
                <a
                  href={resumeUrl}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <FaDownload />
                </a>
              </div>

              <div className="hero-socials">
                <span className="hero-socials-label">Connect:</span>
                <a
                  href="https://www.linkedin.com/in/racherla-krishna-prasad-1337b1245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn style={{ color: '#0a66c2' }} />
                </a>
                <a
                  href="https://github.com/Python-With-Krishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub style={{ color: '#24292f' }} />
                </a>
                <a
                  href="mailto:racherlakrishnaprasad4241@gmail.com"
                  className="social-icon-link"
                  aria-label="Send Email"
                >
                  <FaEnvelope style={{ color: '#ea4335' }} />
                </a>
              </div>
            </div>

            {/* HERO DEVELOPER VISUAL */}
            <div className="hero-visual">
              <div className="floating-badge badge-top">
                <SiFastapi style={{ color: '#009688', fontSize: '20px' }} />
                <div>
                  <strong>FastAPI + PostgreSQL</strong>
                  <span className="badge-sub">High-Throughput APIs</span>
                </div>
              </div>

              <div className="code-window-card">
                {/* Mini Profile Status Bar inside Code Card */}
                <div className="hero-dev-mini-bar">
                  <div className="dev-mini-left">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/portfilio-removebg-preview.png`}
                      alt="Krishna Prasad Avatar"
                      className="dev-mini-avatar"
                    />
                    <div>
                      <span className="dev-mini-name">Krishna Prasad</span>
                      <span className="dev-mini-role">Python &bull; AI &bull; Full Stack</span>
                    </div>
                  </div>
                  <div className="dev-mini-status">
                    <FaCode /> Ready to Deploy
                  </div>
                </div>

                <div className="code-window-header">
                  <div className="window-controls">
                    <span className="control-dot red"></span>
                    <span className="control-dot yellow"></span>
                    <span className="control-dot green"></span>
                  </div>

                  <div className="window-tabs">
                    <button
                      className={`window-tab ${activeTab === 'api' ? 'active' : ''}`}
                      onClick={() => setActiveTab('api')}
                    >
                      <FaPython style={{ color: '#38bdf8' }} /> main.py
                    </button>
                    <button
                      className={`window-tab ${activeTab === 'nlp' ? 'active' : ''}`}
                      onClick={() => setActiveTab('nlp')}
                    >
                      <FaBrain style={{ color: '#a855f7' }} /> nlp_matcher.py
                    </button>
                  </div>

                  <div className="window-badge">Python 3.12</div>
                </div>

                <div className="code-window-body">
                  {activeTab === 'api' ? (
                    <code>
                      <span className="code-line"><span className="code-comment"># FastAPI REST Backend Service</span></span>
                      <span className="code-line"><span className="code-keyword">from</span> fastapi <span className="code-keyword">import</span> FastAPI, Depends, HTTPException</span>
                      <span className="code-line"><span className="code-keyword">from</span> sqlalchemy.ext.asyncio <span className="code-keyword">import</span> AsyncSession</span>
                      <span className="code-line"><span className="code-keyword">from</span> app.schemas <span className="code-keyword">import</span> UserAuth, ApiResponse</span>
                      <span className="code-line"></span>
                      <span className="code-line">app = FastAPI(title=<span className="code-string">"Krishna Backend API"</span>)</span>
                      <span className="code-line"></span>
                      <span className="code-line"><span className="code-decorator">@app.post</span>(<span className="code-string">"/api/v1/auth/login"</span>, response_model=ApiResponse)</span>
                      <span className="code-line"><span className="code-keyword">async def</span> <span className="code-func">authenticate_user</span>(</span>
                      <span className="code-line">    payload: <span className="code-type">UserAuth</span>,</span>
                      <span className="code-line">    db: <span className="code-type">AsyncSession</span> = Depends(get_db)</span>
                      <span className="code-line">):</span>
                      <span className="code-line">    token = <span className="code-keyword">await</span> auth_service.verify(payload, db)</span>
                      <span className="code-line">    <span className="code-keyword">return</span> &#123;<span className="code-string">"access_token"</span>: token, <span className="code-string">"type"</span>: <span className="code-string">"Bearer"</span>&#125;</span>
                    </code>
                  ) : (
                    <code>
                      <span className="code-line"><span className="code-comment"># NLP Resume Matching Engine</span></span>
                      <span className="code-line"><span className="code-keyword">from</span> sklearn.feature_extraction.text <span className="code-keyword">import</span> TfidfVectorizer</span>
                      <span className="code-line"><span className="code-keyword">from</span> sklearn.metrics.pairwise <span className="code-keyword">import</span> cosine_similarity</span>
                      <span className="code-line"></span>
                      <span className="code-line"><span className="code-keyword">def</span> <span className="code-func">rank_candidates</span>(job_desc: <span className="code-type">str</span>, resumes: <span className="code-type">list[str]</span>):</span>
                      <span className="code-line">    vectorizer = TfidfVectorizer(stop_words=<span className="code-string">'english'</span>)</span>
                      <span className="code-line">    matrix = vectorizer.fit_transform([job_desc] + resumes)</span>
                      <span className="code-line">    scores = cosine_similarity(matrix[<span className="code-num">0</span>:<span className="code-num">1</span>], matrix[<span className="code-num">1</span>:])</span>
                      <span className="code-line">    <span className="code-keyword">return</span> sorted(enumerate(scores[<span className="code-num">0</span>]), key=<span className="code-keyword">lambda</span> x: x[<span className="code-num">1</span>], reverse=<span className="code-keyword">True</span>)</span>
                    </code>
                  )}
                </div>

                <div className="code-window-footer">
                  <div className="status-left">
                    <span className="status-item"><FaCircleCheck style={{ color: '#10b981' }} /> Connected to PostgreSQL</span>
                  </div>
                  <div className="status-right">
                    <span className="status-item"><FaBolt style={{ color: '#38bdf8' }} /> Async 200 OK</span>
                  </div>
                </div>
              </div>

              <div className="floating-badge badge-bottom">
                <FaMicrochip style={{ color: '#2563eb', fontSize: '20px' }} />
                <div>
                  <strong>AI &amp; NLP Solutions</strong>
                  <span className="badge-sub">TF-IDF &amp; Scikit-Learn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STRIP / HIGHLIGHTS */}
      <div className="tech-ribbon">
        <div className="container">
          <div className="tech-ribbon-content">
            <div className="tech-ribbon-label">
              <FaTerminal style={{ color: '#2563eb' }} /> Core Tech Stack:
            </div>
            <div className="tech-ribbon-items">
              <span className="tech-pill"><FaPython style={{ color: '#3776ab' }} /> Python 3.x</span>
              <span className="tech-pill"><SiFastapi style={{ color: '#009688' }} /> FastAPI</span>
              <span className="tech-pill"><SiPostgresql style={{ color: '#336791' }} /> PostgreSQL</span>
              <span className="tech-pill"><SiDjango style={{ color: '#092e20' }} /> Django</span>
              <span className="tech-pill"><FaKey style={{ color: '#f59e0b' }} /> JWT &amp; OAuth</span>
              <span className="tech-pill"><FaBrain style={{ color: '#8b5cf6' }} /> NLP &amp; ML</span>
              <span className="tech-pill"><FaReact style={{ color: '#61dafb' }} /> React</span>
              <span className="tech-pill"><FaGitAlt style={{ color: '#f05032' }} /> Git &amp; GitHub</span>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <section className="section about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><FaUser /> Engineering Profile</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">A backend-focused developer with a passion for logic, data integrity, and intelligent systems.</p>
          </div>

          <div className="about-grid">
            <div className="about-photo-wrapper">
              <div className="about-photo-card">
                <img
                  src={`${import.meta.env.BASE_URL}assets/portfilio.png`}
                  alt="Krishna Prasad Portfolio"
                />
                <div className="about-card-badge">
                  <div className="about-badge-icon">
                    <FaCode />
                  </div>
                  <div className="about-badge-text">
                    <h4>Krishna Prasad</h4>
                    <p>MCA Graduate &bull; Python Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-content">
              <h3 className="about-heading">Building Scalable Backend Systems with Clean Code &amp; Strong Architectural Foundations</h3>
              
              <p className="about-text-p">
                I am an <strong>MCA graduate</strong> with a passion for architecting dependable, high-performance web backends 
                and data-driven applications. My core expertise revolves around <strong>Python</strong>, <strong>FastAPI</strong>, 
                <strong>Django</strong>, and <strong>SQL/PostgreSQL</strong>, converting complex business requirements into clean, 
                modular, and maintainable services.
              </p>

              <p className="about-text-p">
                Throughout my academic and practical journey, I have engineered full-cycle projects such as an 
                <strong> Automated Resume Screening System using NLP (TF-IDF &amp; Scikit-learn)</strong> and a robust 
                <strong> Bike Rental Management System</strong> featuring role-based authorization and concurrency controls.
              </p>

              <p className="about-text-p">
                I am deeply committed to the principles of <strong>clean API design</strong>, <strong>relational database modeling</strong>, 
                and <strong>scalable full-stack integration</strong> with React. I continuously learn and experiment with modern AI utilities 
                to build smarter, production-grade solutions.
              </p>

              <div className="about-pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon"><FaServer /></div>
                    <h4>Backend &amp; APIs</h4>
                  </div>
                  <p>FastAPI &amp; Django REST APIs, Pydantic validation, JWT tokens, and OAuth flows.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon"><FaDatabase /></div>
                    <h4>Database Modeling</h4>
                  </div>
                  <p>Relational schema design, SQL optimization, SQLAlchemy ORM, and Alembic migrations.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon"><FaBrain /></div>
                    <h4>AI &amp; NLP Systems</h4>
                  </div>
                  <p>Text extraction, TF-IDF vectorization, semantic ranking, and Scikit-Learn pipelines.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon"><FaReact /></div>
                    <h4>Full Stack Synergy</h4>
                  </div>
                  <p>Seamless integration between backend REST endpoints and dynamic, responsive React UIs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BACKEND ARCHITECTURE SECTION */}
      <section className="section section-alt" id="architecture">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><FaNetworkWired /> Workflow &amp; Design</span>
            <h2 className="section-title">How I Build Backend Architectures</h2>
            <p className="section-subtitle">A structured overview of how incoming requests are safely processed, authenticated, and persisted.</p>
          </div>

          <div className="architecture-box">
            <div className="arch-header">
              <h3>Production Request &amp; Data Pipeline</h3>
              <p>Type-safe, authenticated, and optimized end-to-end data lifecycle</p>
            </div>

            <div className="flow-diagram">
              <div className="flow-node">
                <div className="flow-node-icon"><FaReact style={{ color: '#61dafb' }} /></div>
                <h4>1. Client</h4>
                <p>React / Web App</p>
              </div>

              <div className="flow-arrow"><FaArrowRight /></div>

              <div className="flow-node">
                <div className="flow-node-icon"><SiFastapi style={{ color: '#009688' }} /></div>
                <h4>2. FastAPI Router</h4>
                <p>Async Endpoints</p>
              </div>

              <div className="flow-arrow"><FaArrowRight /></div>

              <div className="flow-node">
                <div className="flow-node-icon"><FaShieldHalved style={{ color: '#3b82f6' }} /></div>
                <h4>3. Auth &amp; Pydantic</h4>
                <p>JWT &amp; Validation</p>
              </div>

              <div className="flow-arrow"><FaArrowRight /></div>

              <div className="flow-node">
                <div className="flow-node-icon"><FaCubes style={{ color: '#6366f1' }} /></div>
                <h4>4. SQLAlchemy</h4>
                <p>Async ORM / Query</p>
              </div>

              <div className="flow-arrow"><FaArrowRight /></div>

              <div className="flow-node">
                <div className="flow-node-icon"><SiPostgresql style={{ color: '#336791' }} /></div>
                <h4>5. PostgreSQL</h4>
                <p>ACID Storage</p>
              </div>
            </div>

            <div className="arch-features">
              <div className="arch-feature-item">
                <FaCircleCheck style={{ color: '#10b981', marginTop: '4px' }} />
                <div>
                  <h5>Type-Safe DTOs</h5>
                  <p>Automatic request validation and serialized responses via Pydantic schemas.</p>
                </div>
              </div>

              <div className="arch-feature-item">
                <FaCircleCheck style={{ color: '#10b981', marginTop: '4px' }} />
                <div>
                  <h5>Secure RBAC</h5>
                  <p>Role-based access control with hashed passwords and signed JWT access/refresh tokens.</p>
                </div>
              </div>

              <div className="arch-feature-item">
                <FaCircleCheck style={{ color: '#10b981', marginTop: '4px' }} />
                <div>
                  <h5>Data Consistency</h5>
                  <p>Relational integrity, foreign key cascades, and automated schema migrations via Alembic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS TAXONOMY */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><FaCode /> Technical Stack</span>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle">Structured by domains without artificial rating bars — focusing on real engineering capability.</p>
          </div>

          <div className="skills-grid">
            {/* Backend */}
            <div className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon"><FaServer /></div>
                <h3>Backend Architecture</h3>
              </div>
              <div className="skill-badges">
                <span className="skill-badge highlight"><FaPython style={{ color: '#3776ab' }} /> Python 3.x</span>
                <span className="skill-badge highlight"><SiFastapi style={{ color: '#009688' }} /> FastAPI</span>
                <span className="skill-badge"><SiDjango style={{ color: '#092e20' }} /> Django</span>
                <span className="skill-badge"><FaGlobe style={{ color: '#2563eb' }} /> RESTful APIs</span>
                <span className="skill-badge"><SiSqlalchemy style={{ color: '#d71f00' }} /> SQLAlchemy</span>
                <span className="skill-badge"><FaShieldHalved style={{ color: '#0ea5e9' }} /> Pydantic</span>
                <span className="skill-badge"><FaKey style={{ color: '#f59e0b' }} /> JWT Auth</span>
                <span className="skill-badge"><FaGoogle style={{ color: '#ea4335' }} /> OAuth 2.0</span>
              </div>
            </div>

            {/* Database */}
            <div className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon"><FaDatabase /></div>
                <h3>Database &amp; Storage</h3>
              </div>
              <div className="skill-badges">
                <span className="skill-badge highlight"><SiPostgresql style={{ color: '#336791' }} /> PostgreSQL</span>
                <span className="skill-badge"><SiMysql style={{ color: '#00758f' }} /> MySQL</span>
                <span className="skill-badge"><FaDatabase style={{ color: '#0284c7' }} /> SQL Querying</span>
                <span className="skill-badge"><FaCubes style={{ color: '#6366f1' }} /> Schema Design</span>
                <span className="skill-badge"><FaCodeBranch style={{ color: '#10b981' }} /> Alembic Migrations</span>
                <span className="skill-badge"><FaKey style={{ color: '#f59e0b' }} /> ACID Integrity</span>
              </div>
            </div>

            {/* AI & ML */}
            <div className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon"><FaBrain /></div>
                <h3>AI &amp; Machine Learning</h3>
              </div>
              <div className="skill-badges">
                <span className="skill-badge highlight"><FaRobot style={{ color: '#2563eb' }} /> NLP</span>
                <span className="skill-badge highlight"><SiScikitlearn style={{ color: '#f7931e' }} /> Scikit-learn</span>
                <span className="skill-badge"><FaBrain style={{ color: '#8b5cf6' }} /> NLTK</span>
                <span className="skill-badge"><SiSpacy style={{ color: '#09a3d5' }} /> SpaCy</span>
                <span className="skill-badge"><FaCalculator style={{ color: '#10b981' }} /> TF-IDF Vectorization</span>
                <span className="skill-badge"><FaFilePdf style={{ color: '#ef4444' }} /> PyMuPDF Text Extract</span>
              </div>
            </div>

            {/* Frontend */}
            <div className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon"><FaReact /></div>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-badges">
                <span className="skill-badge highlight"><FaReact style={{ color: '#61dafb' }} /> React.js</span>
                <span className="skill-badge"><FaJs style={{ color: '#f7df1e' }} /> JavaScript (ES6+)</span>
                <span className="skill-badge"><FaHtml5 style={{ color: '#e34f26' }} /> HTML5</span>
                <span className="skill-badge"><FaCss3Alt style={{ color: '#1572b6' }} /> CSS3</span>
                <span className="skill-badge"><SiBootstrap style={{ color: '#7952b3' }} /> Bootstrap</span>
                <span className="skill-badge"><FaMobileScreen style={{ color: '#0284c7' }} /> Responsive UI</span>
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon"><FaToolbox /></div>
                <h3>Tools &amp; Workflow</h3>
              </div>
              <div className="skill-badges">
                <span className="skill-badge highlight"><FaGitAlt style={{ color: '#f05032' }} /> Git</span>
                <span className="skill-badge highlight"><FaGithub style={{ color: '#24292f' }} /> GitHub</span>
                <span className="skill-badge"><FaTerminal style={{ color: '#007acc' }} /> VS Code</span>
                <span className="skill-badge"><SiPostman style={{ color: '#ff6c37' }} /> Postman</span>
                <span className="skill-badge"><SiStreamlit style={{ color: '#ff4b4b' }} /> Streamlit</span>
                <span className="skill-badge"><FaDocker style={{ color: '#2496ed' }} /> Docker (Basics)</span>
              </div>
            </div>

            {/* Core Concepts */}
            <div className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-icon"><FaLightbulb /></div>
                <h3>Core CS Concepts</h3>
              </div>
              <div className="skill-badges">
                <span className="skill-badge highlight"><FaNetworkWired style={{ color: '#2563eb' }} /> Data Structures</span>
                <span className="skill-badge"><FaCubes style={{ color: '#6366f1' }} /> OOP Principles</span>
                <span className="skill-badge"><FaGlobe style={{ color: '#0284c7' }} /> REST Principles</span>
                <span className="skill-badge"><FaShieldHalved style={{ color: '#10b981' }} /> Auth Mechanisms</span>
                <span className="skill-badge"><FaCode style={{ color: '#f59e0b' }} /> Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS WITH REAL PROJECT SCREENSHOTS */}
      <section className="section section-alt" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><FaFolderOpen /> Portfolio Showcase</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Real-world applications focusing on backend engineering, NLP, database management, and full-stack integration.</p>
          </div>

          <div className="projects-grid">
            {/* Project 1: Automated Resume Screening */}
            <div className="project-card">
              <div className="project-media-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}assets/project!.png`}
                  alt="Automated Resume Screening NLP Tool"
                />
                <div className="project-image-overlay">
                  <span className="project-badge">AI / NLP System</span>
                  <span className="project-code-tag">TF-IDF Vectorizer</span>
                </div>
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <FaBrain style={{ color: '#2563eb' }} />
                  <h3>Automated Resume Screening System</h3>
                </div>

                <p className="project-description">
                  An intelligent candidate screening engine leveraging Natural Language Processing to extract resume text, 
                  perform TF-IDF vectorization, and rank candidates against specific job descriptions in real-time.
                </p>

                <div className="project-features-list">
                  <div className="project-feature-item">
                    <FaCheck style={{ color: '#2563eb' }} />
                    <span>Automated PDF parsing and text tokenization with PyMuPDF &amp; NLTK</span>
                  </div>
                  <div className="project-feature-item">
                    <FaCheck style={{ color: '#2563eb' }} />
                    <span>TF-IDF vector representation with Cosine Similarity relevance ranking</span>
                  </div>
                  <div className="project-feature-item">
                    <FaCheck style={{ color: '#2563eb' }} />
                    <span>Interactive web application deployed using Streamlit</span>
                  </div>
                </div>

                <div className="project-tech-tags">
                  <span className="project-tag"><FaPython style={{ color: '#3776ab' }} /> Python</span>
                  <span className="project-tag"><FaRobot style={{ color: '#2563eb' }} /> NLP</span>
                  <span className="project-tag"><SiScikitlearn style={{ color: '#f7931e' }} /> Scikit-learn</span>
                  <span className="project-tag"><FaBrain style={{ color: '#8b5cf6' }} /> NLTK</span>
                  <span className="project-tag"><SiStreamlit style={{ color: '#ff4b4b' }} /> Streamlit</span>
                  <span className="project-tag"><FaFilePdf style={{ color: '#ef4444' }} /> PyMuPDF</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/Python-With-Krishna/Automated-Resume-Screening-NLP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <FaGithub /> View Code
                  </a>
                  <a
                    href="https://automate-resume-screening-nlp.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <FaArrowUpRightFromSquare /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Easy Bike Rental System */}
            <div className="project-card">
              <div className="project-media-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}assets/project2.png`}
                  alt="Easy Bike Rental Management System"
                />
                <div className="project-image-overlay">
                  <span className="project-badge">Database &amp; Web</span>
                  <span className="project-code-tag">ACID Transactions</span>
                </div>
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <FaMotorcycle style={{ color: '#2563eb' }} />
                  <h3>Easy Bike Rental Management System</h3>
                </div>

                <p className="project-description">
                  A full-featured rental platform designed to manage vehicle inventory, customer reservations, 
                  and prevent double-booking conflicts through strict transactional database validation.
                </p>

                <div className="project-features-list">
                  <div className="project-feature-item">
                    <FaCheck style={{ color: '#2563eb' }} />
                    <span>Discrete role-based portals for customers and administrative managers</span>
                  </div>
                  <div className="project-feature-item">
                    <FaCheck style={{ color: '#2563eb' }} />
                    <span>Real-time availability checking logic to eliminate booking collisions</span>
                  </div>
                  <div className="project-feature-item">
                    <FaCheck style={{ color: '#2563eb' }} />
                    <span>Relational database modeling with automated status triggers</span>
                  </div>
                </div>

                <div className="project-tech-tags">
                  <span className="project-tag"><SiMysql style={{ color: '#00758f' }} /> MySQL</span>
                  <span className="project-tag"><FaDatabase style={{ color: '#0284c7' }} /> SQL Schema</span>
                  <span className="project-tag"><FaJs style={{ color: '#f7df1e' }} /> JavaScript</span>
                  <span className="project-tag"><FaHtml5 style={{ color: '#e34f26' }} /> HTML5</span>
                  <span className="project-tag"><FaCss3Alt style={{ color: '#1572b6' }} /> CSS3</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/Python-With-Krishna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <FaGithub /> View Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & TIMELINE */}
      <section className="section" id="education">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><FaGraduationCap /> Academic Milestones</span>
            <h2 className="section-title">Education &amp; Learning Journey</h2>
            <p className="section-subtitle">Formal computer science background paired with continuous engineering exploration.</p>
          </div>

          <div className="timeline">
            {/* Item 1: MCA */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-marker-inner"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-institution">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/Palamuru_University_logo.png`}
                      alt="Palamuru University Logo"
                      className="institution-logo"
                    />
                    <div className="institution-info">
                      <h3>Master of Computer Applications (MCA)</h3>
                      <p>Palamuru University &bull; Telangana</p>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-duration">2023 &ndash; 2025</span>
                    <span className="timeline-grade">CGPA: 7.70</span>
                  </div>
                </div>

                <div className="timeline-body">
                  <p>
                    Advanced study in software engineering paradigms, distributed database architectures, advanced 
                    programming language constructs, and web engineering. Built and deployed full-stack NLP projects 
                    and practical backend systems during the curriculum.
                  </p>
                  <div className="timeline-coursework-tags">
                    <span className="coursework-tag">Advanced Python</span>
                    <span className="coursework-tag">Database Management Systems</span>
                    <span className="coursework-tag">Data Structures &amp; Algorithms</span>
                    <span className="coursework-tag">Web Technologies</span>
                    <span className="coursework-tag">NLP &amp; Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2: B.Sc. CS */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-marker-inner"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-institution">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/DonBosco Logo.jpg`}
                      alt="Don Bosco Degree College Logo"
                      className="institution-logo"
                    />
                    <div className="institution-info">
                      <h3>B.Sc. in Computer Science</h3>
                      <p>Don Bosco Degree College &bull; Hyderabad</p>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-duration">2020 &ndash; 2023</span>
                    <span className="timeline-grade">CGPA: 8.50</span>
                  </div>
                </div>

                <div className="timeline-body">
                  <p>
                    Developed rigorous fundamental concepts in Object-Oriented Programming (OOPs), relational databases (SQL), 
                    operating systems, and algorithmic problem-solving with foundational hardware/electronics training.
                  </p>
                  <div className="timeline-coursework-tags">
                    <span className="coursework-tag">Object-Oriented Programming</span>
                    <span className="coursework-tag">Relational Databases</span>
                    <span className="coursework-tag">Software Engineering</span>
                    <span className="coursework-tag">Computer Networks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GITHUB & OPEN SOURCE HUB */}
      <section className="section section-alt">
        <div className="container">
          <div className="github-card">
            <div className="github-info">
              <span className="section-tag"><FaGithub /> Open Source Activity</span>
              <h3><FaGithub /> Python-With-Krishna</h3>
              <p>
                I actively build and share developer utilities, FastAPI backend services, and NLP toolkits on GitHub. 
                Follow my repositories to explore clean code practices, project architectures, and open experiments.
              </p>
              <a
                href="https://github.com/Python-With-Krishna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> Visit GitHub Profile
              </a>
            </div>

            <div className="github-stats-grid">
              <div className="github-stat-item">
                <span className="stat-number">Python</span>
                <span className="stat-label">Core Language</span>
              </div>
              <div className="github-stat-item">
                <span className="stat-number">FastAPI</span>
                <span className="stat-label">API Framework</span>
              </div>
              <div className="github-stat-item">
                <span className="stat-number">NLP &amp; AI</span>
                <span className="stat-label">Smart Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><FaEnvelope /> Get In Touch</span>
            <h2 className="section-title">Let's Build Something Together</h2>
            <p className="section-subtitle">Whether you have an opportunity, a technical proposal, or want to discuss backend architectures — my inbox is open.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <h3>Connect Directly</h3>
              <p>Feel free to reach out via email, LinkedIn, or the direct contact form. I typically respond within 24 hours.</p>

              <div className="contact-channel-list">
                <div className="contact-channel-item">
                  <div className="channel-icon"><FaEnvelope style={{ color: '#ea4335' }} /></div>
                  <div className="channel-details">
                    <h4>Email</h4>
                    <a href="mailto:racherlakrishnaprasad4241@gmail.com">racherlakrishnaprasad4241@gmail.com</a>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon"><FaLinkedinIn style={{ color: '#0a66c2' }} /></div>
                  <div className="channel-details">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/racherla-krishna-prasad-1337b1245/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/racherla-krishna-prasad
                    </a>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon"><FaGithub style={{ color: '#24292f' }} /></div>
                  <div className="channel-details">
                    <h4>GitHub</h4>
                    <a href="https://github.com/Python-With-Krishna" target="_blank" rel="noopener noreferrer">
                      github.com/Python-With-Krishna
                    </a>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="channel-icon"><FaLocationDot style={{ color: '#2563eb' }} /></div>
                  <div className="channel-details">
                    <h4>Location</h4>
                    <span>Hyderabad / Telangana, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h4>Send a Message</h4>
              <p className="form-subtitle">Fill in the details below and I will get back to you promptly.</p>

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Alex Johnson"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="e.g. alex@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project, role, or proposal..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>Sending Message... <FaSpinner className="fa-spin" /></>
                  ) : (
                    <>Send Message <FaPaperPlane /></>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="form-feedback success">
                    <FaCircleCheck />
                    <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="form-feedback error">
                    <FaCircleExclamation />
                    <span>Sorry, there was an issue sending your message. Please reach out via direct email instead.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-simple">
        <div className="container">
          <div className="footer-simple-content">
            <div className="footer-simple-logo" onClick={() => handleNavClick('home')}>
              <span className="logo-bracket">&lt;</span>
              <span>Krishna</span>
              <span className="logo-bracket">/&gt;</span>
            </div>

            <ul className="footer-simple-nav">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
              <li><a href="#architecture" onClick={(e) => { e.preventDefault(); handleNavClick('architecture'); }}>Architecture</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
              <li><a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
            </ul>

            <div className="footer-simple-socials">
              <a
                href="mailto:racherlakrishnaprasad4241@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope style={{ color: '#ea4335' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/racherla-krishna-prasad-1337b1245/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn style={{ color: '#0a66c2' }} />
              </a>
              <a
                href="https://github.com/Python-With-Krishna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub style={{ color: '#24292f' }} />
              </a>
            </div>

            <p className="footer-simple-copy">&copy; {new Date().getFullYear()} Krishna Prasad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
