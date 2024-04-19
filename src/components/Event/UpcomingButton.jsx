import clockIcon from "../../assets/icons/clock.png"

const UpcomingButton = () => {
    return (
        <button className='text-[10px] sm:text-sm flex gap-1 md:gap-2 items-center font-medium md:font-bold'>Upcoming <img src={clockIcon} className="h-[12px] sm:h-[20px] md:h-[24px]" /></button>
    )
}

export default UpcomingButton