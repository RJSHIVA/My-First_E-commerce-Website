import React from "react";
import Layout from "./../components/Layout/Layout";



const Policy = () => {
  return (
    <Layout title={"Privacy Policy-Choudhary-Bazaar"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src='/images/policy.jpg'
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
        <div className="col-md-4" style={{
  maxWidth: "320px",
  height: "auto",
  border: "2px solid #ccc", // Border style
  borderRadius: "8px", // Border radius
  display: "block", // Ensures block-level display for margin auto to work
  margin: "0 auto", // Centers the image horizontally
  marginTop: "20px", // Top margin
  padding: "10px", // Padding
  backgroundColor: "rgba(100, 150, 255, 0.5)" // Background color
}}
 >
          <h2>Privacy Policy</h2>
          <p>
            At ChoudharyBazaar, we are committed to protecting the privacy of
            our customers. This Privacy Policy outlines how your personal
            information is collected, used, and protected when you visit or
            make a purchase from our website.
          </p>
          <p>
            We collect personal information such as your name, email address,
            shipping address, and payment information to process your orders
            and provide a seamless shopping experience.
          </p>
          <p>
            Your information is securely stored and never shared with third
            parties except for purposes of fulfilling your orders or as
            required by law.
          </p>
          <p>
            We may send you promotional emails about new products, special
            offers, or other updates, but you can opt out of these emails at
            any time.
          </p>
          
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
