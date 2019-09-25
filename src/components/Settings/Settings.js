import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      P1name: " ",
      P2name: " ",
      Score: 0,
      Serve: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
  const input = e.target;
  const name = input.name;
  const value = input.type === 'checkbox' ? input.checked : input.value;
  this.setState({ [name]: value });
};


  handleSubmit(e) {
    alert('Let the game begin: ' );
    e.preventDefault();
  }

  render() {

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label>Player 1 Name</label>
          <input
            name="P1name"
            type= "text"
            className="form-control"
            onChange={ this.handleChange }
            value= {this.state.P1name}
          />

          <label>Player 2 Name</label>
          <input
            name="P2name"
            type= "text"
            className="form-control"
            onChange={ this.handleChange }
            value= {this.state.P2name}
          />

          <label>Winning Score</label>
          <input
            name="Score"
            type ="number"
            className="form-control"
            onChange={ this.handleChange }
            value={ this.state.Score}
          />

          <label>Alternate Every</label>
          <input
            name="Serve"
            className="form-control"
            type="number"
            onChange={ this.handleChange }
            value={ this.state.Serve }
          />
        </div>
        <button className="btn btn-primary">Start Game</button>
      </form>
    );
  }
}

export default Settings;