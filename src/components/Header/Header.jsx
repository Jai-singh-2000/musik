import React from 'react'
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='container bg-green-300 w-full'>

            <div className='h-20 bg-blue-400 flex justify-between '>
                <div>
                    <img src={logo} />
                </div>

                <div className='flex gap-2 items-center bg-red-200'>
                    <div>Home</div>
                    <div>Speakers</div>
                    <div>Schedule</div>
                    <div>Contact US</div>
                    <button className='uppercase'>Get Tickets</button>
                </div>
            </div>
        </div>
    )
}

export default Header