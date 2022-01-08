import styled from "styled-components";
import { FaBars, FaFileExport } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

// Navbar
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    background-color: #5DADE2;
  }
`;
// Navbar END

// Cards
export const Wrapper = styled.div`
    &:hover {
        background-color: #5DADE2;
    }
`;

export const Cards = styled.div`

    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
` ;
  
export const Card = styled.div`
    text-align: center;
`;

// Portfolio Form 

export const PortfolioFormDiv = styled.div `
    padding: remy(32px);
    margin-top: 2rem;
    margin-right: 15rem;
    margin-left: 15rem;
    max-width: remy(380px);
    background-color: rgb(239, 239, 239);
    border-radius: $radius;
    box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
`;

export const CryptoInfoDiv = styled.div `
    padding: 20px;
    margin-right: 15rem;
    margin-left: 15rem;
    height: '120vh'
    text-align: left;
`;

export const Image = styled.div `
`;

export const Hover = styled.a `
    &:hover {
        background-color: #5DADE2;
    }
`;