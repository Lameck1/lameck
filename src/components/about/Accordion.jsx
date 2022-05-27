import * as React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ i, expanded, setExpanded, header, items }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <h3>{header}</h3>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="acc-details"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              className="acc-items-container"
              variants={{
                collapsed: { scale: 0.5, opacity: 0 },
                open: { scale: 1, opacity: 1 },
              }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
            >
              {items.map((item) => (
                <div key={item.id} className="acc-items">
                  <img src={item.icon} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid var(--primary-color);
            padding: 1rem;
            margin-bottom: 0.5rem;
            width: 100%;
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: clamp(1.3rem, 4vw, 1.3 rem);
            font-family: var(--font-sans);
          }

          header h3 {
            color: var(--primary-color);
          }

          header::after {
            content: '\\25B6';
            color: var(--primary-color);
            margin: 0;
            padding: 0;
            font-size: 1.1rem;
          }

          .acc-details {
            overflow: hidden;
            transform-origin: top center;
          }

          .acc-items-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            flex-wrap: wrap;
            border: 1px solid var(--primary-color);
            margin-bottom: 0.5rem;
          }

          .acc-items {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            gap: 0.5rem;
          }

          .acc-items img {
            width: 3rem;
          }

          .acc-items p {
            font-size: clamp(1.3rem, 4vw, 1.3rem);
            color: var(--lightest-slate);
          }

          @media screen and (min-width: 992px) {
          }
        `}
      </style>
    </>
  );
};

Accordion.propTypes = {
  i: PropTypes.number.isRequired,
  expanded: PropTypes.number.isRequired || PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ),
};

export default Accordion;
