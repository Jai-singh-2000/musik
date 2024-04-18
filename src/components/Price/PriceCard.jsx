import React from 'react'

const PriceCard = ({ type, price, seat, wifiAvailable = "false", foodAvailable = false, colorHex = "", children, borderColor = "border-black" }) => {
    return (
        <div className={`h-[400px] md:h-[350px] lg:h-[400px] w-[65%] sm:w-[60%] md:w-[30%] lg:flex-[0.3] xl:w-[370px] py-4 flex flex-col items-center justify-around shadow-2xl rounded-xl border-t-4  ${borderColor} capitalize`}>

            <div className='flex flex-col items-center'>
                <div className={`text-2xl md:text-xl xl:text-2xl leading-[38px] font-extrabold text-[${colorHex && colorHex}]`}>{type}</div>
                <div className={`text-[45px] md:text-[40px] lg:text-[55px] xl:text-[60px]leading-[73.14px] font-bold text-[${colorHex && colorHex}]`}>${price}</div>
            </div>

            <div className='text-[14px] md:text-[12px] lg:text-[16px] leading-3 sm:leading-4 md:leading-5 lg:leading-[24px] font-normal flex flex-col items-center gap-3'>
                <div >{seat}</div>
                <div className={`${!wifiAvailable && `font-light text-gray-400`}`}>Access to Wifi Router</div>
                <div className={`${!foodAvailable && `font-light text-gray-400`}`}>Free Food & coffee</div>
            </div>

            {children}

        </div>
    )
}
export default PriceCard