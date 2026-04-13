import React from 'react';
import { NavLink } from 'react-router';
import img from "../../assets/logo.png"
import { FaHome } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';



const Navbar = () => {
    return (
      <div className="bg-white  shadow py-2 ">
        <nav className=" flex flex-wrap justify-between items-center max-w-11/12 mx-auto   py-2 ">
          <img src={img} alt="" className="" />
          <ul className="flex flex-wrap gap-5">
            <li className="">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-bold p-2 flex items-center gap-2 ${isActive ? "bg-[#244D3F]  rounded border  text-white " : "border rounded border-[#244D3f50]"}`
                }
              >
                Home <FaHome></FaHome>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  `font-bold p-2 flex items-center gap-2 ${isActive ? "bg-[#244D3F]  rounded border  text-white " : "border rounded border-[#244D3f50]"}`
                }
              >
                Timeline <IoTimeOutline />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/stats"}
                className={({ isActive }) =>
                  `font-bold p-2 flex items-center gap-2 ${isActive ? "bg-[#244D3F]  rounded border  text-white " : "border rounded border-[#244D3f50]"}`
                }
              >
                Stats <ImStatsDots />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;