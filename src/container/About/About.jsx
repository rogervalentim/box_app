import React from "react";
import "./About.css";
import AboutUs from "../../assets/about-us.jpg";

const About = () => {
  return (
    <>
      <section className="about">
        <h1>About Us</h1>
        <div className="about-container">
          <img src={AboutUs} alt="About us image" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            vitae pariatur officia esse harum. Modi accusamus sunt autem unde
            dignissimos aliquam officiis rerum! Aspernatur architecto facilis
            alias, dolorem sit ab!<br>
            </br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            vitae pariatur officia esse harum. Modi accusamus sunt autem unde
            dignissimos aliquam officiis rerum! Aspernatur architecto facilis
            alias, dolorem sit ab!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
