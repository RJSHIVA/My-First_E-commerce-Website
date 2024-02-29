import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from '../../context/auth'
import SearchInput from '../Form/SearchInput'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/cart'
import {Badge} from 'antd'

const Header = () => {

    const [auth,setauth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const handelLogout = () => {
      setauth({
        ...auth,
        user: null,
        token: "",
      })
      localStorage.removeItem('auth');
      
    }

  return (
  <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: 'linear-gradient(45deg, #457b9d, #f1faee, #a8dadc)',
  width: 'auto',
  height:'auto' }}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >  🛒 Choudhary-Bazaar </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <SearchInput/>
        <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu" style={{
    background: 'linear-gradient(45deg, #457b9d, #f1faee, #a8dadc)', // Example gradient background
    color: '#fff',              // Example text color
    padding: '10px 20px',       // Example padding
    border: 'none',             // Example border
    borderRadius: '5px',        // Example border radius
    cursor: 'pointer',          // Example cursor style
    width: 'auto',
    overflow:'hidden'              // Example width
  }}>
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li  >
                      <Link 
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

        {
          !auth.user ? (
          <>
           <li className="nav-item">
          <NavLink to="/register" className="nav-link" >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
        </li>
          </>)  : (
          
          <>
           
          <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   {auth?.user.name}
  </NavLink>
  <ul className="dropdown-menu">
    <li> <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        > Dashboard </NavLink></li>
    <li><NavLink onClick={handelLogout} to="/login" className="dropdown-item"  >LogOut</NavLink></li> 
  </ul>
</li>



           

          </>)
        }

<li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </NavLink>
              </li>
      </ul>
    </div>
  </div>
</nav>


  </>
  )
}

export default Header