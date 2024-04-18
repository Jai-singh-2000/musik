import React, { useEffect, useState } from 'react'
import bannerImage from "../../assets/images/banner.jpg"
import playIcon from "../../assets/icons/play.png"
import Header from '../Header/Header'

const Banner = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        isEnded: false,
    });

    // useEffect(() => {
    //     const countDownDate = new Date("April 19, 2024 00:00:00").getTime();

    //     const countdownInterval = setInterval(() => {
    //         const now = new Date().getTime();
    //         const distance = countDownDate - now;

    //         if (distance < 0) {
    //             clearInterval(countdownInterval);
    //             setTimeLeft({
    //                 ...timeLeft,
    //                 isEnded: true,
    //             });
    //             return;
    //         }

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         setTimeLeft({
    //             days: days.toString().padStart(2, '0'),
    //             hours: hours.toString().padStart(2, '0'),
    //             minutes: minutes.toString().padStart(2, '0'),
    //             seconds: seconds.toString().padStart(2, '0'),
    //             isEnded: false,
    //         });
    //     }, 1000);

    //     return () => {
    //         clearInterval(countdownInterval);
    //     };
    // }, []);


    return (
        <div className='relative bg-no-repeat w-full bg-cover h-[986px] flex flex-col' style={{ backgroundImage: `url(${bannerImage})` }}>
            <Header />

            {/* <div className='container flex flex-col justify-center flex-1 w-[880px] space-y-12'>

                <div className='text-[80px] capitalize font-bold text-center text-white leading-[87.77px]'>The Best experience of <br /> <span className='text-[#ffa3a3]'>music</span>  in 2021</div>

                <div className='text-[24px] text-center text-white font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
                </div>

                <div className='flex justify-center gap-10'>
                    <button className='uppercase py-5 px-12 bg-[#FC5252] rounded-lg | text-md font-medium text-white'>Get Started</button>

                    <div className='gap-4 uppercase text-white flex items-center text-2xl font-bold'>
                        <img src={playIcon} alt='play' />
                        Watch Video
                    </div>
                </div>
            </div> */}

            {/* <div className='container flex justify-between'>
                <div className="text-[144px] font-bold hollow">
                    {timeLeft?.days}d
                </div>
                <div className="text-[144px] font-bold hollow">
                    {timeLeft?.hours}h
                </div>
                <div className="text-[144px] font-bold hollow">
                    {timeLeft?.minutes}m
                </div>
                <div className="text-[144px] font-bold hollow">
                    {timeLeft?.seconds}s
                </div>
            </div> */}
        </div>
    )
}

export default Banner