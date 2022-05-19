import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { contactAnimation } from '../../animation';

const Contact = () => {
  return (
    <Section id="contact">
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
  background-color: #eee;
  min-height: 100vh;
  padding: 5rem 0.5rem;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
`;

export default Contact;
