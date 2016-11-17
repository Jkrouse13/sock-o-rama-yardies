import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import accounting from 'accounting-js'
import Modal from 'react-modal'

class Sock extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
            // sharedState: sharedState(),
            modalIsOpen: false,
            sock_id: '',
            quantity: '',
            size_id: ''
        }
        // this.state = sharedState()
    }

    componentDidMount() {
        attachSharedState(this, (state) => this.setState({sharedState: state}))
        // attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    openModal() {
      this.setState({modalIsOpen: true})
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      // this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false})
    }

    addToCart() {
        fetch('/add_cart_item', {
            method: 'POST',
            body: JSON.stringify({
                token: sharedState().cartToken,
                // sock_id: this.state.sock_id,
                // sock_id: 1,
                item_quantity: this.state.quantity,
                // size_id: this.state.size_id,
                size_id: 1,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(this.handleAddToCart)

        // var response = {
        //     success: true
        // }

        // this.handleAddToCart(response)
    }

    handleAddToCart(response) {
        this.closeModal()
        console.log(response)
        var items = sharedState().itemsInCart
        items++
        console.log(items)
        console.log(response.line_item.cart.token)

        sharedState({
            itemsInCart: items,
            cartToken: response.line_item.cart.token
        })
    }

    handleQuantityChange(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        return <div className="col-sm-6 col-md-4">

              <div className="thumbnail">
                {/* <img src={this.props.sock.image} alt="..."   /> */}
                {/* // TODO: Remove hardcoded image */}
                 <img className="img-responsive" src="http://www.llamafibercoop.com/Socks%20no%20pricing.jpg" width="400" alt="sock image" />
                <div className="caption">
                  <h3>{this.props.sock.name}</h3>
                  <p>{this.props.sock.description}</p>
                  <p>{accounting.format(this.props.sock.price/100)}</p>
                  <button className="btn btn-primary" onClick={this.openModal}>View Details</button>
                 <Modal
                   isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Example Modal">
                   <div className="modal-dialog modal-lg" role="document">
                     <div className="modal-content">
                           <div className="modal-header">
                             <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" onClick={this.closeModal}>&times;</span></button>
                             <h4 className="modal-title" id="gridSystemModalLabel">{this.props.sock.name}</h4>
                           </div>
                           <div className="modal-body">
                             <div className="row">
                               <div className="col-md-6">
                                 <img className="img-responsive" src="http://www.llamafibercoop.com/Socks%20no%20pricing.jpg" width="400" alt="sock image" />
                                 <h2>Description</h2>
                                 <p>{this.props.sock.description}</p>
                                 <h2>Materials</h2>
                                 <p>{this.props.sock.material}</p>
                               </div>
                               <div className="col-md-6">
                                 <h3>Price: {accounting.format(this.props.sock.price/100)}</h3>
                                   <div className="form-group">
                                         <label htmlFor="size">Size</label>
                                         <select id ="size" className="form-control">
                                           <option value="sm">Small</option>
                                           <option value="md">Medium</option>
                                           <option value="lg">Large</option>
                                         </select>
                                   </div>
                                   <div className="form-group">
                                         <label htmlFor="quantitiy">Quantity</label>
                                        <input className="form-control" id="quantitiy" type="text" value={this.state.quantity} onChange={this.handleQuantityChange} />
                                   </div>
                                   <h2>Color</h2>
                                   <p>{this.props.sock.color.name}</p>
                                   <h2>Style</h2>
                                   <p>{this.props.sock.style.name}</p>
                               </div>
                             </div>
                           </div>
                           <div className="modal-footer">
                             <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                             <button type="button" className="btn btn-primary" onClick={this.addToCart}>Add to Cart</button>
                           </div>
                         </div>
                   </div>
                 </Modal>
                </div>
              </div>
            </div>
    }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default Sock
