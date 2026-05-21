import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const minimisedWindow = (e) => {
    e.preventDefault();
    if (e.target.parentNode.href) {
      var target = e.target.parentNode.href;
      let w = window.innerWidth * 0.9;
      let h = window.innerHeight * 0.9;
      let mt = window.innerHeight - h;
      let ml = window.innerWidth - w;
      if (target.slice(-6) !== '#modal') {
        setTimeout(function () {
          window.open(
            target,
            '_blank',
            `toolbar=yes,scrollbars=yes,resizable=yes,top=${mt},left=${ml},width=${w},height=${h}`
          );
        }, 500);
      }
    }
  };

  const tawkInit = () => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5e721acaeec7650c3320d213/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  };

  useEffect(() => {
    tawkInit();
  });

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="body">

        {/* Contact collapse (preserved) */}
        <div className="collapse" id="details">
          <div className="card card-body">
            <div className="alert alert-success" role="alert">
              <h6>Email : cbansal82@gmail.com</h6>
              <h6>Contact : +917696394019</h6>
            </div>
          </div>
        </div>

        <div className="content">

          {/* ══════════════════════════════════════
              1. HERO
          ══════════════════════════════════════ */}
          <section id="hero">
            <div className="container">
              <div className="jumbotron heroSection">
                <h1 className="heroName">Chandan Bansal</h1>
                <p className="heroTagline">
                  Product Management &nbsp;|&nbsp; Business Analytics &nbsp;|&nbsp; Software Engineering
                </p>
                <p className="heroSummary">
                  PGPM candidate at Great Lakes Institute of Management (Dual Specialisation — Product
                  Management &amp; Business Analytics). Former Senior Software Engineer at Paytm with 3 years
                  of ownership across payment systems, real-time KPI dashboards, and large-scale infrastructure.
                  Bridging engineering depth with product strategy, data-driven decisioning, and AI-driven
                  prototyping to build customer-centric solutions.
                </p>
                <div className="heroCTAs">
                  <a className="btn heroBtn" href="/assets/Chandan_Bansal_Resume.pdf" target="_blank">
                    Resume
                  </a>
                  <a className="btn heroBtn heroBtn--outline" href="#projects">
                    Projects
                  </a>
                  <a className="btn heroBtn heroBtn--outline" href="#modal" data-toggle="modal" data-target="#exampleModal">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              2. ABOUT
          ══════════════════════════════════════ */}
          <section id="about">
            <div className="container">
              <div className="jumbotron">
                <h1>About</h1>
                <p>
                  I started as a software engineer — writing production Java, building APIs, managing Kafka
                  streams, and shipping features inside Paytm&apos;s Payment Gateway. Over three years I moved
                  from implementation to ownership: driving product charters, partnering with cross-functional
                  stakeholders, running sprint ceremonies, and shaping data pipelines that fed real business
                  decisions.
                </p>
                <p>
                  Today I&apos;m deepening that foundation through a PGPM at Great Lakes, developing skills in
                  product strategy, user journey mapping, market research, competitive analysis, and business
                  analytics. My goal is to build at the intersection of engineering rigour and product thinking —
                  identifying real problems, validating hypotheses fast, and shipping solutions that hold up under
                  load and user scrutiny.
                </p>
                <p>
                  Outside the classroom I prototype with AI tools, explore mock product concepts, and keep one
                  foot firmly in the technical world so I can always pressure-test ideas with engineers.
                </p>
              </div>
            </div>
          </section>

          {/* ── SEPARATOR VARIANT 1 (bouncing ball) ── */}
          <section id="seperator">
            <div className="container">
              <div className="jumbotron sprtrBkg">
                <section className="at_rule">
                  <div className="keyframe commonContainer">
                    <div className="keyframeInner">
                      <span className="shadow"></span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              3. EDUCATION
          ══════════════════════════════════════ */}
          <section id="education">
            <div className="container">
              <div className="jumbotron">
                <h1>Education</h1>
                <ul>
                  <li>
                    <p>
                      <strong>Great Lakes Institute of Management, Chennai</strong><br />
                      Post Graduate Programme in Management (PGPM)<br />
                      Dual Specialisation — Product Management &amp; Business Analytics<br />
                      May 2025 – Apr 2026
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Panjab University SSG Regional Centre, Hoshiarpur</strong><br />
                      Bachelor of Engineering — Computer Science Engineering<br />
                      2018 – 2022 &nbsp;|&nbsp; CGPA: 8.1 / 10
                    </p>
                  </li>
                  <li>
                    <p>
                      12th — Narain Public School, Patiala (CBSE) &nbsp;|&nbsp; 83%
                    </p>
                  </li>
                  <li>
                    <p>
                      10th — Little Flower Public School, Muktsar (ICSE) &nbsp;|&nbsp; 90%
                    </p>
                  </li>
                </ul>
                <hr className="my-4" />
                <p>IIT/JEE coaching from Lakshya Institute, Patiala.</p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              4. SKILLS
          ══════════════════════════════════════ */}
          <section id="skills">
            <div className="container">
              <div className="jumbotron">
                <h1>Skills</h1>
                <div className="skillsGrid">

                  <div className="skillGroup">
                    <h5 className="skillGroupTitle">Product Strategy</h5>
                    <ul>
                      <li>Product Strategy &amp; Lifecycle Management</li>
                      <li>User Journey Mapping</li>
                      <li>Requirements Gathering &amp; Prioritisation</li>
                      <li>Market Research &amp; Competitive Analysis</li>
                      <li>Roadmap Planning &amp; MVP Definition</li>
                    </ul>
                  </div>

                  <div className="skillGroup">
                    <h5 className="skillGroupTitle">Analytics &amp; Decisioning</h5>
                    <ul>
                      <li>Data-driven Decision Making</li>
                      <li>KPI Dashboard Design</li>
                      <li>Business Analytics</li>
                      <li>Payment Systems &amp; Metrics</li>
                      <li>Process Optimisation</li>
                    </ul>
                  </div>

                  <div className="skillGroup">
                    <h5 className="skillGroupTitle">Technical</h5>
                    <ul>
                      <li>Java, Node.js, React, Next.js</li>
                      <li>Kafka, AWS, Microsoft Azure</li>
                      <li>MongoDB, MySQL</li>
                      <li>Git, Jira, Confluence</li>
                      <li>LLD, Wireframing, draw.io</li>
                    </ul>
                  </div>

                  <div className="skillGroup">
                    <h5 className="skillGroupTitle">AI &amp; Prototyping</h5>
                    <ul>
                      <li>Prompt Engineering</li>
                      <li>AI-driven Prototyping</li>
                      <li>Feasibility Validation</li>
                      <li>Usability Testing</li>
                    </ul>
                  </div>

                  <div className="skillGroup">
                    <h5 className="skillGroupTitle">Collaboration &amp; Delivery</h5>
                    <ul>
                      <li>Stakeholder Management</li>
                      <li>Cross-functional Coordination</li>
                      <li>Sprint Ceremonies &amp; Backlog Grooming</li>
                      <li>UAT &amp; Acceptance Criteria</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* ── SEPARATOR VARIANT 2 (orbit ring) ── */}
          <section className="seperatorVariant">
            <div className="container">
              <div className="jumbotron sprtrBkg">
                <div className="sepV2">
                  <div className="sepV2Ring">
                    <div className="sepV2Dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              5. WORK EXPERIENCE
          ══════════════════════════════════════ */}
          <section id="workex">
            <div className="container">
              <div className="jumbotron">
                <h1>Work Experience</h1>

                <p className="companyHead">Paytm</p>
                <p style={{ marginTop: '-25px', marginBottom: '30px' }}>
                  Senior Software Engineer &nbsp;|&nbsp; Payment Gateway &nbsp;|&nbsp; Jun 2022 – May 2025
                </p>

                <div className="timelineWork paytmFull">
                  <div className="container workSamples">
                    <h4>HIGHLIGHTS</h4>
                    <ul>
                      <li>
                        <strong>Product Strategy &amp; Cost Optimisation:</strong> Delivered $50K projected
                        savings through data-driven decisions and scalable cloud architecture aligned with
                        long-term product goals.
                      </li>
                      <li>
                        <strong>Data-Driven Dashboards:</strong> Built and launched real-time dashboards
                        tracking key payment KPIs — latency, errors, throughput — improving cross-team
                        visibility, incident resolution, and prioritisation.
                      </li>
                      <li>
                        <strong>EMI Product Charter:</strong> Led EMI initiatives with custom pricing and
                        dynamic reporting, driving higher partner adoption and user satisfaction.
                      </li>
                      <li>
                        <strong>Platform Reliability:</strong> Owned Central Retry Service — automated retry
                        workflows reduced failures and improved NPS during peak loads.
                      </li>
                      <li>
                        <strong>Zero-Downtime Migration:</strong> Led 500+ PB infrastructure migration ensuring
                        compliance, high availability, and future-ready scalability.
                      </li>
                      <li>
                        <strong>Tools &amp; Process:</strong> Jira, Confluence, draw.io, LLD, wireframing,
                        process mapping, backlog grooming, sprint ceremonies, UAT, stakeholder management,
                        user stories, acceptance criteria.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              6. FEATURED PROJECTS
          ══════════════════════════════════════ */}
          <section id="projects">
            <div className="container">
              <div className="jumbotron">
                <h1>Featured Projects</h1>

                {/* AI Interview Prep Platform */}
                <div className="timelineWork aiproject">
                  <div className="container workSamples">
                    <h4>AI-POWERED INTERVIEW PREPARATION PLATFORM</h4>
                    <p className="projectDate">Nov 2025 – Jan 2026 &nbsp;|&nbsp; Product Management Team Project (0→1 MVP)</p>
                    <p>
                      Led end-to-end product discovery for an AI-driven interview prep platform built in
                      collaboration with teammates. Conducted user surveys and interviews across GLIM Chennai
                      campus to map pain points, segment users, and build detailed personas.
                    </p>
                    <ul>
                      <li>
                        Defined MVP roadmap — AI mock interview chatbot, resume–JD analyzer, post-interview
                        scorecard, and daily challenge streaks — prioritised via hypothesis-driven validation.
                      </li>
                      <li>
                        Shaped strategy around humane AI principles, 24×7 availability, gamification, and
                        knowledge continuity across cohorts; evaluated B2B vs B2C monetisation.
                      </li>
                      <li>
                        Delivered competitive analysis, prototype refinement, technical feasibility assessment,
                        and usability testing keeping the product grounded and presentable.
                      </li>
                    </ul>
                    <p>
                      <a href="/ai-interview-platform.html" target="_blank">
                        View Full Case Study →
                      </a>
                    </p>
                  </div>
                </div>

                {/* Role-based DM App */}
                <div className="timelineWork transmate">
                  <div className="container workSamples">
                    <h4>ROLE BASED DIRECT MESSAGING APP</h4>
                    <p>
                      Built a cross-platform Android/iOS messaging application in a 2-person team. Designed UI,
                      database schema, and module breakdown via Trello before writing a single line of code.
                    </p>
                    <p>
                      Challenges included dual-database architecture (local for chats, cloud for shared data)
                      and iterative API optimisation to reduce access latency for role-scoped data.
                    </p>
                    <p>
                      <a
                        href="https://drive.google.com/folderview?id=1NysReTLz9ZDaWRaRaa5gNEKxYYzcyqWi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Let&apos;s take a visit
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── SEPARATOR VARIANT 3 (pulse wave) ── */}
          <section className="seperatorVariant">
            <div className="container">
              <div className="jumbotron sprtrBkg">
                <div className="sepV3">
                  <span className="sepV3Wave"></span>
                  <span className="sepV3Wave sepV3Wave--2"></span>
                  <span className="sepV3Wave sepV3Wave--3"></span>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              7. INTERNSHIPS
          ══════════════════════════════════════ */}
          <section id="internships">
            <div className="container">
              <div className="jumbotron">
                <h1>Internships</h1>

                {/* Paytm Internship */}
                <p className="companyHead">Paytm</p>
                <p style={{ marginTop: '-25px', marginBottom: '30px' }}>
                  Software Developer Intern &nbsp;|&nbsp; Payment Gateway &nbsp;|&nbsp; Jan 2022 – Jun 2022
                </p>

                <div className="timelineWork paytm">
                  <div className="container workSamples">
                    <h4>DESCRIPTION</h4>
                    <ul>
                      <li>5-month internship building on Java, Core CS concepts, Kafka, and AWS.</li>
                      <li>
                        Delivered a production-ready project covering CRUD, Caching, ORM, Logging,
                        Transaction management, Multithreading, and Exception Handling.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Techtonic Enterprises */}
                <p className="companyHead" style={{ marginTop: '30px' }}>Techtonic Enterprises Private Limited</p>
                <p style={{ marginTop: '-25px', marginBottom: '30px' }}>MERN Stack Developer Intern</p>

                <div className="timelineWork mayandco">
                  <div className="container workSamples">
                    <h4>MAY AND CO</h4>
                    <p>
                      API integrations and complex frontend logic — cart/wishlist, checkout, user dashboard,
                      dynamic pricing. Centralised DB strategy that pushed dynamic website performance close
                      to static speeds. Scrum and client meetings.
                    </p>
                    <p>
                      Admin Dashboard (NDA) — CRUD operations and user accessibility improvements.
                    </p>
                    <p>
                      <a href="https://maytestdomain.netlify.app" target="_blank" rel="noreferrer">
                        Let&apos;s take a visit
                      </a>
                    </p>
                    <div className="wsImgDiv">
                      <img src="/assets/images/mayCoDesktop.png" alt="Preview Desktop View" />
                      <img src="/assets/images/mayandcomobile.jpeg" alt="Preview Mobile View" />
                    </div>
                  </div>
                </div>

                <div className="timelineWork kohler">
                  <div className="container workSamples">
                    <h4>THE BOLD LOOK OF KOHLER</h4>
                    <p>
                      API integrations, legacy code analysis and testing, mobile-first UI from scratch
                      with Tailwind CSS, API-hit reduction for performance, debugging and QA.
                    </p>
                    <p>Admin Dashboard (NDA) — CRUD and UX improvements.</p>
                    <p>
                      <a href="https://boring-noyce-97b8b4.netlify.app/" target="_blank" rel="noreferrer">
                        Let&apos;s take a visit
                      </a>
                    </p>
                    <div className="wsImgDiv">
                      <img src="/assets/images/kohlerDeskptop.png" alt="Preview Desktop View" />
                      <img src="/assets/images/kohlerMobile.jpeg" alt="Preview Mobile View" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              8. EARLIER WORK
          ══════════════════════════════════════ */}
          <section id="earlier-projects">
            <div className="container">
              <div className="jumbotron">
                <h1>Earlier Work</h1>

                <div className="timelineWork platformtechs">
                  <div className="container workSamples">
                    <h4>PLATFORM TECH GROUP — STATIC WEBSITE</h4>
                    <p>
                      First team project. Official website for the college technical group — 4-member team;
                      I led frontend development, documentation, and acted as SPOC. Features include
                      carousels, animations, and third-party integrations (Formspree, Tawk).
                    </p>
                    <p>
                      Also built{' '}
                      <a href="https://chandan1602.github.io" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                        Pumate
                      </a>{' '}
                      and this portfolio itself ✍️ on a similar stack.
                    </p>
                    <p>
                      <a href="https://platformtechs.in" target="_blank" rel="noreferrer">
                        Let&apos;s take a visit
                      </a>
                    </p>
                    <div className="wsImgDiv">
                      <img src="/assets/images/platformTechsDesktop.png" alt="Preview Desktop View" />
                      <img src="/assets/images/PlatformTechsMobile.jpeg" alt="Preview Mobile View" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── SEPARATOR VARIANT 1 again (bouncing ball) ── */}
          <section id="seperator">
            <div className="container">
              <div className="jumbotron sprtrBkg">
                <section className="at_rule">
                  <div className="keyframe commonContainer">
                    <div className="keyframeInner">
                      <span className="shadow"></span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              9. ACHIEVEMENTS
          ══════════════════════════════════════ */}
          <section id="achievements">
            <div className="container">
              <div className="jumbotron">
                <h1>Achievements</h1>
                <div className="achievementsGrid">

                  <div className="achieveCard">
                    <span className="achieveIcon">🏆</span>
                    <h5>National Finalist — The Fresh Connection</h5>
                    <p className="achieveOrg">Inchainge &nbsp;|&nbsp; Sep 2025</p>
                    <p>
                      Optimised supply chain ROI from -7% to +6% through analytics-driven decisions in a
                      competitive national simulation.
                    </p>
                  </div>

                  <div className="achieveCard">
                    <span className="achieveIcon">🥇</span>
                    <h5>Winner — Paytm AI Hackathon</h5>
                    <p className="achieveOrg">Paytm &nbsp;|&nbsp; Feb 2024</p>
                    <p>
                      Led team to design AI agents integrated with backend systems, enhancing Soundbox
                      performance and user experience.
                    </p>
                  </div>

                  <div className="achieveCard">
                    <span className="achieveIcon">⭐</span>
                    <h5>Rising Star Award</h5>
                    <p className="achieveOrg">Paytm &nbsp;|&nbsp; Apr 2023</p>
                    <p>
                      Recognised for driving high-impact initiatives and demonstrating end-to-end ownership
                      aligned with product vision.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              FOOTER (preserved exactly)
          ══════════════════════════════════════ */}
          <div className="" id="footer">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/chandan-bansal-5483a616b"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => minimisedWindow(e)}
                >
                  <span></span><span></span><span></span><span></span>
                  <span className="fa fa-linkedin"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chandan1602"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => minimisedWindow(e)}
                >
                  <span></span><span></span><span></span><span></span>
                  <span className="fa fa-github"></span>
                </a>
              </li>
              <li>
                <a href="#modal" type="button" data-toggle="modal" data-target="#exampleModal">
                  <span></span><span></span><span></span><span></span>
                  <span className="fa fa-info">
                    <div className="infoIcon"></div>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Modal (preserved exactly) */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title modalText" id="exampleModalLabel">Info</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p className="modalText">
                    Name: Chandan Bansal<br />
                    Contact: +91 76963-94019<br />
                    Email: cbansal82@gmail.com
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}