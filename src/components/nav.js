import React from "react"

import styled from 'styled-components'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
  class NavTwo extends React.Component {
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
        <div style={{color:`white`}} style={{zIndex:`3`}}>
          <Navbar className="text-white" color="dark" light expand="md">
            <NavbarBrand href="/" style={{color:`white`}}>Summit Web</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink style={{color:`white`}} href="/projects/">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/services/">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/process/">Process</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/about/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color:`white`}} href="/contact/">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

const StyledNav = styled(NavTwo)`
  color: white;
`

export default StyledNav