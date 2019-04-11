import React, {Component} from 'react';
import DropdownMenu from './DropdownMenu.jsx';

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: false,
      menuPosition: { top: 0, left: 0 },
    };

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
    let { displayMenu } = this.state;

    return (
      <div className="dropdown">
        <div data-testid="ellipsis-btn" onClick={this.showDropdownMenu}><i className="fas fa-ellipsis-h"></i></div>
        { displayMenu && <DropdownMenu pos={this.state.menuPosition} />}
      </div>
    )
  }
}

export default Dropdown;