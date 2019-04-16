import AlbumsList from './AlbumsList.jsx';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.jsx';
import './Album.scss';
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const context = this;
    window.addEventListener('hashchange', () => {
      context.forceUpdate();
    });
  }

  render() {
    if (window.location.hash !== '#related') {
      return (
        <div>
          <Sidebar />
          <AlbumsList />
        </div>
      );
    } else {
      return (
        <div>
          <Sidebar />
        </div>
      );
    }
  }
}
// export default App;
// ReactDOM.render(<AlbumsList />, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('Bodyalbum'));
