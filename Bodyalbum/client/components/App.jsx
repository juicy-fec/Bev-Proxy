import AlbumsList from './AlbumsList.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.jsx';
const App = () => {
  return (
    <div>
      <Sidebar />
      <AlbumsList />
    </div>
  );
};
// ReactDOM.render(<AlbumsList />, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
