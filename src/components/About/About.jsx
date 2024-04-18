import React from 'react'
import aboutImage from "../../assets/images/about.png"
import aboutBackImage from "../../assets/images/aboutBack.png"

const About = () => {
    return (
        <div className='my-40 container flex flex-col md:flex-row items-center  md:justify-around xl:justify-evenly '>


            <div className='bg-no-repeat size-[220px] sm:size-[300px] md:size-[320px] lg:size-[390px] xl:size-[480px]' style={{ backgroundImage: `url(${aboutBackImage})` }}>
                <img src={aboutImage} className='relative left-10 sm:left-20 md:left-12 top-10 sm:top-20 md:top-12  size-[220px] sm:size-[300px] md:size-[320px] lg:size-[390px] xl:size-[480px]' />
            </div>

            <div className='mt-20 sm:mt-32 w-[70%]  xl:mt-0 flex-[0.65] lg:flex-[0.48] flex flex-col justify-center items-start gap-10 sm:gap-12 md:gap-14 lg:gap-16'>

                <div className='space-y-2 lg:space-y-4 '>
                    <div className='text-[28px] md:text-[30px] xl:text-[34px] font-bold leading-[44.2px]'>About Musik</div>
                    <div className='text-[12px] md:text-[14px] xl:text-[16px] font-light leading-4 md:leading-[24px] text-[#222222]'>
                        Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
                    </div>
                </div>
                <button className='uppercase py-3 md:py-4 lg:py-5 px-6 sm:px-8 md:px-10 lg:px-12 bg-[#381DDB] rounded-lg | text-xs sm:text-sm lg:text-md font-medium text-white'>Learn More</button>
            </div>


        </div>
    )
}

export default About