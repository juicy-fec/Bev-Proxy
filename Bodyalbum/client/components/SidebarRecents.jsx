import React from 'react';
import Menu from './Menu.jsx';
class SidebarRecents extends React.Component {
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
    let typeOfElement = e.target.className.split(' ').pop();
    this.setState(
      {
        menuShow: !this.state.menuShow,
        menuLeft: e.pageX,
        menuTop: e.pageY,
        clicked: typeOfElement,
      },
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
      <div className="SidebarRecents" data-test="SidebarRecents">
        {this.props.recents.map(element => {
          return (
            <div className="recentElement" onContextMenu={this.handleRightClick.bind(this)}>
              <Menu
                left={this.state.menuLeft}
                top={this.state.menuTop}
                show={this.state.menuShow}
                clicked={this.state.clicked}
                data-test="menuComp"
              />
              <div
                className={'recentName ' + element.name + ' ' + element.type}
                data-test={'recent ' + element.type}
              >
                {element.name}
              </div>
              <div className={'type ' + element.type}>{element.type}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SidebarRecents;
