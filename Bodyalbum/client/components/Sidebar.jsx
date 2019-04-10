import React from 'react';
import SidebarOptions from './SidebarOptions.jsx';
import SidebarRecents from './SidebarRecents.jsx';
import './Album.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InstallIcon: 'images/install.png',
    };
    this.recents = [
      { name: 'Saw Theme', type: 'playlist' },
      { name: 'Some Music', type: 'album' },
      { name: 'Nekrogoblikon', type: 'artist' },
    ];
  }
  mouseOver() {
    this.setState({ InstallIcon: 'images/installW.png' });
  }
  mouseLeave() {
    this.setState({ InstallIcon: 'images/install.png' });
  }
  render() {
    return (
      <div className="SidebarContainer">
        <div className="Sidebar" data-test="Sidebar">
          <h3 className="SidebarHeader" data-test="SidebarHeader">
            <img className="Logo" alt="Spoopify Logo" src="images/spotifly.png" />{' '}
            <span className="logoTitle imgText">Spot-a-fly</span>
          </h3>
          <SidebarOptions />
          <div className="RecentlyPlayed">Recently Played</div>
          <SidebarRecents recents={this.recents} />
          <div
            className="Install"
            data-test="Install App"
            onMouseOver={this.mouseOver.bind(this)}
            onMouseLeave={this.mouseLeave.bind(this)}
          >
            <img className="InstallIcon" alt="Install Icon" src={this.state.InstallIcon} />
            <span className="InstallText imgText">Install App</span>
          </div>
          <div className="User" data-test="User">
            <img className="User iconImg" alt="User Icon" src="images/user.png" />
            <span className="userText imgText">User</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
