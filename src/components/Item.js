import React, { Component } from 'react';

class Item extends Component {
    render() {
        let price = this.props.price
        let discount = this.props.discount
        let shouldDiscount = this.props.shouldDiscount
        return (
            <div>
                <div>{this.props.item}: ${shouldDiscount ? price * (1 - discount): price} </div>
            </div>
        )

    }
}

export default Item