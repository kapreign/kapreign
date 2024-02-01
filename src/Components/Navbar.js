// import React from "react";
// import logo from "../Assets/Images/kap-logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { useNavigate } from "react-router-dom";
// export default function Navbar(props) {
//   const theme = props.theme;
//   const navigate = useNavigate();
//   return (
//     <div
//       className={`navbar w-full p-3 py-10 shadow-md h-14 flex items-center sm:justify-between"
//        ${theme ? "bg-blacked" : "bg-black"}
//       `}
//     >
//       <div className="container flex items-center justify-between py-5 mx-auto max-w-7xl">
//         <div className="flex items-center justify-between">
//           <img
//             src={logo}
//             alt=""
//             className="h-6 cursor-pointer"
//             onClick={() => navigate("/")}
//           ></img>
//           <nav className="hidden lg:flex lg:items-center lg:ml-auto text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-lightGray">
//             {/* <div
//               onClick={() => navigate("/home")}
//               class="mr-5 font-bold leading-6 text-lightGray hover:text-gray"
//             >
//               Home
//             </div> */}
//             <div
//               onClick={() => navigate("/about")}
//               class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
//             >
//               About Us
//             </div>
//             <div
//               onClick={() => navigate("/caseStudy")}
//               class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
//             >
//               Case Study
//             </div>
//             <div
//               onClick={() => navigate("/services")}
//               class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
//             >
//               Service
//             </div>
//             <div
//               onClick={() => navigate("/blog")}
//               class="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
//             >
//               Blog
//             </div>
//           </nav>
//         </div>

//         <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end cursor-pointer">
//           <div
//             onClick={() => navigate("/contactUs")}
//             className="hidden lg:inline-flex lg:items-center lg:justify-center px-4 py-1.5 text-base font-bold leading-6 text-white whitespace-no-wrap bg-kapblue  shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue  rounded-md"
//           >
//             Contact us
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import logo from "../Assets/Images/kap-logo.png";
import menuicon from "../Assets/Images/menu.png";
import closeicon from "../Assets/Images/close.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const theme = props.theme;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set the breakpoint for mobile here (e.g., 768px)
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMenu = () => {
    if (isMobile) {
      // Render mobile menu (hamburger menu)
      return (
        <div className="relative z-50 flex items-center justify-end">
          <div onClick={handleMenuToggle} className="cursor-pointer lg:hidden">
            {/* Add your mobile menu icon here */}
            {!isMobileMenuOpen && (
              <img
                src={menuicon}
                alt="menuicon"
                className="h-6 cursor-pointer"
              ></img>
            )}
          </div>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center">
              <div className="bg-lightBlack bg-opacity-100 p-8 rounded-lg w-80">
                <div
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  {/* Add your close button icon here */}
                  <img
                    src={closeicon}
                    alt="closeicon"
                    className="h-6 cursor-pointer"
                  ></img>
                </div>
                <div className="text-white text-center z-50">
                  <div
                    onClick={() => {
                      navigate("/about");
                      handleMenuToggle();
                    }}
                    className="text-white hover:text-gray cursor-pointer py-2"
                    style={{ fontSize: "18px" }}
                  >
                    About Us
                  </div>

                  <div
                    className="text-white hover:text-gray cursor-pointer py-2"
                    style={{ fontSize: "18px" }}
                    onClick={() => {
                      navigate("/caseStudy");
                      handleMenuToggle();
                    }}
                  >
                    Case Study
                  </div>
                  <div
                    className="text-white hover:text-gray cursor-pointer py-2"
                    style={{ fontSize: "18px" }}
                    onClick={() => {
                      navigate("/services");
                      handleMenuToggle();
                    }}
                  >
                    Service
                  </div>
                  <div
                    className="text-white hover:text-gray cursor-pointer py-2"
                    style={{ fontSize: "18px" }}
                    onClick={() => {
                      navigate("/blog");
                      handleMenuToggle();
                    }}
                  >
                    Blog
                  </div>
                  <div
                    className="text-white hover:text-gray cursor-pointer py-2"
                    style={{ fontSize: "18px" }}
                    onClick={() => {
                      navigate("/contactUs");
                      handleMenuToggle();
                    }}
                  >
                    Contact us
                  </div>
                  {/* Add other menu items similarly */}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      // Render desktop menu
      return (
        <nav className="hidden lg:flex lg:items-center lg:ml-auto text-base md:mb-0 md:pl-8 md:ml-8 ">
          <div
            onClick={() => navigate("/about")}
            className="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
          >
            About Us
          </div>
          {/* Add other menu items similarly */}
          <div
            onClick={() => navigate("/caseStudy")}
            className="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
          >
            Case Study
          </div>
          <div
            onClick={() => navigate("/services")}
            className="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
          >
            Service
          </div>
          <div
            onClick={() => navigate("/blog")}
            className="mr-5 font-bold leading-6 text-lightGray hover:text-gray cursor-pointer"
          >
            Blog
          </div>
          <div
            onClick={() => navigate("/contactUs")}
            className="px-4 py-1.5 text-base font-bold leading-6 text-white whitespace-no-wrap bg-kapblue shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue rounded-md"
          >
            Contact us
          </div>
        </nav>
      );
    }
  };

  return (
    <div
      className={`navbar w-full p-3 py-10 shadow-md h-14 flex items-center sm:justify-between ${
        theme ? "bg-blacked" : "bg-black"
      }`}
    >
      <div className="container flex items-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex items-center justify-between w-full">
          <img
            src={logo}
            alt=""
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
          {renderMenu()}
        </div>

        {/* <div className="hidden lg:inline-flex items-center w-32 ml-5 space-x-6 lg:justify-end cursor-pointer">
          <div
            onClick={() => navigate("/contactUs")}
            className="px-4 py-1.5 text-base font-bold leading-6 text-white whitespace-no-wrap bg-kapblue shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue rounded-md"
          >
            Contact us
          </div>
        </div> */}
      </div>
    </div>
  );
}
