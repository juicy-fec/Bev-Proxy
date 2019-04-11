import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DropdownMenu = ({ pos }) => {

    const Menu = styled.ul`
    background-color: rgb(28, 28, 28);
    position: fixed;
    z-index: 2;
    top: ${pos.top - 15}px;
    left: ${pos.left}px;
    list-style-type: none;
    padding: 5px 0px;
    min-width: 160px;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    outline: none;
    border-radius: .25rem;
  `;

    return (
        <Menu className="menu-options">
          <li className="menu-option">Start Radio</li>
          <li className="menu-option">Save to Your Library</li>
          <li className="menu-option">Copy Artist Link</li>
        </Menu>
    );
  }

DropdownMenu.propTypes = {
  pos: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

export default DropdownMenu;