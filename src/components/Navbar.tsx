import React, { Dispatch, SetStateAction } from 'react'

interface Sidebar{
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>,
}

const Navbar: React.FC<Sidebar> = ({showSidebar, setShowSidebar}) => {
    console.log(showSidebar)
  return (
    <div className='py-2 px-10 flex shadow-xl items-center'>
        <div className='mr-auto'>
            <span className='text-3xl text-jet mr-2 font-oswald font-bold'>Jacob</span>
            <span className='text-3xl text-amber font-oswald font-bold mr-auto'>Pixler</span>
        </div>
        <div>
            <button onClick={() => setShowSidebar(!showSidebar)} className='text-amber md:hidden pt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-9 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Navbar