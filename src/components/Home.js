import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        let store = this.props.store
        let shouldDiscount = this.props.shouldDiscount
        return(
            <div>
                {store.map((i) => <Item key={i.item} item={i.item} price={i.price} discount={i.discount} shouldDiscount={shouldDiscount}/>)}   
            </div>
        )
     

    }
}

export default Home