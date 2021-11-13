import React from 'react';
import { NavLink } from 'react-router-dom';
import "./AdminDashboard.css";

const Admindashboard = () => {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="dashboard-navigation">
                            <ul>
                                <li><NavLink to="/addProduct" className="link-nav">Add Products</NavLink></li>
                                <li><NavLink to="/makeAdmin" className="link-nav"> Make Admin</NavLink></li>
                                <li><NavLink to="/manageOrder" className="link-nav"> Manage Order</NavLink></li>
                                <li><NavLink to="/productList" className="link-nav"> Manage Product</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admindashboard;