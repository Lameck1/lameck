import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';

const variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
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
              {project.videoLink && (
                <iframe
                  width="60%"
                  height="400"
                  src={project.videoLink}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              )}
              {project.image && (
                <img src={project.image} alt={project.title} />
              )}
              <div className="project-info">
                <h3>{project.title}</h3>
                { project.slideDeckLink && (
                  <a
                    href={`${project.slideDeckLink}`}
                    target="_blank"
                  >
                    <p>{project.description}</p>
                  </a>
                )}
                { !project.slideDeckLink && (
                  <p>{project.description}</p>
                )}
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

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      margin-bottom: 4rem;

      .project-container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.5rem;

        img {
          width: 100%;
          height: 100%;
          transition: all 0.5s ease;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          object-fit: cover;
        }

        .project-info {
          display: flex;
          flex-direction: column;
          z-index: 8;

          ::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background-color: hsla(217, 64%, 11%, 0.8);
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          }

          h3 {
            color: #fff;
            padding: 1rem 0;
            font-size: clamp(1rem, 2.5vw, 2rem);
          }

          .technologies {
            padding: 0.5rem 0;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            span {
              padding: 0.25rem 0.5rem;
              font-size: clamp(0.4rem, 2vw, 0.8rem);
              font-weight: 900;
              line-height: 1.5;
              border: 1px solid var(--primary-color);
              border-radius: 0.5rem;
              color: var(--primary-color);
              background-color: var(--navy);
            }
          }

          .links {
            display: flex;
            gap: 1rem;
            padding: 0;

            a {
              display: flex;
              align-items: center;
              padding: 0.3rem;
              color: var(--lightest-slate);
              text-decoration: none;
              transition: all 0.5s ease;
              margin: 0;

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
            color: var(--lightest-slate);
            font-size: clamp(1rem, 2.5vw, 1.3rem);
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
        margin: 3rem 0;

        .project-container {
          border: none;
          box-shadow: none;

          img {
            position: relative;
            height: 350px;
            width: 90%;
            filter: hue-rotate(90deg) brightness(60%) grayscale(10%);

            :hover {
              filter: none;
            }
          }

          .project-info {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 60%;

            ::before {
              display: none;
            }

            p {
              background-color: var(--light-navy);
              padding: 0.5rem;
              font-size: clamp(0.5rem, 4vw, 1rem);
            }
          }
        }
      }

      li:nth-child(odd) {
        .project-container {
          flex-direction: row;

          img {
            left: 0;
          }

          .project-info {
            align-items: flex-end;
            right: 0;

            p {
              text-align: right;
            }
          }
        }
      }

      li:nth-child(even) {
        .project-container {
          flex-direction: row-reverse;

          img {
            right: 0;
          }

          .project-info {
            align-items: flex-start;
            left: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    ul {
      width: 70%;

      li {
        .project-container {
          img {
            width: 60%;
          }

          .project-info {
            width: 65%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    ul {
      width: 65%;

      li {
        .project-container {
          img {
            width: 60%;
            object-fit: cover;
          }

          .project-info {
            width: 50%;
          }
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
      videoLink: PropTypes.string,
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
