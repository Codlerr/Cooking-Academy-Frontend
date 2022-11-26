import React from 'react';
import { useLocation } from 'react-router-dom'

function Navbar() {
    
    // hide specific page 
    const { pathname } = useLocation();
    if (pathname === "/landing") return null;

  return (
    <div>Navbar</div>
  )
}

export default Navbar;