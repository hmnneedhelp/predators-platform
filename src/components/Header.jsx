import React from 'react'
import icon from "/Favicon.svg";
import user from "../assets/User.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
   <div className="flex flex-row justify-between py-6 ">
    <img src={icon} draggable={false} />
    <Link
      className="p-4 rounded-full"
      style={{ border: "1px solid #404040" }}
    >
      <img src={user} draggable={false} />
    </Link>
  </div>
  )
}

export default Header