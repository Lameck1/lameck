import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { aboutAnimation } from '../../animation';

const About = () => {
  return (
    <Section id="about">
      <motion.div
        className="about"
        variants={aboutAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <p>This is my about section.</p>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  background-color: inherit;
  min-height: 100vh;
  padding: 5rem 1rem;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
`;

export default About;
