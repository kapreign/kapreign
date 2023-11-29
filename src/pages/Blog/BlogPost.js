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
            <section className="columnStyle">
              <h2 className="text-2xl font-bold mb-2 BlogHead">Introduction</h2>
              <p className="BlogSubheading">
                {currentPost.content.Introduction}
              </p>
            </section>
            {currentPost.content.Sections.map((section, index) => (
              <section key={index} className="mt-4 columnStyle">
                <h2 className="text-2xl font-bold mb-2 BlogHead">{section.title}</h2>
                <p className="BlogSubheading">{section.content}</p>
              </section>
            ))}
            <section className="mt-4 columnStyle">
              <h2 className="text-2xl font-bold mb-2 BlogHead">Conclusion</h2>
              <p className="BlogSubheading">{currentPost.content.Conclusion}</p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
