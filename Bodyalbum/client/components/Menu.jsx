import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      left: this.props.left + 'px',
      top: this.props.top + 'px',
    };
    this.albumClick;
  }
  styleConstr() {
    this.style = {
      left: this.props.left - 3 + 'px',
      top: this.props.top + 20 + 'px',
    };
  }
  makeMenu() {
    if (this.props.clicked === 'album') {
      this.albumClick = (
        <div style={this.style} className="menu-list" data-test="menuContainer">
          <div className="menu-item" data-test="startRadio">
            Start Radio
          </div>
          <div className="menu-item" data-test="saveLib">
            Save to Your Library
          </div>
          <div className="menu-item" data-test="addPlayl">
            Add to Playlist
          </div>
          <div className="menu-item" data-test="copyLink">
            Copy Album Link
          </div>
        </div>
      );
    } else if (this.props.clicked === 'playlist') {
      this.albumClick = (
        <div style={this.style} className="menu-list" data-test="menuContainer">
          <div className="menu-item" data-test="startRadio">
            Start Radio
          </div>
          <div className="menu-item" data-test="saveLib">
            Remove from Your Library
          </div>
          <div className="menu-item" data-test="copyLink">
            Copy Playlist Link
          </div>
        </div>
      );
    } else {
      this.albumClick = (
        <div style={this.style} className="menu-list" data-test="menuContainer">
          <div className="menu-item" data-test="startRadio">
            Start Radio
          </div>
          <div className="menu-item" data-test="saveLib">
            Save to Your Library
          </div>
          <div className="menu-item" data-test="copyArtistLink">
            Copy Artist Link
          </div>
        </div>
      );
    }
  }
  render() {
    this.styleConstr();
    this.makeMenu();
    return (this.props.show || null) && this.albumClick;
  }
}

//start radio, save to your library, copy artist link

export default Menu;
