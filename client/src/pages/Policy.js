import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';


const Policy = () => {
  return (
    <div>
      <Header title={"Privacy Policy"} />
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/image/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;