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

    useEffect(() => {
        const countDownDate = new Date("May 20, 2024 00:00:00").getTime();

        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                setTimeLeft({
                    ...timeLeft,
                    isEnded: true,
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
                isEnded: false,
            });
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, []);


    return (
        <div className=' relative bg-no-repeat w-full bg-cover h-[800px] md:h-[920px] xl:h-[986px] flex flex-col' style={{ backgroundImage: `url(${bannerImage})` }}>
            <Header />

            <div className='container flex flex-col justify-center flex-1 w-[90%] sm:w-[90%] xl:w-[880px] space-y-8 md:space-y-12'>

                <div className='text-[45px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] capitalize font-bold text-center text-white leading-[60px] md:leading-[87.77px]'>The Best experience of <br /> <span className='text-[#ffa3a3]'>music</span>  in 2021</div>

                <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-center text-white font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
                </div>

                <div className='flex justify-center gap-8 md:gap-10'>
                    <button className='uppercase py-3 md:py-5 px-6 md:px-12  bg-[#FC5252] rounded-lg | text-xs sm:text-sm md:text-md font-medium text-white'>Get Started</button>

                    <div className='gap-4 uppercase text-white flex items-center text-sm md:text-lg lg:text-xl xl:text-2xl font-bold'>
                        <img src={playIcon} alt='play' className='w-8  sm:w-auto sm:h-auto' />
                        Watch Video
                    </div>
                </div>
            </div>

            <div className='container flex justify-evenly sm:justify-between  text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[144px] font-bold pb-10 sm:pb-8 md:pb-6 lg:pb-4 xl:pb-2'>
                <div className=" hollow">
                    {timeLeft?.days}d
                </div>
                <div className="hollow">
                    {timeLeft?.hours}h
                </div>
                <div className="hollow">
                    {timeLeft?.minutes}m
                </div>
                <div className="hollow">
                    {timeLeft?.seconds}s
                </div>
            </div>
        </div>
    )
}

export default Banner