import React from "react";
import "../../pages/About.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function AboutCard({
  photo,
  cardPosition,
  heading,
  content,
  scrollY,
  animationCardVariants,
  limit,
  path,
  DetailedContent,
  readButton,
  ScrollReset,
}) {
  const navigate = useNavigate();
  return (
    <div>
      {cardPosition === "left" ? (
        <div className=" w-full  p-8  cursor-pointer flex flex-wrap  ">
          <div className=" md:w-1/3 sm:w-full">
            <img src={photo} alt="AboutCard" />
          </div>
          <div
          
            className="w-2/3 CardContent    "
          >
            <motion.div
              initial="outOfView"
              animate={scrollY > limit ? "inView" : "outOfView"}
              variants={animationCardVariants}
            >
              <div className="CardHeading">{heading}</div>
              <div className="AboutCardDetails">{content}</div>

              {readButton && (
                <div style={{ display: "flex", justifySelf: "flex-start" }}>
                  <button
                    type="button"
                    class="text-white hover:text-blue border-2 border-white-800 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800 text-center inline-flex items-center "
                    onClick={() => (
                      navigate(path, {
                        state: {
                          heading: heading,
                          DetailedContent: DetailedContent,
                          photo:photo
                        },
                      }),
                      ScrollReset()
                    )}
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className=" w-full  p-8  cursor-pointer flex flex-wrap  ">
          <div
          
            className="w-2/3 CardContent "
          >
            <motion.div
              initial="outOfView"
              animate={scrollY > limit ? "inView" : "outOfView"}
              variants={animationCardVariants}
            >
              <div className="CardHeading">{heading}</div>
              <div className="AboutCardDetails">{content}</div>

              {readButton && (
                <div style={{ display: "flex", justifySelf: "flex-start" }}>
                  <button
                    type="button"
                    class="text-white hover:text-blue border-2 border-white-800 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800 text-center inline-flex items-center "
                    onClick={() => (
                      navigate(path, {
                        state: {
                          heading: heading,
                          DetailedContent: DetailedContent,
                          photo:photo
                        },
                      }),
                      ScrollReset()
                    )}
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
          <div  className=" md:w-1/3 sm:w-full">
            <img src={photo} alt="AboutCard" />
          </div>
        </div>
      )}

      {/* <div className="Card">
        {cardPosition === "left" && (
          <img className="AboutCardImage" src={photo} alt="AboutCard" />
        )}

        <div className="CardContent">
          <motion.div
            initial="outOfView"
            animate={scrollY > limit ? "inView" : "outOfView"}
            variants={animationCardVariants}
          >
            <div className="CardHeading">{heading}</div>
            <div className="AboutCardDetails">{content}</div>

            {readButton && (
              <div style={{ display: "flex", justifySelf: "flex-start" }}>
                <button
                  type="button"
                  class="text-white hover:text-blue border-2 border-white-800 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800 text-center inline-flex items-center "
                  onClick={() => (
                    navigate(path, {
                      state: {
                        heading: heading,
                        DetailedContent: DetailedContent,
                      },
                    }),
                    ScrollReset()
                  )}
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {cardPosition === "right" && (
          <img className="AboutCardImage" src={photo} alt="" />
        )}
      </div> */}
    </div>
  );
}
