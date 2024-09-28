import React from 'react'
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth';

const Profile = () => {
    const [auth] = useAuth();
    return (
        <div>
            <Header title={"Your Profile"} />
            <div  >
                <div className="container-fluid m-3 p-3">
                    <div className="row">
                        <div className="col-md-3">
                            <UserMenu />
                        </div>
                        <div className="col-md-9">
                            <div className="card w-75 p-3">
                                <h3>Name: {auth?.user?.name}</h3>
                                <h3>E-mail: {auth?.user?.email}</h3>
                                <h3>{auth?.user?.address}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile