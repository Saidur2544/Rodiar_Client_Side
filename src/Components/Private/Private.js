import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    Route,
    Redirect,
} from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const Private = ({ children , ...rest }) => {
    const {user , isLoading} = useAuth();
    if (isLoading) {
        return (
            <div className="mt-5">
                <Spinner animation="grow" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default Private;