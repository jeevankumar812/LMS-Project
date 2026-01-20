import React from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Left: Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop Right Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-600">
        { user && <>
        <button className="hover:text-black">Become Educator</button> |
        <Link to="/my-enrollments" className="hover:text-black">My Enrollments</Link>
        </>
}   
        {user ? <UserButton/> :
        <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Create Account
          </button>
        } 
       
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3 text-gray-600">
        
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
            { user && <>
        <button className="hover:text-black">Become Educator</button> |
        <Link to="/my-enrollments" className="hover:text-black">My Enrollments</Link>
        </>
            }  
        </div>

         {
            user ? <UserButton/> : <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" />
          </button>
         }   

        
      </div>
    </div>
  );
};

export default Navbar;
