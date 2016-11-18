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
      console.log('hi')
        var $form = $('#payment-form');
        console.log($form)
        console.log(e.target)
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
          stripeEmail: this.state.email
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
  console.log(response)
  if (response.success) {
    sharedState({
      line_items: [],
      itemsInCart: 0,
      cartToken: '',
      checkedOut: true
    })
    browserHistory.push('/')
  }
}

handleEmail(e) {
  this.setState({
    email: e.target.value
  })
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
                            <label for="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name" />
                        </div>

                    </div>
                    <div className="col-sm-6">

                        <div className="form-group">
                            <label for="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Last Name"/>

                        </div>

                    </div>

                </div>
                <div className="panel-heading">
                   <h3>Shipping Information</h3>
                   <div className="checkbox">
                      <label>
                        <input type="hidden" name="same_same" value="no" />
                        <input type="checkbox" name="same_same" value="yes"/>
                        Check if Billing & Shipping are the same
                     </label>
                    </div>
               </div>


<div className="row">
                   <div className="col-sm-5">

                       <div className="form-group">
                           <label for="shipping_address" >Street Address</label>
                           <input type="text" id="shipping_address" name="shipping_street_address" className="form-control" placeholder="Street Address" />
                       </div>

                   </div>
                   <div className="col-sm-5">
                       <div className="form-group">
                           <label for="shipping_city">City</label>
                           <input type="text" id="shipping_city" name="shipping_city" placeholder="City" className="form-control" />

                       </div>

                   </div>
                   <div className="col-sm-2">
                       <div className="form-group">
                           <label for="shipping_state">State</label>
                           <input type="text" id="shipping_state" name="state" maxlength="2" className="form-control" />
                       </div>
                   </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="shipping_zip_code">Zip Code</label>
                               <input type="text" id="shipping_zip_code" name="shipping_zip_code" placeholder="Zip Code" className="form-control" />

                           </div>

                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="shipping_country">Country</label>
                               <select className="form-control" id="shipping_country" name="shipping_country">
                                   <option value="US">US</option>
                                   <option value="CA">Canada</option>
                                   <option value="MX">Mexico</option>
                                   <option value="JP">Japan</option>
                                   <option value="UK">United Kingdom</option>

                               </select>
                           </div>
                       </div>

               </div>
               <div className="panel-heading"><h3>Billing Information</h3></div>
               <div className="row">
                   <div className="col-sm-5">

                       <div className="form-group">
                           <label >Street Address</label>
                           <input type="text" id="billing_address" name="billing_street_address" className="form-control" placeholder="Street Address" required />
                       </div>

                   </div>
                   <div className="col-sm-5">
                       <div className="form-group">
                           <label for="billing_city">City</label>
                           <input type="text" id="billing_city" name="billing_city" placeholder="City" className="form-control" required />

                       </div>

                   </div>
                   <div className="col-sm-2">
                       <div className="form-group">
                           <label for="billing_state">State</label>
                           <input type="text" id="billing_state" name="billing_state" maxlength="2" className="form-control" required />
                       </div>
                   </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="billing_zip_code">Zip Code</label>
                               <input type="text" id="billing_zip_code" name="billing_zip_code" placeholder="Zip Code" className="form-control" required />

                           </div>

                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="billing_country">Country</label>
                               <select className="form-control" id="billing_country" name="billing_country">
                                   <option value="US">US</option>
                                   <option value="CA">Canada</option>
                                   <option value="MX">Mexico</option>
                                   <option value="JP">Japan</option>
                                   <option value="UK">United Kingdom</option>

                               </select>
                           </div>
                       </div>

               </div>

   <div className="panel">
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
