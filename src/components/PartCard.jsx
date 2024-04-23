import React from "react";
import Pill from "./Pill";

function PartCard({
  img,
  name = "Аян Пахомов",
  categories,
  quote = "ноут не тянет доту поэтому я стал разрабом",
  study = "СВФУ",
  city = "г. Якутск",
  prof = "Разработчик",
  work = "ООО «СмартОм» ",
}) {
  return (
    <div className="flex flex-row bg-neutral-800 justify-between px-5 py-4 gap-[20px]">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-row gap-4">
          <img alt="ava" className="w-[72px] h-[72px]" />
          <div className="flex flex-col gap-3">
            <p className="text-xl">{name}</p>
            <div className="flex flex-row gap-2">
              <Pill isProf prof={prof} />
              <Pill />
            </div>
          </div>
        </div>
        <p className="italic text-neutral-500 text-base">"{quote}"</p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div
          className="flex flex-row justify-between text-base py-4"
          style={{ borderBottom: "1px solid #404040" }}
        >
          <p className="text-neutral-500">Место учебы</p>
          <p>{study}</p>
        </div>

        {work ? (
          <div
            className="flex flex-row justify-between text-base py-4"
            style={{ borderBottom: "1px solid #404040" }}
          >
            <p className="text-neutral-500">Место работы</p>
            <p>{work}</p>
          </div>
        ) : null}
        <div
          className="flex flex-row justify-between text-base py-4"
          
        >
          <p className="text-neutral-500">Город</p>
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
}

export default PartCard;
