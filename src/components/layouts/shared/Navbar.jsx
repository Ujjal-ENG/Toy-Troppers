/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useContext, useEffect, useState } from 'react';

import { Link, NavLink, useNavigation } from 'react-router-dom';
import Logo from '../../../assets/Logo.png';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { userInfo, logOutUser } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 88 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    const navItems = (
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 text-2xl font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-toys">All Toys</NavLink>
            {userInfo && (
                <>
                    <NavLink to="/my-toys">My Toys</NavLink>
                    <NavLink to="/add-a-toys">Add a Toys</NavLink>
                </>
            )}
            <NavLink to="/blogs">Blogs</NavLink>
        </div>
    );

    return (
        <div className="navbar mx-auto relative z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                    <img src={Logo} alt="logo" className="w-14 md:w-32 h-20  object-center" />
                    <h3 className="text-primary text-xl font-bold">Toy|Troppers</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end space-x-3">
                {userInfo && (
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://images.pexels.com/photos/16249368/pexels-photo-16249368.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" />
                        </div>
                    </div>
                )}
                {userInfo ? (
                    <button type="button" className="btn btn-active" onClick={() => logOutUser()}>
                        LogOut
                    </button>
                ) : (
                    <Link to="/login" type="button" className="btn btn-primary font-bold btn-sm md:btn-md">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
