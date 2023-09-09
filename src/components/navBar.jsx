import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import BarItem from "./core/barItem";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/" className="mr-6">
              Student Management System
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <BarItem
                    url="http://localhost:3000/teacher-form"
                    linkName="Teacher Form"
                  />
                  <BarItem
                    url="http://localhost:3000/teacher-allocate-to-subject"
                    linkName="Allocate Subject"
                  />
                  <BarItem
                    url="http://localhost:3000/teacher-allocate-to-class"
                    linkName="Allocate Class Room"
                  />
                  <BarItem
                    url="http://localhost:3000/student-report"
                    linkName="Student Report"
                  />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
