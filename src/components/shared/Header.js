import React, { useState } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navbarData } from '../../data';
import logo from '../../assets/images/logo.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className='main-header'>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/" className="main-header__brand">
            <img src={logo} alt="logo" className="scale-icon" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav className="ml-auto main-header__navbar-nav" navbar>
              {navbarData.mainNavbar.map(nav => (
                <NavItem key={nav.id} className="main-header__nav-item">
                  <AnchorLink className="main-header__nav-link" offset="100" href={nav.anchorLink}>
                    {nav.title}
                  </AnchorLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;