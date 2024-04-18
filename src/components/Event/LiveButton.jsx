import liveIcon from "../../assets/icons/live.png"

const LiveButton = () => {
    return (
        <button className='text-xs sm:text-sm flex gap-1 md:gap-2 items-center text-[#FC5252] font-bold'>Live <img src={liveIcon} className="h-[16px] sm:h-[20px] md:h-[24px]" /></button>
    )
}
export default LiveButton