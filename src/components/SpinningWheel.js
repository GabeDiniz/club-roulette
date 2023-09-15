import React, { useState } from "react";

const SpinningWheel = ({ options }) => {
  // State to track the selected option and rotation angle
  const [selectedOption, setSelectedOption] = useState(null);
  // const [spinNumber, setSpinNumber] = useState(0);

  const spinWheel = () => {
    // Calculate a random angle to rotate the wheel
    const randomNumber = Math.floor(Math.random() * options.length);
    console.log(randomNumber);
    // setSpinNumber(randomNumber);

    // const numOptions = options.length;
    // const optionIndex = Math.floor((randomNumber % 360) / (360 / numOptions));
    // const optionIndex = Math.floor(randomNumber);
    setSelectedOption(options[randomNumber]);
  };

  return (
    <div className="flex flex-col bg-main h-screen text-white">
      <h1 className="mt-4">Club Options:</h1>
      {/* The Wheel style={{ transform: `rotateX(${spinNumber}deg)` }}*/}
      <div className="flex flex-wrap border border-l-pink-500">
        {options.map((option, index) => (
          <div key={index} className="mx-2">
            {option}
          </div>
        ))}
      </div>

      {/* Button to spin the wheel */}
      <button onClick={spinWheel}>Spin</button>

      {/* Display the club */}
      {selectedOption && (
        <p className="font-bold text-lg">Club: {selectedOption}</p>
      )}
      {/* <p>Debugging Random Number: {spinNumber}</p> */}
    </div>
  );
};

export default SpinningWheel;
