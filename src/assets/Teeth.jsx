import React from "react";

function Teeth(props) {
  const {pos=""} = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="70"
      fill="none"
      viewBox="0 0 33 70"
      className={pos}
    >
      <path
        fill="#EA580C"
        
        d="M0 35c0 17.405 11 32 11 32s6-14.595 6-32-6-32-6-32S0 17.595 0 35z"
      ></path>
      <path
        fill="#EA580C"
        d="M13 35.455C13 54.785 27.5 70 27.5 70S33 54.785 33 35.455C33 16.125 27.5 0 27.5 0S13 16.125 13 35.455z"
      ></path>
    </svg>
  );
}

export default Teeth;
