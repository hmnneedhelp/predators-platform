import { useState } from "react";
import icon from "/Favicon.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-neutral-900 text-white">
      <div className="flex flex-row justify-between">
        <img src={icon} /> <div>войти</div>
      </div>
      <div className="flex flex-col">
          <div>
            ХИЩНИКИ
          </div>
          <div>
          Cообщество, где мы делимся опытом и просто тусуемся вместе
          </div>
          <div>
            Отправить заявку
          </div>
      </div>
    </div>
  );
}

export default App;
