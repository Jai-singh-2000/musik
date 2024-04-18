import React from 'react'
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import instagram from "../../assets/icons/instagram.png"
import linkedIn from "../../assets/icons/linkedIn.png"

const Footer = () => {
    return (
        <div className='bg-[#222222] py-10 '>
            <div className='container space-y-10'>
                <div >
                    <img src={logo} alt='musik' />
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-10 uppercase text-white text-[14px] leading-[20px] font-medium'>
                        <div>home</div>
                        <div>company</div>
                        <div>blog</div>
                        <div>contact us</div>
                        <div>sitemap</div>
                    </div>

                    <div className='flex items-end gap-20'>
                        <div className='flex gap-10'>
                        <img src={facebook} alt='facebook' className='size-[30px]' />
                        <img src={twitter} alt='twitter' className='size-[30px]' />
                        <img src={linkedIn} alt='linkedin' className='size-[30px]' />
                        <img src={instagram} alt='instagram' className='size-[30px]' />
                        </div>
                        <div className='font-light text-[12px] text-white'>
                        © musik.com, 2021
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer