import { useState } from "react";
import Data from "../constant/data.js";
import Product from "./Product";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="flex flex-wrap flex-col-2 relative z-20  justify-center align-start">
        <section className="lg:w-1/2 sm:w-full relative md:w-full flex justify-center flex-rows flex-start px-14 ">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className=" Tab-ul flex  mb-px text-sm  font-bold  text-center sm:flex justify-center lg:flex  "
              id="default-tab"
              role="tablist"
            >
              <li className="me-2 " role="presentation">
                <button
                  className={`inline-block p-2 px-12 border-b-4  rounded-t-lg ${
                    activeTab === "about"
                      ? "border-purple-800"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("about")}
                  role="tab"
                  aria-controls="about"
                  aria-selected={activeTab === "about"}
                >
                  ABOUT
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block p-2 px-12 border-b-4 rounded-t-lg ${
                    activeTab === "instructor"
                      ? "border-purple-800"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("instructor")}
                  role="tab"
                  aria-controls="instructor"
                  aria-selected={activeTab === "instructor"}
                >
                  INSTRUCTOR
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block p-2 px-12  border-b-4 rounded-t-lg ${
                    activeTab === "review"
                      ? "border-purple-800"
                      : "border-transparent"
                  }`}
                  onClick={() => handleTabClick("review")}
                  role="tab"
                  aria-controls="review"
                  aria-selected={activeTab === "review"}
                >
                  REVIEW
                </button>
              </li>
            </ul>

            <div id="default-tab-content">
              <div
                className={`p-4 rounded-lg ${
                  activeTab === "about"
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "hidden"
                }`}
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <h2 className="text-2xl font-bold ">
                  {Data.course.about.title}
                </h2>
                <div className="pt-4 pb-4">{Data.course.about.description}</div>
                <h2 className="text-2xl font-bold ">
                  {Data.course.whatToExpect.title}
                </h2>
                <div
                  className="pt-4 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: Data.course.whatToExpect.description,
                  }}
                ></div>
                <h2 className="text-2xl font-bold ">
                  {Data.course.keyTopics.title}
                </h2>
                <div
                  className="pt-4 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: Data.course.keyTopics.description,
                  }}
                ></div>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  activeTab === "instructor"
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "hidden"
                }`}
                id="instructor"
                role="tabpanel"
                aria-labelledby="instructor-tab"
              >
                <h2 className="text-2xl font-bold ">About the Instructor</h2>
                <div className="pt-4 pb-4">{Data.course.about.description}</div>
                <h2 className="text-2xl font-bold ">
                  {Data.course.whatToExpect.title}
                </h2>
                <div
                  className="pt-4 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: Data.course.whatToExpect.description,
                  }}
                ></div>
                <h2 className="text-2xl font-bold ">
                  {Data.course.keyTopics.title}
                </h2>
                <div
                  className="pt-4 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: Data.course.keyTopics.description,
                  }}
                ></div>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  activeTab === "review"
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "hidden"
                }`}
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <h2 className="text-2xl font-bold ">Review</h2>
                <div className="pt-4 pb-4">{Data.course.about.description}</div>
                <h2 className="text-2xl font-bold ">
                  {Data.course.whatToExpect.title}
                </h2>
                <div
                  className="pt-4 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: Data.course.whatToExpect.description,
                  }}
                ></div>
                <h2 className="text-2xl font-bold ">
                  {Data.course.keyTopics.title}
                </h2>
                <div
                  className="pt-4 pb-4"
                  dangerouslySetInnerHTML={{
                    __html: Data.course.keyTopics.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:w-1/2 -mt-8 z-20 sm:z-">
          <Product />
        </div>
      </div>
    </>
  );
};

export default Tabs;
