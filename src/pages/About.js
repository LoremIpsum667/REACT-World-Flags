import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
// page about
const About = () => {
  return (
    <div>
        <Logo/>
        <Navigation/>
      <h1 className="aboutText">About</h1>
      <br />
      <p className="aboutText">
       Prototype du premier projet realise en ReactJS.
      </p>
    </div>
  );
};

export default About;
