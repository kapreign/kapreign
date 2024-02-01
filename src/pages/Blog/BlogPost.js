import React, { useState, useEffect } from "react";
import blogPostsData from "./blogPosts.json"; // Import the JSON data
import "./BlogPost.css";
import ImageCardList from "../../Components/ImageCardList/ImageCardList ";
const BlogPosts = ({ currentPage, DetailedContent }) => {
  const [currentPost, setCurrentPost] = useState(null);
  const [nextCards, setNextCards] = useState([]);
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

  useEffect(() => {
    if (currentPage !== null) {
      const remainingCards = blogPostsData
        .filter((_, index) => index !== currentPage)
        .slice(currentPage, currentPage + 3);
      setNextCards(remainingCards);
    }
  }, [currentPage]);

  return (
    <div className="">
      <div className="flex items-center justify-center ">
        {currentPost && (
          <div className="max-w-2xl p-4">
            <div className="text-white-700 text-lg">
              <div className="columnStyle">
                <h2 className="text-2xl font-bold mb-3 BlogHead">
                  Introduction
                </h2>
                <p className="BlogSubheading text-lg">
                  {currentPost.content.Introduction}
                </p>
              </div>
              {currentPost.content.Sections.map((section, index) => (
                <div key={index} className="mt-8 columnStyle">
                  <h2 className="text-2xl font-bold mb-3 BlogHead">
                    {section.title}
                  </h2>
                  <p className="BlogSubheading text-lg">{section.content}</p>
                </div>
              ))}
              <div className="mt-6 columnStyle">
                <h2 className="text-2xl font-bold mb-3 BlogHead">Conclusion</h2>
                <p className="BlogSubheading text-lg">
                  {currentPost.content.Conclusion}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="divide-y divide-blue-700 divide-dashed hover:divide-solid"></div>
      <div className="mt-14 divide-y divide-blue-700 divide-dashed hover:divide-solid">
        <div className="blogHeadingText pb-2">More Blogs</div>
      </div>
      <div className="md:px-10">
        <ImageCardList cards={nextCards} Pagination={false} />
      </div>
    </div>
  );
};

export default BlogPosts;
