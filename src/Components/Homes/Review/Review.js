import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import "./Review.css";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://ancient-plains-04086.herokuapp.com/allReviews")
            .then(res => res.json())
            .then(result => setReviews(result))
    }, [])

    return (
        <div className="review">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto my-5">
                        <h4 className="fw-bold text-danger pt-3"> Testimonial</h4>
                        <h1 className="fw-bold text-black pt-3">CUSTOMER REVIEW</h1>
                    </div>
                </div>
                <div className="row g-3">
                    {
                        reviews.map(review => <div key={review?._id} className="col-lg-3">
                            <Card className="bg-white" style={{minHeight:300}}>
                                <Card.Body className="d-flex align-items-center">
                                    <div> 
                                        <span className="text-danger fs-3 fw-bolder">*****</span>
                                        <Card.Text style={{ color: 'gray', textAlign: 'justify' }}>
                                            {review?.review}
                                        </Card.Text>
                                        <Card.Title className="text-danger fw-bold text-start pt-3">{review?.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted text-start">{review?.profession}</Card.Subtitle>

                                    </div>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;