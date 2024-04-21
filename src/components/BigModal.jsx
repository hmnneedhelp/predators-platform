import React from "react";
import Button from "./Button";
import Close from '../assets/Close.svg'

function BigModal({ bigModal = false, onClosse }) {
  if (bigModal === false) return null;
  return (
    <div className=" fixed inset-0 items-center justify-center bg-black/25 backdrop-blur-sm flex select-none">
      <div className="modal-slide-up w-[100px] h-[60%]  absolute inset-0 top-auto bg-neutral-800 rounded-l-full"></div>
      <div className="modal-slide-up bg-neutral-800 w-full h-[60%] flex flex-col items-center justify-start fixed rounded-t-[20%] bottom-0">
        
        <div className="relative mt-12 flex flex-row w-[80%] justify-between items-center">
          <p className="text-[32px]">Отправить заявку</p>
          <div
            className=" text-lg self-center border-neutral-500 hover:bg-orange-600 rounded-full w-10 h-10 flex items-center justify-center"
            style={{ border: "1px solid", borderColor: "#737373" }}
            onClick={() => onClosse()}
          >
            <img src={Close} />
          </div>
        </div>
        <div className="py-16 flex flex-col items-center w-[80%]">
          <div className="flex flex-row gap-4 w-full">
            <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">Имя</div>
              <input className="border-none outline-none" />
            </div>
            <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">Фамилия</div>
              <input className="border-none outline-none" />
            </div>
            <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">Направление</div>
              <input className="border-none outline-none" />
            </div>
            <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">Навыки</div>
              <input className="border-none outline-none" />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full py-4">
            <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">Место работы</div>
              <input className="border-none outline-none" />
            </div>
            <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">Место работы</div>
              <input className="border-none outline-none" />
            </div>
          </div>
          <div
              className="flex flex-col border-b-neutral-500 w-full"
              style={{ borderBottom: "1px solid", borderColor: "#737373" }}
            >
              <div className="text-xs text-neutral-500">О себе</div>
              <input className="border-none outline-none" />
            </div>
            
        <Button text="Отправить" margin="self-start mt-16" />
        </div>
      </div>
      <div className="modal-slide-up w-[100px] h-[60%] absolute inset-0 top-auto left-auto bg-neutral-800 rounded-r-full"></div>
    </div>
  );
}

export default BigModal;
