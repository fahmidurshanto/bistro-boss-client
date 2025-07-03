import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = (
    <>
      <li>
        <Link className="uppercase font-bold" to="/">Home</Link>
      </li>
      <li>
        <Link className="uppercase font-bold" to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link className="uppercase font-bold" to="/order">Order Food</Link>
      </li>
    </>
  );

  return (
    <div 
      className={`navbar fixed top-0 left-0 right-0 z-50 shadow-sm transition-all duration-500 ${
        isTop 
          ? 'bg-white/90 text-black' 
          : 'bg-transparent text-black backdrop-blur-sm'
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isTop ? 'text-black' : 'text-black'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className={`flex flex-col items-start ml-4 md:ml-9 ${isTop ? 'text-black' : 'text-black'}`}>
          <h2 className="md:text-xl font-semibold">Bistro Boss</h2>
          <p className="text-xs md:text-sm">Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;