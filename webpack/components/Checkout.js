import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { browserHistory } from 'react-router'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)
        Stripe.setPublishableKey('pk_test_wJs1paUureMQH0FA8YFJ4hN8');
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    handleSubmit(e) {
        var $form = $('#payment-form');

        // Disable the submit button to prevent repeated clicks:
        $form.find('.submit').prop('disabled', true);

        // Request a token from Stripe:
        Stripe.card.createToken($form, this.stripeResponseHandler);

        // Prevent the form from being submitted:
        return false;
    }

stripeResponseHandler(status, response) {
  // Grab the form:
  var $form = $('#payment-form');


  if (response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    fetch('/charges?token=' + sharedState().cartToken, {
      method: 'POST',
      body: JSON.stringify(
        {
          stripeToken: token,
          stripeEmail: this.state.email,
          customerFirstName: this.state.firstName,
          customerLastName: this.state.lastName,
          customerShippingStreetAddress: this.state.shippingStreetAddress,
          customerShippingCity: this.state.shippingCity,
          customerShippingState: this.state.shippingState,
          customerShippingZipCode: this.state.shippingZipCode,
          customerShippingCountry: this.state.shippingCountry,
          customerBillingStreetAddress: this.state.billingStreetAddress,
          customerBillingCity: this.state.billingCity,
          customerBillingState: this.state.billingState,
          customerBillingZipCode: this.state.billingZipCode,
          customerBillingCountry: this.state.billingCountry,
        }
      ),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(this.handleStripResponse)

    // Insert the token ID into the form so it gets submitted to the server:
    // $form.append($('<input type="hidden" name="stripeToken">').val(token));

    // Submit the form:
    // $form.get(0).submit();
  }
}

handleStripResponse(response) {
  // console.log(response)
  if (response.success) {
    sharedState({
      line_items: [],
      itemsInCart: 0,
      cartToken: '',
      checkedOut: true,
      cart: {}
    })
    browserHistory.push('/')
  }
}

handleEmail(e) {
  this.setState({
    email: e.target.value
  })
}

handleFirstName(e) {
    var firstName = e.target.value
    this.setState({
        firstName: firstName
    })
}

handleLastName(e) {
    var lastName = e.target.value
    this.setState({
        lastName: lastName
    })
}

handleShippingStreetAddress(e) {
    var shippingStreetAddress = e.target.value
    this.setState({
        shippingStreetAddress: shippingStreetAddress
    })
}

handleShippingCity(e) {
    var shippingCity = e.target.value
    this.setState({
        shippingCity: shippingCity
    })
}

handleShippingState(e) {
    var shippingState = e.target.value
    this.setState({
        shippingState: shippingState
    })
}

handleShippingZipCode(e) {
    var shippingZipCode = e.target.value
    this.setState({
        shippingZipCode: shippingZipCode
    })
}

// handleShippingCountry(e) {
//     var shippingCountry = event.target.options[event.target.selectedIndex].value
//     this.setState({
//         shippingCountry: shippingCountry
//     })
// }

handleBillingStreetAddress(e) {
    var billingStreetAddress = e.target.value
    this.setState({
        billingStreetAddress: billingStreetAddress
    })
}

handleBillingCity(e) {
    var billingCity = e.target.value
    this.setState({
        billingCity: billingCity
    })
}

handleBillingState(e) {
    var billingState = e.target.value
    this.setState({
        billingState: billingState
    })
}

handleBillingZipCode(e) {
    var billingZipCode = e.target.value
    this.setState({
        billingZipCode: billingZipCode
    })
}

// handleBillingCountry(e) {
//     var billingCountry = event.target.options[event.target.selectedIndex].value
//     this.setState({
//         billingCountry: billingCountry
//     })
// }

toggleAddresses(e) {
  if (e.target.checked) {
    this.setState({
      billingStreetAddress: this.state.shippingStreetAddress,
      billingCity: this.state.shippingCity,
      billingState: this.state.shippingState,
      billingZipCode: this.state.shippingZipCode,
      // billingCountry: this.state.shippingCountry,
    })
  } else {
      this.setState({
        billingStreetAddress: '',
        billingCity: '',
        billingState: '',
        billingZipCode: '',
        // billingCountry: '',
      })
    }
  }



    render() {
        return <div className="container headerMargin">
        <h3>Checkout</h3>
        <div className="panel">
            <div className="panel-heading text-center">
                <h4>Contact Information</h4>
            </div>

            {/* <div className="panel"> */}

                <div className="row">
                    <div className="col-sm-6">

                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name" onChange={this.handleFirstName} value={this.state.firstName} />
                        </div>

                    </div>
                    <div className="col-sm-6">

                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Last Name" onChange={this.handleLastName} value={this.state.lastName} />

                        </div>

                    </div>

                </div>
                <div className="panel-heading">
                   <h3>Shipping Information</h3>
               </div>
               <div className="checkbox">
                   <label>
                     <input type="hidden" name="same_same" value="no" />
                     <input type="checkbox" name="same_same" value="yes" onClick={this.toggleAddresses}/>
                     Check if Billing & Shipping are the same
                  </label>
                 </div>


<div className="row">
                   <div className="col-sm-5">

                       <div className="form-group">
                           <label htmlFor="shipping_address" >Street Address</label>
                           <input type="text" id="shipping_address" name="shipping_street_address" className="form-control" placeholder="Street Address" onChange={this.handleShippingStreetAddress} value={this.state.shippingStreetAddress} />
                       </div>

                   </div>
                   <div className="col-sm-5">
                       <div className="form-group">
                           <label htmlFor="shipping_city">City</label>
                           <input type="text" id="shipping_city" name="shipping_city" placeholder="City" className="form-control" onChange={this.handleShippingCity} value={this.state.shippingCity} />

                       </div>

                   </div>
                   <div className="col-sm-2">
                       <div className="form-group">
                           <label htmlFor="shipping_state">State</label>
                           <input type="text" id="shipping_state" name="state" maxLength="2" className="form-control" onChange={this.handleShippingState} value={this.state.shippingState} />
                       </div>
                   </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label htmlFor="shipping_zip_code">Zip Code</label>
                               <input type="text" id="shipping_zip_code" name="shipping_zip_code" placeholder="Zip Code" className="form-control" onChange={this.handleShippingZipCode} value={this.state.shippingZipCode} />

                           </div>

                       </div>
                       {/* <div className="col-sm-6">
                           <div className="form-group">
                               <label htmlFor="shipping_country">Country</label>
                               <select className="form-control" id="shipping_country" name="shipping_country" onChange={this.handleShippingCountry} value={this.state.shippingCountry}>
                                   <option value="US">US</option>
                                   <option value="CA">Canada</option>
                                   <option value="MX">Mexico</option>
                                   <option value="JP">Japan</option>
                                   <option value="UK">United Kingdom</option>

                               </select>
                           </div>
                       </div> */}

               </div>
               <div className="panel-heading"><h3>Billing Information</h3></div>
               <div className="row">
                   <div className="col-sm-5">

                       <div className="form-group">
                           <label >Street Address</label>
                           <input type="text" id="billing_address" name="billing_street_address" className="form-control" placeholder="Street Address" onChange={this.handleBillingStreetAddress} value={this.state.billingStreetAddress} required />
                       </div>

                   </div>
                   <div className="col-sm-5">
                       <div className="form-group">
                           <label htmlFor="billing_city">City</label>
                           <input type="text" id="billing_city" name="billing_city" placeholder="City" className="form-control" onChange={this.handleBillingCity} value={this.state.billingCity} required />

                       </div>

                   </div>
                   <div className="col-sm-2">
                       <div className="form-group">
                           <label htmlFor="billing_state">State</label>
                           <input type="text" id="billing_state" name="billing_state" maxLength="2" className="form-control" onChange={this.handleBillingState} value={this.state.billingState} required />
                       </div>
                   </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label htmlFor="billing_zip_code">Zip Code</label>
                               <input type="text" id="billing_zip_code" name="billing_zip_code" placeholder="Zip Code" className="form-control" onChange={this.handleBillingZipCode} value={this.state.billingZipCode} required />

                           </div>

                       </div>
                       {/* <div className="col-sm-6">
                           <div className="form-group">
                               <label htmlFor="billing_country">Country</label>
                               <select className="form-control" id="billing_country" name="billing_country" onChange={this.handleBillingCountry} value={this.state.billingCountry}>
                                   <option value="US">US</option>
                                   <option value="CA">Canada</option>
                                   <option value="MX">Mexico</option>
                                   <option value="JP">Japan</option>
                                   <option value="UK">United Kingdom</option>

                               </select>
                           </div>
                       </div> */}

               </div>

   <div className="panel well">
       <div className="panel-heading"><h3>Payment Information</h3></div>

       <div className="row">
       <div className="col-sm-6">
       <form action={'/charges?token=' + sharedState().cartToken}  method="POST" id="payment-form">
         <span className="payment-errors"></span>
         <div className="form-group">
           <label>
             <span>Customer Email</span>
             <input className="form-control" type="text" name="stripEmail" value={this.state.email} onChange={this.handleEmail}/>
           </label>
         </div>

         <div className="form-group">
           <label>
             <span>Card Number</span>
             <input type="text" className="form-control" size="20" data-stripe="number"/>
           </label>
         </div>

         <div className="form-group">
           <label>
             <span>Expiration (MM/YY)</span>
             <input type="text" className="form-control" size="2" data-stripe="exp_month" />
           </label>
           <span> / </span>
           <input type="text" className="form-control" size="2" data-stripe="exp_year" />
         </div>

         <div className="form-group">
           <label>
             <span>CVC</span>
             <input type="text" className="form-control" size="4" data-stripe="cvc" />
           </label>
         </div>

         <div className="form-group">
           <label>
             <span>Billing Zip</span>
             <input type="text" className="form-control"  size="6" data-stripe="address_zip" />
           </label>
         </div>

         <div className="row form-group well">
             <div className="col-sm-6 col-sm-push-6 text-right">
                 <div>
                     <button type="button" className="btn btn-primary btn-lg" onClick={this.handleSubmit}>Send</button>
                 </div>
             </div>
             <div className="col-sm-6 col-sm-pull-6">
                 <div>
                     <button className="btn btn-danger btn-lg" onClick={() => browserHistory.push('/')}>Cancel</button>
                 </div>
             </div>
         </div>
       </form>
       </div>
       </div>
   </div>


        </div>

    </div>


    }
}

export default Checkout
