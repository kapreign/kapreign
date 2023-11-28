import React, { useState, useEffect } from "react";
import blogPostsData from "./blogPosts.json"; // Import the JSON data

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
          {/* <h1
            className="text-3xl font-bold mb-4 Caseheadinglarge"
            style={{ textAlign: "center" }}
          >
            {currentPost.title}
          </h1> */}
          <div className="text-white-700 text-lg ">
            <section>
              <h2 className="text-2xl font-bold mb-2">Introduction</h2>
              <p className="Casesubheading">
                {currentPost.content.Introduction}
              </p>
            </section>
            {currentPost.content.Sections.map((section, index) => (
              <section key={index} className="mt-4">
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="Casesubheading">{section.content}</p>
              </section>
            ))}
            <section className="mt-4">
              <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
              <p className="Casesubheading">{currentPost.content.Conclusion}</p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
