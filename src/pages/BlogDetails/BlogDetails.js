import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBanner from "../../Components/Topbanner/TopBanner";
import BlogPosts from "../Blog/BlogPost";

export default function BlogDetails() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <TopBanner
          Heading={location?.state?.DetailedContent?.title}
          titlestyle="100"
        />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div style={{ color: "white", textAlign: "left", padding: "50px" }}>
          <div className="mt-5 pt-5">
            <BlogPosts
              currentPage={location?.state?.index}
              DetailedContent={location?.state?.DetailedContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
