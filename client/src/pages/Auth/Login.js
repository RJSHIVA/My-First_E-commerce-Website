import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Login = () => {

    
   
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[auth,setAuth] = useAuth("");
    const navigate = useNavigate();
    const location = useLocation();


//  form function

const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,email,address,phone,password);
    // toast.success('registered successfully');   
    try {
      const res = await axios.post('/api/v1/auth/login',{email,password});
      if(res.data.success){
        toast.success(res.data.message,{duration: 10000,})
        setAuth({...auth,
          user: res.data.user,
          token: res.data.token,}
          );
          localStorage.setItem('auth', JSON.stringify(res.data));
        navigate( location.state || '/');
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
      
      <div className="card-container fw-bold" >
      <div className='card' style={{
  background: 'linear-gradient(45deg, #012a4a, #468faf, #013a63)', // Example gradient background
  color: '#fff',              // Example text color
  padding: '10px 20px',       // Example padding
  border: 'none',             // Example border
  borderRadius: '5px',        // Example border radius
  cursor: 'pointer',          // Example cursor style
  width: '450px'              // Example width
}}
>
         
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Login here</h1>
         
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          
          
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
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
  }}>Login</button>
          
          <div className=' d-sm-inline-flex mt-2 gap-2 m-1 p-2'>
          <button
  type="submit"
  onClick={() => {navigate('/forgot-password')}}
  style={{
    background: 'linear-gradient(45deg, #240046, #00a896, #028090)', // Example gradient background
    color: '#fff',              // Example text color
    padding: '10px 20px',       // Example padding
    border: 'none',             // Example border
    borderRadius: '5px',        // Example border radius
    cursor: 'pointer',          // Example cursor style
    width: '200px'              // Example width
  }}
>
  Forgot password...
</button>

<button
className=' mt-2'
  type="submit"
  onClick={() => {navigate('/register')}}
  style={{
    background: 'linear-gradient(45deg, #284b63, #032b43, #005f73)', // Example gradient background
    color: '#fff',              // Example text color
    padding: '10px 20px',       // Example padding
    border: 'none',             // Example border
    borderRadius: '5px',        // Example border radius
    cursor: 'pointer',          // Example cursor style
    width: '200px',
                // Example width
  }}
  
>
  Register
</button>
</div>


        </form>
       
        </div>
      </div>
    
    </Layout>
  )
}

export default Login