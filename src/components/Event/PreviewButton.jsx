import playBlackIcon from "../../assets/icons/playBlack.png"

const PreviewButton = () => {
    return (
        <button className='text-[10px] sm:text-sm flex gap-1 md:gap-2 items-center font-medium md:font-bold'>Preview <img src={playBlackIcon} className="h-[12px] sm:h-[20px] md:h-[24px]" /></button>
    )
}

export default PreviewButton