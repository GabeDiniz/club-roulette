import React, { useState } from "react";

const SpinningWheel = ({ options }) => {
  // State to track the selected option and rotation angle
  const [selectedOption, setSelectedOption] = useState(null);
  const [spinNumber, setSpinNumber] = useState(0);

  const spinWheel = () => {
    // Calculate a random angle to rotate the wheel
    const randomNumber = Math.floor(Math.random() * options.length);
    console.log(randomNumber);
    setSpinNumber(randomNumber);

    // const numOptions = options.length;
    // const optionIndex = Math.floor((randomNumber % 360) / (360 / numOptions));
    // const optionIndex = Math.floor(randomNumber);
    setSelectedOption(options[randomNumber]);
  };

  return (
    <div className="bg-main h-screen text-white">
      {/* The Wheel style={{ transform: `rotateX(${spinNumber}deg)` }}*/}
      <div className="wheel">
        {options.map((option, index) => (
          <div key={index} className="wheel-option">
            {option}
          </div>
        ))}
      </div>
      {/* Button to spin the wheel */}
      <button onClick={spinWheel}>Spin</button>
      {/* Display the selected option */}
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
      <p>Debugging Random Number: {spinNumber}</p>
    </div>
  );
};

export default SpinningWheel;
