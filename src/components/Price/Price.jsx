import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
    return (
        <div className='my-12 sm:my-14 md:my-16 lg:my-18 xl:my-20 container'>
            <div className='text-2xl md:text-3xl xl:text-4xl font-bold text-center'>Choose a Tier that's right for you</div>

            <div className='flex flex-wrap justify-around gap-12 sm:gap-5 xl:gap-8 mt-20 '>

                <PriceCard type={"Basic"} price={"100"} seat={"1 Seat Available"} access={"Access to Wifi Router"} food={"Free Food & coffee"} borderColor={'border-black'}>

                    <button className='uppercase py-5 md:py-3 lg:py-5 px-12 md:px-8 lg:px-12 border border-[#381DDB] rounded-lg | text-[16px] md:text-[14px] lg:text-[16px] font-bold text-[#381DDB]'>Get Tickets</button>

                </PriceCard>


                <PriceCard type={"Standard"} price={"150"} seat={"1 Seat Available"} wifiAvailable={true} colorHex={`#381DDB`} borderColor={'border-[#381DDB]'}>

                    <button className='uppercase py-5 md:py-3 lg:py-5 px-12 md:px-8 lg:px-12  bg-[#381DDB] rounded-lg | text-[16px] md:text-[14px] lg:text-md font-medium text-white'>Get Tickets</button>

                </PriceCard>


                <PriceCard type={"Premium"} price={"200"} seat={"2 Seat Available"} wifiAvailable={true} foodAvailable={true} colorHex={`#FC5252`} borderColor={'border-[#FC5252]'}>

                    <button className='uppercase py-5 md:py-3 lg:py-5 px-12 md:px-8 lg:px-12  border border-[#381DDB] rounded-lg |text-[16px] md:text-[14px] lg:text-[16px] font-bold text-[#381DDB]'>Get Tickets</button>

                </PriceCard>

            </div>
        </div>
    )
}

export default Price

