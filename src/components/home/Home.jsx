import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { homeAnimation, projectsAnimation } from '../../animation';
import Typewriter from 'typewriter-effect';
import links from '../../assets/data/links';

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

        <div className="typewriter">
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

        <a id="check-projects" href="#projects">
          Check out my projects
        </a>

        <div className="social-mobile">
          <h3>Let's connect</h3>
          <ul>
            {links.map((link) => (
              <motion.li
                key={link.id}
                variants={projectsAnimation}
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
        </div>
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
  padding: 5rem 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .typewriter {
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

    #check-projects {
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

  .social-mobile {
    margin-top: 1.5rem;

    h3 {
      font-size: 1.3rem;
      color: var(--lightest-slate);
    }

    ul {
      list-style: none;
      display: flex;
      gap: 1rem;

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
        }
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

    .social-mobile {
      display: none;
    }
  }
`;

export default Home;
