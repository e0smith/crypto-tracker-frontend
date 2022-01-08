import React from 'react';
import Logo from '../images/logo.jpeg'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Hover } from "./Container.style"

function Navbar(){
  return (
    <Nav>
      <NavLink to=''>
      <img width="80px" height="auto" className="img-responsive" src={Logo}  alt="logo"  />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/home' activeStyle>
          Home
        </NavLink>
        <NavLink to='/portfolio' activeStyle>
          Portfolio
        </NavLink>
        <NavLink to='/info' activeStyle>
          Info
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          {localStorage.user !== "0" ? "" : <Hover>Sign Up</Hover>}
        </NavLink>
      </NavMenu>
      {localStorage.user !== "0" ? 
        <NavBtn>
          <NavBtnLink to='/log-out'>Log Out</NavBtnLink>
        </NavBtn> : 
        <NavBtn>
          <NavBtnLink to='/sign-in'>
            <Hover>Log In</Hover>
          </NavBtnLink>
        </NavBtn>}
    </Nav>
  );
};

export default Navbar;