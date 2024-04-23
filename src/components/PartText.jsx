import React from "react";
import sun from "../assets/Vector.svg"

function PartText({count="1" }) {
  return (
    <div className="text-white flex flex-row items-start justify-center">
      <div className="text-7xl">Участники</div>
      <div className="bg-[url('/Vector.svg')] bg-fit w-12 h-12 text-xl flex items-center justify-center mt-[-6px]">{count}</div>
    </div>
  );
}

export default PartText;
