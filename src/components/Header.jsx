// src/components/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/Logo.png'; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link  } from "react-router-dom";
import {MdKeyboardArrowDown} from "react-icons/md";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Blog", type: "link" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
     "about us","contact us"
    ],
  },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="py-2 px-4 ">{item.name}</a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
        <a href="/" className="py-2 px-4 ">{item.name}</a>
           
            <MdKeyboardArrowDown />
          
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >

            <ul className="flex flex-col shadow-lg rounded-lg">
              {item.items.map((page)=>(
              
                  <li>

                  </li>
               
              ))}
            </ul>
            
          </div>
        </div>
      )}
    </li>
  );
};


const Header= () => {
   const [navIsVisit,setnavIsVisit]=useState(false);
   const navVisibilityHandeler = () => {
    setnavIsVisit((curState)=>{
      return !curState
    });
   };
  return (
    <section>
      <header className="container mx-auto px-2 flex justify-between items-center py-1 text-black font-semibold">
     
          <div className="bg-white rounded-full p-5">
            <img src={logo} alt="logo" className="h-11 w-12 rounded-full" /> 
          </div>

          <div className="lg:hidden z-50">
            {navIsVisit ? (<AiOutlineClose className="w-4 h-4" onClick={navVisibilityHandeler}/>) :(<AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandeler}/>) }
          </div>
      
        <nav className={`${navIsVisit ? "right-0" : "-right-full"} bg-red-800 lg:bg-transparent z-[49] mt-[70px] lg:mt-0  flex flex-col justify-center w-full lg:w-auto lg:justify-end lg:flex-row fixed top-0 bottom-0  lg:static space-x-9 items-center`}>
          <ul className="flex flex-col lg:flex-row gap-y-4 space-x-6 item-center">
        
            {navItemsInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
           
          
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-red-500 px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 lg:duration-200">
            Sign In</button>
        </nav>
      </header>
    </section>
  );
}

export default Header;
