import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
       <h3>Register</h3>
       {this.props.reservations.map((r) => <div key={r.name}>{r.day} @ {r.time}</div>)}
    </div>)
  }
}

export default Register