import React from "react";
import myImage from "../img/myImage.png";
import headshot from "../img/headshot.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      // skills: [
      //   { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
      //   { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
      //   {
      //     id: "JavaScript_skill",
      //     content: "JavaScript",
      //     porcentage: "90%",
      //     value: "90"
      //   },
      //   { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
      //   {
      //     id: "ReactJS_skill",
      //     content: "ReactJS",
      //     porcentage: "80%",
      //     value: "80"
      //   },
      //   {
      //     id: "Python_skill",
      //     content: "Python",
      //     porcentage: "75%",
      //     value: "75"
      //   },
      //   {
      //     id: "VanillaJS_skill",
      //     content: "VanillaJS",
      //     porcentage: "85%",
      //     value: "85"
      //   },
      //   {
      //     id: "Wordpress_skill",
      //     content: "Wordpress",
      //     porcentage: "80%",
      //     value: "80"
      //   }
      // ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello! My name is Janelle and I am currently a fourth year student studying Business and Computer Science at the University of British Columbia. I live in Vancouver, BC in Canada and I am really passionate about learning new technologies and skills."
        },
        {
          id: "second-p-about",
          content:
            "I also have interests in art and craft making, with particular passion in animation, 3D origami and acrylic painting. As a result, I have also begun to explore more projects in graphic design and UI/UX. Click on my art portfolio to see more on my artistic projects and hobbies!"
        },
        {
          id: "third-p-about",
          content:
            "My other hobbies include playing badminton, hiking, and baking desserts."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row" style={{ overflow: "hidden"}}>
                      <img src={headshot} style={{ width: "100%", border: "25px solid #fff"}}/>
                    </div>

                    {/* <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div> */}
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
