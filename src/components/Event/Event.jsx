import React, { useState } from 'react'
import { eventArr } from '../../utils/constants'

const Event = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className='my-40 container flex justify-center'>

            <div className='w-[60%] bg-red-300'>
                <div className='text-[34px] font-bold leading-[44.2px]'>Event Schedule</div>

                <div className='mt-10 flex justify-between'>
                    {
                        eventArr?.map((obj, index) => {
                            return <Tab key={obj?.id} day={obj?.day} date={obj?.date} active={activeTab === index} handleActive={() => setActiveTab(index)} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Event

const Tab = ({ day = "Day 01", date = "18 April", active = false, handleActive }) => {
    return (
        <div onClick={handleActive} className={`border-b-4 ${active ? "border-[#381DDB]" : "border-[#dfdfdf]"} pb-4 flex-[0.3] cursor-pointer`}>
            <div className={`${active ? "text-[#381DDB]" : "text-[#222222]"} text-[24px] font-extrabold leading-[38px]`}>{day}</div>
            <div className={`${active ? "text-[#381DDB]" : "text-[#222222]"} text-[16px] font-bold leading-[19.5px]`}>{date}</div>
        </div>
    )
}