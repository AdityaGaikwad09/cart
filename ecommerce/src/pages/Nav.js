import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

function Nav(props) {
   /*  const auth=localStorage.getItem('user');
    const navigate=useNavigate()
   const logout=()=>{
    localStorage.clear();
navigate('/signup')
   } */
    return (
        <div>
       
            <ul className='nav-ull'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          
            <li> <Link to='/signup' >Logout</Link></li>
        </ul>
            :
            <ul className='nav-ul nav-name'>
        {/* <li><Link to="/">Home</Link></li>
           <li> <Link to="/signup">SignUp</Link></li>
        <li><Link to="/login">Login</Link></li> */}
</ul>
    
            
        </div>
    );
}

export default Nav;