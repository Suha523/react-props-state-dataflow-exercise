import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state = {
            "show": false
        }
    }
    render() {
        return this.state.show ? <p>You see me now</p> : <p>You don't see me now</p>

    }
}

export default Hudini