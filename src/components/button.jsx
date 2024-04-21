import { useState } from 'react';
import Teeth from '../assets/Teeth.jsx';
import {Link} from 'react-router-dom'

const Button = ({ text = "Отправить заявку", onClick, width="", margin="" }) => {
  const [color, setColor] = useState(true)
  return (
    <div
      className={`flex flex-row justify-center items-center bruh select-none ${margin}`}
      onClick={()=>onClick()}
    >
      <Teeth pos="mr-[-2px]" color={color} />
      <div className={`${width} text-center text-lg bg-orange-600 rounded-2xl p-6 `}>{text}</div>
      <Teeth pos='rotate-180 ml-[-2px]' color={color} />
      <Link to={"/"} />
    </div>
  );
};

export default Button;