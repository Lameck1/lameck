import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useScroll } from '../scroll/UseScroll';
import { projectsAnimation } from '../../animation';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

const Projects = ({ projects }) => {
  const [ref, controls] = useScroll();
  return (
    <Section id="projects" ref={ref}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className="project"
            animate={controls}
            variants={projectsAnimation}
            transition={{
              type: 'tween',
              bounce: 0.4,
              duration: 0.8,
            }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="links">
                <a
                  href={`${project.githubLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                  <span>Github Link</span>
                </a>
                <a
                  href={`${project.liveLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiLinkExternal /> <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};

const Section = styled.section`
  background-color: inherit;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0.5rem;

  h2 {
    font-size: 2rem;
    color: var(--secondary-color);
    text-shadow: 0 0.1rem 0.2rem #fff;
    padding-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary-color);
      margin-bottom: 1rem;
      box-shadow: 0.1rem 0.1rem 0.2rem #000;

      img {
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid #ddd;
        transition: all 0.5s ease;

        :hover {
          filter: none;
          transform: scale(1.1);
        }
      }

      .project-info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
          color: #fff;
          padding: 1rem 0;
          font-size: 1.5rem;
          text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
        }

        div {
          padding: 1rem 0;
        }

        .technologies {
          display: flex;
          gap: 0.5rem;

          span {
            background-color: #eceff1;
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            font-weight: 600;
            border-radius: 0.5rem;
            color: var(--primary-color);
            box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
          }
        }

        .links {
          display: flex;
          gap: 1rem;

          a {
            display: flex;
            align-items: center;
            padding: 0.3rem;
            color: var(--primary-color);
            text-decoration: none;
            transition: all 0.5s ease;
            border-radius: 0.5rem;
            box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

            :hover {
              color: var(--secondary-color);
              box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
            }

            svg {
              font-size: 1.5rem;
            }

            span {
              margin-left: 0.2rem;
            }
          }
        }

        p {
          border-radius: 0.5rem;
          text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      width: 95%;

      li {
        position: relative;
        height: 40vh;
        border-radius: 0;
        border: none;
        box-shadow: none;

        img {
          height: 100%;
          filter: grayscale(90%);
        }

        .project-info {
          position: absolute;
          width: 70%;
          z-index: 8;

          p {
            background-color: var(--primary-color);
            color: #eceff1;
            padding: 1rem;
            box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
          }
        }
      }

      li:nth-child(odd) {
        flex-direction: row;
        padding: 1% 35% 1% 0;

        .project-info {
          align-items: flex-end;
          top: 0;
          right: 0;
          bottom: 0;

          p {
            text-align: right;
          }
        }
      }

      li:nth-child(even) {
        flex-direction: row-reverse;
        padding: 1% 0 1% 35%;

        .project-info {
          top: 0;
          left: 0;
          bottom: 0;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    ul {
      width: 70%;

      li {
        height: 50vh;

        .project-info {
          width: 50%;
        }
      }

      li:nth-child(odd) {
        padding-right: 40%;
      }

      li:nth-child(even) {
        padding-left: 40%;
      }
    }
  }
`;

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      githubLink: PropTypes.string,
      liveLink: PropTypes.string,
    }),
  ),
};

Projects.defaultProps = {
  projects: [
    {
      id: 1,
      title: 'Default project',
      image: 'https://source.unsplash.com/random/800x600',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Lameck1/jivinjari',
      liveLink: 'https://lameck1.github.io/jivinjari/index.html',
    },
    {
      id: 2,
      title: 'Second Default project',
      image: 'https://source.unsplash.com/random/800x600',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Lameck1/jivinjari',
      liveLink: 'https://lameck1.github.io/jivinjari/index.html',
    },
  ],
};

export default Projects;
