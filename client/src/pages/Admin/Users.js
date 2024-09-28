import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import AdminMenu from '../../components/Layout/AdminMenu';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    // Function to fetch all users
    const fetchAllUsers = async () => {
        try {
            const response = await axios.get('/api/v1/user/all-users');  // Assuming your API endpoint is set up like this
            if (response.data.success) {
                setUsers(response.data.users);
            }
        } catch (error) {
            console.log('Error fetching users:', error);
        }
    };
    
    // Fetch users when the component is mounted
    useEffect(() => {
        fetchAllUsers();
    }, []);
    
    return (
        <div>
            <Header title={"Admin - All Users"} />
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>All Users</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllUsers;
