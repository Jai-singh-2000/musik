import liveIcon from "../../assets/icons/live.png"

const LiveButton = () => {
    return (
        <button className='flex gap-2 items-center text-[#FC5252] font-bold'>Live <img src={liveIcon} /></button>
    )
}
export default LiveButton