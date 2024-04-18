import React from 'react'
import upperLeft from "../../assets/icons/upperLeft.png"
import bottomRight from "../../assets/icons/bottomRight.png"
import johhny from "../../assets/images/johhny.png"
import ellie from "../../assets/images/ellie.png"
import myne from "../../assets/images/myne.png"

const Testimonial = () => {
    return (
        <div className='my-28 centerContainer'>
            <div className='text-4xl font-bold text-center'>Testimonials</div>

            <div className='mt-10 flex flex-col lg:flex-row flex-wrap justify-between xl:overflow-x-hidden'>
                <TextCard image={ellie} name='Ellie James' website='ipsum.com' />
                <TextCard image={johhny} name='Johhny Doe' website='ipsum.com' active={true}/>
                <TextCard image={myne} name='Myne Barack' website='ipsum.com' />
            </div>
        </div>
    )
}

export default Testimonial

const TextCard = ({ active = false,image="",name="",website="" }) => {
    return (
        <div className={`flex-[0.3] lg:w-[33%] flex flex-col items-center px-4 relative ${!active && "opacity-50 scale-90"} p-2`}>

            <div className='p-10 pb-14 relative  bg-[#f8f8f8]'>
                <img src={upperLeft} className='absolute left-4 top-4' />
                <div className='text-[15px] leading-[24px] text-[#6c6c6c]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <img src={bottomRight} className='absolute right-4'/>
            </div>

            <div className='flex items-center flex-col relative bottom-10 '>
                <img src={image} className='size-[120px] rounded-full' />
                <div className='text-lg font-extrabold'>{name}</div>
                <div className=' text-[16px] leading-[24px] text-[#381DDB]'>{website}</div>
            </div>


        </div>
    )
}