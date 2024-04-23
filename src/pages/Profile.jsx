import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pill from '../components/Pill'

function Profile({name="Аян Пахомов", birthdate="30.06.2003", study="СВФУ",work="ООО «СмартОм»",city="г. Якутск",mail="ilovememesdontkillme@gmail.com",phone="+79142911309", telegram="@vladtesla", site="predators.ru", skills="React",role="Разработчик", quote='"ноут не тянет доту поэтому я стал разрабом"', about="я ненавижу FSD"}) {
  return (
    <div className='flex flex-col m-auto w-[80%] text-white pb-8 text-white '>
      <Header />
      <div className='flex flex-row w-full justify-between border-b border-neutral-500' style={{borderBottom:"1px solid #404040"}}>
        <div className='flex flex-col gap-3 w-full'>
          <p className='text-2xl'>{name}</p>
          <p className='text-xl text-neutral-500'>{role}</p>
        </div>
        <img alt='ava' className='w-32 h-32' />
        <div className='italic text-neutral-500 w-full text-end text-lg'>{quote}</div>
      </div>
      <div className='mt-12 flex flex-row gap-24'>
        <div className='flex flex-col gap-7 w-full'>
          <p>Информация</p>
          <div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Место учебы</p>
                <p>{study}</p>
              </div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Место работы</p>
                <p>{work}</p>
              </div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Город</p>
                <p>{city}</p>
              </div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Дата рождения</p>
                <p>{birthdate}</p>
              </div>
          </div>
        </div>
        <div className='flex flex-col gap-7 w-full'>
          <p>Контакты</p>
          <div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Почта</p>
                <p>{mail}</p>
              </div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Телефон</p>
                <p>{phone}</p>
              </div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Телеграм</p>
                <p>{telegram}</p>
              </div>
              <div className='flex flex-row justify-between py-4' style={{borderBottom:"1px solid #404040"}}>
                <p className='text-neutral-500'>Сайт</p>
                <p>{site}</p>
              </div>
          </div>
        </div>
        <div className='flex flex-col gap-7 w-full'>
          <p>Навыки</p>
          <div className='w-fit flex flex-row w-fit'>
            <Pill Profile prof={skills} />
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-24 mt-16'>
        <div className='flex flex-col gap-6'>
            <p>
              Социальные сети
            </p>
            <div className='flex flex-row gap-2 h-[40px] bg-white'>

            </div>
        </div>
        <div className='flex flex-col gap-6'>
          <p>О себе</p>
          <p>{about}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile