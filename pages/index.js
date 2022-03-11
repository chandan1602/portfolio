import Head from 'next/head';
import { useEffect } from 'react/cjs/react.production.min';

export default function Home() {
  const minimisedWindow = (e) => {
    e.preventDefault();
    if (e.target.parentNode.href) {
      var target = e.target.parentNode.href;
      let w = window.innerWidth * 0.9
      let h = window.innerHeight * 0.9
      let mt = window.innerHeight - h
      let ml = window.innerWidth - w
      if (target.slice(-6) !== "#modal") {
        setTimeout(function () {
          window.open(target, "_blank", `toolbar=yes,scrollbars=yes,resizable=yes,top=${mt},left=${ml},width=${w},height=${h}`);
        }, 500);
      }
    }
  }

  const tawkInit = () => {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e721acaeec7650c3320d213/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    }

  useEffect(() => {
    tawkInit();
  })

  return (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3L1H5P9M8P"></script>
        {window.dataLayer = window.dataLayer || []}
        {function gtag() { dataLayer.push(arguments) }}
        {gtag('js', new Date())}
        {gtag('config', 'G-3L1H5P9M8P')}
        <script data-ad-client="ca-pub-3512964287065310" async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="body">
        <div className="collapse" id="details">
          <div className="card card-body">
            <div className="alert alert-success" role="alert">
              <h6>
                Email : cbansal82@gmail.com
              </h6>
              <h6>
                Contact : +917696394019
              </h6>
            </div>
          </div>
        </div>

        <div className="content">
          <section id="education">
            <div className="container">
              <div className="jumbotron">
                <h1>
                  Education
                </h1>
                <ul>
                  <li>
                    <p>
                      Currently persuing BE, Computer Science from UIETH, Panjab University, Chandigarh(Session
                      2018-2022).<br />
                      CGPA: 7.90
                    </p>
                  </li>
                  <li>
                    <p>
                      12th from Narain Public School, Patiala(CBSE)
                      <br />
                      PERCENTAGE: 83%
                    </p>
                  </li>
                  <li>
                    <p>
                      10th from Little Flower Public School, Muktsar(ICSE).
                      <br />
                      PERCENTAGE : 90%
                    </p>
                  </li>
                </ul>
                <hr className="my-4" />
                <p>
                  Took Coaching for IIT/JEE from Lakshya Institute, Patiala.
                </p>
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="container">
              <div className="jumbotron">
                <h1>
                  Skills
                </h1>
                <ul>
                  <li>
                    FRONTEND DEV : Html, Css, Javascript, ReactJs, ReactNative, NextJS
                  </li>
                  <li>
                    BACKEND DEV : NodeJs, Java
                  </li>
                  <li>
                    DATABASE MANAGEMENT : MongoDb, MySql, SqLite
                  </li>
                  <li>
                    PROGRAMMING : C, C++, Java, Python3
                  </li>
                  <li>
                    TOOLS : Git, Github, Gitlab, Trello, Scrum Meetings at Zoom
                  </li>
                  <li>
                    CLOUD : Microsoft Azure, Google Cloud(Beginner)
                  </li>
                </ul>
                <hr className="my-4" />
                <p>
                  Expertise In : MERN-STACK
                </p>
              </div>
            </div>
          </section>

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

          <section id="internships">
            <div className="container">
              <div className="jumbotron">
                <h1>Internship Works <br /></h1>

                <p className="companyHead">Company: Paytm<br /></p>
                <p style={{ marginTop: '-25px', marginBottom: '30px' }}>Designation: Software Developer || Department of Payment Gateway</p>

                <div className="timelineWork paytm" >
                  <div className="container workSamples">
                    <h4>
                      DESCRIPTION
                    </h4>
                    <ul>
                      <li>
                        5 Months Internship till June, 2022.
                      </li>
                      <li>
                        Working on Java and its Libraries, Core Computer Science Concepts, Kafka related Programmes, AWS.
                      </li>
                      <li>
                        Made a project involving CRUD, Caching, ORM, Logging, Transaction, Multithreading, Exception Handling
                      </li>
                    </ul>

                  </div>
                </div>



                <p className="companyHead">Company: Techtonic Enterprises Private Limited<br /></p>
                <p style={{ marginTop: '-25px', marginBottom: '30px' }}>Designation: MERN stack developer</p>

                <div className="timelineWork mayandco" >
                  <div className="container workSamples">
                    <h4>
                      MAY AND CO
                    </h4>
                    <p>
                      Description: Work on API-Integrations, Building complex logics for functionalities like
                      -
                      add to cart/wishlist, checkout, user dashboard, filter items, dynamic pricing,
                      implementing centralised DB locally and making a dynamic website work like a static
                      website, i.e., taking performance to it's highest limits.
                      Also I was subjected to scrum meetings with team and client meetings, work
                      modularisation, professional environment, and so on.
                    </p>
                    <p>
                      Also worked on Admin Dashboard(Can't be disclosed to privacy policy) that implemented
                      CRUD Operations, user ease of access, etc.
                    </p>
                    <p><a href="https://maytestdomain.netlify.app" target="_blank">Let's take a visit</a></p>
                    <div className="wsImgDiv">
                      <img src='/assets/images/mayCoDesktop.png' alt="Preview Desktop View" />
                      <img src="/assets/images/mayandcomobile.jpeg" alt="Preview Mobile View" />
                    </div>

                  </div>
                </div>

                <div className="timelineWork kohler">
                  <div className="container workSamples">
                    <h4>
                      THE BOLD LOOK OF KOHLER
                    </h4>
                    <p>
                      Description: Work on API-Integrations, analysing and testing previous code,
                      building dynamic UI for mobile and Desktop from scratch using tailwind css,
                      improving website's performance through reducing api hits, debugging and testing and so
                      on.
                    </p>
                    <p>
                      Also worked on Admin Dashboard(Can't be disclosed to privacy policy) that implemented
                      CRUD Operations, etc.
                    </p>
                    <p><a href="https://boring-noyce-97b8b4.netlify.app/" target="_blank">Let's take a visit</a>
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

          <section id="projects">
            <div className="container">
              <div className="jumbotron">
                <h1>
                  Personal Projects
                </h1>

                <div className="timelineWork transmate">
                  <div className="container workSamples">
                    <h4>
                      ROLE BASED DIRECT MESSAGING APP
                    </h4>
                    <p>
                      Description: Built an Android/IOS Application. Team comprised of 2 members.
                      We designed all the User Interface, database designs, divided work into modules using trello, made deadlines and then started the project.
                      <br />
                      The project faced a lot of difficulties like the extent to which the dynamicity was required was extreme, we had to push ourselves to the level,
                      secondly we had to have 2 types of databases one for local for storing chats and another for online data storage.
                      <br />
                      Since the app was role based, the data access time through the APIs had to be reduced, hence we improved our APIs over time to time.
                      The app is still connecton orriented and we look forward to make it connectionless.
                    </p>
                    <p>
                      We thank our seniors and our friends for pushing and motivating us to complete this project.
                    </p>
                    <p><a href="https://drive.google.com/folderview?id=1NysReTLz9ZDaWRaRaa5gNEKxYYzcyqWi" target="_blank">Let's take a visit</a></p>
                  </div>
                </div>

                <div className="timelineWork platformtechs">
                  <div className="container workSamples">
                    <h4>
                      STATIC WEBSITE
                    </h4>
                    <p>
                      Description: Our first project. Built a static website for the official technical group of our college, Platform Tech Group.
                      Team comprised of 4 members. My roles included frontend development, documentation and SPOC, project lead. The project made use of
                      some amazing features like carousels, animations, 3rd party APIs like formspree, tawk and so on.
                    </p>
                    <p>
                      Also built a few similar projects based on similar set of technologies.
                      For example <a href="https://chandan1602.github.io" target="_blank" style={{ textDecoration: 'none', fontWeight: 600 }}>Pumate</a>
                      <span style={{ marginLeft: '23px' }}>,</span> this portfolio itself &#9997;.
                    </p>
                    <p><a href="https://platformtechs.in" target="_blank">Let's take a visit</a></p>
                    <div className="wsImgDiv">
                      <img src="/assets/images/platformTechsDesktop.png" alt="Preview Desktop View"></img>
                      <img src="/assets/images/PlatformTechsMobile.jpeg" alt="Preview Mobile View" ></img>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="" id="footer">
            <ul>
              {/* <li>
                        <a href="#1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-twitter"></span>
                        </a>
                    </li> */}
              <li>
                <a href="https://www.linkedin.com/in/chandan-bansal-5483a616b" target="_blank" onClick={(e) => minimisedWindow(e)}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fa fa-linkedin"></span>
                </a>
              </li>
              {/* <li>
                        <a href="#3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="fa fa-instagram"></span>
                        </a>
                    </li> */}
              <li>
                <a href="https://github.com/chandan1602" target="_blank" onClick={(e) => minimisedWindow(e)}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fa fa-github"></span>
                </a>
              </li>
              <li>
                <a href="#modal" type="button" data-toggle="modal" data-target="#exampleModal">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fa fa-info">
                    <div className="infoIcon"></div>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
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

  )
}
