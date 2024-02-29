import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Forget = () => {
    
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
  
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };


  return (
    <Layout title={`Forget Password`}>
       <div className="card-container fw-bold" >
      <div className='card' style={{
  background: 'linear-gradient(45deg, #012a4a, #468faf, #013a63)', // Example gradient background
  color: '#fff',              // Example text color
  padding: '10px 20px',       // Example padding
  border: 'none',             // Example border
  borderRadius: '5px',        // Example border radius
  cursor: 'pointer',          // Example cursor style
  width: '450px',
              // Example width
}}>
         
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Reset Your Password</h1>
         
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Secret key</label>
            <input type="text" className="form-control" placeholder="Enter your secret key" 
            value={answer} 
            onChange={(e)=>setAnswer(e.target.value)}
            required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">New Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Enter your new password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary" style={{
    background: 'linear-gradient(45deg, #000814, #001d3d, #023e8a)', // Example gradient background
    color: '#fff',              // Example text color
    padding: '10px 20px',       // Example padding
    border: 'none',             // Example border
    borderRadius: '5px',        // Example border radius
    cursor: 'pointer',          // Example cursor style
    width: '200px',
    display: 'block',
    margin: 'auto'              // Example width
  }}>Submit</button>
          


        </form>
        
        </div>
      </div>
    </Layout>
  )
}

export default Forget