import React, { Component } from 'react';
import './App.css';
import MapComponent from './MapComponent';

let markers = [
  { id: 1, title: 'Bournemouth', address: 'Bournemouth' },
  { id: 2, title: 'London', address: 'London' },
  { id: 3, title: 'France', address: 'Paris' },
  { id: 4, title: 'Germany', address: 'Berlin' },
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Google Map Component</h1>
        </header>
        <MapComponent
          markers={markers}
          apiKey="AIzaSyABOjp3gFcBspEnEnE3YcEmMRKwWcydMYc"
        />
      </div>
    );
  }
}

export default App;
