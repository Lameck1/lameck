import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

const variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.4,
      delay: 0,
    },
  },
};

const Projects = ({ projects }) => {
  return (
    <Section id="projects">
      <h2>My Projects</h2>
      <motion.ul>
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className="project"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className="project-container" variants={variants}>
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
                  {project.liveLink && (
                    <a
                      href={`${project.liveLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLinkExternal /> <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
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

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      margin-bottom: 4rem;

      .project-container {
        border-radius: 0.5rem;
        border: 1px solid var(--primary-color);
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.5rem;

        img {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #ddd;
          transition: all 0.5s ease;
          object-fit: cover;
          object-position: 100% 0%;
        }

        .project-info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          h3 {
            color: #fff;
            padding: 1rem 0;
            font-size: 1.5rem;
          }

          div {
            padding: 1rem 0;
          }

          .technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            span {
              padding: 0.25rem 0.5rem;
              font-size: 0.8rem;
              font-weight: 900;
              line-height: 1.5;
              letter-spacing: 0.1rem;
              border: 1px solid var(--primary-color);
              border-radius: 0.5rem;
              color: var(--primary-color);
              background-color: var(--navy);
            }
          }

          .links {
            display: flex;
            gap: 1rem;

            a {
              display: flex;
              align-items: center;
              padding: 0.3rem;
              color: var(--lightest-slate);
              text-decoration: none;
              transition: all 0.5s ease;

              :hover {
                color: var(--primary-color);
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
            box-shadow: 0 10px 30px -15px var(--navy-shadow);
            color: var(--lightest-slate);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      width: 90%;

      li {
        position: relative;
        margin-bottom: 4rem;

        .project-container {
          border-radius: 0;
          border: none;
          box-shadow: none;

          img {
            object-fit: fill;
          }

          .project-info {
            position: absolute;
            width: 70%;
            z-index: 8;

            p {
              background-color: var(--light-navy);
              padding: 1rem;
            }
          }
        }
      }

      li:nth-child(odd) {
        .project-container {
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
      }

      li:nth-child(even) {
        .project-container {
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
  }

  @media screen and (min-width: 992px) {
    ul {
      width: 65%;

      li {
        .project-container {
          img {
            filter: hue-rotate(90deg) brightness(40%) grayscale(10%);

            :hover {
              filter: none;
            }
          }

          height: 50vh;

          .project-info {
            width: 50%;
          }
        }
      }

      li:nth-child(odd) {
        .project-container {
          padding-right: 40%;
        }
      }

      li:nth-child(even) {
        .project-container {
          padding-left: 40%;
        }
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
