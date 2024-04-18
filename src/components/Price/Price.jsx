import PriceCard from './PriceCard'
import redTriangle from "../../assets/tools/redTriangle.png"
import rightBlackScale from "../../assets/tools/rightBlackScale.png"
import blueBall from "../../assets/tools/blueBall.png"

const Price = () => {
    return (
        <div className='py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 container relative '>
            <img src={redTriangle} alt='blue-ball' className='absolute z-50 top-60 sm:top-10 right-0 sm:-right-10' />
            <img src={rightBlackScale} alt='blue-ball' className='absolute z-50 top-40 sm:top-20 left-0 sm:-left-48' />
            <img src={blueBall} alt='blue-ball' className='absolute z-50 top-52 left-0 sm:-left-20' />
            <div className='text-2xl sm:text-3xl xl:text-4xl font-bold text-center'>Choose a Tier that's right for you</div>

            <div className='flex flex-wrap justify-around gap-12 sm:gap-10 md:gap-8 xl:gap-8 mt-20 '>

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

