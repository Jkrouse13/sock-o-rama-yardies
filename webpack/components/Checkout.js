import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
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
        Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    handleSubmit(e) {
        // Disable the submit button to prevent repeated clicks:
        // $form.find('.submit').prop('disabled', true);

        // Request a token from Stripe:
        Stripe.card.createToken($form, stripeResponseHandler);

        // Prevent the form from being submitted:
        return false;
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
       <form action="/your-charge-code" method="POST" id="payment-form">
         <span className="payment-errors"></span>

         <div className="form-group">
           <label>
             <span>Card Number</span>
             <input type="text" size="20" data-stripe="number"/>
           </label>
         </div>

         <div className="form-group">
           <label>
             <span>Expiration (MM/YY)</span>
             <input type="text" size="2" data-stripe="exp_month" />
           </label>
           <span> / </span>
           <input type="text" size="2" data-stripe="exp_year" />
         </div>

         <div className="form-group">
           <label>
             <span>CVC</span>
             <input type="text" size="4" data-stripe="cvc" />
           </label>
         </div>

         <div className="form-group">
           <label>
             <span>Billing Zip</span>
             <input type="text" size="6" data-stripe="address_zip" />
           </label>
         </div>

         <div className="row form-group well">
             <div className="col-sm-6 col-sm-push-6 text-right">
                 <div>
                     <button className="btn btn-primary btn-lg" onSubmit={this.handleSubmit}>Send</button>
                 </div>
             </div>
             <div className="col-sm-6 col-sm-pull-6">
                 <div>
                     <button className="btn btn-danger btn-lg">Cancel</button>
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
