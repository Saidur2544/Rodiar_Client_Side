import React from 'react';
import { NavLink } from 'react-router-dom';
import "./UserDashboard.css";

const UserDashboard = () => {
    return (
        <div className="pt-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="dashboard-navigation">
                            <ul>
                                <li><NavLink to="/addReview" className="link-nav">Add Review</NavLink></li>
                                <li><NavLink to="/myOrders" className="link-nav"> My Order</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;