import React from "react";
import Layout from "./../components/Layout/Layout";



const About = () => {
  return (
    <Layout title={"About us - Choudhary-Bazaar"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src='/images/aboutus.jpg'
            alt="contactus"
            style={{
              maxWidth: "320px",
              height: "500px",
              border: "2px solid #ccc", // Border style
              borderRadius: "8px", // Border radius
              display: "block", // Ensures block-level display for margin auto to work
              margin: "0 auto", // Centers the image horizontally
              marginTop: "20px", // Top margin
              padding: "10px" // Padding
            }}
          />
        </div>
        <div className="col-md-3 mt-3 " style={{
  maxWidth: "320px",
  height: "auto",
  border: "2px solid #ccc", // Border style
  borderRadius: "8px", // Border radius
  display: "block", // Ensures block-level display for margin auto to work
  margin: "0 auto", // Centers the image horizontally
  marginTop: "20px", // Top margin
  padding: "10px", // Padding
  backgroundColor: "rgba(100, 150, 255, 0.5)" // Background color
}} >
        <p className="text-justify  mt-2"  >
  Choudhary-Bazaar, situated in the vibrant city of Jaipur, Rajasthan since
  2025, stands as a premier destination for all your shopping needs. With a
  rich legacy spanning years, we pride ourselves on offering a diverse range
  of products to cater to every requirement. From electrical appliances to
  home essentials, sports gear to mobile devices, and everything in between,
  Choudhary-Bazaar is your one-stop shop.

  Our commitment to quality and customer satisfaction sets us apart. We strive
  to provide an unparalleled shopping experience, ensuring that each customer
  finds exactly what they need. 
</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;