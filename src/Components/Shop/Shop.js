import React, { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://ancient-plains-04086.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [])
    
    return (
        <div>
            <Navigation></Navigation>
            <div style={{padding: '80px 0', background:'#d5d5d5'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto mb-3">
                            <h1 className="text-danger pt-5 fs-1 fw-bold"> Our product Best of Best</h1>
                            <p>One fo the best market for biker you guys can buy your dream from here with install ment have lot of fun . Hope you will wnjoy and get best service freoim auus</p>
                        </div>
                    </div>
                    <div className="row g-3">
                        {
                            products.map(product => <div
                                key={product?._id}
                                className="col-lg-4"
                            >
                                <Card>
                                    <Card.Img height="300px" variant="top" src={product?.photo} />
                                    <Card.Body>
                                        <Card.Title>{product?.productName}</Card.Title>
                                        <Card.Text>
                                           Price: {product?.price} tk
                                        </Card.Text>

                                        <Button variant="danger"><NavLink style={{ color: '#fff', textDecoration: 'none' }} to={`/checkout/${product?._id}`} >Order Now</NavLink></Button>
                                    </Card.Body>
                                </Card>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Shop;