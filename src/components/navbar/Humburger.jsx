import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ isOpen }) => (
  <>
    <div className="humburger">
      <span />
      <span />
      <span />
    </div>

    <style jsx="true">
      {`
        .humburger {
          cursor: pointer;
          width: 48px;
          height: 48px;
          transform: rotate(0deg);
          transition: 0.1s ease-in-out;
        }

        .humburger span {
          display: block;
          position: absolute;
          height: 1.5px;
          width: 30px;
          background-color: var(--primary-color);
          border-radius: 2px;
          opacity: 1;
          transform: rotate(0deg);
          transition: 0.3s ease-in-out;
        }

        .humburger span:nth-child(1) {
          top: 13px;
          transform-origin: left center;
        }

        .humburger span:nth-child(2) {
          top: 23px;
          transform-origin: left center;
        }

        .humburger span:nth-child(3) {
          top: 34px;
          transform-origin: left center;
        }

        .humburger span:nth-child(1) {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .humburger span:nth-child(2) {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .humburger span:nth-child(3) {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }

        @media screen and (min-width: 992px) {
          .humburger {
            display: none;
          }
        }
      `}
    </style>
  </>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isOpen: false,
};

export default Hamburger;
