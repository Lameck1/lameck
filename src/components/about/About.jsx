import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Accordion from './Accordion';
import skills from '../../assets/data/skills';

const About = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <Section id="about">
      <h2>About Me</h2>
      <div className="text">
        <p>
          Hi, I'm Lameck Otieno and I love building solutions for the web. My
          passion for web development got built from curiosity on how the web
          works and how it can be used to solve problems.
        </p>
        <p>
          I love learning, and software development fulfills that need. It's
          always everchanging, and I'm always looking to learn more. Nothing
          would make me happy than being a member of an engineering team focused
          on developing web technology solutions for businesses and the greater
          good, and feed my enthusiasm for converting business ideas into
          attractive web applications.
        </p>
        <p>
          While learning software development, I have honed the relevant
          technical skills and have been able to apply them in a variety of
          projects. The accordion below summarizes some of the skills I have
          acquired.
        </p>
      </div>

      <div className="accordion">
        {skills.map((skill) => (
          <Accordion
            key={skill.id}
            i={skill.id}
            expanded={expanded}
            setExpanded={setExpanded}
            header={skill.name}
            items={skill.items}
          />
        ))}
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: inherit;
  min-height: 100vh;
  padding: 5rem 1rem;
  font-family: var(--font-sans);

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--lightest-slate);
    margin-bottom: 0.5rem;
    text-align: justify;
    text-justify: inter-word;
  }

  .text {
    margin-bottom: 1rem;
  }

  .accordion {
    width: 95vw;
  }

  @media screen and (min-width: 768px) {
    .text {
      width: 60vw;
    }
    .accordion {
      width: 50vw;
    }
  }

  @media screen and (min-width: 992px) {
    .text {
      width: 50vw;
    }
    .accordion {
      width: 40vw;
    }
  }

  @media screen and (min-width: 1024px) {
    .text {
      width: 45vw;
    }
    .accordion {
      width: 35vw;
    }
  }
`;

export default About;
