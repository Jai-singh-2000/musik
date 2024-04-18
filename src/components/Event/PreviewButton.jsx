import playBlackIcon from "../../assets/icons/playBlack.png"

const PreviewButton = () => {
    return (
        <button className='text-xs sm:text-sm flex gap-1 md:gap-2 items-center font-bold'>Preview <img src={playBlackIcon} className="h-[16px] sm:h-[20px] md:h-[24px]" /></button>
    )
}

export default PreviewButton