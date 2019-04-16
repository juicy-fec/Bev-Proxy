import React from 'react';
import styled from 'styled-components';

import ArtistList from './ArtistList.jsx';
import ArtistMenu from './ArtistMenu.jsx';

const widthandheight = windowsize => {
  let size;
  const { width } = windowsize;
  if (width < 767) {
    size = { width: '33%', height: '33%' };
  } else if (width >= 767 && width < 996) {
    size = { width: '25%', height: '25%' };
  } else if (width >= 996 && width < 1200) {
    size = { width: '16%', height: '16%' };
  } else {
    size = { width: '10%', height: '10%' };
  }
  return size;
};

const AppStyle = styled.div`
  min-height: 100%;
  background-color: rgb(30, 30, 30);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistid: '1',
      artistinfo: {},
      windowsize: { width: '10%', height: '10%' },
      showmenu: false,
      menuposition: { top: 0, left: 0 }
    };
    this.fetchArtistData = this.fetchArtistData.bind(this);
    this.updatewindow = this.updatewindow.bind(this);
    this.handlerightclick = this.handlerightclick.bind(this);
  }

  componentDidMount() {
    this.fetchArtistData();
    this.updatewindow();
    const context = this;
    window.onhashchange = () => {
      context.forceUpdate();
    };
    window.addEventListener('resize', this.updatewindow);
    document.addEventListener('contextmenu', this.handlerightclick);
  }

  updatewindow() {
    const windowsize = { width: window.innerWidth, height: window.innerHeight };
    const newwindow = widthandheight(windowsize);
    this.setState({ windowsize: newwindow });
    this.render();
  }

  handlerightclick(event) {
    event.preventDefault();
    const classtype = event.target.className.split('__')[0];
    if (classtype === 'Artist') {
      this.setState({ showmenu: true });
      const newpos = { left: event.clientX + 10, top: event.clientY + 10 };
      this.setState({ menuposition: newpos });
    } else {
      this.setState({ showmenu: false });
    }
  }

  handleclick() {
    return this.state;
  }

  fetchArtistData() {
    // need to find an initial artist.
    fetch(`http://localhost:3100/data/artist?id=${this.state.artistid}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ artistinfo: data });
      });
  }

  render() {
    let component;
    if (Object.keys(this.state.artistinfo).length === 0) {
      component = <div>empty</div>;
    } else {
      component = (
        <ArtistList
          artist={this.state.artistinfo}
          size={this.state.windowsize}
          rightclick={this.handlerightclick}
        />
      );
    }
    let menu;
    if (this.state.showmenu) {
      menu = <ArtistMenu pos={this.state.menuposition} />;
    } else {
      menu = <div />;
    }
    if (window.location.hash === '#related') {
      return (
        <AppStyle>
          {menu}
          {component}
        </AppStyle>
      );
    } else {
      return <div />;
    }
  }
}
export default App;
