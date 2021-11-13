import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import {
    useHistory,
    useLocation
} from "react-router-dom";
import "./Login.css";

const Login = () => {
    const { register, handleSubmit} = useForm();
    const history = useHistory();
    const location = useLocation();
    
    
    const { loginUser} =useAuth();
    const onSubmit = (data) => {
        loginUser(data.email, data.password, location, history);

    };
    return (
        <div>
            <Navigation></Navigation>
            <div className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="login">
                                <h2 className="login-head text-danger fw-bold mt-3"> Sign in to get our Service</h2>
                                <div className="login-from my-3">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input
                                            className="input-field w-75 p-2 my-2"
                                            name="email"
                                            placeholder="Email"
                                            style={{ border: "2px solid red", borderRadius: '5px' }}
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
                                            value="Login"
                                        />
                                    </form>
                                </div>
                                <h4 className="text-white">If you are new Please Register <button className="btn btn-danger mx-1"><NavLink className="navitem" to="register">Register</NavLink></button></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;