import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {  NavLink } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import stripe from "../../images/stripe.png";
import "./Checkout.css";
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';


const Checkout = () => {
    const [product, setProducts] = useState({});
    const { id } = useParams();
    const {user} = useAuth();
    const Swal = require('sweetalert2');
    const openaddProduct = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product ordered Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    useEffect(() => {
        fetch(`https://ancient-plains-04086.herokuapp.com/Product/${id}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [id]);

    const handleCheckOut = (product) =>{
        const orderDetails = {
            userEmail: user?.email,
            productName: product.productName,
            price: product.price,
            orderTime: new Date().toLocaleString(),
            status : "pending"
        };
        console.log(orderDetails);

        fetch(`https://ancient-plains-04086.herokuapp.com/addOrder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        }).then((res) => res.json())
        .then((result) => {
            if (result.acknowledged){
                openaddProduct()
            }
        });
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 p-5">
                        <div width="100%" style={{ border: "5px solid #640101", borderRadius:"10px"}} className="product-img">
                            <img width="100%" src={product?.photo} alt="Product" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div>
                            <h3 className="fw-bold text-danger my-3">{product?.productName}</h3>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="checkout-tittle text-center">Process Order</h2>
                <div className="row mt-5">
                    <div className="col-md-5">
                        <table className="checkout-table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>{product && product?.productName}</p>
                                    </td>
                                    <td>
                                        <p>1</p>
                                    </td>
                                    <td>
                                        <p>{product && product?.price} Taka</p>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>{product && product?.price} Taka</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="payment-part pt-5">
                            <h2 className="pt-2 pb-2">Online Payments</h2>
                        </div>
                        <div className="checkout-btn text-center">
                            <NavLink
                                to="/myOrders"
                                className="btn btn-danger btn-lg"
                                onClick={() => handleCheckOut(product)}
                            >
                                Order Now
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="payment-system pt-5">
                            <div className="row">
                                <div className="col">
                                    <div className="img">
                                        <img
                                            className="img-fluid w-100"
                                            src={stripe}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;