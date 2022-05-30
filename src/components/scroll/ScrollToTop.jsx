import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Div onClick={scrollUp}>
      <div className={`scroll-to-top ${visible && 'active'}`}>
        <FaChevronUp />
      </div>
    </Div>
  );
};

const Div = styled.div`
  .scroll-to-top {
    z-index: 999;
    position: fixed;
    bottom: 20px;
    right: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: var(--dark-slate);
  }

  .scroll-to-top.active {
    opacity: 1;
    pointer-events: auto;
    right: 20px;
  }

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
  }
`;
export default ScrollToTop;
