import React, { useState, useEffect, useRef } from "react";
import { loadFull } from "tsparticles";
import Carousel from "../../Components/Carousel";
import AboutCard from "../../Components/AboutCard/AboutCard";
import vision from "../../Assets/Images/vision.svg";
import challenge from "../../Assets/Images/challenge.jpg";
import globe from "../../Assets/Images/globe.jpg";

import Challenges from "../../Assets/Images/Challenge (2).jpg";
import Futurestep from "../../Assets/Images/futurestep.jpg";
import Solution from "../../Assets/Images/solution.jpg";
import "./styles.css";
import AnimatedCard from "../../Components/AnimatedCard";
import { useLocation } from "react-router-dom";
import MultiLayerParallax from "../../Components/MultilayerParallax/multilayerParalax";
import blogPostsData from "./blogPosts.json"; // Import the JSON data
import BlogPosts from "./BlogPost";
import TopBanner from "../../Components/Topbanner/TopBanner";
import ImageCardList from "../../Components/ImageCardList/ImageCardList ";

export default function Blog({ children }) {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const blogPostsRef = useRef(null); // Reference to the blog posts section
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Scroll smoothly to the blog posts section when changing pages
    if (blogPostsRef.current) {
      blogPostsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPostsData.length / postsPerPage);

  const Pagination = ({ totalPages, currentPage, onChange }) => {
    const handlePageChange = (page) => {
      onChange(page);
    };

    return (
      <div className="flex items-center justify-center mt-8">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${
                currentPage === page ? "bg-blue-700" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };



  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <TopBanner Heading="Blog" titlestyle="100" />
      </div>

      <div className="container mx-auto py-8">
        <ImageCardList cards={blogPostsData} />
      </div>
      {/* <div style={{ backgroundColor: "black" }}>
        <div style={{ color: "white", textAlign: "left", padding: "50px" }}>
          <div className="mt-5 pt-5" ref={blogPostsRef}>
            <BlogPosts currentPage={currentPage} />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
