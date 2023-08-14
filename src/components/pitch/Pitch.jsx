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
          <a href="https://docs.google.com/document/d/1m2umnfaqP5evVHUdjAjNSMt72ueTctgRTBvQF85o4_Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            View My Elevator Pitch
          </a>
        </div>
        <a href="#home">Back to Home</a>
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
    align-items: flex-start;
    width: 100%;

    h2 {
      font-size: clamp(25px, 5vw, 50px);
      color: var(--lightest-slate);
      margin-bottom: 1rem;
    }

    .document-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 150px;
      background-color: var(--slate);
      border: 1px dashed var(--primary-color);
      margin-bottom: 1.5rem;

      a {
        font-size: clamp(15px, 3vw, 25px);
        color: var(--primary-color);
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }
      }
    }

    a {
      font-size: 1rem;
      text-decoration: none;
      color: var(--primary-color);
      padding: 0.5rem 1rem;
      border: 1px solid var(--primary-color);
      border-radius: 0.3rem;
      transition: all 0.3s ease;

      :hover {
        background-color: var(--primary-color);
        color: var(--navy);
      }
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
