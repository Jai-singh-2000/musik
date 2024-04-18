import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
    return (
        <div>
            <div className='my-20 container'>
                <div className='text-4xl font-bold text-center'>Choose a Tier that's right for you</div>

                <div className='flex justify-center gap-8 mt-20'>

                    <PriceCard type={"Basic"} price={"100"} seat={"1 Seat Available"} access={"Access to Wifi Router"} food={"Free Food & coffee"} borderColor={'border-black'}>

                        <button className='uppercase py-5 px-12 border border-[#381DDB] rounded-lg | text-[16px] font-bold text-[#381DDB]'>Get Tickets</button>

                    </PriceCard>


                    <PriceCard type={"Standard"} price={"150"} seat={"1 Seat Available"} wifiAvailable={true} colorHex={`#381DDB`} borderColor={'border-[#381DDB]'}>

                        <button className='uppercase py-5 px-12 bg-[#381DDB] rounded-lg | text-md font-medium text-white'>Get Tickets</button>

                    </PriceCard>


                    <PriceCard type={"Premium"} price={"200"} seat={"2 Seat Available"} wifiAvailable={true} foodAvailable={true} colorHex={`#FC5252`} borderColor={'border-[#FC5252]'}>

                        <button className='uppercase py-5 px-12 border border-[#381DDB] rounded-lg | text-[16px] font-bold text-[#381DDB]'>Get Tickets</button>

                    </PriceCard>
                    
                </div>
            </div>
        </div>
    )
}

export default Price

