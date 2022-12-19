import React from 'react'
import './style.css';
import Slide from '../../components/sliders/cooking-inner-slider'
import ENQ from "../../components/Enquiry";
import FAQ from "../../components/Faq";
import LSA from "../../components/LatYearAchive";
import MOC from "../../components/MeetOurChefs";
import CLASSES from "../../components/ExploreClasses";

let bgVideo = 'https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4';
let P1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_155_s1lgmw.webp';
let P2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270926/Cooking%20Academy%20Assets/cooking%20class/Rectangle_156_o743ij.webp';
let P3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_157_fxt9s1.webp';
let P4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_158_gbj3al.webp';
let P5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_165_zopg94.webp';
let P6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_166_wsbqcj.webp';
let P7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270925/Cooking%20Academy%20Assets/cooking%20class/Rectangle_167_qkjplb.webp';
let P8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671270926/Cooking%20Academy%20Assets/cooking%20class/Rectangle_168_vpo3nx.webp';


function CookingclassInside() {
  return (
    <>

    {/* ================Banner=================== */}
    <section className='relative'>
        <div className='w-[100%] h-[100vh]'>
            <video src={bgVideo} autoPlay loop muted className='w-[100%] h-[100%] object-cover'/>
        </div>

        <div className='ban-video-content md:pt-40'>
            <h4 className='font-bold text-3xl md:tracking-wider uppercase'>fundamentals of</h4>
            <h1 className='font-bold text-7xl  uppercase'>cuisine</h1>
            <p className='md:w-[30%] mx-auto text-xl text-center py-5'>Cooking is not just about ingredients; it's a creative outlet for us.</p>
            <div className='grid place-items-center'>
                <a href='#' className='bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>Resume Class</a>
            </div>
        </div>
    </section>
    {/* ================Banner=================== */}


    {/* ================About class=================== */}
    <section className='relative w-11/12 mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 xs:gap-y-10 md:gap-x-10 py-20'>
            <div>
                <h1 className='xs:text-3xl md:text-4xl font-bold'>About class</h1>
                <p className='text-xl py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus rerum nemo amet sunt officia sed excepturi maiores fugit aut, libero labore obcaecati minima, animi earum necessitatibus at aliquam tempora! Molestias?</p>
                <p >Instructor(s) : Kelly Wearstler</p>
                <p className='pt-2'>Class Lenght : 17 video lessons (2 hrs 13 min)</p>
            </div>
            <div className='grid place-items-center'>
                <div className='border-[1px] border-primary-clr2 xs:w-[90%] lg:w-[70%] mx-auto grid place-items-center py-5'>
                    <p className='uppercase text-xl font-light'>14-day free cancellation</p>
                    <h1 className='text-5xl py-3 text-primary-clr2 font-bold'>$299</h1>
                    <p className='text-xs pb-2'>Terms and Conditions apply</p>
                    <a className='bg-primary-clr2 hover:bg-primary-clr1 w-full text-center py-3' href="#">Enroll Now</a>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:w-10/12 mx-auto xs:py-5 md:py-10'>
            <div className='flex gap-10'>
                <i class="text-4xl text-primary-clr2 fa-solid fa-photo-film"></i>
                <p className='grid place-items-center xs:text-base lg:text-xl'>6 units | 17 lessons | 54 tasks</p>
            </div>
            <div className='flex gap-10'>
                 <i class="text-4xl text-primary-clr2 fa-solid fa-download"></i>
                <p className='grid place-items-center xs:text-base lg:text-xl'>Download and watch offline</p>
            </div>
            <div className='flex gap-10'>
                <i class="text-4xl text-primary-clr2 fa-solid fa-volume-high"></i>
                <p className='grid place-items-center xs:text-base lg:text-xl'> Audio-only lessons</p>
            </div>
            <div className='flex gap-10'>
                <i class="text-4xl text-primary-clr2 fa-solid fa-file-pdf"></i>
                <p className='grid place-items-center xs:text-base lg:text-xl'>Downloadable instructor guides for every class</p>
            </div>
        </div>
    </section>
    {/* ================About class=================== */}

    {/* ================Testimonial=================== */}
    <Slide/>
    {/* ================Testimonial=================== */}


    {/* ================Gallery=================== */}
    <section className='w-11/12 mx-auto py-10'>
        <h1 className='md:text-4xl font-bold text-center'>Gallery</h1>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-4 pt-16'>
            <div className='md:col-span-2'>
                <img className='w-full h-full' src={P1} alt="image" />
            </div>
            <div className=''>
                <img className='w-full h-full' src={P2} alt="image" />
            </div>
            <div className='grid grid-flow-row gap-10'>
                <img className='w-full ' src={P3} alt="image" />
                <img className='w-full ' src={P4} alt="image" />
            </div>
            <img className='w-full xs:h-full lg:h-52' src={P5} alt="image" />
            <img className='w-full xs:h-full lg:h-52' src={P6} alt="image" />
            <img className='w-full xs:h-full lg:h-52' src={P7} alt="image" />
            <img className='w-full xs:h-full lg:h-52' src={P8} alt="image" />
        </div>
    </section>
    {/* ================Gallery=================== */}

    {/* ================Enquiry=================== */}
    <ENQ/>
    {/* ================Enquiry=================== */}

    {/* ================Classes=================== */}
    <section>
        <h3 className='w-11/12 mx-auto xs:text-2xl md:text-3xl font-semibold pb-5'>Other classes.</h3>
        <CLASSES/>
    </section>
    {/* ================Classes=================== */}

    {/* ================FAQ=================== */}
    <FAQ/>
    {/* ================FAQ=================== */}

     {/* ================CHEIF=================== */}
     <MOC/>
     {/* ================CHEIF=================== */}

     {/* ================Achievment=================== */}
     <section className='pb-10'>
        <LSA/>
     </section>
     {/* ================Achievment=================== */}

    
    </>
  )
}

export default CookingclassInside;