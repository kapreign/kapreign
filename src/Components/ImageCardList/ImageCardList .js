import React, { useState } from "react";
import "./imageCardList.css";
import { useNavigate } from "react-router-dom";
const ImageCard = ({ image, title, subtitle, DetailedContent, index }) => {
  const navigate = useNavigate();
  console.log(image, "image");

  return (
    <div
      className="relative w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4"
      onClick={() =>
        navigate("/blogView", {
          state: {
            DetailedContent: DetailedContent,
            key: index,
          },
        })
      }
    >
      <div className="relative overflow-hidden rounded-lg shadow-md h-80">
        <img
          src={require(`../../${image}`)}
          alt="Card"
          className="w-full h-auto opacity-50"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-lg font-bold mb-2 text-white Caseheadinglarge">
            {title}
          </h2>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const ImageCardList = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 4;
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
    <div className="flex flex-wrap mx-4">
      {displayCards.map((card, index) => (
        <ImageCard key={index} {...card} DetailedContent={card} index={index} />
      ))}
      <div className="w-full">
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            // className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2"
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
          <span className="text-gray-600">
            {`Page ${currentPage + 1} of ${totalPages}`}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            // className="px-3 py-1 bg-blue-500 text-white rounded-md ml-2"
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center ml-2"
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
    </div>
  );
};

export default ImageCardList;
