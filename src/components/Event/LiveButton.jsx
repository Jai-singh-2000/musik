import liveIcon from "../../assets/icons/live.png"

const LiveButton = () => {
    return (
        <button className='text-[10px] sm:text-sm flex gap-1 md:gap-2 items-center text-[#FC5252] font-medium md:font-bold'>Live <img src={liveIcon} className="h-[12px] sm:h-[20px] md:h-[24px]" /></button>
    )
}
export default LiveButton