import React, { Component } from 'react';

export class CartItem extends Component {
    render() {
        return <li>
            <b>Name:</b>{this.props.name}
            <b>Price:</b>{this.props.price}
            <b>Quantity:</b>{this.props.quantity}
            <button onClick={this.props.onPlusClick}>+</button>
        </li>
    }
}
