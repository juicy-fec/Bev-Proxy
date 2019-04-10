import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fetch from 'node-fetch';

import Dropdown from './Dropdown.jsx';
import '../styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props)

    let _isMounted = false;

    this.state = {
      name: '',
      header_img: ''
    }

    this.getArtistState = this.getArtistState.bind(this);
  }

  getArtistState(id) {
    fetch(`http://localhost:3002/data/artist/${id}`)
      .then(result => result.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ name: data.name, header_img: data.header_img})
        }
      })
  }

  componentDidMount() {
    // 2
    this._isMounted = true;
    this.getArtistState('5c9e8a06deeb8c28571e26a4')
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let divStyle = {
      backgroundImage: `url(${this.state.header_img})`
    }
    return (
      <div className="img-header" style={divStyle}>
        <div className="listeners-container"></div>
        <h1 className="title">{this.state.name}</h1>
        <div className="btn-container-top">
          <button className="btn-play">play</button>
          <button className="btn-save">save to your library</button>
          <Dropdown />
        </div>
        <div className="btn-container-bottom">
          <button className="btn-overview">overview</button>
          <button className="btn-related-artists">related artists</button>
          <button className="btn-about">about</button>
        </div>
      </div>

    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));
export default App;
