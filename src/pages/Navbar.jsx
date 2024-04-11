import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiWorld } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex flex-wrap justify-between items-center px-4 md:px-8 lg:px-16 py-4">
            <div className="flex items-center">
                <a className="btn btn-ghost text-xl mr-4">WiX</a>
                <div className="text-start mr-8 flex flex-wrap gap-4 md:hidden">
                    {/* Dropdown menus */}
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Creation <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Busniss <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Grouth <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Resources <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex md:flex-wrap md:gap-4 lg:gap-8">
                {/* Dropdown menus */}
                <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                    <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Creation <IoIosArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                    <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Busniss <IoIosArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                    <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Grouth <IoIosArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                    <div tabIndex={0} role="button" className="btn m-1  bg-white  border-none text-black">Resources <IoIosArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

            <div className="ml-auto flex items-center gap-6">
                <a href="" className="hidden md:inline">Enterprise</a>
                <a href="" className="hidden md:inline">Pricing</a>
                <a href="" className="hidden md:inline">Support</a>
                <div className="flex items-center gap-4">
                    <strong className="hidden md:inline"><TfiWorld /></strong>
                    <button className="btn btn-sm rounded-full border-blue-400 bg-white text-blue-300 md:mr-4">Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
