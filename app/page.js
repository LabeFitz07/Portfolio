import Image from "next/image";
import styles from "./page.module.css";
import {
  FaArrowRight,
  FaBriefcase,
  FaClipboardCheck,
  FaCodeBranch,
  FaCss3Alt,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebookSquare,
  FaDownload,
  FaGamepad,
  FaGithub,
  FaHeartbeat,
  FaHtml5,
  FaJsSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMoon,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
  FaShieldAlt,
  FaSitemap,
  FaTasks,
  FaUserCheck,
  FaUsers,
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
    title: "Task Management System",
    summary:
      "A live management dashboard for assigning tasks, approving staff signups, organizing departments, and controlling access through Super Admin and Department Admin roles.",
    image: "/assets/Screenshot 2024-07-01 140848.png",
    href: "https://management-one-lime.vercel.app/",
    tags: ["Next.js", "Admin Dashboard", "Role Management", "Light/Dark Mode"],
  },
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

const gameBuildFiles = [
  "Game Expo.exe",
  "Game Expo_Data",
  "UnityPlayer.dll",
  "Mono",
  "UnityCrashHandler64.exe",
];

const gameStoryPoints = [
  "Built in Unity for our school Game Expo",
  "Designed for students to play during the event",
  "Story-driven teacher and student werewolf concept",
];

const highlights = [
  "BS Information Technology graduate with real healthcare system support experience.",
  "Focused on responsive pages, clean layout, and readable interfaces.",
  "Six months of IT staff experience across maintenance, updates, and user support.",
];

const proofItems = [
  "Frontend development",
  "Healthcare system experience",
  "Responsive UI",
  "Next.js projects",
  "React interfaces",
  "System maintenance",
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
  "Healthcare system maintenance and support",
  "UI implementation from idea to polished screen",
  "Personal projects with practical structure",
];

const reviewerNotes = [
  {
    label: "Main focus",
    value: "Frontend development with practical IT system experience",
  },
  {
    label: "Experience",
    value: "6 months maintaining and developing a healthcare system",
  },
  {
    label: "What I bring",
    value: "Clear layouts, reliable support, and careful system thinking",
  },
];

const experienceHighlights = [
  {
    icon: FaHeartbeat,
    title: "Healthcare System Support",
    text: "Helped maintain a healthcare system used in day-to-day operations, with attention to reliability and clear user workflows.",
  },
  {
    icon: FaCodeBranch,
    title: "Development Tasks",
    text: "Contributed to system improvements, fixes, and updates while learning how real users depend on working software.",
  },
  {
    icon: FaClipboardCheck,
    title: "IT Staff Responsibilities",
    text: "Supported troubleshooting, system checking, and practical maintenance needs as part of an IT staff role for six months.",
  },
];

const taskFeatures = [
  "Staff approval queue",
  "Department-specific staff",
  "Custom job roles",
  "Super Admin access",
  "Department Admin access",
  "Light and dark mode",
];

const taskMetrics = [
  { value: "5", label: "Staff accounts" },
  { value: "7", label: "Departments" },
  { value: "14", label: "Roles" },
];

const taskGallery = [
  {
    title: "Staff Approval",
    text: "Review new signups before users enter the workspace.",
    icon: FaUserCheck,
    tone: "pink",
  },
  {
    title: "Departments",
    text: "Group staff by department and keep teams organized.",
    icon: FaSitemap,
    tone: "cyan",
  },
  {
    title: "Role Access",
    text: "Separate Super Admin and Department Admin permissions.",
    icon: FaShieldAlt,
    tone: "gold",
  },
  {
    title: "Light and Dark",
    text: "Switch between two clean dashboard viewing modes.",
    icon: FaMoon,
    tone: "light",
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
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#game">Game</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Frontend Developer | IT Graduate | UI Builder</span>
          <h1>Modern interfaces with clear structure and thoughtful polish.</h1>
          <p className={styles.lead}>
            I&apos;m Fitz Gerard Labe from Cagayan de Oro, a BS Information
            Technology graduate who builds responsive websites and interface
            concepts with React and Next.js. My healthcare IT experience taught
            me to design software that is clear, reliable, and useful for real
            users.
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
              <strong>6 mo</strong>
              <span>healthcare IT</span>
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
            <div className={styles.photoBadge}>Frontend portfolio</div>
            <div className={styles.floatingChipOne}>Responsive UI</div>
            <div className={styles.floatingChipTwo}>React + Next.js</div>
            <div className={styles.photoInfoCard}>
              <span>What I want reviewers to see</span>
              <strong>
                A developer who combines structure, visual clarity, and steady
                improvement in every project.
              </strong>
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
          <h2>I build with both portfolio creativity and real system responsibility.</h2>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCard}>
            <p>
              I first became serious about IT because of the opportunities in
              the field. Along the way, I found a real interest in programming
              and interface creation. What keeps me engaged now is the challenge
              of making pages functional, clear, and visually refined.
            </p>
            <p>
              My current direction is frontend development. I enjoy organizing
              content, shaping the flow of a page, and turning rough ideas into
              screens that feel polished on both desktop and mobile.
            </p>
            <p>
              I also spent six months as part of an IT staff team maintaining
              and developing a healthcare system. That experience helped me
              understand why clear interfaces, dependable updates, and careful
              support matter when people use software for daily work.
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

      <section id="experience" className={styles.section}>
        <div className={styles.experiencePanel}>
          <div className={styles.experienceIntro}>
            <span className={styles.spotlightEyebrow}>Professional Experience</span>
            <h2>IT Staff for a healthcare system</h2>
            <p>
              Six months of hands-on experience helping maintain and develop a
              healthcare system. This gave me practical exposure to real users,
              system reliability, troubleshooting, and careful updates.
            </p>
          </div>

          <div className={styles.experienceMeta}>
            <FaBriefcase />
            <div>
              <span>Role</span>
              <strong>IT Staff</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>6 months</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Maintenance + development</strong>
            </div>
          </div>

          <div className={styles.experienceGrid}>
            {experienceHighlights.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.experienceCard}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
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
              layout, and organized interfaces. I keep improving both my
              technical skill and my visual decision-making with every build.
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

        <article className={styles.taskManagementShowcase}>
          <div className={styles.taskShowcaseCopy}>
            <span className={styles.spotlightEyebrow}>Live Full-Stack Project</span>
            <h3>Task Management System</h3>
            <p>
              A polished admin workspace for tasks, staff accounts,
              departments, and role-based access. It includes approval flows,
              Super Admin and Department Admin controls, plus light and dark
              mode for flexible dashboard use.
            </p>
            <div className={styles.taskFeatureGrid}>
              {taskFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
            <a
              href="https://management-one-lime.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLiveButton}
            >
              View Live Project
              <FaExternalLinkAlt />
            </a>
          </div>

          <div className={styles.taskProductBoard} aria-label="Task management system screen gallery">
            <div className={styles.taskBrowserBar}>
              <span />
              <span />
              <span />
              <p>management-one-lime.vercel.app</p>
            </div>

            <div className={styles.taskPreview}>
              <div className={styles.taskPreviewSidebar}>
                <strong>Management Hub</strong>
                <span className={styles.previewActive}>Overview</span>
                <span>Workflow</span>
                <span>Staff</span>
                <span>Departments</span>
                <span>Roles</span>
              </div>
              <div className={styles.taskPreviewMain}>
                <div className={styles.previewTopbar}>
                  <div>
                    <span>Signed in</span>
                    <strong>Super Admin</strong>
                  </div>
                  <mark>3 approvals</mark>
                </div>
                <div className={styles.previewHero}>
                  <span>Overview</span>
                  <strong>Staff, departments, roles, and tasks in one dashboard.</strong>
                </div>
                <div className={styles.previewStats}>
                  {taskMetrics.map((metric) => (
                    <span key={metric.label}>
                      <strong>{metric.value}</strong>
                      {metric.label}
                    </span>
                  ))}
                </div>
                <div className={styles.previewQueue}>
                  <div>
                    <strong>Pending Staff Signups</strong>
                    <span>Approve accounts before workspace access</span>
                  </div>
                  <button type="button">Approve</button>
                </div>
              </div>
            </div>

            <div className={styles.taskMiniGallery}>
              {taskGallery.map(({ title, text, icon: Icon, tone }) => (
                <div key={title} className={`${styles.taskMiniCard} ${styles[tone]}`}>
                  <Icon />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.taskWorkflowStrip}>
              <div>
                <FaTasks />
                <strong>Review Pipeline</strong>
                <span>To Do</span>
                <span>In Progress</span>
                <span>Approved</span>
              </div>
              <div>
                <FaUsers />
                <strong>Staff Directory</strong>
                <span>Department 1</span>
                <span>IT department</span>
                <span>Finance</span>
              </div>
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
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectCardLink}
                  >
                    Open project
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <article id="game" className={styles.gameShowcase}>
          <div className={styles.gameMedia}>
            <Image
              src="/assets/game.png"
              alt="Game Expo main menu showing a teacher facing a student transformed into a werewolf"
              width={1920}
              height={1080}
              className={styles.gameImage}
            />
            <div className={styles.gameOverlay}>
              <FaGamepad />
              <span>Unity School Game Expo Project</span>
            </div>
          </div>

          <div className={styles.gameCopy}>
            <span className={styles.spotlightEyebrow}>School Game Expo</span>
            <h3>Game Expo</h3>
            <p>
              I built this Unity game for our school Game Expo. It was intended
              for students and follows a teacher who must save a student after
              the student transforms into a werewolf.
            </p>
            <p>
              The story centers on the teacher&apos;s mission to defeat the
              student&apos;s inner monster, destroy the darkness taking over,
              and save the student&apos;s life.
            </p>
            <div className={styles.gameStoryList}>
              {gameStoryPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <div className={styles.gameBuildList}>
              {gameBuildFiles.map((file) => (
                <span key={file}>{file}</span>
              ))}
            </div>
            <a
              href="/downloads/game-expo-windows.zip"
              download
              className={styles.gameButton}
              aria-label="Download the Game Expo Windows playable build"
            >
              Download Windows build
              <FaDownload />
            </a>
            <p className={styles.gameNote}>
              After downloading, extract the ZIP first, then open
              <strong> Game Expo.exe</strong>. A browser-playable version needs
              a Unity WebGL export.
            </p>
          </div>
        </article>
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
              <a href="tel:09705596392">09705596392</a>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>Cagayan de Oro, Philippines</span>
            </div>
          </div>

          <div className={styles.socialCard}>
            <div className={styles.availabilityBadge}>Available for collaboration</div>
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
