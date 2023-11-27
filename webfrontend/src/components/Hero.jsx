// Hero.js
import React, { useState } from "react";
import Typed from "react-typed";
import DropdownButton from "./DropdownButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const RegularButton = ({ onClick, color }) => (
  <button
    onClick={onClick}
    style={{ backgroundColor: `#${color}`, color: "#FF5349" }}
    className="py-2 px-4 rounded focus:outline-none flex items-center"
  >
    <FontAwesomeIcon icon={faPlay} className="text-2xl mt-4 animate-bounce" />
  </button>
);

const Hero = () => {
  const dropdownOptions = [
    "English",
    "Psuedo-Code",
    "Python",
    "Java",
    "C++",
    "C#",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Swift",
    "Go",
    "Ruby",
    "Kotlin",
    "Rust",
    "Objective-C",
    "Scala",
  ];

  const [inputValue, setInputValue] = useState(""); // State to track the input value
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const handleRegularButtonClick = () => {
    // Call the function with input value and selected option
    console.log(
      "Regular button clicked with input:",
      inputValue,
      "and option:",
      selectedOption
    );

    // Add your logic here
  };

  return (
    <div className="text-white font-sans min-h-screen overflow-hidden mt-0">
      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-start">
        <div className="flex items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Learning a new language? Migrating a library? Convert any code to
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#FF5349]"
              strings={["Python", "Java", "C++", "English"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>

        {/* Input and Output Text Boxes with Same Size */}
        <div className="flex gap-4 mt-4">
          <div className="w-[45%] border rounded-md overflow-hidden mt-2">
            <textarea
              className="w-full h-full border-none outline-none p-4 text-black text-xl placeholder-text-xl font-sans"
              rows="8"
              placeholder="Enter Code"
              style={{ resize: "none" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div
            className="w-[45%] p-4 border rounded-md text-gray-400 text-xl placeholder-text-xl bg-white font-sans mt-2 ml-auto"
            style={{
              minHeight: "150px",
              textAlign: "left",
              lineHeight: "1.5",
            }}
          >
            Converted Code
          </div>
        </div>

        {/* Move the DropdownButton and RegularButton down and change their colors */}
        <div className="mt-2 flex items-center justify-center">
          <DropdownButton
            options={dropdownOptions}
            color="FF5349"
            onSelectOption={(option) => setSelectedOption(option)}
          />
          <RegularButton
            label="Regular Button"
            onClick={handleRegularButtonClick}
            color="000"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
