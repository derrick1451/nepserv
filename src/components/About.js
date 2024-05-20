import React from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { ImBinoculars } from "react-icons/im";
import { SiSecurityscorecard } from "react-icons/si";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-us-info">
         <div className="p-info">
            <h2>About Us</h2>
            <div class="line"></div>
            </div>
          <p>
            Nepserv Consults Limited is an SPV (Special Purpose Vehicle) entity
            in Uganda, serving the Ugandan financial market but tailored to serve
            the global market as well. This Entity was formed through a joint
            partnership between Service Cops Limited and Neptune Software Group.
            The formulation of this entity was driven towards the achievement of
            a key component in the Five-year strategic plan of the two
            companies, i.e. To stay ahead by creating more,efficient and better
            self-sustaining innovative products, business models and solutions
            that are capable of solving real world problems, improvement of
            service delivery and promotion of value.
          </p>
          <div>
            <button>Contact Us</button>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <BsRocketTakeoff className="icon"/>
            <h3>Our Mission</h3>
            <p>Developing value oriented business solutions</p>
          </div>

          <div className="card">
            <ImBinoculars  className="icon"/>
            <h3>Vision</h3>
            <p>Creating technology for everyday use.</p>
          </div>

          <div className="card">
            <SiSecurityscorecard className="icon"/>
            <h3>Core Values</h3>
            <p>Creating technology for everyday use.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
