import React from 'react'

import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={}
    }

    render() {
        return <div>
            <Header />
            {this.props.children}
            <Footer />
        </div>
    }
}

export default App
