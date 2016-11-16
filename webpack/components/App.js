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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    }
}

export default App
