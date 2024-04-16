import { useState } from "react";
import icon from "/Favicon.svg";
import "./App.css";
import MainText from "./components/MainText";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-neutral-900 py-6 text-white w-5/6 h-screen mx-auto">
      <div className="flex flex-row justify-between py-6">
        <img src={icon} />
        <div className="bg-white text-black py-4 px-6 rounded-[48px]">
          Войти
        </div>
      </div>
      <div className="flex flex-col mt-24 items-center justify-between gap-24">
        <div className="flex flex-col items-center">
          <MainText />
          <div className="text-2xl">
            Cообщество, где мы делимся опытом и просто тусуемся вместе
          </div>
        </div>
        <Button onClick={() => setCount(count + 1)} />
        {console.log(count)}
      </div>
    </div>
  );
}

export default App;
