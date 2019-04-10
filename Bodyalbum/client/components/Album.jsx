const React = require('react');
import Menu from './Menu.jsx';
import './Album.scss';
class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
      menuLeft: 0,
      menuTop: 0,
      clicked: '',
    };
  }
  handleRightClick(e) {
    e.preventDefault();
    this.setState(
      { menuShow: !this.state.menuShow, menuLeft: e.pageX, menuTop: e.pageY, clicked: 'album' },
      () => {
        document.addEventListener('mousedown', this.hideDropdownMenu.bind(this));
      },
    );
  }
  handleRightClickName(e) {
    e.preventDefault();
    this.setState(
      { menuShow: !this.state.menuShow, menuLeft: e.pageX, menuTop: e.pageY, clicked: '' },
      () => {
        document.addEventListener('mousedown', this.hideDropdownMenu.bind(this));
      },
    );
  }
  hideDropdownMenu() {
    this.setState({ menuShow: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="containerAnchor">
        <Menu
          left={this.state.menuLeft}
          top={this.state.menuTop}
          show={this.state.menuShow}
          clicked={this.state.clicked}
          data-test="menuComp"
        />
        <div className="albumContainer" data-test="containerComponent">
          <div
            className="picContainer"
            onContextMenu={this.handleRightClick.bind(this)}
            data-test="picContainerComp"
          >
            <img
              className="albumArt"
              src={this.props.picURL}
              alt="stuff"
              data-test="picComponent"
            />
            <img src="images/myplay.png" className="playbutton" data-test="mouseOverPlay" />
          </div>
          <div className="albumText" data-test="albumTextComponent">
            {this.props.name}
          </div>
          <div
            className="albumText artistNameAlbum"
            data-test="artistNameComponent"
            onContextMenu={this.handleRightClickName.bind(this)}
          >
            {this.props.artistName}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
