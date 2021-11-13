import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import UserDashboard from '../UserDashboard/UserDashboard';

const MyOrder = () => {

    const [products, setProducts] = useState([]);
    const [reloadData, setReloadData] = useState(false);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://ancient-plains-04086.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(result => setProducts(result))
    }, [reloadData, user?.email])

    const handleDelete = (id) => {
        fetch(`https://ancient-plains-04086.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setReloadData(!reloadData)
                    alert("Deleted order Successfully")
                } else {
                    setReloadData(false)
                }
            });
    }
    return (
        <div>
            <Navigation></Navigation>
            <UserDashboard></UserDashboard>
            <div className="myOrderSection">
                <div className="container">
                    <div className="row my-3">
                        <h1 className="fw-bold text-danger"> Mange My all order</h1>
                        <div className="col-lg-12">
                            <Table bordered hover variant="danger">
                                <thead>
                                    <tr>
                                        <th>SL NO</th>
                                        <th>Product Name</th>
                                        <th>Buyer Email</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        products.map((product, index) => <tr key={product?._id}>
                                            <td>{index + 1}</td>
                                            <td>{product?.productName}</td>
                                            <td>{product?.userEmail}</td>
                                            <td>{product?.orderTime}</td>
                                            <td>{product?.price} tk</td>
                                            <td>{product?.status}</td>
                                            <td> <Button onClick={() => handleDelete(product?._id)} className="btn btn-danger">Delete</Button> </td>
                                        </tr>)
                                    }


                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyOrder;