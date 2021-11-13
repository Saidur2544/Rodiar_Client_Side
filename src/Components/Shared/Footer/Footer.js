import React from 'react';
import "./Footer.css";
import logo from "../../../images/logo.png";
const Footer = () => {
    return (
        <div className="footer-section bg-danger">
                <div className="container">
                    <div className="row">
                        <div className="co-lg-12 mb-5">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div>
                                <h1 className="fs-1 fw-bolder text-white"> Rodiar </h1>
                                <p className="text-dark pt-5">
                                    Let us together create the new building of the future which will be everything in one form: architecture and sculpture and painting. The greatest advances of civilization, whether in architecture. <br /> <br /> Painting or painting, science literature, in industry or agriculture, have never come from
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h2 style={{color:'#f9f9f9', fontWeight:'600'}}>Our Most Recent Product</h2>
                        <div className="row  gap-0">
                                <div className="col-lg-4 ">
                                    <img style={{width:'100%', minHeight:'100px'}} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDQEvVm1QkXzIAIq6HgEIX2tbEDR4Eregyw&usqp=CAU" alt="" />
                                </div>
                            <div className="col-lg-4 my-1">
                                    <img style={{width:'100%', minHeight:'100px'}} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejE5M72gkRuYXrl6KgRGtuoRkeVVFLtf2Dw&usqp=CAU" alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img style={{width:'100%', minHeight:'100px'}} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDQEvVm1QkXzIAIq6HgEIX2tbEDR4Eregyw&usqp=CAU" alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img style={{width:'100%', minHeight:'100px'}} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf-gjC_HfQePxs70xXKJn7g7hfab_3wKPFA&usqp=CAU" alt="" />
                                </div>
                            <div className="col-lg-4 my-1">
                                    <img style={{width:'100%', minHeight:'100px'}} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiDQEvVm1QkXzIAIq6HgEIX2tbEDR4Eregyw&usqp=CAU" alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img style={{width:'100%', minHeight:'100px'}} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf-gjC_HfQePxs70xXKJn7g7hfab_3wKPFA&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h2 className="text-white fs-3 fw-bold">Work hours</h2>

                        <h4 style={{ color:'rgb(49, 48, 48)'}}>Opening</h4>
                        <p style={{ color: 'rgb(49, 48, 48)' }}>10:30 AM</p>
                            <h4 style={{ color: 'rgb(49, 48, 48)' }}>Close</h4>
                        <p style={{ color: 'rgb(49, 48, 48)' }}>06:30 PM</p>
                        </div>
                    </div>
                </div>
            <div className="copyright">
                Copyright © 2021 rodiar, All rights reserved. Present by Saidur Rahman.
            </div>
        </div>

    );
};

export default Footer;