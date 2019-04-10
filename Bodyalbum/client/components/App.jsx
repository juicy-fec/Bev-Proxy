import AlbumsList from './AlbumsList.jsx';
import React from 'react';
import Sidebar from './Sidebar.jsx';
import './Album.scss';
const App = () => {
  return (
    <div>
      <Sidebar />
      <AlbumsList />
    </div>
  );
};
export default App;
// ReactDOM.render(<AlbumsList />, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));
