import React from 'react';
import ReactDOM from 'react-dom';
import Album from './Album.jsx';
import fetch from 'node-fetch';
class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.artistName = this.props.artistName ? this.props.artistName : 'The Ascending Critics';
    // this.artistName = 'The Rainbow Equinox';
    this.albumListTypes = [
      'albumsbyartist',
      'epswithartist',
      'compilationswithartist',
      'albumswithartist',
    ];
    this.state = {
      albums: [],
      eps: [],
      compilations: [],
      appearsOn: [],
      showMoreAlb: true,
      showMoreEPs: true,
      showMoreComp: true,
      showMoreAppears: true,
    };
  }
  componentDidMount() {
    var fetches = this.fetchPromiseGenerator();
    this.setStateQuery(fetches);
  }
  //need test coverage
  showMoreClickHandler(e) {
    let buttonOrigin = e.target.className.split(' ')[1];
    if (buttonOrigin === 'albumsbyartist') {
      this.setState({ showMoreAlb: !this.state.showMoreAlb });
    } else if (buttonOrigin === 'epswithartist') {
      this.setState({ showMoreEPs: !this.state.showMoreEPs });
    } else if (buttonOrigin === 'compilationswithartist') {
      this.setState({ showMoreComp: !this.state.showMoreComp });
    } else if (buttonOrigin === 'albumswithartist') {
      this.setState({ showMoreAppears: !this.state.showMoreAppears });
    }
  }
  showmore(albumType, swap = true) {
    return (
      <button
        data-test="showMoreButton"
        className={'button ' + albumType}
        onClick={this.showMoreClickHandler.bind(this)}
      >
        {swap ? 'Show More' : 'Show Less'}
        <img className="buttonArrow" src={swap ? 'images/downArrow.png' : 'images/upArrow.png'} />
      </button>
    );
  }

  setStateQuery(fetches) {
    Promise.all(fetches)
      .then(res => {
        let resProm = [];
        if (res[0] !== undefined) {
          res.map(resElement => {
            resProm.push(resElement.json());
          });
          return resProm;
        }
        return res;
      })
      .then(val => {
        Promise.all(val).then(AlbumsByType => {
          this.setState({
            albums: AlbumsByType[0],
            eps: AlbumsByType[1],
            compilations: AlbumsByType[2],
            appearsOn: AlbumsByType[3],
          });
        });
      });
  }
  fetchAlbumType(type) {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(`http://localhost:3242/data/${type}/${this.artistName}`, options);
  }
  fetchPromiseGenerator() {
    var fetches = [];

    this.albumListTypes.map(request => {
      fetches.push(this.fetchAlbumType(request));
    });
    return fetches;
  }
  mapAlbums(type, short = true) {
    let element = [];
    let typeCl = [];
    typeCl = short ? type.slice(0, 10) : type.slice(0);

    if (type !== undefined && type.length > 0) {
      typeCl.map(album =>
        element.push(<Album picURL={album.image} name={album.name} artistName={this.artistName} />),
      );
      return element;
    }
  }
  returnStateType(str) {
    if (str === 'albumsbyartist') {
      return [this.state.albums, 'Albums', this.state.showMoreAlb];
    } else if (str === 'epswithartist') {
      return [this.state.eps, 'Singles and EPs', this.state.showMoreEPs];
    } else if (str === 'compilationswithartist') {
      return [this.state.compilations, 'Compilations', this.state.showMoreComp];
    } else if (str === 'albumswithartist') {
      return [this.state.appearsOn, 'Appears On', this.state.showMoreAppears];
    }
  }
  render() {
    return (
      <div className="allAlbums" data-test="allAlbums">
        {this.albumListTypes.map(albumType => {
          let [albumVals, headerName, short] = this.returnStateType(albumType);
          return (
            <div>
              <h3>{headerName}</h3>
              <div className={albumType + ' albumType'} data-test={albumType}>
                {this.mapAlbums(albumVals, short)}
              </div>
              {albumVals.length > 10 ? this.showmore(albumType, short) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
export default AlbumsList;
