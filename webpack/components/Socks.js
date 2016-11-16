import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class Socks extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }

    componentDidMount() {
        // attachSharedState(this, (state) => this.setState({sharedState: state}))
        attachSharedState(this)

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
        var socks = this.state.socks.map(function(sock,i) {
            return <p key={i}>{sock.name} {sock.style.name}</p>
        })

        console.log('render ', this.state.socks)
        return <div>Socks
            {socks}
        </div>
    }
}

export default Socks
