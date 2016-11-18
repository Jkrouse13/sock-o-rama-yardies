import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import Sock from './Sock'

class Socks extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }

    componentDidMount() {
        attachSharedState(this, (state) => this.setState({sharedState: state}))
        // attachSharedState(this)

        this.getSocks()
    }

    componentWillUnmount() {
        detachSharedState(this)
    }

    getSocks() {
        fetch('/socks', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(this.handleSocks)
    }

    handleSocks(response) {
        console.log('socks: ', response)
        sharedState({
            socks: response.socks
        })
    }

    render() {
        var socks = sharedState().socks.map(function(sock,i) {
            return <Sock sock={sock} key={i}/>

        })

        console.log('render', this.state.socks)

        return <div className="container">
            {this.state.checkedOut? <div className="alert alert-success alert-dismissible" role="alert">
  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Your order was successful.</strong> Thank you and enjoy your socks!
</div> : ''}
            {/* <div className="row">
                <div className="col-sm-12 well">
                    <h2>Filters</h2>
                    <ul className="list-unstyled list-inline">
                        <li>Size</li>
                        <li>Color</li>
                        <li>Material</li>
                    </ul>
                </div>
            </div> */}
          <div className="row well">
           {socks}
           </div>
        </div>
    }
}

export default Socks
