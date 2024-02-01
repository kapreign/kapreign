import React, { useState } from "react";
import "./imageCardList.css";
import { useNavigate } from "react-router-dom";
const ImageCard = ({
  image,
  title,
  subtitle,
  DetailedContent,
  index,
  cards,
  date,
}) => {
  const navigate = useNavigate();
  // const handleCardClick = () => {
  //   const headingInRoute = title.replace(/\s+/g, '-').toLowerCase(); // Convert heading to kebab case

  //   navigate(`/blogView/${headingInRoute}`, {
  //     state: {
  //       DetailedContent: DetailedContent,
  //       index: index,
  //     },
  //   });
  //   scrollToTop();
  // };

  const handleCardClick = () => {
    const headingInRoute = title.replace(/\s+/g, "-").toLowerCase(); // Convert heading to kebab case
    navigate(`/blog/${headingInRoute}`, {
      state: {
        DetailedContent: DetailedContent,
        index: index,
      },
    });
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' for an instant scroll
    });
  };

  return (
    <div
      className=" w-full md:w-1/3 lg:w-1/3 xl:w-1/3  p-2 h-90 cursor-pointer "
      onClick={() => handleCardClick()}
    >
      <div className=" h-3/4 overflow-hidden  shadow-md  ">
        <img src={require(`../../${image}`)} alt="Card" className="w-full " />
      </div>
      <div className="flex justify-between pt-2 mb-4">
        <h2 className="text-lg font-bold text-white Blogsubheading">
          {" "}
          {DetailedContent?.date}
        </h2>
        <h2 className="text-lg font-bold  text-white Blogsubheading">
          {DetailedContent?.time} min read
        </h2>
      </div>
      <div className=" h-1/4 w-full  flex flex-col bg-black ">
        <h2 className="text-lg font-bold mb-2 text-white text-justify Caseheadinglarge">
          {title}
        </h2>
      </div>
    </div>
  );
};

const ImageCardList = ({ cards, Pagination }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayCards = cards.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="flex flex-wrap ">
      {displayCards.map((card, index) => (
        <ImageCard
          key={index}
          {...card}
          DetailedContent={card}
          index={index}
          cards={cards}
        />
      ))}

      {Pagination && (
        <div className="w-full">
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              // className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
              className="w-10 h-10  cursor-pointer bg-blue-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-gray-600 paginationSubhead">
              {`Page ${currentPage + 1} of ${totalPages}`}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              // className="px-3 py-1 bg-blue-500 text-white rounded-md ml-2"
              className="w-10 h-10 cursor-pointer bg-blue-500 text-white rounded-full flex items-center justify-center ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCardList;
