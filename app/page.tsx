export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">
              Sachin Kumar
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Full Stack Developer – Java, Spring Boot, React | DevOps
              Enthusiast
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="mailto:sachin.kr.work@gmail.com"
                className="hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                sachin.kr.work@gmail.com
              </a>
              <span>•</span>
              <span>+91-82788-73471</span>
              <span>•</span>
              <span>Chandigarh, India</span>
            </div>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Summary
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Full Stack Developer with 3+ years of professional experience
              building scalable enterprise applications using Java, Spring Boot,
              and React. Proven expertise in microservices architecture, RESTful
              API design, and database optimization. Strong DevOps foundation
              with hands-on experience in Docker, CI/CD pipelines, and cloud
              deployment. Track record of reducing system latency by 40% and
              leading development teams to deliver high-performance solutions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Backend Engineer – Trading Automation
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Sprout Investments • Jan 2023 - Mar 2025 • Chandigarh, India
                </p>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li>
                    Reduced trade execution latency by 30-40% through optimized
                    automated order placement systems
                  </li>
                  <li>
                    Designed and deployed microservices handling 75% increased
                    trading volume with real-time processing
                  </li>
                  <li>
                    Improved database performance by 40% through PostgreSQL
                    query optimization and schema redesign
                  </li>
                  <li>
                    Established CI/CD pipelines reducing deployment time and
                    ensuring zero-downtime releases
                  </li>
                  <li>
                    Mentored team of 3 junior developers, improving code quality
                    and reducing bug resolution time by 35%
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Full Stack Developer
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Audio Intakes • Sep 2021 - Dec 2022 • Remote (Netherlands)
                </p>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li>
                    Developed React.js audio interview platform with WebRTC,
                    serving 1000+ active recruiters
                  </li>
                  <li>
                    Built secure RESTful APIs using NestJS and PostgreSQL with
                    JWT authentication and RBAC
                  </li>
                  <li>
                    Optimized application performance reducing memory usage by
                    25% and improving load times
                  </li>
                  <li>
                    Implemented comprehensive testing suite (unit & E2E)
                    achieving 85% code coverage
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Freelance Full Stack Developer
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Self-Employed • Feb 2021 - Jun 2021
                </p>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li>
                    Delivered 10+ web development and automation projects for
                    international clients
                  </li>
                  <li>
                    Managed complete project lifecycle from requirements
                    gathering to deployment
                  </li>
                  <li>
                    Maintained 100% client satisfaction through effective
                    communication and timely delivery
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Software Development Intern
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  SpeEdLabs • Jul 2021 - Aug 2021 • Indore, India
                </p>
                <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li>
                    Optimized MERN stack e-commerce and learning management
                    applications
                  </li>
                  <li>
                    Integrated multiple product platforms into unified
                    authentication system
                  </li>
                  <li>
                    Improved codebase efficiency and reduced technical debt
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Education
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  PG-DAC (Post Graduate Diploma in Advanced Computing)
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  CDAC • Aug 2025 • 72.5% (232/320)
                </p>
                <div className="text-sm text-zinc-700 dark:text-zinc-300">
                  <p className="font-medium mb-1">Core Modules:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Object Oriented Programming with Java • Web-based Java
                      Programming
                    </li>
                    <li>
                      Algorithms and Data Structures • Database Technologies
                    </li>
                    <li>
                      Web Programming Technologies • Microsoft .NET Technologies
                    </li>
                    <li>
                      C++ Programming • OS & Software Development Methodologies
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Bachelor of Engineering - Computer Science
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Chitkara University • 2019-2023 • 96.8%
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Technical Skills
            </h2>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-300">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Backend Development
                  </h4>
                  <p className="text-sm">
                    Java, Spring Boot, Spring MVC, Hibernate, JPA, REST APIs,
                    Microservices, Node.js, Express.js
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-sm">
                    React.js, JavaScript, TypeScript, HTML5, CSS3, Material-UI,
                    Bootstrap, Redux
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    DevOps & CI/CD
                  </h4>
                  <p className="text-sm">
                    Docker, Docker Compose, Jenkins, GitHub Actions, GitLab CI,
                    Maven, Gradle, Linux Administration
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Cloud & Infrastructure
                  </h4>
                  <p className="text-sm">
                    AWS (EC2, S3, RDS), Nginx, Apache Tomcat, PM2, Server
                    Management, Deployment Automation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Databases
                  </h4>
                  <p className="text-sm">
                    PostgreSQL, MySQL, MongoDB, Redis, Database Optimization,
                    Query Tuning
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Tools & Practices
                  </h4>
                  <p className="text-sm">
                    Git, Postman, Swagger, JUnit, Jest, Agile/Scrum, TDD, Code
                    Review
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Key Projects
            </h2>
            <div className="grid gap-4">
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                  Matrimony Portal - Full Stack Application
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  React, Spring Boot, MySQL, Docker • Jan 2026
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Enterprise matrimonial platform with Spring Boot microservices
                  backend and React SPA frontend. Features include advanced
                  search algorithms, real-time messaging, profile management,
                  and scalable architecture supporting 50K+ concurrent users.
                  Containerized deployment with Docker Compose.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://bandhan1.scriptbliss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/matrimony-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                  SecurePaste - Text Hosting Service
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  NestJS, PostgreSQL, Docker • May 2025
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Production-ready secure text hosting service with end-to-end
                  encryption, comprehensive logging, and security middleware.
                  Deployed using Docker with automated CI/CD achieving 99.9%
                  uptime and handling 10K+ daily requests.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://securepaste.scriptbliss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/scriptbliss/securepaste"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                  Online Assessment Portal - MERN Stack
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  React, Node.js, Express, MongoDB • Dec 2020 - Apr 2021
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Production-grade assessment platform supporting MCQs,
                  multi-language coding challenges (Java, Python, C++), and web
                  framework evaluations. Features include secure proctoring,
                  automated code evaluation, real-time analytics, and admin
                  dashboard. Successfully used for 500+ technical assessments.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://shredtest1.scriptbliss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/online-assessment-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                  Coding Community Platform
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  LAMP Stack (PHP, MySQL, Apache) • Mar 2020 - Jun 2020
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Community-driven platform for developers to discuss code,
                  share solutions, and collaborate on bug fixes. Implemented
                  user authentication, forum system, and code syntax
                  highlighting.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
                  Rank-based Voting System
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  Java • Nov 2017 - Dec 2017
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Console-based voting platform with rank-based scoring system.
                  Voters cast 3 votes with weighted scores (+3, +2, +1),
                  preventing vote repetition and including NOTA option.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Certifications & Training
            </h2>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>
                  CO-OP Project at Industry - React and Spring Boot Developer
                </li>
                <li>
                  Participated in multiple hackathons and coding competitions
                </li>
                <li>Conducted coding contests and technical workshops</li>
                <li>Member of Tech Team – Sports Club (CU-Arcs)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Contact
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="/SachinKumarResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Professional Resume
              </a>
              <a
                href="/SachinKumarResume-CDAC.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                CDAC Resume
              </a>
              <a
                href="mailto:sachin.kr.work@gmail.com"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-zinc-50"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/scriptbliss-sachin/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-zinc-50"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/scriptbliss"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-zinc-50"
              >
                GitHub
              </a>
              <a
                href="https://scriptbliss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-zinc-50"
              >
                Website
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
