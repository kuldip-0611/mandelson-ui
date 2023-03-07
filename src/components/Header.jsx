import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from "../assets/images/logo-1 1.svg";
import assets1 from "../assets/images/Asset 1.svg";
import assets2 from "../assets/images/Asset 2.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("toggle is open");
  };
  return (
    <>
      <div className="header">
        <img src={assets1} className="header-left-img" />

        <Navbar expand="xl" className="navbar-main">
          <NavbarBrand href="/">
            <img src={logo} className="navbar-logo-img" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink className="nav-item-individual" href="#aboutUs">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-individual" href="#service">
                  Service
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-individual" href="#team">
                  Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-individual" href="#client">
                  Client
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item-individual" href="#aboutUs">
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <img src={assets2} className="header-right-img" />
      </div>
    </>
  );
};

export default Header;
