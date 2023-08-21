import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Pitch = () => {
  return (
    <PitchSection id="pitch">
      <motion.div
        className="pitch-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, type: 'tween' }}
      >
        <h2>Elevator Pitch</h2>
        <div className="document-placeholder">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/o0M9D9AuvIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </motion.div>
    </PitchSection>
  );
};

const PitchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: var(--font-mono);
  padding: 5rem 1rem;

  .pitch-content {
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      font-size: clamp(25px, 5vw, 50px);
      color: var(--lightest-slate);
      margin-bottom: 1rem;
      text-align: center;
    }

    .document-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    .pitch-content {
      width: 60%;
    }
  }

  @media screen and (min-width: 992px) {
    .pitch-content {
      width: 50%;
    }
  }
`;

export default Pitch;
