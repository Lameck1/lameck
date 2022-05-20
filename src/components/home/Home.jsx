import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { homeAnimation } from '../../animation';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Section id="home">
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <p>Hi, I'm</p>
        <h1>Lameck Otieno</h1>

        <div>
          <Typewriter
            options={{
              strings: ['A FULL-STACK WEB DEVELOPER.', 'A PASSIONATE LEANER.'],
              autoStart: true,
              loop: true,
              cursor: '',
            }}
          />
        </div>
        <p>
          A software developer based in Kenya, specializing in Ruby on Rails,
          React, JavaScript, CSS and HTML. I am seeking to apply my technical
          skills to a collaborative development team. I love translating
          business problems into beautiful web applications.
        </p>

        <a href="#projects">Check out my projects</a>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  font-family: var(--font-mono);
  padding: 5rem 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    div {
      display: flex;
      justify-content: center;
      height: 1rem;
      width: 100%;
      padding: 0.3rem;
      margin: 1.5rem 0;

      span {
        font-size: clamp(15px, 4vw, 30px);
        font-weight: 700;
        color: var(--slate);
        line-height: 0.9;
      }
    }

    h1 {
      font-size: clamp(35px, 8vw, 80px);
      padding: 0;
      color: var(--lightest-slate);
      line-height: 1.1;
    }

    p {
      padding: 0.3rem;

      :nth-of-type(1) {
        font-size: clamp(14px, 5vw, 25px);
        color: var(--green);
      }

      :nth-of-type(2) {
        font-size: clamp(10px, 8vw, 20px);
        color: var(--slate);
        line-height: 1.6;
        font-family: var(--font-sans);
      }
    }

    a {
      color: var(--green);
      text-decoration: none;
      border: 0.5px solid var(--green);
      padding: 0.8rem 1.5rem;
      border-radius: 0.2rem;
      font-size: 1rem;
      text-transform: uppercase;
      margin-top: 1rem;
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

      :hover {
        background: var(--green-tint);
      }
    }
  }

  @media screen and (min-width: 768px) {
    div {
      width: 60%;
    }
  }

  @media screen and (min-width: 992px) {
    div {
      width: 59%;
      align-items: flex-start;
    }
  }
`;

export default Home;
