import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import fetch from 'node-fetch';

import Dropdown from './Dropdown.jsx';
import About from './About.jsx';

import '../styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    let _isMounted = false;

    this.state = {
      name: '',
      header_img: ''
    };

    this.getArtistState = this.getArtistState.bind(this);
    this.handleOverviewClick = this.handleOverviewClick.bind(this);
    this.handleRelatedClick = this.handleRelatedClick.bind(this);
  }

  handleOverviewClick() {
    window.location.hash = '#overview';
  }

  handleRelatedClick() {
    window.location.hash = '#related';
  }

  getArtistState(id) {
    console.log('fetch', id);
    fetch(`http://localhost:3003/data/artist/${id}`)
      .then(result => result.json())
      .then(data => {
        if (this._isMounted) {
          console.log('recieved: ', data);
          this.setState({ name: data[0].name, header_img: data[0].header_img });
        }
      });
  }

  componentDidMount() {
    this._isMounted = true;
    this.getArtistState('The Ascending Critics');
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let divStyle = {
      backgroundImage: `url(${this.state.header_img})`
    };

    const routing = (
      <Router>
        <div className="btn-container-bottom">
          <Link to="/#overview">
            <button className="btn-overview" onClick={this.handleOverviewClick}>
              overview
            </button>
          </Link>
          <Link to="/#related">
            <button
              className="btn-related-artists"
              onClick={this.handleRelatedClick}
            >
              related artists
            </button>
          </Link>
          <Link to="/about">
            <button className="btn-about">about</button>
          </Link>
        </div>
        <div className="body-component">
          <Route path="/about" component={About} />
        </div>
      </Router>
    );

    return (
      <div className="img-header" style={divStyle}>
        <div className="listeners-container">2,475,356 monthly listeners</div>
        <h1 className="title">{this.state.name}</h1>
        <div className="btn-container-top">
          <button className="btn-play">play</button>
          <button className="btn-save">save to your library</button>
          <Dropdown />
        </div>
        <div>{routing}</div>
      </div>
    );
  }
}

export default Header;
