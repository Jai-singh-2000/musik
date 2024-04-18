import playBlackIcon from "../../assets/icons/playBlack.png"

const PreviewButton = () => {
    return (
        <button className='flex gap-2 items-center font-bold'>Preview <img src={playBlackIcon} /></button>
    )
}

export default PreviewButton