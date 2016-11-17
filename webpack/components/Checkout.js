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
    }

    componentWillUnmount() {
        detachSharedState(this)
    }
    render() {
        return <div className="container headerMargin">Checkout
        <div className="panel">
            <div className="panel-heading">
                Contact Information
            </div>

            <div className="panel">

                <div className="row">
                    <div className="col-sm-6">

                        <div className="form-group">
                            <label className="sr-only" for="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name" />
                        </div>

                    </div>
                    <div className="col-sm-6">

                        <div className="form-group">
                            <label for="first_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" className="form-control" />

                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-4">

                        <div className="checkbox">
                           <label>
                             <input type="hidden" name="send_me_stuff" value="no" />
                             <input type="checkbox" name="send_me_stuff" value="yes" />
                              Check me out
                           </label>
                         </div>

                     </div>
                     <div className="col-sm-4">

                         <div className="form-group">
                             <label for="password">Password</label>
                             <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                           </div>

                     </div>
                     <div className="col-sm-4">

                         <div className="form-group">
                             <label for="price">Price</label>
                             <div className="input-group">
                                 <div className="input-group-addon">$</div>
                                 <input type="text" id="price" name="price"
                                 class="form-control" maxlength="3" />
                                 <div className="input-group-addon">.00</div>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="form-group">
            <label for="country">Country</label>
            <select className="form-control" id="country" name="country">
                <option value="CA">Canada</option>
                <option value="US">US</option>
            </select>
        </div>
        <div className="row">
            <div className="col-sm-6 col-sm-push-6 text-right">
                <div className="form-group">
                    <button className="btn btn-success btn-lg">Send</button>
                </div>
            </div>
            <div className="col-sm-6 col-sm-pull-6">
                <div className="form-group">
                    <button className="btn btn-default btn-sm">Cancel</button>
                </div>
            </div>
        </div>

        <div className="form-group well text-right">

            <button className="btn btn-default btn-sm">Cancel</button>
            <button className="btn btn-success btn-lg">Send</button>
        </div>
    </div>


    }
}

export default Checkout
