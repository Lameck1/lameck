import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { footerLogoAnimation } from '../../animation';

const PageFooter = () => {
  return (
    <Footer id="footer">
      <motion.div
        className="footer"
        variants={footerLogoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <p>This is my footer section.</p>
      </motion.div>
    </Footer>
  );
};

const Footer = styled.footer`
  background-color: #f5f5f5;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
`;

export default PageFooter;
