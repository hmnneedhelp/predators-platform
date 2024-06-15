import MainText from "../components/MainText";
import Button from "../components/Button";
import icon from "/Favicon.svg";
import { useState } from "react";
import Modal from "../components/Modal";
import BigModal from "../components/BigModal";
import PartCard from "../components/PartCard";
import Footer from "../components/Footer";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [bigModal, setBigmodal] = useState(false);
  const [hover, isHover] = useState(false);
  const [hover1, isHover1] = useState(false);
  const [hover2, isHover2] = useState(false);
  const [hover3, isHover3] = useState(false);
  return (
    <div className="bg-neutral-900 py-6 text-white w-5/6 min-h-screen mx-auto">
      <div className="flex flex-row justify-between py-6 ">
        <img src={icon} draggable={false} />
        <div
          className="bg-white text-black py-4 px-6 rounded-[48px] hover:backdrop-blur-sm hover:bg-white/30"
          onClick={() => setModal(true)}
        >
          Войти
        </div>
      </div>
      <div className="flex flex-col mt-24 items-center justify-between gap-24">
        <div className="flex flex-col items-center">
          <MainText />
          <div className="text-2xl ">
            Cообщество, где мы делимся опытом и просто тусуемся вместе
          </div>
        </div>
        <Button onClick={() => setBigmodal(true)} />
      </div>
      <div>
        <div className="mt-32 text-center bg-[url(/rays.svg)]/50 bg-cover h-fit">
          <div className="panamaDemo text-[96px] text-center brightness-100">
            ЭТО ТУСОВКА ДЛЯ ВСЕХ, <br /> КТО ОБОЖАЕТ ИТ{" "}
          </div>
          <div className="text-xl !brightness-100">
            Мы создаем условия для того, чтобы ты мог воплотить свои самые
            смелые идеи в жизнь
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 ">
          <p className="panamaDemo text-[96px]">КЛЮЧЕВЫЕ</p>{" "}
          <img width={300} height={300} />{" "}
          <p className="panamaDemo text-[96px] font-400 self-end">ЗАПОВЕДИ</p>
        </div>
        <p className="text-center">
          Здесь можно поработать, пообщаться, завести полезные знакомства и
          поучаствовать в хакатонах.
          <br /> Присоединяйся к нам и давай вместе творить будущее!
        </p>
        <div className="flex flex-col items-center pt-32">
          <div
            className="flex flex-row items-center justify-center border-b border-neutral-700 w-full"
            onMouseEnter={() => isHover(true)}
            onMouseLeave={() => isHover(false)}
          >
            <p
              className={`panamaDemo text-[96px] ${
                hover ? "transition-all" : ""
              }`}
            >
              СООБЩ
            </p>
            <img
              src="rays.svg"
              className={`min-h-[76px] opacity-0  ${
                hover
                  ? "block transition-opacity opacity-100 duration-500 ease-in delay-300"
                  : "hidden"
              }`}
              height={76}
              width={116}
            />
            <p
              className={`panamaDemo text-[96px] ${
                hover ? " transition-all" : ""
              }`}
            >
              ЕСТВО
            </p>
          </div>
          <div
            className="flex flex-row items-center justify-center border-b border-neutral-700 w-full"
            onMouseEnter={() => isHover1(true)}
            onMouseLeave={() => isHover1(false)}
          >
            <p
              className={`panamaDemo text-[96px] ${
                hover1 ? " transition-all" : ""
              }`}
            >
              НЕТВО
            </p>
            <img
              src="rays.svg"
              className={`min-h-[76px]  ${
                hover1 ? "block transition-all delay-150" : "hidden"
              }`}
              height={76}
              width={116}
            />
            <p
              className={`panamaDemo text-[96px] ${
                hover1 ? " transition-all" : ""
              }`}
            >
              РКИНГ
            </p>
          </div>
          <div
            className="flex flex-row items-center justify-center border-b border-neutral-700 w-full"
            onMouseEnter={() => isHover2(true)}
            onMouseLeave={() => isHover2(false)}
          >
            <p
              className={`panamaDemo text-[96px] ${
                hover2 ? " transition-all" : ""
              }`}
            >
              СТАР
            </p>
            <img
              src="rays.svg"
              className={`min-h-[76px]  ${
                hover2 ? "block transition-all delay-150" : "hidden"
              }`}
              height={76}
              width={116}
            />
            <p
              className={`panamaDemo text-[96px] ${
                hover2 ? " transition-all" : ""
              }`}
            >
              ТАПЫ
            </p>
          </div>
          <div
            className="flex flex-row items-center justify-center border-b border-neutral-700 w-full"
            onMouseEnter={() => isHover3(true)}
            onMouseLeave={() => isHover3(false)}
          >
            <p
              className={`panamaDemo text-[96px] ${
                hover3 ? " transition-all" : ""
              }`}
            >
              ХАКА
            </p>
            <img
              src="rays.svg"
              className={`min-h-[76px]  ${
                hover3 ? "block transition-all delay-150" : "hidden"
              }`}
              height={76}
              width={116}
            />
            <p
              className={`panamaDemo text-[96px] ${
                hover3 ? " transition-all" : ""
              }`}
            >
              ТОНЫ
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url(/star.svg)] bg-local bg-center flex flex-col items-center mt-96">
        <div className=" w-full h-fit relative">
          <div className="border-l-2 border-t-2 border-orange-600 top-0 left-0 absolute w-[20px] h-[20px]"></div>
          <div className="border-r-2 border-t-2 border-orange-600 top-0 right-0 absolute w-[20px] h-[20px]"></div>
          <p className="panamaDemo text-[96px] text-center">ХИЩНЯТА</p>
          <div className="border-r-2 border-b-2 border-orange-600 bottom-0 right-0 absolute w-[20px] h-[20px]"></div>
          <div className="border-l-2 border-b-2 border-orange-600 bottom-0 left-0 absolute w-[20px] h-[20px]"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <PartCard />
          <PartCard />
          <PartCard />
        </div>
      </div>
      <div className="bg-[url(/star.svg)] bg-local bg-no-repeat bg-center flex flex-col items-center mt-96">
        <p className="bg-gradient-to-t from-orange-600 to-white uppercase panamaDemo text-[96px] text-center  leading-[96px]">
          это место для крутых ИТ-шников, стартаперов и всех, кто в теме. Мы
          создаем условия для того, чтобы ты мог воплощать свои идеи в жизнь.
          Вместе мы делаем мир технологий еще интереснее и веселее. Ну что,
          готов к приключениям?
        </p>
      </div>
      <div className="mt-36 flex flex-col">
              <div className="border-b-2 border-neutral-700 flex flex-col gap-2">
                <p className="text-[48px] panamaDemo">КАК СТАТЬ ЧЛЕНОМ СООБЩЕСТВА?</p>
                <p className="mb-12">Просто заполни заявку на сайте и жди подтверждения. Легкотня!</p>
              </div>
              <div className="border-b-2 border-neutral-700 flex flex-col gap-2">
                <p className="text-[48px] panamaDemo">КАК ЧАСТО ПРОХОДЯТ МЕРОПРИЯТИЯ?</p>
                <p className="mb-12">Каждый месяц у нас что-то происходит. Следи за новостями в группе и приходи!</p>
              </div>
              <div className="border-b-2 border-neutral-700 flex flex-col gap-2">
                <p className="text-[48px] panamaDemo">КАКИЕ ПЛЮШКИ У ЧЛЕНОВ СООБЩЕСТВА?</p>
                <p className="mb-12">Доступ к коворкингу, мероприятиям, консультациям и и что-то там еще.</p>
              </div>
              <div className="border-b-2 border-neutral-700 flex flex-col gap-2">
                <p className="text-[48px] panamaDemo">МОЖНО ЛИ КОВОРКИНГ НА ПОСТОЯННОЙ ОСНОВЕ?</p>
                <p className="mb-12">Конечно! У нас есть варианты, так что ты точно найдешь что-то для себя.</p>
              </div>
      </div>
      <div className="mt-36">
              <img src="/map.png" />

      </div>
      <div className="text-[96px] cursor-pointer panamaDemo text-center" onClick={()=>setBigmodal(true)}>ОТПРАВИТЬ ЗАЯВКУ</div>
      <Modal modal={modal} onClose={() => setModal(false)} />
      <BigModal
        bigModal={bigModal}
        onClose={() => setBigmodal(false)}
        onClosse={() => setBigmodal(false)}
      />
      <Footer />
    </div>
  );
};
export default Home;
