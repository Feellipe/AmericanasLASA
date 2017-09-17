import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';


class App extends Component {
 handleChange = (event) => {
   this.setState( {request: event.target.value} )
 }
 handleSubmit = (event) => {
   var request = this.state.request.trim();
   if (!request) {
     return;
   }
    fetch(`/echo?request=${request}`)
    .then(response => {
      return response.text();
    })
    .then(body => {
      alert(body);
    });

  }
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Projetin</h2>
        </div>
        <form className="App-Intro" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Echo" />
        </form>
        
      </div>
    );
  }
}

export default App;
