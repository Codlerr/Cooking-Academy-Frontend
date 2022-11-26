import React from 'react';
import { useLocation } from 'react-router-dom';
function Footer() {

    // hide specific page 
    const { pathname } = useLocation();
    if (pathname === "/landing") return null;


  return (
    <div>Footer</div>
  )
}

export default Footer;