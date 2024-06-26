import folkIcon from "../../assets/icons/folk.png"
import popIcon from "../../assets/icons/pop.png"
import jazzIcon from "../../assets/icons/jazz.png"
import saxophoneIcon from "../../assets/icons/saxophone.png"
import guitarIcon from "../../assets/icons/guitar.png"
import leftRedScale from "../../assets/tools/leftRedScale.png"
import rightBlackScale from "../../assets/tools/rightBlackScale.png"

const Category = () => {
    return (
        <div className='py-16 sm:py-20 md:py-28 lg:py-32 xl:py-48 relative '>

            <div className='container pl-10 md:pl-6 xl:pl-0 text-xl sm:text-2xl md:text-4xl font-bold relative'>
                <img src={leftRedScale} alt='red-scale' className='absolute top-0 sm:-top-32 left-0 sm:-left-52' />
                <img src={rightBlackScale} alt='red-scale' className='absolute top-10 right-0 sm:-right-10' />
                <span className='text-[#381DDB]'>Explore</span> By Category
            </div>

            <div className='mt-10 gap-8 flex flex-wrap xl:flex-nowrap justify-center centerContainer xl:overflow-x-hidden'>
                <CategoryBox icon={popIcon} title={"pop"} />
                <CategoryBox icon={folkIcon} title={"folk"} />
                <CategoryBox icon={saxophoneIcon} title={"instrumental"} active={true} />
                <CategoryBox icon={guitarIcon} title={"guitar"} />
                <CategoryBox icon={jazzIcon} title={"jazz"} bgHex={'bg-[#f3f9ff]'} />
            </div>
        </div>
    )
}

export default Category

const CategoryBox = ({ active = false, title = "Default", icon, bgHex = "" }) => {
    return (
        <div className={`${active ? "bg-[#381DDB]" : "bg-[#ffeeee]"} ${bgHex} rounded-xl px-10 pb-12 flex items-end w-[260px] sm:w-[280px] md:w-[300px] lg:w-[350px] xl:w-[370px] h-[220px] sm:h-[240px] md:h-[268px] lg:h-[286px] xl:h-[326px]`}>

            <div className='xl:w-[190px] space-y-4'>
                <img src={icon} className='size-[28px] sm:size-[32px] md:size-[36px] xl:size-[40px]' />
                <div className={`${active && "text-white"} text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold capitalize`}>{title}</div>
                <div className={`${active && "text-white"} text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]`}>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</div>
            </div>

        </div>
    )
}