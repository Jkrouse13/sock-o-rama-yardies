import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

sharedState({
  socks: [],
  itemsInCart: 0
})

window.sharedState = sharedState

import App from './components/App'
import Store from './components/Store'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

// $(document).ready(function() {
  ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Store} />
          <Route path="cart" component={Cart} />
          <Route path="checkout" component={Checkout} />
        </Route>
    </Router>
    , document.getElementById('app')
  )
// })
