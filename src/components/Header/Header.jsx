import React from 'react'
import logo from "../../assets/images/logo.png"
import downArrow from "../../assets/icons/downArrow.png"

const Header = () => {
    return (
        <div className='container h-20 flex justify-between px-4 sm:px-0 '>
            <div className='flex items-center'>
                <img src={logo} alt='logo' className='w-16 sm:w-24 xl:w-auto sm:h-auto' />
            </div>
            <div className='flex items-center sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20'>

                <div className='flex items-center gap-4 md:gap-10 lg:gap-16 xl:gap-20 | text-[10px] sm:text-xs xl:text-sm text-white uppercase'>
                    <div>Home</div>
                    <div className='flex items-center gap-2'>Speakers <img src={downArrow} alt='musik' className='h-1 sm:h-2' /></div>
                    <div className='flex items-center gap-2'>Schedule <img src={downArrow} alt='musik' className='h-1 sm:h-2' /></div>
                    <div>Contact US</div>
                </div>
                <button className='hidden sm:block uppercase py-2 md:py-3 px-6 md:px-8 lg:px-10 bg-white rounded-lg | text-sm md:text-md font-bold text-[#381DDB] '>Get Tickets</button>
            </div>
        </div>
    )
}

export default Header