import React from 'react'
import { Link } from 'react-router-dom'

const CardDetails = ({
    _id,
    name,
    brand,
    price,
    image,
    desc,
}) => {
    return (
        <>
            <div key={_id} className="col mx-auto d-block img-fluid">
                <div className="card h-100">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{desc}</p>
                </div>
                <Link to={`/products/${_id}`}><button type="button" className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </>
    )
}

export default CardDetails