import React, { Component } from 'react';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Contact management app</h1>
          <Contacts />
        </div>
    );
  }
}

export default App;
