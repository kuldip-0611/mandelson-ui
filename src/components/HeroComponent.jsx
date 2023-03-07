import React from "react";
import heroImg from "../assets/images/Hero-Group.png";
import heroImg2 from "../assets/images/heroSection-img2.svg";
import heroImg3 from "../assets/images/heroSection-img3.svg";

const HeroCompoenent = () => {
  return (
    <>
      <div className="hero-section" id="hero">
        <div className="hero-section-1">
          <img
            src={heroImg}
            className="hero-section-1-img1"
            alt="hero section image 1"
          />
          <img
            src={heroImg2}
            className="hero-section-1-img2"
            alt="hero section image2"
          />
          <div className="hero-section-1-text">
            <p className="hero-section-1-text-lrg">
              Mendleson Communication and Engagement
            </p>
            <p className="hero-section-1-text-sml">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              sed ipsum, ut quam volutpat, tortor.
            </p>
          </div>
        </div>
        <div className="hero-section-2">
          <img src={heroImg3} className="hero-section-2-img" />
        </div>
      </div>
    </>
  );
};

export default HeroCompoenent;
