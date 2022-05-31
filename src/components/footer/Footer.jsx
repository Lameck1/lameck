import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { footerLogoAnimation } from '../../animation';
import links from '../../assets/data/links';

const PageFooter = () => {
  return (
    <Footer id="footer">
      <motion.div
        className="footer"
        variants={footerLogoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <ul>
          {links.map((link) => (
            <motion.li
              key={link.id}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                type: 'tween',
                bounce: 0.4,
                duration: 0.8,
              }}
            >
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </motion.li>
          ))}
        </ul>
        {/* include copyright text below */}
        <p>&copy; {new Date().getFullYear()} Lameck Otieno</p>
      </motion.div>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2rem;

  div {
    font-family: var(--font-mono);

    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      margin-bottom: 0.5rem;

      li {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          transition: all 0.3s ease;
          color: #e8e8e8;
          text-decoration: none;
          font-size: 1.5rem;

          :hover {
            transform: scale(1.15);
            color: var(--primary-color);
          }
        }
      }
    }

    p {
      font-size: 1.3rem;
      color: var(--lightest-slate);
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
`;

export default PageFooter;
