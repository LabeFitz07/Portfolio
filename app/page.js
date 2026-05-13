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
  "BS Information Technology student building practical and visually strong interfaces.",
  "Interested in frontend development, responsive design, and mobile app experiences.",
  "Focused on improving through real projects, iteration, and consistent hands-on work.",
];

const proofItems = [
  "Open to new opportunities",
  "Travel-minded builder",
  "Next.js focused",
  "Flutter explorer",
  "Design minded developer",
  "Adaptable collaborator",
  "Project driven growth",
];

const processSteps = [
  {
    step: "01",
    title: "Explore new places",
    text: "I want my portfolio to show movement, curiosity, and a mindset that is open to new environments.",
  },
  {
    step: "02",
    title: "Meet new challenges",
    text: "Whether the opportunity is web, mobile, or design-heavy frontend work, I want to keep growing through real projects.",
  },
  {
    step: "03",
    title: "Build wherever I go",
    text: "The goal is to become a developer whose work can travel well: clear, useful, and ready for different teams and ideas.",
  },
];

const opportunityZones = [
  "Remote-first product teams",
  "Creative frontend internships",
  "Startup environments with room to learn",
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
          <span className={styles.eyebrow}>Frontend Developer Portfolio</span>
          <h1>
            Modern portfolio, clear design, and a stronger first impression.
          </h1>
          <p className={styles.lead}>
            I&apos;m Fitz Gerard Labe, an IT student from Cagayan de Oro
            creating web and mobile experiences that are simple to use,
            visually sharp, and shaped by a desire to explore new places and
            new opportunities.
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
              <strong>2024</strong>
              <span>portfolio refresh</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.photoStage}>
            <div className={styles.photoHalo} />
            <div className={styles.photoCardShell}>
              <div className={styles.photoTopLabel}>Portfolio Profile</div>
              <div className={styles.photoFrame}>
                <Image
                  src="/assets/me.5.jpg"
                  alt="Portrait of Fitz Gerard Labe"
                  width={560}
                  height={700}
                  priority
                  className={styles.heroImage}
                />
              </div>
            </div>
            <div className={styles.photoBadge}>Open to opportunity</div>
            <div className={styles.photoInfoCard}>
              <span>Current direction</span>
              <strong>Creative frontend work, remote opportunities, and growth through real projects</strong>
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
          <h2>Building a portfolio around growth, clarity, and practical work.</h2>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <p>
              I started taking IT seriously because of the opportunities in the
              field, but over time I developed a real interest in programming
              itself. What keeps me engaged now is the process of learning by
              building and improving each project.
            </p>
            <p>
              My current direction is frontend development. I enjoy shaping
              interfaces, organizing content, and turning ideas into something
              that feels polished on both desktop and mobile.
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
          <span>Journey Mode</span>
          <h2>This portfolio now tells a story about travel, ambition, and finding the next opportunity.</h2>
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
          <h2>Selected work that reflects my current style and direction.</h2>
        </div>

        <article className={styles.spotlightCard}>
          <div className={styles.spotlightCopy}>
            <span className={styles.spotlightEyebrow}>Opportunity Passport</span>
            <h3>A featured section built around the idea of going places and chasing better work.</h3>
            <p>
              Since you want the site to feel like someone ready to travel and
              grow, this spotlight frames your portfolio less like a school
              archive and more like a personal launchpad. It gives visitors a
              stronger impression of ambition and direction.
            </p>
            <div className={styles.spotlightPoints}>
              {opportunityZones.map((zone) => (
                <span key={zone}>{zone}</span>
              ))}
            </div>
          </div>

          <div className={styles.spotlightVisual}>
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
          <h2>If you want a developer who is still growing fast, let&apos;s talk.</h2>
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
