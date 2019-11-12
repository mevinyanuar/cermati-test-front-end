import React from "react";
import Background from "../assets/work-desk__dustin-lee.jpg";
import "../css/Header.css";
import Button from "./Button";

let sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <section style={sectionStyle}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="desc">
                  <h2>Helo I'm Mevin Yanuar</h2>
                  <h3>Consult, Design, Develop Websites</h3>
                  <h5>Have something Grid in mind feel free to contact me.</h5>
                  <h5>I'll help you to make it happen</h5>
                </div>
                <Button />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
