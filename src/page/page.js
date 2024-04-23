import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../page/page.css";
import { GiHamburgerMenu } from "react-icons/gi";

// Component for Menu
export const Menu = ({ children, isOpen }) => {
  return <div className={`menu ${isOpen ? "open" : ""}`}>{children}</div>;
};

// Component for Right
export const Right = ({ children }) => {
  return <div className="Right">{children}</div>;
};

// Component for BottomMenu
export const BottomMenu = ({ children }) => {
  return <div className="Bottom-menu">{children}</div>;
};

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const [cards] = useState([
    {
      title: "Card-1",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-2",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-3",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-4",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-5",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-6",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-7",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-8",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
    {
      title: "Card-9",
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quo.`,
    },
  ]);

  return (
    <>
      <div className="container" style={{ display: "flex"}}>
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
                  to="/background"
                  className={`btn ${isMenuOpen ? "visible" : "hidden"}`}
                >
                  Background
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
          <div
            className="Right-bar"
            style={{ padding: "1rem", textAlign: "right" }}
          >
            <div className="Circle">
              <input
                type="button"
                className="btn"
                id="Btn"
                style={{
                  borderRadius: "5rem" /* Converted from 50% */,
                  padding: "3rem" /* Converted from 30px */,
                  height: "2rem" /* Converted from 20px */,
                  width: "2rem" /* Converted from 20px */,
                }}
              />
            </div>
          </div>{" "}
          <br />
          {/* Rendering BottomMenu component */}
          <BottomMenu>
            <div className="Right-bar">
              <section>
                <div className="cards">
                  {cards.map((card, i) => (
                    <div key={i} className="card">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <button className="secure">Security</button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </BottomMenu>
        </Right>
      </div>
    </>
  );
};

export default Page;
