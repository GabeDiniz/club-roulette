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

  // Add Club Functionality
  const [newClub, setNewClub] = useState("");
  const handleNewClubChange = (event) => {
    setNewClub(event.target.value);
  };

  const handleAddClub = (event) => {
    event.preventDefault();
    options.push(newClub);
    console.log(options);

    return false;
  };

  return (
    <div className="flex flex-col bg-main h-screen text-white">
      <h1 className="my-4">Club Options:</h1>
      {/* The Wheel style={{ transform: `rotateX(${spinNumber}deg)` }}*/}
      <div className="flex flex-wrap mx-1">
        {options.map((option, index) => (
          <div
            key={index}
            className=" bg-rose-400 border-white rounded-md border-b-2 px-2 py-1 mx-2 mb-2"
          >
            {option}
          </div>
        ))}
      </div>

      {/* Button to spin the wheel */}
      <button
        className="bg-rose-600 border border-white rounded-md mt-2 mx-auto px-8 py-2 hover:bg-rose-800"
        onClick={spinWheel}
      >
        Spin
      </button>

      {/* Display the club */}
      {selectedOption && (
        <p className="font-bold text-lg mt-4">Club: {selectedOption}</p>
      )}
      {/* <p>Debugging Random Number: {spinNumber}</p> */}
      <form className="flex flex-col" onSubmit={handleAddClub}>
        <input
          className="mt-8 h-8 mx-auto px-2 rounded-md border-2 border-white bg-black bg-opacity-40 focus:border-main"
          type="text"
          id="newclub"
          name="newclub"
          placeholder="Add Club"
          onChange={handleNewClubChange}
        />
        <button
          type="submit"
          className="bg-rose-600 border border-white rounded-md mt-2 mx-auto px-8 py-2 hover:bg-rose-800"
          // onClick={}
        >
          Add Club
        </button>
      </form>
    </div>
  );
};

export default SpinningWheel;
