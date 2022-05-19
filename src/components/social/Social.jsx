import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { socialAnimation } from '../../animation';

const Social = ({ links, desktop }) => {
  return (
    <Div id="social">
      <ul>
        {links.map((link) => (
          <motion.li
            key={link.id}
            variants={socialAnimation}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          </motion.li>
        ))}
      </ul>
    </Div>
  );
};

const Div = styled.div`
  // display none if desktop is true
  @media (min-width: ${(props) => props.desktop}) {
    display: none;
  }

  min-height: 100vh;
  ul {
    list-style: none;

    li {
      margin: 1.5rem 0;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 1px solid #e8e8e8;
        transition: all 0.5s ease;
        color: #e8e8e8;
        text-decoration: none;
        font-size: 1rem;
        background-color: #0a192f;
        box-shadow: 0.3rem 0.3rem 0.2rem #000;

        &:hover {
          transform: scale(1.15);
          background-color: #495670;
        }
      }
    }

    ::after {
      content: '';
      display: block;
      width: 1.5px;
      height: 150px;
      margin: 0 auto;
      background-color: #e8e8e8;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-end;
    position: fixed;
    top: 0;
    left: 3rem;
    padding: 0 10px;
  }
`;

Social.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    }),
  ).isRequired,
};

export default Social;
