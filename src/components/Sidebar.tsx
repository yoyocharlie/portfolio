import React, { Dispatch, SetStateAction } from 'react'

interface Sidebar{
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>,
}

const Sidebar: React.FC<Sidebar> = ({showSidebar, setShowSidebar}) => {
  return (
    <div className='top-0 right-0 w-[35vw] bg-white drop-shadow-2xl p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300'>
        <button
            className="flex text-4xl text-amber items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
        >
            x
        </button>
        <h2 className="mt-20 text-4xl font-semibold text-amber">I am a sidebar</h2>
    </div>
  )
}

export default Sidebar