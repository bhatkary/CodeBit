// DropdownButton.js
import React, { useState, useRef, useEffect } from "react";

const DropdownButton = ({ options, color, onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState("Convert code to");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(`Convert code to ${option}`);
    setDropdownVisible(false);
    setSearchTerm(""); // Clear the search term when an option is selected

    // Call the onSelectOption prop function with the selected option
    if (onSelectOption) {
      onSelectOption(option);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
      setSearchTerm(""); // Clear the search term when the dropdown is closed
    }
  };

  const handleSearchChange = () => {
    const newSearchTerm = searchInputRef.current.value.toLowerCase();
    setSearchTerm(newSearchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && filteredOptions.length > 0) {
      handleOptionSelect(filteredOptions[0]);
    }
  };

  const getFilteredOptions = () => {
    if (searchTerm.trim() === "") {
      // If the search term is empty, return all options
      return options;
    } else {
      // Otherwise, filter options based on the search term
      return options.filter((option) =>
        option.toLowerCase().includes(searchTerm)
      );
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredOptions = getFilteredOptions();
  const noValidOptions = filteredOptions.length === 0;

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
          className="absolute mt-2 border-none rounded shadow-md max-h-48 overflow-y-auto" // max-h-48 sets the maximum height with a scrollbar
          style={{
            backgroundColor: `#${color}`,
            right: 0,
            zIndex: 1000, // Set a higher z-index value
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress} // Added onKeyPress event handler
            className="px-4 py-2 border-none focus:outline-none text-gray-700 w-full" // Set text color to dark grey and width to 100%
            ref={searchInputRef}
          />
          <div className="inline-block">
            {noValidOptions ? (
              <div className="px-4 py-2 text-gray-500">
                No valid options found.
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className="px-4 py-2 cursor-pointer transition-colors hover:bg-gray-800 hover:text-white"
                >
                  {option}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
