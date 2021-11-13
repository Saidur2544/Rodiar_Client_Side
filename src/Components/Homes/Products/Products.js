import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products , setProducts]= useState([]);

    useEffect(()=>{
        fetch("https://ancient-plains-04086.herokuapp.com/homeProducts")
        .then(res=> res.json())
            .then(result => {
                setProducts(result)
                console.log(result)
            })
    },[])
    console.log(products)
    return (
        <div style={{ background:'#f0f0f0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mx-auto my-4">
                        <h2 className="fw-bold text-danger">Taking rides to a newer level</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ex itaque nam mollitia quia iusto magnam error placeat, ut quisquam.</p>
                    </div>
                </div>
                <div className="row g-4 pb-5">
                    {
                        products.map(product => <Product
                            key={products._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;