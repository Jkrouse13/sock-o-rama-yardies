import React from 'react'
import accounting from 'accounting-js'

const Item = (props) => <div className="container headerMargin">
    <div className="row">
        <div className="col-sm-9">

                    <div className="row">
                        <div className="col-xs-2"><img className="img-responsive" src={props.item.size.sock.image}/>
                        </div>
                        <div className="col-xs-4">
                            <h4 className="product-name"><strong>{props.item.size.sock.name}</strong></h4><h4><small>{props.item.size.sock.description}</small></h4>
                        </div>
                        <div className="col-xs-6">
                            <div className="col-xs-6 text-right">
                                <h6><strong>{accounting.format(props.item.size.sock.price/100)} <span className="text-muted">x</span></strong></h6>
                            </div>
                            <div className="col-xs-4">
                                <input onClick="" onChange="" type="text" className="form-control input-sm" value={props.item.item_quantity}/>
                            </div>
                            <div className="col-xs-2">
                                <button type="button" className="btn btn-link btn-xs">
                                    <span className="glyphicon glyphicon-trash"> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                <hr/>

        </div>
    </div>
</div>

export default Item
