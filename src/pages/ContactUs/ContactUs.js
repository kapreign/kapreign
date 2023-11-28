import React, { useState, useEffect } from "react";
import FreshdeskWidget from "./FreshdeskWidget";
import TopBanner from "../../Components/Topbanner/TopBanner";
import ContactImg from "../../Assets/Images/contact.jpg";

export default function ContactUs() {
  return (
    <div style={{ height: "500px", backgroundColor: "black" }}>
      <TopBanner
        Heading={"Contact Us"}
        subHead={"Get in Touch With Us Today and Let Us Help You"}
        titlestyle="100"
        BgImage={ContactImg}
      />
      <FreshdeskWidget />
    </div>
  );
}
