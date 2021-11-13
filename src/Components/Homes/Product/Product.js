import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Product.css";
const Product = ({product}) => {
    const {productName , photo , price, _id} = product;
    return (
        <div className="col-lg-4">
            <div className="service-content text-start">
                <div className="content-details">
                    <img height="300px" src={photo} alt="Product"/>
                    <h3>{productName}</h3>
                    <h5>Price: {price} Taka</h5>
                </div>
                <div className="service-content-overlay d-flex justify-content-center">
                    <div className="service-btn align-self-center">
                        <NavLink to={`/checkout/${_id}`} className="service-button">Order Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;