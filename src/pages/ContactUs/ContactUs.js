import React, { useState, useEffect } from "react";
import FreshdeskWidget from "./FreshdeskWidget";
import TopBanner from "../../Components/Topbanner/TopBanner";
import ContactImg from "../../Assets/Images/contact.jpg";
import ContactUs from "../../Components/ContactUs";
import pinicon from "../../Assets/Images/pin-map.svg";
import mailicon from "../../Assets/Images/mail.svg";
import phoneicon from "../../Assets/Images/phone-call.svg";

export default function ContactUsMain() {
  return (
    <div style={{ height: "500px", backgroundColor: "black" }}>
      <TopBanner
        Heading={"Contact Us"}
        subHead={"Get in Touch With Us Today and Let Us Help You"}
        titlestyle="100"
        BgImage={ContactImg}
      />
      <div className="relative pt-24 pb-36 bg-white overflow-hidden bg-blacked">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-black bg-opacity-90 md:border-r-4 border-indigo-500">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-black text-white  rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    {/* <Icon
                      icon="system-uicons:mail"
                      height={50}
                      width={50}
                      classname="text-white hover:text-lightGray p-3 bg-white hover:bg-gray rounded-full"
                    ></Icon> */}
                    <img className="" src={mailicon} alt="mail" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug text-white connectedSubHead">
                  Send Email
                </h3>
                <p className="font-medium leading-relaxed text-white connectedSubHead">
                  info@kapreign.com
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-black bg-opacity-90 md:border-r-4 shadow-11xl border-indigo-500">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-black text-white rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <img className="" src={phoneicon} alt="phoneicon" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug text-white connectedSubHead">
                  Call Us
                </h3>
                <p className="font-medium leading-relaxed text-white connectedSubHead">
                  +91 9746574532
                </p>
                <p className="font-medium leading-relaxed text-white connectedSubHead">
                  +91 7907226404
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-black bg-opacity-90 ">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-black">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <img className="" src={pinicon} alt="address" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug text-white connectedSubHead">
                  Address
                </h3>
                <p className="font-medium max-w-xs mx-auto leading-relaxed text-white connectedSubHead">
                  Vengoor, Angamaly, Kerala, 683572
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FreshdeskWidget />
    </div>
  );
}
