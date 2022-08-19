import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./Landing.css";
import Cards from "../Components/Cards";

export default function Landing(props) {

const theme = props.theme
  return (
    <div className={`h-auto w-full" ${theme ? "bg-blaack" : "bg-white"}`}>

      <div className=" flex flex-col ">
        <div className="m-3  p-6">
          <span className="font-rale font-black md:text-5xl text-2xl text-kap text-left">
            Collaborate
          </span>
          <span className={`font-rale font-black md:text-5xl text-2xl  text-left" ${theme ? 'text-white' :'text-black'}`}>
            {" "}
            for your digital experience
          </span>
        </div>

        <div className=" flex md:wrap md:justify-around overflow-auto">
          <Cards
            title="Web Application development"
            technologies="Angular | React js | Veu JS | Node js | Python | Wordpress |"
            cardNo={1}
            cardIcon={
              <FontAwesomeIcon icon={brands("angular")} bounce color="white" />
            }
          />
          <Cards
            title="Mobile-App development"
            technologies="Angular | React js | Veu JS | Node js | Python | Wordpress |"
            cardNo={2}
            cardIcon={
              <FontAwesomeIcon
                icon={brands("app-store-ios")}
                bounce
                color="white"
              />
            }
          />
          <Cards
            title="Digital Marketing / SEO"
            technologies="Angular | React js | Veu JS | Node js | Python | Wordpress |"
            cardNo={3}
            cardIcon={
              <FontAwesomeIcon
                icon={solid("money-bill-trend-up")}
                bounce
                color="white"
              />
            }
          />
          <Cards
            title="Business process outsourcing"
            technologies="Angular | React js | Veu JS | Node js | Python | Wordpress |"
            cardNo={4}
            cardIcon={
              <FontAwesomeIcon icon={solid("headset")} bounce color="white" />
            }
          />
        </div>
      </div>
    </div>
  );
}
<a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
<span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
<span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
<span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Button Text</span>
</a>