import clockIcon from "../../assets/icons/clock.png"

const UpcomingButton = () => {
    return (
        <button className='text-xs sm:text-sm flex gap-1 md:gap-2 items-center font-bold'>Upcoming <img src={clockIcon} className="h-[16px] sm:h-[20px] md:h-[24px]" /></button>
    )
}

export default UpcomingButton