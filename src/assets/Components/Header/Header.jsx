import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky z-50 top-0">
            <nav className="container mx-auto px-6 py-5">
                <div className="flex justify-between items-center">
                    {/* Logo and Brand */}
                    <Link to="/" className="flex items-center gap-4">
                        <img src={logo} alt="Mongarlowe Green Farm Logo" className="w-12 h-12 object-contain" />
                        <div className="text-gray-800">
                            <div className="text-lg font-semibold">Mongarlowe</div>
                            <div className="text-base">Green Farm</div>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-10">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `text-lg ${isActive ? "text-orange-700" : "text-gray-600"} hover:text-orange-700`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({isActive}) =>
                                `text-lg ${isActive ? "text-orange-700" : "text-gray-600"} hover:text-orange-700`
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                `text-lg ${isActive ? "text-orange-700" : "text-gray-600"} hover:text-orange-700`
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                `text-lg ${isActive ? "text-orange-700" : "text-gray-600"} hover:text-orange-700`
                            }
                        >
                            Contact Us
                        </NavLink>
                        <Link
                            to="/login"
                            className="text-lg text-gray-600 hover:text-orange-700"
                        >
                            Login
                        </Link>
                        <Link
                            to="/cart"
                            className="text-gray-600 hover:text-orange-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

