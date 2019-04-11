/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';

class Ellipsis extends PureComponent {
  constructor() {
    super();
    this.state = {
      display: false
    };
    this.showContext = this.showContext.bind(this);
    this.hideContext = this.hideContext.bind(this);
  }

  showContext(event) {
    event.preventDefault();

    this.setState({ display: true }, () => {
      document.addEventListener('click', this.hideContext);
    });
  }

  hideContext() {
    this.setState({ display: false }, () => {
      document.removeEventListener('click', this.hideContext);
    });
  }

  render() {
    const { display } = this.state;
    switch (display) {
      case false: return (
        <div className="ellipsis" onClick={this.showContext} data-testid="ellipsis">
          <i className="fas fa-ellipsis-h" />
        </div>
      );
      case true: return (
        <div className="contextMenu" onClick={this.hideContext} data-testid="context-menu">
          <div>Start Radio</div>
          <div>Save to Your Library</div>
          <div>Add to Queue</div>
          <div>Add to Playlist</div>
          <div>Copy Song Link</div>
        </div>
      );
      default: return (
        <div className="ellipsis">
          <i className="fas fa-ellipsis-h" />
        </div>
      );
    }
  }
}

export default Ellipsis;
