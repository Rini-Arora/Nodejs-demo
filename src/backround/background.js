import React, { useState } from 'react';
import "../page/page.css";
import Sdata from "../backround/data";
import rfta from "../backround/Radiance_img/Radiance_img/rfta.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Component for Menu
export const Menu = ({ children , isOpen }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
};

export const Right = ({ children }) => {
  return <div className="Right">{children}</div>;
};

export const BottomMenu = ({ children, backgroundImage }) => {
  return (
    <div className="Bottom-menu" style={{ border: "0.1rem solid black", padding: "1rem", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "60rem" }}>
      {children}
    </div>
  );
};

const Background = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = Sdata; // Using images from Sdata array

  const handleNext = () => {
    if (backgroundIndex < 4) {
      setBackgroundIndex(backgroundIndex + 1);
    }
  };

  const handlePrev = () => {
    if (backgroundIndex > 0) {
      setBackgroundIndex(backgroundIndex - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setBackgroundIndex(index);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Rendering Menu component */}     
        <div style={{ marginTop: "3rem", marginLeft: "1rem", border: "none" }}>
      <center>
        <div className="menu-bar">
          <GiHamburgerMenu
            onClick={toggleMenu}
            style={{ fontSize: "2rem", marginTop: "1rem" }}
          />
        </div>
      </center>

      <br />
      <Menu className="menu" isOpen={isMenuOpen}>
        <div
          style={{ width: isMenuOpen ? "12rem" : "0rem" }}
          className="sliderbar"
        >
          <div className="bars"></div>
          <div className="top_section">
            <br />
            <div style={{ marginLeft: isMenuOpen ? "0rem" : "0px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                }}
              >
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <hr style={{ background: "black", width: "100%" }} />
                {/* Conditional rendering for the background link */}
                <Link
                  to="/page"
                  className={`btn ${isMenuOpen ? "visible" : "hidden"}`}
                >
                  Page
                </Link>
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <hr style={{ background: "black", width: "100%" }} />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <hr style={{ background: "black", width: "100%" }} />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
                <input
                  type="text"
                  value="Button 1"
                  className="btn"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>

        {/* Rendering Right component */}
        <Right>
          <div  className="Right-bar" style={{ padding: "1rem", textAlign: "right" }}>
            <div className="Circle">
              <input
                type="button"
                className="btn"
                id="Btn"
                style={{
                  borderRadius: "5rem", // Converted from 50%
                  padding: "3rem", // Converted from 30px
                  height: "2rem", // Converted from 20px
                  width: "2rem", // Converted from 20px
                }}
              />
            </div>
          </div>{" "}
          <br />
          {/* Slider component */}
          <div className="Right-bar">
          <div className="slider">
            <center>
              <img src={rfta} id="prev" onClick={handlePrev} alt="Previous" />
              <div className="preview">
                {backgroundImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className={`thumbnail ${index === backgroundIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
              <img src={rfta} id="next" onClick={handleNext} alt="Next" />
            </center>
          </div>
          <br />
          {/* Rendering BottomMenu component */}
          <BottomMenu backgroundImage={Sdata[backgroundIndex]} />
          </div>
        </Right>
        </div>
    </>
  );
};

export default Background;
