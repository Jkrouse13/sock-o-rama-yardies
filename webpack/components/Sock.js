import React from 'react'


const Sock = (props) => <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={props.sock.image} alt="..."   />
        <div className="caption">
          <h3>Thumbnail label</h3>
          <p>{props.sock.name}</p>
          <p><a href="#" className="btn btn-primary" role="button">Button</a></p>
        </div>
      </div>
    </div>



export default Sock
