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
          <p>Edit "view/app.js" and save to reload.</p>
          <a
            className="app-link"
            href="https://developer.kaiostech.com/"
            target="_blank"
            rel="noopener noreferrer"
            ref={node => {
              this.anchor = node;
            }}
          >
            Learn KaiOS
          </a>
        </header>
      </>
    );
  }
}

export default App;
