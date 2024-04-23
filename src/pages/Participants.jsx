import React from "react";
import PartText from "../components/PartText";
import PartCard from "../components/PartCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Participants() {
  return (
    <div className="flex flex-col m-auto w-[80%] text-white pb-12">
        <Header />
        <PartText count={"52"} />
        <div className="flex flex-row gap-4 justify-center pt-8 mb-8">
            <div style={{ borderBottom: "1px solid #404040" }} className="flex flex-row p-2 w-full">
                <p style={{ borderRight: "1px solid #404040" }} className="pr-4">Категория</p>
                <select className="outline-none border-none pl-4 w-full" >
                    <option value="all">Все</option>
                </select>
            </div>
            <div style={{ borderBottom: "1px solid #404040" }} className="flex flex-row p-2 w-full">
                <p style={{ borderRight: "1px solid #404040" }} className="pr-4">Навыки</p>
                <select className="outline-none border-none pl-4 w-full" >
                    <option value="all">Все</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
        </div>
        <Footer />
    </div>
  );
}

export default Participants;
