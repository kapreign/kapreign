import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBanner from "../../Components/Topbanner/TopBanner";
import BlogPosts from "../Blog/BlogPost";

export default function BlogDetails({ key }) {
  const [currentPage, setCurrentPage] = useState(1);
  //   const blogPostsRef = useRef(null); // Reference to the blog posts section
  const location = useLocation();
  useEffect(() => {
    setCurrentPage(key);
  }, [key]);

  useEffect(() => {
    console.log("scrolled top")
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
              currentPage={currentPage}
              DetailedContent={location?.state?.DetailedContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
