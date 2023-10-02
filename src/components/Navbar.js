import React from "react";
import banner from "./public/golf-course.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-center place-items-center h-14">
      {/* JSX content of the component */}
      <img className="w-full h-full object-cover" src={banner} alt="Banner" />
      <span className="absolute w-full h-14 bg-main opacity-50"></span>
      <h1 className="absolute uppercase font-bold text-txt_main">
        ⛳ Welcome to Club Roulette
      </h1>
      {/* Add your HTML/JSX content here */}
    </div>
  );
};

export default Navbar;
