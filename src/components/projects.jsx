import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  UI/UX designer
                </p>
                <div className="line-mf"></div>
              </div>

              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-6">
                        <div className="col-md-12">
                          <h6 className="title-left">Loki</h6>
                          <br></br>
                          <p>DEC 2023</p>
                          <p><a href="https://www.figma.com/file/hvBR9qwUlVeIgryW3GsAIC/Loki---Service-Flow?type=design&node-id=335-163&mode=design&t=vLSsWGl5SfDbVyQl-0">Figma</a></p>
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <div className="col-md-12">
                          <p>Lead designer on logo design, branding package and more than 50+ high fidelity Figma mockups for each app screen of Loki, an up and coming app for small businesses to connect with clients, schedule bookings and explore other businesses</p>
                          <p><b>Skills: </b>Figma</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-6">
                        <div className="col-md-12">
                          <h6 className="title-left">PetInTime</h6>
                          <br></br>
                          <p>NOV 2023</p>
                          <p><b>UXPLORE 2023 SECOND PLACE WINNER</b></p>
                          <p><a href="https://www.figma.com/proto/tTdUL3PC4yvq17BaltX9rx/PetInTime?type=design&node-id=12-2513&t=Yf7ID2jhqfja1An7-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=12%3A2513&show-proto-sidebar=1&mode=design">Figma Prototype</a></p>
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <div className="col-md-12">
                          <p> A mobile app design with a working prototype on Figma detailing a new startup idea of gamification of lateness. Many people are always late, especially students, so our team decided to build an app that would help others be on time by connecting their schedules to a virtual pet.   </p>
                          <p><b>Skills: </b>Figma</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-6">
                        <div className="col-md-12">
                          <h6 className="title-left">MoviesViz</h6>
                          <br></br>
                          <p>APR 2023</p>
                          <p><a href="https://github.com/janellewong/moviesViz">Github</a> • <a href="https://imdbmoviesvis.netlify.app/">Website</a></p>
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <div className="col-md-12">
                          <p> An interactive visualization website created to analyze the Top 100 Popular IMDb Movies dataset using the d3 Javascript framework. 
                            There are multiple views and graph types supporting the visualization, as well as implemented user activities between the views, including filtering, sliders, bi-directional highlighting, etc.   </p>
              <           p><b>Skills: </b>Javascript, d3.js, HTML, CSS </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-6">
                        <div className="col-md-12">
                          <h6 className="title-left">StreetEats</h6>
                          <br></br>
                          <p>AUG 2021</p>
                          <p><a href="https://github.com/janellewong/StreetEats">Github</a> • <a href="https://devpost.com/software/streeteats">Devpost</a></p>
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <div className="col-md-12">
                          <p> A Flask website with a python backend & a postgreSQL database that 
              allow the user to register and login, track their location and 
              suggest restaurant recommendations nearby with an API. 
              It allows the user to add/delete restaurants to lists, 
              and friend other users to see their food lists. It is deployed with 
              an AWS CentOS server using nginx as a reverse proxy. Implemented CI/CD on 
              GitHub, containerized with Docker, and monitored with cAdvisor, Prometheus and Grafana. </p>
              <p><b>Skills: </b>Python, Flask, PostgreSQL, HTML, CSS, AWS, Github Actions, Docker, Prometheus, Grafana, Bootstrap</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-6">
                        <div className="col-md-12">
                          <h6 className="title-left">The Shoppies</h6>
                          <br></br>
                          <p>APR 2021</p>
                          <p><a href="https://github.com/janellewong/the-shoppies">Github</a> • <a href="https://theshoppiesss.netlify.app/">Website</a></p>

                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <div className="col-md-12">
                        <p> A React website mirroring the Grammy nominations that allows the user 
              to search up movies from an API, add, delete, and save their favourite 
              movies to their nomination list with a backend JSON server. No more 
              than 5 nominations are allowed to be made by each user 
              and users can’t nominate a movie twice.</p>
                        <p><b>Skills: </b>ReactJS, Javascript, HTML, CSS, NodeJS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-3">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-6">
                        <div className="col-md-12">
                          <h6 className="title-left">happyCanvas</h6>
                          <br></br>
                          <p>MAR 2021</p>
                          <p><a href="https://github.com/janellewong/happyCanvas">Github</a> • <a href="https://devpost.com/software/happycanvas">Devpost</a></p>

                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <div className="col-md-12">
                        <p> Happy Canvas is a lightweight browser extension that helps you celebrate the submission 
                          of your assignments and quizzes on the Canvas Instructure LMS platform. After submitting any assignment 
                          or quiz on Canvas, you are rewarded with a pop of flying confetti.</p>
                        <p><b>Skills: </b>Javascript</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Projects;
