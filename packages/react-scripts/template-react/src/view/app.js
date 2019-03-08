import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

class App extends Component {
  componentDidMount() {
    // Focus to the anchor, press 'Enter' should open a new webpage
    this.anchor && this.anchor.focus();
  }

  render() {
    return (
      <>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p data-l10n-id="app-description" />
          <a
            className="app-link"
            data-l10n-id="app-link"
            href="https://developer.kaiostech.com/"
            target="_blank"
            rel="noopener noreferrer"
            ref={node => {
              this.anchor = node;
            }}
          />
        </header>
      </>
    );
  }
}

export default App;
