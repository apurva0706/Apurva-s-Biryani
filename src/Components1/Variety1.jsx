import React from 'react'
import { Link } from 'react-router-dom'
import './Variety1.css'

const Variety1 = ({ dishes }) => {
    return (
        <>
            
            <div className="container">
                <div className="row">
                    {
                        dishes.map((d, i) => (
                            <div className="col" key={i}>
                                <div className="card" style={{width: "18rem"}}>
                                    <Link to={`/detail-info/${d.id}`}>
                                    <img src={d.image} className="card-img-top" alt="..."
                                    style={{height:"200px"}}
                                    /></Link>
                                        <div className="card-body ">
                                            <h5 className="card-title">{d.title}</h5>
                                            <p className="card-text">{d.ingredients}</p>
                                            <p>Price : &#8377; {d.price}</p>
                                            <p>
                                                <i>{d.icon}</i> 
                                            </p>
                                            <a href="#" className="btn btn-primary me-1">Order Now</a>
                                            <a href="#" className="btn btn-warning">Add To Cart</a>

                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Variety1