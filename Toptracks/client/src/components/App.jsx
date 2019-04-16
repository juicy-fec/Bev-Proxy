import React from 'react';
import fetch from 'node-fetch';
import PopularList from './PopularList.jsx';
import '../style.scss';
import AudioPlayer from './AudioPlayer.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      currentTrack: {}
    };
    this.setCurrentTrack = this.setCurrentTrack.bind(this);
  }

  componentDidMount() {
    this.getTopTracks();
    const context = this;
    window.addEventListener('hashchange', () => {
      context.forceUpdate();
    });
  }

  getTopTracks() {
    fetch('http://localhost:3004/data/toptracks')
      .then(results => results.json())
      .then(tracks => {
        this.setState({ tracks });
      })
      .catch(console.log);
  }

  setCurrentTrack(track) {
    this.setState({
      currentTrack: {
        name: track.name,
        artist: track.artist,
        image: track.image,
        length: track.length
      }
    });
  }

  render() {
    const { tracks, currentTrack } = this.state;
    const { setCurrentTrack } = this;
    if (!tracks) return null;
    if (window.location.hash !== '#related') {
      return (
        <div id="main" data-testid="popular-main">
          <div id="left" />
          <div id="content">
            <h1 id="header">Popular</h1>
            <PopularList
              data-testid="popular-list"
              tracks={tracks}
              setCurrentTrack={setCurrentTrack}
            />
          </div>
          <AudioPlayer currentTrack={currentTrack} />
        </div>
      );
    } else {
      return (
        <div id="main" data-testid="popular-main">
          <div id="left" />
          <div id="content">
            <AudioPlayer currentTrack={currentTrack} />
          </div>
        </div>
      );
    }
  }
}

export default App;
