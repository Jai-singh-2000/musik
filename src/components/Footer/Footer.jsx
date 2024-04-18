import logo from "../../assets/images/logo.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import instagram from "../../assets/icons/instagram.png"
import linkedIn from "../../assets/icons/linkedIn.png"

const Footer = () => {
    return (
        <div className='py-6 sm:py-8 md:py-10 px-10 md:px-0 bg-[#222222] '>
            <div className='container space-y-10'>
                <div >
                <img src={logo} alt='logo' className='w-16 sm:w-24 xl:w-auto sm:h-auto' />
                </div>

                <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-start sm:items-end'>
                    <div className='flex gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 uppercase text-white text-[10px] md:text-[12px] xl:text-[14px] leading-[20px] font-medium'>
                        <div>home</div>
                        <div>company</div>
                        <div>blog</div>
                        <div>contact us</div>
                        <div>sitemap</div>
                    </div>

                    <div className='flex  items-end gap-4 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-20'>
                        <div className='flex gap-6 sm:gap-3 md:gap-4 lg:gap-9 xl:gap-10'>
                        <img src={facebook} alt='facebook' className='size-[20px] sm:size-[22px] md:size-[24px] lg:size-[28px] xl:size-[30px]' />
                        <img src={twitter} alt='twitter' className='size-[20px] sm:size-[22px] md:size-[24px] lg:size-[28px] xl:size-[30px]' />
                        <img src={linkedIn} alt='linkedin' className='size-[20px] sm:size-[22px] md:size-[24px] lg:size-[28px] xl:size-[30px]' />
                        <img src={instagram} alt='instagram' className='size-[20px] sm:size-[22px] md:size-[24px] lg:size-[28px] xl:size-[30px]' />
                        </div>
                        <div className='font-light text-[8px] md:text-[10px] xl:text-[12px] text-white'>
                        © musik.com, 2021
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer