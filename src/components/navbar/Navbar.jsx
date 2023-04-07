import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'



//Stylesheet
import './NavbarStyle.scss'

/* 
*    Navbar component -- contains website navigation features
*    Includes -- Home Destinations Travel Book and Views   
*    Icons -- Hamburger Search Bio
*/

//**Remember Function Components must start with capital letter */
function Navbar() {

    //Manages state
    const [nav, setNav] = useState(false)

    //Sets stage to off/on
    const handleNav = () => setNav(!nav)

    return (

        <div className="navbar">

            <div className="logo">
                <h2>Beaches</h2>
            </div>

            <ul className="nav-menu">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>

            <div className="nav-icons">
                <BiSearch className='icon' />
                <BsPerson className='icon' />
            </div>

            <div className="hamburger">
                <HiOutlineMenuAlt4 className='icon' />
            </div>

            {/* This will be the menu for our smaller screens */}
            <div className="mobile-menu">
                <ul className="mobile-nav">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>

                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
