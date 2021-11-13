import React from 'react';
import "./Patners.css";
import patners1 from '../../../images/Pat1.png';
import patners2 from '../../../images/Pat2.png';
import patners3 from '../../../images/Pat3.png';
import patners4 from '../../../images/Pat4.png';

const Patners = () => {
    return (
        <div className="patnersSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={patners1} alt="Patners Logo" className="img-fluid" />
                    </div>
                    <div className="col-lg-3">
                        <img src={patners2} alt="Patners Logo" className="img-fluid" />
                    </div>
                    <div className="col-lg-3">
                        <img src={patners3} alt="Patners Logo" className="img-fluid" />
                    </div>
                    <div className="col-lg-3">
                        <img src={patners4} alt="Patners Logo" className="img-fluid" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-4">
                        <div className="pt5">
                            <h1 className="fs-1 fw-bolder text-danger">JOIN WITH US</h1>
                            <p className="text-white"> We provide best service and latest Motorcycle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patners;