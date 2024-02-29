import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
 
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [answer,setAnswer] = useState("");

    const navigate = useNavigate()


//  form function

const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,address,phone,password);
    // toast.success('registered successfully');   
    try {
      const res = await axios.post('/api/v1/auth/register',{email,password,name,address,phone,answer});
      if(res.data.success){
        toast.success(res.data.message,{duration: 10000,})
        navigate('/login');
      }else{
        toast.error(res.data.message,{duration: 10000,})
      }
    } catch (error) {
      console.log(error)
      toast.error('something went wrong!',{duration: 10000,})
    } 
}




  return (
    <Layout title="Register - Choudhary-Bazaar">
      <div className="card-container fw-bold d-flex" >
      <div className='card' style={{
    background: 'linear-gradient(45deg, #284b63, #032b43, #005f73)', // Example gradient background
    color: '#fff',              // Example text color
    padding: '10px 20px',       // Example padding
    border: 'none',             // Example border
    borderRadius: '5px',        // Example border radius
    cursor: 'pointer',          // Example cursor style
    width: '550px'              // Example width
  }}>
         
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Register</h1>
      <div className=' d-flex w-100 m-3 gap-5'   >
          <div>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="addressInput" className="form-label">Address</label>
            <input type="text" className="form-control" id="addressInput" placeholder="Enter your address" 
            value={address}
            onChange={(e)=>setAddress(e.target.value)} required />
          </div>
          </div>
          <div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">Phone No.</label>
            <input type="tel" className="form-control" id="phoneInput" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Security key</label>
            <input type="text" value={answer} className="form-control" id="passwordInput" placeholder=" Enter your Security key "  onChange={(e)=>setAnswer(e.target.value)} required />
          </div>
          </div>
          </div>

          <button
  type="submit"
  className="btn btn-primary fw-bold"
  style={{
    background: 'linear-gradient(45deg, #00a8e8, #00171f, #00a8e8)',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '300px',
    display: 'block',
    margin: 'auto', // Center the button horizontally
  }}
>
  Submit
</button>

        
        </form>
       
        </div>
      </div>
    </Layout>
  );
};

export default Register;
