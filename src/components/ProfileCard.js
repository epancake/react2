import React, { Component } from 'react';


class ProfileCard extends Component {

  constructor(props){
      super(props);

      this.state = {
          toggleClass: true
      }
  }

  toggleFunction = () => {
    this.setState({toggleClass: !this.state.toggleClass})
  }

  render () {
    return <li className="profile-card">
      <header onClick={this.toggleFunction} className="profile-header">
          <img src={require(`${this.props.dinosaur.image}`)} alt={this.props.dinosaur.name}/>
          <h2>{this.props.dinosaur.name}</h2>
    </header>

      <section className={this.state.toggleClass?'skills-container hidden':'skills-container'}>
          <h4>Skills</h4>
          <ul className="skills-list">
              <li>{this.props.dinosaur.skills[0]}</li>
              <li>{this.props.dinosaur.skills[1]}</li>
              <li>{this.props.dinosaur.skills[2]}</li>
              <li>{this.props.dinosaur.skills[3]}</li>
          </ul>

      </section>

    </li>
  }

}



export default ProfileCard
