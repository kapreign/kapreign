import React from "react";
import logo from "../Assets/Images/kap-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const theme = props.theme;
  const navigate = useNavigate();
  return (
    <div
      className={`navbar w-full p-3 py-10 shadow-md h-14 flex items-center sm:justify-between"
       ${theme ? "bg-blacked" : "bg-black"}
      `}
    >
      <div className="container flex items-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt=""
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
          <nav className="hidden lg:flex lg:items-center lg:ml-auto text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-lightGray">
            {/* <div
              onClick={() => navigate("/home")}
              class="mr-5 font-bold leading-6 text-lightGray hover:text-gray"
            >
              Home
            </div> */}
            <div
              onClick={() => navigate("/about")}
              class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => navigate("/caseStudy")}
              class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
            >
              Case Study
            </div>
            <div
              onClick={() => navigate("/services")}
              class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
            >
              Service
            </div>
            <div
              onClick={() => navigate("/blog")}
              class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
            >
              Blog
            </div>
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end cursor-pointer">
          <div
            onClick={() => navigate("/contactUs")}
            className="hidden lg:inline-flex lg:items-center lg:justify-center px-4 py-1.5 text-base font-bold leading-6 text-lightGray whitespace-no-wrap bg-gray  shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
          >
            Contact us
          </div>
          {/* <button
            onClick={props.changeTheme}
            className={`relative inline-flex items-center justify-between ml-8 px-2 pl-2 pr-2 py-2 overflow-hidden font-md text-sm 
   rounded-full shadow-md group" ${
     theme ? "text-white border-white bg-blue" : "text-white bg-gray"
   }`}
          >
            {theme ? (
              <FontAwesomeIcon
                icon={solid("sun")}
                class="w-4 h-4 "
                bounce
                color="white"
              />
            ) : (
              <FontAwesomeIcon
                icon={solid("moon")}
                className="w-4 h-4  "
                bounce
                color="white"
              />
            )}
          </button>
          <button
            onClick={props.menuOpen}
            className={`lg:hidden relative inline-flex items-center justify-between ml-8 px-2 pl-2 pr-2 py-2 overflow-hidden font-md text-sm 
   rounded-full shadow-md group" ${
     theme ? "text-white border-white bg-blue" : "text-white bg-gray"
   }`}
          >
            <FontAwesomeIcon
              icon={solid("bars")}
              className="w-4 h-4 "
              bounce
              color="white"
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
// eslint-disable-next-line no-lone-blocks
{
  /* <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden bg-gray hover:bg-gray">
    
    <svg  onClick={props.menuOpen} className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
    </svg>
    <svg className={`hidden w-6 h-6 ${theme ? "bg-white" : "bg-black"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  
</button> */
}
