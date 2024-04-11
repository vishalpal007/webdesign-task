import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';

const Card = () => {
    const MainCard = [
        {
            img: "https://media.istockphoto.com/id/1309023728/video/cinematic-intro-of-the-coming-soon-lettering-from-the-dark.jpg?s=640x640&k=20&c=6ywPVAi06d-ODrrEYERKmgC7CBbGeZeLaJXhwklfzDk=",
            title: "coming soon landing page"
        },

        {
            img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdHVyYW50fGVufDB8fDB8fHww",
            title: "Chef Restaurant"
        },

        {
            img: "https://media.istockphoto.com/id/459960049/photo/bride-and-groom-enjoying-meal-at-wedding-reception.jpg?s=1024x1024&w=is&k=20&c=tlnESzFkJq3aWDt-vczi7a-tlM86eAfkbyU-sbZxXVw=",
            title: "Wedding Invitation"
        },

        {
            img: "https://images.unsplash.com/photo-1559056408-94245a95e30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuJTIwZHJpbmt8ZW58MHx8MHx8fDA%3D",
            title: "Canned Drink Store"
        },

        {
            img: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuZGVyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
            title: "Under Construction"
        },

        {
            img: "https://plus.unsplash.com/premium_photo-1695735927052-a03480eaddd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
            title: "coming soon landing page"
        },

        {
            img: "https://images.unsplash.com/photo-1711861399198-649bc0ddc33f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
            title: "coming soon landing page"
        },

        {
            img: "https://images.unsplash.com/photo-1671988695410-2cb557f013cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "coming soon landing page"
        },

        {
            img: "https://images.unsplash.com/photo-1671988796629-67db919a0418?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "coming soon landing page"
        },

    ]

    return (
        <>
            <div className="flex justify-between px-4 md:px-8 lg:px-16 ">
                <div className="ml-4 md:text-xl lg:text-2xl">
                    <strong>Pick the Website template you love </strong>
                </div>
                <div className="mr-4">
                    <label className="input border-black border-r-0 border-l-0 border-t-0 flex items-center ga border-b-2 rounded-none ">
                        <input type="text" className="grow" placeholder="Search" />
                        <IoSearchOutline className="w-4 h-4 opacity-70" />
                    </label>
                </div>
            </div>

            <div className="navbar bg-base-100 border-t-4 mt-3 gap-4 md:gap-8 px-4 md:px-8 lg:px-16">
                {/* Dropdown menus */}
                <div className='text-start mr-4 flex flex-wrap justify-between'>
                    <div className="dropdown menu menu-horizontal bg-white text-black sm mb-4 md:mb-0">
                        <div tabIndex={0} role="button" className="btn text-sm bg-white border-none text-black">Business & Services <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    {/* Repeat for other dropdown menus */}
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn text-sm  bg-white  border-none text-black">Store <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn text-sm  bg-white  border-none text-black">Creative <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown   menu menu-horizontal bg-white text-black  sm">
                        <div tabIndex={0} role="button" className="btn text-sm  bg-white  border-none text-black">Community <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-wrap gap-7 justify-center">
                    <a href="" className='text-blue-400'>All Templates</a>
                    <h1>|</h1>
                    <a href="">Blank Templates</a>
                    <h1>|</h1>
                    <div className="dropdown menu menu-horizontal bg-white text-black sm">
                        <div tabIndex={0} role="button" className="btn m-1 bg-white border-none text-black">Collections <IoIosArrowDown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bg-slate-100 min-h-screen px-4 md:px-8 lg:px-16">
                <div className="flex justify-between pt-4">
                    <div>
                        <strong className="text-xl lg:text-2xl">All Website Templates</strong>
                    </div>
                    <div className="flex items-center">
                        <span className="hidden md:inline">Sort by :</span>
                        {/* Dropdown for sort */}
                        <div className="dropdown   menu menu-horizontal text-black  sm">
                            <div tabIndex={0} role="button" className="btn text-sm border-none text-black">Recommended <IoIosArrowDown />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 pb-20">
                    {MainCard.map((item, index) => (
                        <div key={index} className="card w-full bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.img} alt="Website Template" className="w-full h-64 object-cover" />
                            </figure>
                            <div className="card-body px-4 py-2">
                                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
