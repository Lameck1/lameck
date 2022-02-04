import React from 'react';
import styled from 'styled-components';
import texture from '../../assets/images/texture.png';
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
        <p>
          <span>Hi, I'm</span>
          <br />
          Lameck Otieno
        </p>

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
  background-image: url(${texture});
  background-size: cover;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  padding: 5rem 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    div {
      height: 1rem;
      width: 100%;

      span {
        font-size: 1.2rem;
        color: var(--secondary-color);
        font-weight: bold;
        text-align: center;
      }
    }

    p {
      padding: 0.5rem;

      :nth-of-type(1) {
        font-weight: 900;
        font-size: 1.6rem;

        span {
          font-size: 1.3rem;
        }
      }

      :nth-of-type(2) {
        font-size: 1.1rem;
        text-align: center;
      }
    }

    a {
      border: 0.1rem solid var(--secondary-color);
      border-radius: 0.5rem;
      padding: 0.5rem;
      text-decoration: none;
      color: var(--primary-color);
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      margin-top: 1rem;
      background-color: #bbdefb;
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
    }
  }

  @media screen and (min-width: 768px) {
    div {
      width: 60%;
    }
  }

  @media screen and (min-width: 992px) {
    div {
      width: 50%;
      align-items: flex-start;

      p {
        padding: 1rem 0;
        margin: 0.5rem 0;

        :nth-of-type(1) {
          span {
            font-size: 1.6rem;
          }

          font-weight: 900;
          font-size: 3.5rem;
          letter-spacing: 0.2rem;
        }

        :nth-of-type(2) {
          font-size: 1.4rem;
          text-align: left;
        }
      }

      a {
        transition: all 0.9s ease;

        :hover {
          background-color: var(--secondary-color);
          box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;

export default Home;
