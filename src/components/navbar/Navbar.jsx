import React, { useState } from 'react';
import Hamburger from './Humburger';
import logo from '../../assets/images/logo_name.png';
import styled from 'styled-components';
import { navAnimation } from '../../animation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    setNavActive(!navActive);
  };

  const resume =
    'https://docs.google.com/document/d/12vFBf-oG_LPhrabnS54gKCWVPXr_ko7jEWyLiOMVZA8/edit?usp=sharing';

  return (
    <Nav
      variants={navAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
    >
      <div className="logo-div">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <ul className={`links ${navActive && 'is-active'}`}>
        <li>
          <a href="#home" onClick={toggleHamburger}>
            HOME
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleHamburger}>
            MY PROJECTS
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleHamburger}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleHamburger}>
            CONTACT
          </a>
        </li>
        <li className="resume">
          <a
            href={`${resume}`}
            target="_blank"
            rel="noreferrer"
            onClick={toggleHamburger}
          >
            RESUME
          </a>
        </li>
      </ul>
      <ul className={'desktop-links'}>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#projects">MY PROJECTS</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li className="resume">
          <a href={`${resume}`} target="_blank" rel="noreferrer">
            RESUME
          </a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: fixed;
  padding: 0.3rem;
  top: -2px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--primary-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  .logo-div {
    width: 12rem;

    img {
      width: 100%;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    width: 55%;
    height: 100vh;
    right: 0;
    position: fixed;
    top: 0;
    margin-top: 4rem;
    padding: 2.5rem;
    will-change: transform;
    z-index: 999;
    background: var(--secondary-color);
    transition: all 0.7s ease;
  }

  .desktop-links {
    display: none;
  }

  .links,
  .desktop-links {
    align-items: start;
    list-style: none;
    gap: 3rem;

    li {
      a {
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
      }
    }

    .resume {
      border: 1px solid #fff;
      padding: 0.5rem;
      border-radius: 0.5rem;

      :hover {
        border: 1px solid var(--secondary-color);
      }

      a {
        color: var(--secondary-color);
        text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

        :hover {
          border-bottom: none;
          color: #fff;
        }
      }
    }
  }

  .links.is-active {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  @media screen and (min-width: 992px) {
    padding: 0.3rem 8rem;

    .links {
      display: none;
    }

    .desktop-links {
      display: flex;
      align-items: center;

      li {
        a {
          :hover {
            border-bottom: 0.2rem solid var(--secondary-color);
          }
        }
      }
    }
  }
`;

export default Navbar;
