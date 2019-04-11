import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton.jsx';


class ArtistMenu extends React.Component {
  constructor(props) {
    super(props);
    this.Menu = '';
    this.updateMenu = this.updateMenu.bind(this);
  }

  updateMenu() {
    this.Menu = styled.div`
      background-color: rgb(50,50,50);
      color: rgb(180,180,180);
      position: fixed;
      z-index: 2;
      top: ${this.props.pos.top};
      left: ${this.props.pos.left};
    `;
  }

  render() {
    this.updateMenu();
    const { Menu } = this;
    return (
      <div className="contextMenu">
        <Menu className="menu-options">
          <MenuButton text="Start Radio" />
          <MenuButton text="Save to Your Library" />
          <MenuButton text="Copy Artist Link" />
        </Menu>
      </div>
    );
  }
}

export default ArtistMenu;
