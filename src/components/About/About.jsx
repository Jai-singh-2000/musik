import React from 'react'
import aboutImage from "../../assets/images/about.png"
import aboutBackImage from "../../assets/images/aboutBack.png"

const About = () => {
    return (
        <div className='my-40 container flex justify-evenly'>
            <div className='bg-no-repeat' style={{ backgroundImage: `url(${aboutBackImage})` }}>
                <img src={aboutImage} className='relative left-20 top-20' />
            </div>

            <div className='flex-[0.48] flex flex-col justify-center items-start gap-16'>

                <div className='space-y-4'>
                    <div className='text-[34px] font-bold leading-[44.2px]'>About Musik</div>
                    <div className='text-[16px] font-light leading-[24px] text-[#222222]'>
                        Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus
                    </div>
                </div>
                <button className='uppercase py-5 px-12 bg-[#381DDB] rounded-lg | text-md font-medium text-white'>Learn More</button>
            </div>


        </div>
    )
}

export default About