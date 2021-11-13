import React, { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Admindashboard from '../AdminDashboard/Admindashboard';

const Allproduct = () => {

    const [products, setProducts] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    useEffect(() => {
        fetch("https://ancient-plains-04086.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [reloadData])
    const handleDelete = (id) =>{
        fetch(`https://ancient-plains-04086.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setReloadData(!reloadData)
                    alert("Deleted Your product Successfully")
                } else {
                    setReloadData(false)
                }
            });
    }

    return (
        <div>
            <Navigation></Navigation>
            <Admindashboard></Admindashboard>
            <div style={{background:'#d5d9d5'}}>
                <div className="container p-5" >
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="text-danger py-5 fs-1 fw-bold">Manage all products</h1>
                        </div>
                    </div>
                    <div className="row g-3">
                        {
                            products.map(product => <div
                                key={product?._id}
                                className="col-lg-4"
                            >
                                <Card >
                                    <Card.Img variant="top" src={product?.photo} />
                                    <Card.Body>
                                        <Card.Title>{product?.productName}</Card.Title>
                                        <Card.Text>
                                            {product?.description}
                                        </Card.Text>
                                        <Button onClick={() => handleDelete(product?._id)} variant="danger">Delete</Button>
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

export default Allproduct;