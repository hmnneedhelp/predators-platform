import React from "react";
import Button from "./Button";
import Close from "../assets/Close.svg";
import axios, {AxiosError} from "axios";

function Modal({ modal = false, onClose }) {
  console.log(import.meta.env)
  const body= {
    "login":"neoko",
    "password":"password"
  }
  axios.post('http://185.84.163.102/api/v1/auth/login', body, {
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error.message); // log the error message to the console
  console.error(error.config); // log the request config to the console
});

  console.log(fetch(import.meta.env.VITE_ENDPOINT_UTL, body, {mode:cors}))

  if (modal === false) return null;
  return (
    <div
      className={`fixed inset-0 items-center justify-center bg-black/25 backdrop-blur-sm flex select-none`}
    >
      <div className="w-[600px] bg-neutral-800 py-8 px-9">
        <div className="flex justify-between text-[32px] text-center items-center">
          <p>Вход хищника</p>
          <div
            style={{ border: "1px solid" }}
            className="border border-neutral-500 flex rounded-full text-center items-center justify-center w-10 h-10 hover:bg-orange-600"
            onClick={() => onClose()}
          >
            <img src={Close} />
          </div>
        </div>
        <div className="mt-12">
          <div
            className="flex items-center justify-start text-neutral-500 py-[16px] text-start"
            style={{ borderBottom: "1px solid" }}
          >
            <p
              className="text-neutral-500 pr-[16px] text-lg w-[85px]"
              style={{ borderRight: "1px solid" }}
            >
              Логин
            </p>
            <input className="border-none outline-none px-[16px] text-white" />
          </div>
          <div
            className="flex items-center justify-start text-neutral-500 py-[16px] text-start"
            style={{ borderBottom: "1px solid" }}
          >
            <p
              className="text-neutral-500 pr-[16px] text-lg w-[85px]"
              style={{ borderRight: "1px solid" }}
            >
              Пароль
            </p>
            <input
              className="border-none outline-none px-[16px] text-white"
              type="password"
            />
          </div>
        </div>

        <Button width={"w-[482px]"} margin="mt-12" text="Войти" />
      </div>
    </div>
  );
}

export default Modal;
