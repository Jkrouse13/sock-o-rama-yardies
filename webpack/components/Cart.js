import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import accounting from 'accounting-js'
import { Link } from 'react-router'
import Item from './Item'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)

        this.getCart()
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    getCart() {
        fetch('/cart?token=' + sharedState().cartToken, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(this.handleCart)

    }

    handleCart(response) {
        // console.log('cart: ', response)
        sharedState({
            line_items: response.cart.line_items,
            cart: response.cart
        })
    }

    render() {
        // console.log('render stuff', this.state.cart)

        var items = this.state.line_items.map(function(item,i) {
            return <Item item={item} key={i} />
        })


        return <div className="container">
            <div className="row headerMargin">
                <div className="col-sm-9 panel panel-info">
                        {items}
                        <div className="row">
                            <div className="text-center">
                                <div className="col-xs-10">
                                    <h6 className="text-right">Tax</h6>
                                </div>
                                <div className="col-xs-2">
                                    <p>{this.state.cart.tax? accounting.format(this.state.cart.tax/100): '0'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                <div className="col-xs-10">
                                    <h6 className="text-right">Shipping</h6>
                                </div>
                                <div className="col-xs-2">
                                    <p>{this.state.cart.shipping? accounting.format(this.state.cart.shipping/100) : 0}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                <div className="col-xs-10">
                                    <h6 className="text-right">Sub Total</h6>
                                </div>
                                <div className="col-xs-2">
                                    <p>{this.state.cart.sub_total? accounting.format(this.state.cart.sub_total/100) : '0'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                <div className="col-xs-10">
                                    <h6 className="text-right"><strong>Total</strong></h6>
                                </div>
                                <div className="col-xs-2">
                                    <p><strong>{this.state.cart.grand_total? accounting.format(this.state.cart.grand_total/100) : '0'}</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-xs-3 clearButton">
                                {/* <button type="button" className="btn btn-info btn-block">
                                    Clear
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="panel-body">
                            <div className="row text-right">
                                <div className="col-xs-12">
                                    <h4 className="text-right">Total
                                        <strong> {this.state.cart.grand_total? accounting.format(this.state.cart.grand_total/100) : '0'}</strong></h4>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-xs-12">
                                    <Link to="/checkout" className="btn btn-success btn-block">Checkout</Link>
                                    <Link to="/" className="btn btn-danger btn-block">Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    }
}

export default Cart
