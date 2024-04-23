import React from 'react'

function Footer() {
  return (
    <div className='mt-32 bottom-0 flex flex-row justify-between pt-6' style={{borderTop:"1px solid #404040"}}>
       <div className='text-neutral-500'> &copy; 2022-2024</div>
       <div className='text-neutral-500 flex flex-row gap-3'> Дизайн и разработка <div className='text-white'>Контора пидорасов</div></div>
    </div>
  )
}

export default Footer