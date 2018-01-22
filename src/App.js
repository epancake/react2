import React, { Component } from 'react';
import { Header } from './components/Header.js'
import './App.css';
import ProfilesList from './components/Profiles.js'
import { Footer } from './components/footer.js'

class App extends Component {
  state = {dinosaurs: []}

  componentDidMount() {
    console.log('mounting')
    fetch('./dinosaurs.json')
      .then(response => response.json())
      .then(data => {
        this.setState({dinosaurs: data})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <h2>Profiles</h2>
          <ul id="profiles">
            <ProfilesList dinosaurs={this.state.dinosaurs}/>
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
