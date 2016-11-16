import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class Carousel extends React.Component {
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
        return <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* //   <!-- Indicators --> */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="first-slide" src="http://ecx.images-amazon.com/images/I/91-M8oHN-TL._UX679_.jpg" alt="First slide" />

            </div>
            <div className="item">
              <img className="second-slide" src="http://ecx.images-amazon.com/images/I/A1%2BfmYV54hL._UX679_.jpg" alt="Second slide" />

            </div>
            <div className="item">
              <img className="third-slide" src="http://ecx.images-amazon.com/images/I/611Ov2M4vHL._AC_UL400_SR320,400_.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    }
}

export default Carousel
