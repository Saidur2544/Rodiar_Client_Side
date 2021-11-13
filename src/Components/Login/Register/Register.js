import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import "./Register.css";
import {
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const { register, handleSubmit} = useForm();
    const { registerUser} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const onSubmit = (data) => {
        registerUser(data.email, data.password, data.name, location, history );
    };

    return (

        <div>
            <Navigation></Navigation>
            <div className="register-section">
                <div className="container">
                    <div className="col-lg-8 mx-auto">
                        <div className="register">
                            <h2 className="text-danger fw-bold mt-3 fs-2"> Registation to get our Service</h2>
                            <div className="registation-from my-3">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        className="input-field w-75 p-2 my-2"
                                        name="name"
                                        style={{ border: "2px solid red", borderRadius: '5px' }}
                                        placeholder="Full Name"
                                        type="text"
                                        {...register("name", { required: true })}
                                    />
                                    <br />
                                    <input
                                        className="input-field w-75 p-2 my-2"
                                        name="email"
                                        style={{ border: "2px solid red", borderRadius: '5px' }}
                                        placeholder="Email"
                                        type="email"
                                        {...register("email", { required: true })}
                                    />
                                    <br />
                                    <input
                                        className="input-field w-75 p-2 my-2"
                                        name="password"
                                        style={{ border: "2px solid red", borderRadius: '5px' }}
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", { required: true })}
                                    />
                                    <br />

                                    <input
                                        className="submit-btn btn btn-danger mt-3"
                                        type="submit"
                                        value="Register"
                                    />
                                </form>
                            </div>
                            <h4 className="text-white">If you already register Please Login <button className="btn btn-danger mx-1"><NavLink className="navitem" to="login">Log in</NavLink></button></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;