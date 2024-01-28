import React, { useState } from 'react';

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  //const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="dropdown ">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
     hello
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;