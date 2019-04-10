import React from 'react';

class SidebarOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HomeImg: 'images/home.png',
      SearchImg: 'images/search.png',
      LibImg: 'images/library.png',
    };
  }
  mouseOver(type) {
    switch (type) {
      case 'Home':
        this.setState({ HomeImg: 'images/homeW.png' });
        break;
      case 'Search':
        this.setState({ SearchImg: 'images/searchW.png' });
        break;
      case 'Library':
        this.setState({ LibImg: 'images/libraryW.png' });
        break;
      default:
        break;
    }
  }
  mouseLeave(type) {
    switch (type) {
      case 'Home':
        this.setState({ HomeImg: 'images/home.png' });
        break;
      case 'Search':
        this.setState({ SearchImg: 'images/search.png' });
        break;
      case 'Library':
        this.setState({ LibImg: 'images/library.png' });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="SidebarOptionsContainer">
        <div
          className="SidebarOptions"
          data-test="Home"
          onMouseOver={this.mouseOver.bind(this, 'Home')}
          onMouseLeave={this.mouseLeave.bind(this, 'Home')}
        >
          <img className="Home iconImg" alt="Home" src={this.state.HomeImg} />
          <span className="optionText imgText">Home</span>
        </div>
        <div
          className="SidebarOptions"
          data-test="Search"
          onMouseOver={this.mouseOver.bind(this, 'Search')}
          onMouseLeave={this.mouseLeave.bind(this, 'Search')}
        >
          <img className="Search iconImg" alt="Search" src={this.state.SearchImg} />
          <span className="optionText imgText">Search</span>
        </div>
        <div
          className="SidebarOptions"
          data-test="Your Library"
          onMouseOver={this.mouseOver.bind(this, 'Library')}
          onMouseLeave={this.mouseLeave.bind(this, 'Library')}
        >
          <img className="Library iconImg" alt="Library" src={this.state.LibImg} />
          <span className="optionText imgText">Your Library</span>
        </div>
      </div>
    );
  }
}
export default SidebarOptions;
