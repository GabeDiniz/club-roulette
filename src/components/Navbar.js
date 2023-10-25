import React from "react";
// import banner from "./public/golf-course.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-center place-items-center h-16 border-b-2 border-b-white bg-bg_main">
      {/* JSX content of the component */}
      {/* <img className="w-full h-full object-cover" src={banner} alt="Banner" /> */}
      <span className="absolute w-full h-10 bg-main opacity-50"></span>
      <h1 className="absolute text-xl font-lexend font-bold text-txt_main">
        ⛳ Golf Club Roulette
      </h1>
    </div>
  );
};

export default Navbar;
