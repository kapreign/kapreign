import React from "react";
import "./styles.css";
import blogPostsData from "./blogPosts.json"; // Import the JSON data
import TopBanner from "../../Components/Topbanner/TopBanner";
import ImageCardList from "../../Components/ImageCardList/ImageCardList ";
import BlogImg from "../../Assets/Images/blog.svg"

export default function Blog() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <TopBanner Heading="Blog" 
        titlestyle="100"  
        BgImage={BlogImg}
        SideHead={false}
        />
      </div>
      <div className="container mx-auto py-8">
        <ImageCardList cards={blogPostsData} Pagination={true} />
      </div>
    </div>
  );
}
