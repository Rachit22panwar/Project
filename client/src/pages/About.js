import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';


const About = () => {
  return (
    <div>
      <Header title={"About us"}/>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/image/aboutus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
              About Us
            </p>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default About;