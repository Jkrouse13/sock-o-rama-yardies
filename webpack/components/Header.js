import React from 'react'
import { Link } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class Header extends React.Component {
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
    return <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Sock-O-Rama</Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/cart" className={this.state.itemsInCart > 0? 'btn btn-default': 'btn btn-default disabled'}><span className="glyphicon glyphicon-shopping-cart"></span> Cart {this.state.itemsInCart}</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </div>
  }
}

  export default Header
