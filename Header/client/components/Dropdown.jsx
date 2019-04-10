import React, {Component} from 'react';
import DropdownMenu from './DropdownMenu.jsx';

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: false,
      menuPosition: { top: 0, left: 0 },
    };

    // this.handleClick = this.handleClick.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    const newPosition = { left: event.clientX, top: event.clientY };

    this.setState({ displayMenu: true, menuPosition: newPosition }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
   }

  hideDropdownMenu() {
  this.setState({ displayMenu: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu);
  });
  }

  render() {

    let menu;
    if (this.state.displayMenu) {
      console.log('showing menu');
      menu = <DropdownMenu pos={this.state.menuPosition} />;
    } else {
      console.log('not showing menu');
      menu = <div />;
    }
    return (
      <div className="dropdown">
        <div data-testid="ellipsis-btn" onClick={this.showDropdownMenu}><i className="fas fa-ellipsis-h"></i></div>
        {menu}
      </div>
    )
  }
}

export default Dropdown;