import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
// import { VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {
    const links = <>
    <li className="text-gray-700 font-medium py-2 text-lg "><NavLink to="/">Home</NavLink></li>
    <li className="text-gray-700 font-medium py-2 text-lg"><NavLink to="/">Collection</NavLink></li>
    </>
    return (
        <nav className="navbar bg-white/80 sticky top-0 z-50 shadow-sm px-4 lg:px-12">
            {/* Logo Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        {/* <span className=" flex items-center h-6 w-6"><VscThreeBars /></span> */}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white mt-4 w-52 p-4 shadow-xl rounded-xl border border-gray-100">
                        {links}
                    </ul>
                </div>
                <a className="text-2xl font-bold tracking-tight text-gray-900 cursor-pointer">RESHOM</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 ">
                    {links}
                </ul>
            </div>

            {/* End Section */}
            <div className="navbar-end">
                <span className='mr-10 cursor-pointer'><Link to="/"><FaShoppingCart size={30} /></Link></span>
                <Link to="/">
                <button className="btn bg-gray-900 text-white hover:bg-black rounded-full px-6 shadow-md transition-transform active:scale-95">
                    Shop Now
                </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
