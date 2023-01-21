import React from "react";
import banners from "../Assets/Images/frame.webp";

export default function Banr(props) {
  const theme = props.theme;
  return (
    <div className={`relative ${theme ? "bg-lightBlack" : "bg-offWhite"}`}>
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-auto h-full"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt=""
        />
      </div>

      <section className="relative py-12 sm:py-16 lg:py-14 lg:pb-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div
                className={`text-center lg:text-left ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                <h1 className="font-rale md:text-4xl text-2xl font-bold md:text-center text-left leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Created by Passion, Delivered with Profession.
                </h1>
                <p className="mt-2 text-lg md:text-center text-left text-gray-600 sm:mt-8 font-inter">
                  Young, Passionate and innovative team capable of executing
                  quality and advanced solutions to make unique and resonating
                  business success.
                </p>

                <div class="relative flex flex-col sm:flex-row sm:space-x-4 mt-8 sm:mt-10 justify-center">
                  <a
                    href="https://wa.me/9497656243"
                    class="flex items-center w-full px-10 z-50 py-3 mb-3 text-lg text-white bg-blue rounded-md sm:mb-0 hover:bg-lightBlue sm:w-auto"
                  >
                    Contact us
                  </a>
                  <a
                    href="#_"
                    class="flex items-center px-10 py-3 text-white bg-gray rounded-md hover:bg-lightGray hover:text-white"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img className="md:w-full w-4/5" src={banners} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
