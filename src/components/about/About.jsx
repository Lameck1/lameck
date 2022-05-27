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

  h2 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--lightest-slate);
    letter-spacing: 0.4rem;
  }

  .accordion {
    width: 95vw;
  }

  @media screen and (min-width: 768px) {
    .accordion {
      width: 80vw;
    }
  }

  @media screen and (min-width: 992px) {
    .accordion {
      width: 40vw;
    }
  }
`;

export default About;
