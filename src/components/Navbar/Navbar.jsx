import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
          <Link to="/regiter">regiter</Link>
            <Link to="/prducts">prducts</Link>
              <Link to="/login">login</Link>
                <Link to="/cart">cart</Link>
        
          
    </nav>
  )
}
