import React, { useState, useEffect } from "react";
import blogPostsData from "./blogPosts.json"; // Import the JSON data
import "./BlogPost.css"
const BlogPosts = ({ currentPage, DetailedContent }) => {
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    // Calculate the index of the current post based on the currentPage
    const postIndex = currentPage - 1;
    if (blogPostsData[postIndex]) {
      setCurrentPost(blogPostsData[postIndex]);
    }
  }, [currentPage]);

  useEffect(() => {

    if (DetailedContent) {
      setCurrentPost(DetailedContent);
    }
  }, [DetailedContent]);

  console.log(currentPost, "currentPost");

  return (
    <div className="">
      {currentPost && (
        <div>
          <div className="text-white-700 text-lg ">
            <div className="columnStyle">
              <h2 className="text-2xl font-bold mb-2 BlogHead">Introduction</h2>
              <p className="BlogSubheading">
                {currentPost.content.Introduction}
              </p>
            </div>
            {currentPost.content.Sections.map((section, index) => (
              <div key={index} className="mt-4 columnStyle">
                <h2 className="text-2xl font-bold mb-2 BlogHead">{section.title}</h2>
                <p className="BlogSubheading">{section.content}</p>
              </div>
            ))}
            <div className="mt-4 columnStyle">
              <h2 className="text-2xl font-bold mb-2 BlogHead">Conclusion</h2>
              <p className="BlogSubheading">{currentPost.content.Conclusion}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
