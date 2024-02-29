import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  const cardStyle = {
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 8px #001f54",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#0077b6",
    backdropFilter: "blur(10px)",
    overflow: "hidden",
  };

  const linkStyle = {
    display: "block",
    width: "100%", // Set width to 100%
    padding: "20px",
    color: "#ebf2fa",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    transition: "color 0.3s ease-in-out",
    boxSizing: "border-box", // Include padding and border in the total width
  };

  return (
    <Layout title={"All Categories"}>
      <div className="container-fluid py-5 d-flex align-items-center justify-content-center min-vh-100"> {/* Added min-vh-100 for full-height centering */}
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-4 mb-3 " key={c._id}>
              <div className="card w-100" style={cardStyle}>
                <Link to={`/category/${c.slug}`} className="btn cat-btn" style={linkStyle}>
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
