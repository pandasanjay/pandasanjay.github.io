import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="dark" dark expand="md" className="sticky-top pb-xl-0 pt-xl-0">
        <NavbarBrand href="/" className="border border-secondary rounded-circle pl-2 pr-2 border-0">SP</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-light" href="/works/">MY WORK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="https://resume.io/r/fLlndyLmA">RESUME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/blogs">BLOG</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="mailto:contact@sanjaypanda.com">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}