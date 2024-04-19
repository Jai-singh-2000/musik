import React, { useState } from 'react'
import { eventArr } from '../../utils/constants'
import EventTable from './EventTable'
import blueOutlineBall from "../../assets/tools/blueOutlineBall.png"
import blueStairs from "../../assets/tools/blueStairs.png"
import redStairs from "../../assets/tools/redStairs.png"

const Event = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className='mt-20 md:mt-40 bg-gradient-to-b from-[#381DDB0D] to-[#381DDB00]'>
            <div className='py-40 container flex justify-center relative'>
                <img src={blueOutlineBall} alt='blue-ball' className='absolute z-50 top-10 sm:top-[35rem] left-6 sm:left-0' />
                <img src={blueStairs} alt='blue-ball' className='absolute z-50 bottom-20 sm:bottom-64 right-0' />
                <img src={redStairs} alt='blue-ball' className='absolute z-50 bottom-10 sm:bottom-48 right-0' />

                <div className='w-[90%] sm:w-[85%] md:[w-80%] lg:w-[70%]'>
                    <div className='text-2xl md:text-3xl xl:text-4xl  font-bold leading-[44.2px]'>Event Schedule</div>

                    <div className='mt-10 '>

                        <div className='flex justify-between'>
                            {
                                eventArr?.map((obj, index) => {
                                    return <Tab key={obj?.id} day={obj?.day} date={obj?.date} active={activeTab === index} handleActive={() => setActiveTab(index)} />
                                })
                            }
                        </div>

                        <EventTable />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Event


const Tab = ({ day = "Day 01", date = "18 April", active = false, handleActive }) => {
    return (
        <div onClick={handleActive} className={`border-b-4 ${active ? "border-[#381DDB]" : "border-[#dfdfdf]"} pb-2 md:pb-4 flex-[0.3] cursor-pointer`}>
            <div className={`${active ? "text-[#381DDB]" : "text-[#98989a]"} text-[20px] md:text-[24px] font-extrabold leading-[38px]`}>{day}</div>
            <div className={`${active ? "text-[#381DDB]" : "text-[#d1d0d6]"}  text-[12px] md:text-[16px] font-bold leading-[19.5px]`}>{date}</div>
        </div>
    )
}