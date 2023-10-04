import React, { useState } from "react";
import del from "./public/delete.png";

const SpinningWheel = ({ initialOptions }) => {
  // State to manage the options array
  const [options, setOptions] = useState(initialOptions);

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
    const updatedOptions = [...options, newClub];
    setOptions(updatedOptions);
    setNewClub("");
    // console.log(options);

    return false;
  };

  // Handle Delete Club
  const handleDelete = (event) => {
    const clickedDiv = event.currentTarget;
    const optionToDelete = clickedDiv.getAttribute("data-option");
    // console.log(optionToDelete);
    var updatedOptions = [...options];
    var index = updatedOptions.indexOf(optionToDelete);
    // console.log(index);
    if (index !== -1) {
      updatedOptions.splice(index, 1);
      setOptions(updatedOptions);
    }
  };

  return (
    <div className="flex flex-col bg-bg_main h-screen text-txt_main">
      <h1 className="my-4">Club Options:</h1>
      {/* The Wheel style={{ transform: `rotateX(${spinNumber}deg)` }}*/}
      <div className="flex flex-wrap mx-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="relative bg-bg_accent border-white border-l-2 rounded-r-md px-2 py-1 mx-2 mb-4"
          >
            <div
              onClick={handleDelete}
              className="rounded-full bg-white absolute -left-[0.55rem] -top-2 p-1"
              data-option={option}
            >
              <img className="w-2 h-2" src={del} alt="Delete" />
            </div>
            {option}
          </div>
        ))}
      </div>

      {/* Button to spin the wheel */}
      <button
        className="bg-bg_button text-txt_accent rounded-md mt-2 mx-auto px-8 py-2"
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
          placeholder="Enter additional clubs"
          onChange={handleNewClubChange}
          value={newClub}
        />
        <button
          type="submit"
          className="bg-bg_button text-txt_accent rounded-md mt-2 mx-auto px-8 py-2"
        >
          Add Club
        </button>
      </form>
    </div>
  );
};

export default SpinningWheel;
