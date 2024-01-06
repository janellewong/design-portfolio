import React from "react";

import LokiFrame83 from "../img/LokiFrame83.png";
import LokiFrame84 from "../img/LokiFrame84.png";
import LokiFrame85 from "../img/LokiFrame85.png";
import LokiFrame86 from "../img/LokiFrame86.png";
import LokiFrame87 from "../img/LokiFrame87.png";
import LokiFrame88 from "../img/LokiFrame88.png";
import LokiFrame89 from "../img/LokiFrame89.png";
import LokiFrame90 from "../img/LokiFrame90.png";

import PetInTimeFrame1 from "../img/PetInTimeFrame1.png";
import PetInTimeFrame2 from "../img/PetInTimeFrame2.png";
import PetInTimeFrame3 from "../img/PetInTimeFrame3.png";

import BizTechFrame1 from "../img/BizTechFrame1.png";
import BizTechFrame2 from "../img/BizTechFrame2.png";
import BizTechFrame3 from "../img/BizTechFrame3.png";
import BizTechFrame4 from "../img/BizTechFrame4.png";
import BizTechFrame5 from "../img/BizTechFrame5.png";






class Design extends React.Component {
  render() {
    return (
      <section id="design" className="about-mf sect-pt4 route">
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Design Portfolio</h3>
              <p className="subtitle-a">
                graphic & ui/ux design
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div>
          <h2>Loki Mobile App</h2>
          <br></br>
        </div>


        <div className="work-img">
          <img src={LokiFrame83} alt="" className="img-fluid" />
          <img src={LokiFrame84} alt="" className="img-fluid" />
          <img src={LokiFrame85} alt="" className="img-fluid" />
          <img src={LokiFrame86} alt="" className="img-fluid" />
          <img src={LokiFrame87} alt="" className="img-fluid" />
          <img src={LokiFrame88} alt="" className="img-fluid" />
          <img src={LokiFrame89} alt="" className="img-fluid" />
          <img src={LokiFrame90} alt="" className="img-fluid" />
        </div>

        <br></br><br></br><br></br>

        <div>
          <h2>Pet In Time Mobile App</h2>
          <br></br>
        </div>


        <div className="work-img">
          <img src={PetInTimeFrame1} alt="" className="img-fluid" />
          <img src={PetInTimeFrame2} alt="" className="img-fluid" />
          <img src={PetInTimeFrame3} alt="" className="img-fluid" />
        </div>

        <br></br><br></br><br></br>

        <div>
          <h2>BizTech Graphic Design</h2>
          <br></br>
        </div>


        <div className="work-img">
          <img src={BizTechFrame1} alt="" className="img-fluid" />
          <img src={BizTechFrame2} alt="" className="img-fluid" />
          <img src={BizTechFrame3} alt="" className="img-fluid" />
          <img src={BizTechFrame4} alt="" className="img-fluid" />
          <img src={BizTechFrame5} alt="" className="img-fluid" />

        </div>
        
        <br></br><br></br><br></br>

        </div>
      </section>
    );
  }
}

export default Design;
