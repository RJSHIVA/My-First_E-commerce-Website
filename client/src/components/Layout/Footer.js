import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer  ' style={{height:'15vh'}}>

        <h4 className='text-center'>All Rights Reserved @ Rahul Choudhary</h4>
        <p className='text-center mt-3'>
          <Link to="/about"> About  </Link>|
          
          <Link to="/contact"> contact  </Link>|
          <Link to="/policy"> Privacy Policy </Link>
        </p>


    </div>
  )
}

export default Footer