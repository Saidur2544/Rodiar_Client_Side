import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Admindashboard from '../AdminDashboard/Admindashboard';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://ancient-plains-04086.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Navigation></Navigation>
            <Admindashboard></Admindashboard>
            
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="mt-5 text danger">Make an admin</h1>
                        {success && <div className="alert alert-success">
                        Made Admin successfully! </div>
                        }

                    </div>
                    <div className="col-lg-8 mx-auto">
                        <Form onSubmit={handleAdminSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onBlur={handleOnBlur}
                                />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Make admin
                            </Button>
                        </Form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;