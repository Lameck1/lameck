import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { contactAnimation } from '../../animation';

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Get in touch</h2>
      <motion.div
        className="contact"
        variants={contactAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: 'tween' }}
      >
        <div>
          <p>
            I would like to be a part of your engineering team. Do I look the
            part? Please feel free to leave me a message.
          </p>
        </div>
        <form action="https://formsubmit.co/lameck72@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Message From Visitor!"
          />
          <input type="text" name="name" placeholder="Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            id="subject"
            name="message"
            placeholder="Your message here"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </motion.div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  min-height: 100vh;
  padding: 5rem 1rem;
  font-family: var(--font-sans);

  .contact {
    display: flex;
    flex-direction: column;

    div {
      p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: var(--lightest-slate);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 2rem;
      border-radius: 0.5rem;

      input {
        margin-bottom: 0.5rem;
        border: none;
        outline: none;
        border-radius: 0.2rem;
        padding: 0.5rem;
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: var(--dark-navy);
      }

      textarea {
        resize: none;
        border: none;
        border-radius: 0.2rem;
        outline: none;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: var(--dark-navy);
        height: 10rem;
      }

      button {
        align-self: flex-end;
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 0.2rem;
        background-color: var(--lightest-slate);
        color: var(--dark-slate);
        font-size: clamp(1rem, 2vw, 1.2rem);
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--dark-slate);
          color: var(--lightest-slate);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .contact {
      border: 1px solid var(--lightest-slate);
      border-radius: 0.5rem;
      padding: 2rem;

      align-items: center;
      gap: 0.5rem;
      width: 70%;

      div,
      form {
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .contact {
      flex-direction: row;
      width: 60%;

      div {
        width: 50%;

        p {
          text-align: right;
        }
      }

      form {
        width: 50%;
      }
    }
  }
`;

export default Contact;
