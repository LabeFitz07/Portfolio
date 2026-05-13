import Image from "next/image";
import styles from "./page.module.css";
import {
  FaArrowRight,
  FaCss3Alt,
  FaEnvelope,
  FaFacebookSquare,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
];

const projects = [
  {
    title: "Reviewer System",
    summary:
      "A student-focused reviewer platform designed to make exam preparation cleaner, faster, and easier to navigate.",
    image: "/assets/Screenshot 2024-07-01 140626.png",
    tags: ["UI Design", "Student Platform", "Responsive Layout"],
  },
  {
    title: "Music Streaming App",
    summary:
      "A Flutter-based mobile app concept built around simple discovery, album browsing, and a smooth listening flow.",
    image: "/assets/Screenshot 2024-07-01 142400.png",
    tags: ["Flutter", "Mobile UI", "Prototype"],
  },
  {
    title: "Creative Screen Collection",
    summary:
      "A set of interface explorations that show how I approach layout, structure, and visual clarity across screens.",
    image: "/assets/Screenshot 2024-07-01 141612.png",
    tags: ["Frontend", "Visual Design", "Product Thinking"],
  },
];

const highlights = [
  "BS Information Technology student focused on frontend development and interface building.",
  "Comfortable turning ideas into responsive pages with clean layout, structure, and styling.",
  "Still growing, but already building with a practical mindset and consistent hands-on work.",
];

const proofItems = [
  "Frontend development",
  "Responsive UI",
  "Next.js projects",
  "React interfaces",
  "Mobile-friendly builds",
  "Design-aware coding",
  "Continuous improvement",
];

const processSteps = [
  {
    step: "01",
    title: "Understand the goal",
    text: "I start by identifying what the page or feature needs to communicate so the design is not only attractive, but also useful.",
  },
  {
    step: "02",
    title: "Build with structure",
    text: "I organize layouts carefully, write readable code, and focus on responsive behavior so the experience works across screen sizes.",
  },
  {
    step: "03",
    title: "Refine the experience",
    text: "I pay attention to polish, visual clarity, and small interactions that make a project feel more thoughtful and complete.",
  },
];

const capabilityPoints = [
  "Responsive landing pages and portfolio sites",
  "UI implementation from idea to polished screen",
  "Student and personal projects with practical structure",
];

const reviewerNotes = [
  {
    label: "Main focus",
    value: "Frontend development with React and Next.js",
  },
  {
    label: "Working style",
    value: "Design-aware, detail-focused, and eager to improve fast",
  },
  {
    label: "What I bring",
    value: "Clear layouts, usable interfaces, and genuine curiosity to learn",
  },
];

export default function Home() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.backgroundGlow} />

      <header className={styles.topbar}>
        <a href="#home" className={styles.brand}>
          Fitz Gerard
        </a>

        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Frontend Developer • IT Student • Builder</span>
          <h1>
            I build clean, responsive interfaces that make ideas easier to use.
          </h1>
          <p className={styles.lead}>
            I&apos;m Fitz Gerard Labe from Cagayan de Oro, a BS Information
            Technology student who enjoys building websites and interface
            concepts with React, Next.js, and a strong eye for layout. I care
            about code that works well, looks polished, and feels human to the
            people using it.
          </p>

          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryButton}>
              View Projects
              <FaArrowRight />
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Let&apos;s Connect
            </a>
          </div>

          <div className={styles.statRow}>
            <div>
              <strong>3+</strong>
              <span>featured builds</span>
            </div>
            <div>
              <strong>6</strong>
              <span>core tools</span>
            </div>
            <div>
              <strong>UI</strong>
              <span>clarity first</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.photoStage}>
            <div className={styles.orbitLine} />
            <div className={styles.photoHalo} />
            <div className={styles.photoCardShell}>
              <div className={styles.photoTopLabel}>Portfolio Profile</div>
              <div className={styles.photoFrame}>
                <Image
                  src="/assets/mypic (2).png"
                  alt="Portrait of Fitz Gerard Labe"
                  width={560}
                  height={700}
                  priority
                  className={styles.heroImage}
                />
              </div>
            </div>
            <div className={styles.photoBadge}>Open to internships and real-world projects</div>
            <div className={styles.floatingChipOne}>Responsive UI</div>
            <div className={styles.floatingChipTwo}>React + Next.js</div>
            <div className={styles.photoInfoCard}>
              <span>What I want reviewers to see</span>
              <strong>A developer who can combine structure, design sense, and steady growth into useful digital work.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.marqueeSection} aria-label="Portfolio strengths">
        <div className={styles.marqueeTrack}>
          {[...proofItems, ...proofItems].map((item, index) => (
            <span key={`${item}-${index}`} className={styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>About Me</span>
          <h2>I&apos;m still growing, but I already know the kind of work I want to build.</h2>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <p>
              I first became serious about IT because of the opportunities in
              the field, but along the way I developed a genuine interest in
              programming and interface creation. What keeps me engaged now is
              the challenge of building something functional, clear, and
              visually refined.
            </p>
            <p>
              My current direction is frontend development. I enjoy organizing
              content, shaping the visual flow of a page, and turning rough
              ideas into screens that feel polished on both desktop and mobile.
            </p>
          </article>

          <aside className={styles.highlightList}>
            {highlights.map((item) => (
              <div key={item} className={styles.highlightItem}>
                <span className={styles.highlightDot} />
                <p>{item}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>How I Work</span>
          <h2>My process is simple: understand the goal, build with structure, then refine the experience.</h2>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((item) => (
            <article key={item.step} className={styles.processCard}>
              <span className={styles.processStep}>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Skills</span>
          <h2>Tools I use to turn ideas into usable products.</h2>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map(({ name, icon: Icon }) => (
            <article key={name} className={styles.skillCard}>
              <Icon className={styles.skillIcon} />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Projects</span>
          <h2>These projects show how I approach design, usability, and implementation.</h2>
        </div>

        <article className={styles.spotlightCard}>
          <div className={styles.spotlightCopy}>
            <span className={styles.spotlightEyebrow}>Capability Snapshot</span>
            <h3>If someone reviews this portfolio, I want them to quickly understand what I can already do.</h3>
            <p>
              My work is centered on frontend implementation, responsive
              layouts, and building interfaces that feel organized and easy to
              follow. I&apos;m especially interested in projects where I can keep
              improving both my technical skill and my visual decision-making.
            </p>
            <div className={styles.spotlightPoints}>
              {capabilityPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>

          <div className={styles.spotlightVisual}>
            <div className={styles.visualPulse} />
            <div className={styles.spotlightFramePrimary}>
              <Image
                src="/assets/Screenshot 2024-07-01 140848.png"
                alt="Reviewer system screen"
                width={620}
                height={420}
                className={styles.spotlightImage}
              />
            </div>
            <div className={styles.spotlightFrameSecondary}>
              <Image
                src="/assets/Screenshot 2024-07-01 140910.png"
                alt="Reviewer system mobile style screen"
                width={300}
                height={360}
                className={styles.spotlightImage}
              />
            </div>
          </div>
        </article>

        <div className={styles.reviewerGrid}>
          {reviewerNotes.map((note) => (
            <article key={note.label} className={styles.reviewerCard}>
              <span>{note.label}</span>
              <h3>{note.value}</h3>
            </article>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectImageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={420}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className={styles.tagRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionHeading}>
          <span>Contact</span>
          <h2>If you need a builder with potential, discipline, and room to grow fast, let&apos;s connect.</h2>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactItem}>
              <FaEnvelope />
              <a href="mailto:fitzlabe83@gmail.com">fitzlabe83@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt />
              <a href="tel:09538350966">09538350966</a>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>Cagayan de Oro, Philippines</span>
            </div>
          </div>

          <div className={styles.socialCard}>
            <div className={styles.availabilityBadge}>Open to internships and collaborations</div>
            <p>Find me online</p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/labe.fitz.5"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
