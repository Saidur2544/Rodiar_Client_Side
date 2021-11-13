import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import UserDashboard from '../UserDashboard/UserDashboard';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import "./AddReview.css";
import Footer from '../../Shared/Footer/Footer';
import Swal from 'sweetalert2';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const {user} = useAuth();
    const Swal = require('sweetalert2');
    const addReviewALert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added Review successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const onSubmit = data => {

        fetch("https://ancient-plains-04086.herokuapp.com/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.acknowledged){
                    setSuccess(true)
                    addReviewALert()
                }
            });
    };
    return (
        <div>
            <Navigation></Navigation>
            <UserDashboard></UserDashboard>
            <div className="addReviewSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div>
                                <h1 className="text-danger fs-1 fw-bold mt-5">Please Add Your Review Here</h1>
                                {success && <h2 className="text-primary">Review Added successfully</h2>}
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            className="input-field w-75 p-2 my-2"
                                            style={{ border: "2px solid red", borderRadius: '5px' }}
                                            name="name"
                                            value={user?.displayName}
                                            type="text"
                                            {...register("name", { required: true })}
                                        /> <br />
                                        <input
                                            className="input-field w-75 p-2 my-2"
                                            style={{ border: "2px solid red", borderRadius: '5px' }}
                                            name="profession"
                                            placeholder="Please write your profession"
                                            type="text"
                                            {...register("profession", { required: true })}
                                        /> <br />
                                        <textarea
                                            className="input-field w-75 p-2 my-2"
                                            style={{ border: "2px solid red", borderRadius: '5px' }}
                                            name="review"
                                            placeholder="Please write your review"
                                            type="text"
                                            {...register("review", { required: true })}
                                        ></textarea> <br />

                                        <input
                                            className="submit-btn btn btn-danger mt-3"
                                            type="submit"
                                            value="Add Review"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddReview;
