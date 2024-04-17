import React from 'react'
import logo from "../../assets/logo.png"
import downArrow from "../../assets/icons/downArrow.png"

const Header = () => {
    return (
        <div className='container h-20 flex justify-between '>
            <div className='flex items-center'>
                <img src={logo} alt='musik' />
            </div>
            <div className='flex items-center gap-20'>
                <div className='flex gap-20 | text-sm text-white uppercase'>
                    <div>Home</div>
                    <div className='flex items-center gap-2'>Speakers <img src={downArrow} alt='musik' className='h-2' /></div>
                    <div className='flex items-center gap-2'>Schedule <img src={downArrow} alt='musik' className='h-2' /></div>
                    <div>Contact US</div>
                </div>
                <button className='uppercase py-3 px-10 bg-white rounded-lg | text-md font-medium text-[#381DDB]'>Get Tickets</button>
            </div>
        </div>
    )
}

export default Header