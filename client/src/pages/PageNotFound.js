import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div>
            <Header title={"go back- page not found"} />
            <div className='pnf'>
                <h1 className='pnf-title'>404</h1>
                <h1 className='pnf-heading'>

                    Oops ! Page Not Found

                </h1>
                <Link to="/" className='pnf-btn'>
                    Go Back
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default PageNotFound;