import React, { useState } from "react";
import { faqData } from "../faqData.js";
import Accordion from "./Accordion.jsx";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <div className="p-4 rounded-lg md:mt-10 mt-14 ">
      <h1 className="flex text-xl justify-center">FAQ</h1>

      <div className="flex justify-center  md:m-16 mt-16 ">
        <ul className="md:my-0 md:w-[60rem] ">
          {faqData.map((faq, index) => (
            <li
              key={index}
              className="bg-steal-200 border-b border-slate-300"
            >
              <Accordion
                question={faq.question}
                answer={faq.answer}
                key={index}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FAQ;
