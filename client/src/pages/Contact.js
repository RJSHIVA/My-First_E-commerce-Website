import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";


const Contact = () => {
  return (
    <Layout title={"Contact us-Choudhary-Bazaar"}>
      <div className="row contactus gap-4 ">
      <div className="col-md-6 ">
          <img
            src='/images/contactus.jpg'
            alt="contactus"
            style={{
              maxWidth: "320px",
              height: "auto",
              border: "2px solid #ccc", // Border style
              borderRadius: "8px", // Border radius
              display: "block", // Ensures block-level display for margin auto to work
              margin: "0 auto", // Centers the image horizontally
              marginTop: "20px", // Top margin
              padding: "10px" // Padding
            }}
          />
        </div>
        <div className="col-md-4  " style={{maxWidth: "700px",height: "auto",
              border: "2px solid #ccc", // Border style
              borderRadius: "8px", // Border radius
              display: "block", // Ensures block-level display for margin auto to work
              margin: "0 auto", // Centers the image horizontally
              marginTop: "20px", // Top margin
              padding: "10px"  }}>
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ChoudharyBazaar.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8000386925
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
