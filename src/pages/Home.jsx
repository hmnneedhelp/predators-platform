import MainText from '../components/MainText'
import Button from '../components/Button'
import icon from "/Favicon.svg";
import { useState } from 'react';
import Modal from '../components/Modal';
import BigModal from '../components/BigModal';

const Home = () => {
  const [modal, setModal]= useState(false)
  const [bigModal, setBigmodal] = useState(false)
  
  return (
    <div className="bg-neutral-900 py-6 text-white w-5/6 h-screen mx-auto">
      <div className="flex flex-row justify-between py-6 " >
        <img src={icon} draggable={false} />
        <div className="bg-white text-black py-4 px-6 rounded-[48px] hover:backdrop-blur-sm hover:bg-white/30" onClick={()=>setModal(true)}>
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
        <Button onClick={()=>setBigmodal(true)}  />
      </div>
      <Modal modal={modal} onClose={()=>setModal(false)} />
      <BigModal bigModal={bigModal} onClose={()=>setBigmodal(false)} onClosse={()=>setBigmodal(false)} />
    </div>
  );
};
export default Home;
