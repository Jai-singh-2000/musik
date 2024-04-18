import clockIcon from "../../assets/icons/clock.png"

const UpcomingButton = () => {
    return (
        <button className='flex gap-2 items-center font-bold'>Upcoming <img src={clockIcon} /></button>
    )
}

export default UpcomingButton