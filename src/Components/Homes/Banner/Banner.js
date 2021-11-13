import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    //
    return (
        <div className="banner ">
            <div className="d-flex align-items-center h-100">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-5 text-start  ">
                            <h3 className="text-white">Best Deal</h3>
                            <h1 className="fw-bold text-danger my-3">
                                Driving a Motorcycle <br />Is like flying
                            </h1>
                            <div>
                                <Button variant="danger"><NavLink style={{ color: '#fff', textDecoration: 'none' }} to="/shop" >Explore More</NavLink></Button>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Banner;