import React, { useState, useRef, useEffect } from "react";

const DropdownButton = ({ options, color }) => {
  const [selectedOption, setSelectedOption] = useState("Convert code to");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(`Convert code to ${option}`);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block mt-2" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        style={{ backgroundColor: `#${color}`, color: "#fff" }}
        className="py-2 px-4 rounded focus:outline-none font-bold"
      >
        {selectedOption} <span className="ml-1">&#9660;</span>
      </button>
      {isDropdownVisible && (
        <div
          className="absolute mt-2 border-none rounded shadow-md" // Remove the border
          style={{
            backgroundColor: `#${color}`,
            right: 0, // Align the dropdown to the right
          }}
        >
          <div className="inline-block">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="px-4 py-2 cursor-pointer transition-colors hover:bg-gray-800 hover:text-white"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
