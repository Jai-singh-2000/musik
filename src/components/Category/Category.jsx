import React from 'react'
import folkIcon from "../../assets/icons/folk.png"
import popIcon from "../../assets/icons/pop.png"
import jazzIcon from "../../assets/icons/jazz.png"
import saxophoneIcon from "../../assets/icons/saxophone.png"
import guitarIcon from "../../assets/icons/guitar.png"

const Category = () => {
    return (
        <div className='my-48'>
            <div className='container text-4xl font-bold'><span className='text-[#381DDB]'>Explore</span> By Category</div>

            <div className='mt-10  gap-4 flex centerContainer'>
                <CategoryBox icon={popIcon} title={"pop"} />
                <CategoryBox icon={folkIcon} title={"folk"} />
                <CategoryBox icon={saxophoneIcon} title={"instrumental"} active={true} />
                <CategoryBox icon={guitarIcon} title={"guitar"} />
                <CategoryBox icon={jazzIcon} title={"jazz"} />
            </div>
        </div>
    )
}

export default Category

const CategoryBox = ({ active = false, title = "Default", icon }) => {
    return (
        <div className={`${active ? "bg-[#381DDB]" : "bg-[#ffeeee]"} w-[370px] h-[326px] rounded-xl px-10 pb-12 flex items-end `}>
            <div className='w-[190px] space-y-4'>
                <img src={icon} className='size-[40px]' />
                <div className={`${active && "text-white"} text-[24px] font-bold capitalize`}>{title}</div>
                <div className={`${active && "text-white"} text-[16px]`}>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</div>
            </div>
        </div>
    )
}