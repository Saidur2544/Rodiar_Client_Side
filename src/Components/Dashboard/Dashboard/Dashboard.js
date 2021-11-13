import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Admindashboard from '../AdminDashboard/Admindashboard';
import UserDashboard from '../UserDashboard/UserDashboard';
import './Dashboard.css';

const Dashboard = () => {

    const { admin } = useAuth();
    console.log(admin)
    return (
        <div>
            <Navigation></Navigation>
            <div className="deshboardSection">
                {
                    admin ? <Admindashboard></Admindashboard>
                        : <UserDashboard></UserDashboard>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;