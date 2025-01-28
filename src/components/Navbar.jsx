import React from 'react'
import { FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header>
      <nav>
        <FaSearch />
        <a href="/"><img src="/src/assets/logo.png" alt="logo" /></a>
        <FaUser />
        <FaBagShopping />
      </nav>
    </header>
  )
}

export default Navbar
