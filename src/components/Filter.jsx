import React, { useState } from 'react';

const filter = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    // Add more options as needed
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption ? options.find(option => option.id === selectedOption).label : 'Select an option'}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 011.4-1.42L10 10.58l3.3-3.3a1 1 0 011.4 1.42l-4 4a1 1 0 01-.7.3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {/* Dropdown menu, show/hide based on menu state */}
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {options.map(option => (
            <label key={option.id} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              <input
                type="radio"
                name="option"
                value={option.id}
                onChange={() => handleOptionChange(option.id)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default filter;
