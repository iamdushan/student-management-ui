import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import BarItem from "./core/barItem";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Student Management System</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <BarItem
                url="http://localhost:3000/teachers"
                linkName="Teacher Form"
              />
              <BarItem
                url="http://localhost:3000/allocate-to-subject"
                linkName="Allocate Subject"
              />
              <BarItem
                url="http://localhost:3000/allocate-to-class"
                linkName="Allocate Class Room"
              />
              <BarItem
                url="http://localhost:3000/student-report"
                linkName="Student Report"
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
