import React from "react";
import { connect } from "react-redux";

import "../css/styles.css";
import { setName, setAge } from "../actions/userActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputName: "",
      inputAge: ""
    };
  }

  handleNameChange(e) {
    this.setState({
      inputName: e.target.value
    });
  }

  handleAgeChange(e) {
    this.setState({
      inputAge: e.target.value
    });
  }

  handleSubmit() {
    this.props.setName(this.state.inputName);
    this.props.setAge(this.state.inputAge);
  }

  render() {
    return (
      <div>
        <h1>Message List</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={this.handleNameChange}
        />
        <input type="text" placeholder="Age" onChange={this.handleAgeChange} />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
        <br />
        <h3>Username:</h3>
        {this.props.user.name}
        <h3>Age:</h3>
        {this.props.user.age}
        <h3>List of Users</h3>
        <ul>{this.props.user.lastValue.map(item => <li>{item}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch(setName(name)),
    setAge: age => dispatch(setAge(age))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
