import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */

    
    render() {
        return (
            <div>
                   Welcome {this.props.user}, the hottest item is {this.props.hottestItem.item} for ${this.props.hottestItem.price}
            </div>
           
        )

    }
}

export default Landing