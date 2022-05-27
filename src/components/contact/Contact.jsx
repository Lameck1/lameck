import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { contactAnimation } from '../../animation';

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Get in touch</h2>
      <motion.div
        className="contact"
        variants={contactAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <p>This is my contact section.</p>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  min-height: 100vh;
  padding: 5rem 1rem;
  font-family: var(--font-sans);

  h2 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--lightest-slate);
    letter-spacing: 0.4rem;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
`;

export default Contact;
