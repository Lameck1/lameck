import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Accordion from './Accordion';
import skills from '../../assets/data/skills';

const About = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <Section id="about">
      <h2>Bio</h2>
      <div className="text">
        <p>
          Lameck Otieno is a Full-Stack Software Web Developer and
          aspiring Data Scientist who is currently enrolled in an
          intensive program at ALX. In addition to his studies,
          Lameck also serves as an Applications Support Engineer
          for the Abc Advisory Company, where he helps people with
          their tech-related issues.
        </p>
        <p>
        His passion lies in making data more accessible and user-friendly,
        which is why he's developing a cutting-edge application that allows
        users to converse with their data. Lameck is a proud alumnus of Microverse,
        where he honed his skills in full-stack web development.
        </p>
        <p>
        Now, he's eager to apply his expertise to data science.
        With his unique blend of web development experience and
        a fervor for data, Lameck aims to bridge the gap between
        complex data analysis and user-friendly solutions.
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
