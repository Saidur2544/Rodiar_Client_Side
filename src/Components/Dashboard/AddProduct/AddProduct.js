import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Admindashboard from '../AdminDashboard/Admindashboard';
import "./AddProduct.css";

const AddProduct = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [sucess , setSucess] = useState(false);
    const onSubmit = data => {
        console.log(data)
        fetch("https://ancient-plains-04086.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setSucess(result.acknowledged));
    };
    return (
        <div>
            <Navigation></Navigation>
            <Admindashboard></Admindashboard>

            <div className="addProductSection">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-8 mx-auto">
                            <h3 className="text-danger fw-bold mt-5">Add product Here</h3>
                            {sucess && <h2 className="text-success">Product inserted successfully</h2>}
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        className="input-field w-75 p-2 my-2"
                                        style={{border:"2px solid red", borderRadius:'5px'}}
                                        name="productName"
                                        placeholder="Products Name"
                                        type="text"
                                        {...register("productName", { required: true })}
                                    /> <br />
                                    <textarea
                                        className="input-field my-2 p-2 w-75"
                                        style={{border:"2px solid red", borderRadius:'5px'}}
                                        name="description"
                                        placeholder="Products description"
                                        type="text"
                                        {...register("description", { required: true })}
                                    ></textarea> <br />
                                    <input
                                        className="input-field my-2 p-2 w-75"
                                        style={{border:"2px solid red", borderRadius:'5px'}}
                                        name="price"
                                        placeholder="Products price"
                                        type="number"
                                        {...register("price", { required: true })}
                                    /> <br />
                                    <input
                                        className="input-field my-2 p-2 w-75"
                                        style={{border:"2px solid red", borderRadius:'5px'}}
                                        name="photo"
                                        placeholder="Products img url"
                                        type="text"
                                        {...register("photo", { required: true })}
                                    /> <br />

                                    <input
                                        className="submit-btn btn btn-danger mt-3"
                                        type="submit"
                                        value="Add Product"
                                    />
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;