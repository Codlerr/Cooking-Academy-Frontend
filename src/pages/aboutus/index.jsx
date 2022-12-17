import React from 'react';
import './style.css';
import LSA from "../../components/LatYearAchive"
import MOC from "../../components/MeetOurChefs"
import CL from "../../components/ClientList"
import ENQ from "../../components/Enquiry"
import FAQ from "../../components/Faq"


import './style.css';

/* -----Assets---Cloudinary */
let mainLogo = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/Layer_2_vmobmf.svg';
let abtKitchen = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671267738/Cooking%20Academy%20Assets/AboutPage/Group_350_cdauaa.jpg';
let ownerVideo = 'https://res.cloudinary.com/dvbplh4z9/video/upload/v1670499537/Cooking%20Academy%20Assets/kitchen%20videos/Mohammed_Abdulmalik_Co-Founder_of_Qatar_s_Cooking_Academy_iu0aco.mp4';
let ownerImg = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670564955/Cooking%20Academy%20Assets/AboutPage/Mask_Group_32_p0ih7k.webp';
let valueTrust = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670564954/Cooking%20Academy%20Assets/AboutPage/Group_262_y7oask.svg';
let valueInnovation = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670564954/Cooking%20Academy%20Assets/AboutPage/Group_263_ylgssu.svg';
let valueDevelopment = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670564954/Cooking%20Academy%20Assets/AboutPage/Group_261_h4muqr.svg';
let valueQuality = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670564954/Cooking%20Academy%20Assets/AboutPage/Group_264_ch9ltr.svg';

function AboutUs() {
  return (
    <>
      <section className="relative">
        <div className='abt-banner' />
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={mainLogo} alt='' width="353px" height="167px" />
        </div>
      </section>

      {/*================================= About US content =================================*/}
      <section className="w-11/12 mx-auto xs:py-10 md:py-20">
        <div data-aos="fade-right">
          <h2 className='text-center font-bold xs:text-4xl lg:text-5xl'>About Us</h2>
          <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>
            The Cooking Academy (TCA) is culinary startup in Qatar with the aim of bringing people together, to learn and enjoy the art of cooking.
            The academy does this through various engagements and events for culinary professionals and food lovers to interact and do what they love.
            The academy aims at ensuring that people prepare meals that are as pleasing to the eye as they are to the palate.
            The newly established academy has been organising food-tasting events for professionals and foodies.</p>
        </div>
      </section>

      {/*================================= who are we? =================================*/}
      <section className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:py-10'>
        <div data-aos="fade-right" className='relative md:col-span-2 flex flex-col justify-center'>
            <h2 className='text-center  md:w-[80%] md:text-left font-bold xs:text-4xl lg:text-5xl'>who are we?</h2>
            <p className='md::w-[80%]  lg:w-[70%] md:tracking-wider text-left xs:text-lg md:text-xl py-5 '>
              We are a f&b company based in Qatar with the aim of bringing people together to learn and enjoy the art of cooking.
              We link culinary professionals and food lovers through innovative concepts, high quality products and special events.
              The Cooking Academy is a hub for food creation, experimenting, learning and events.
              We offer a wide range of courses, techniques, and expertise of local and international chefs</p>
        </div>
        
        <div data-aos="fade-right" className="h-full">
          <img src={abtKitchen} alt='who we are' className='h-full' />
        </div>
      </section>


      {/*================================= Chef Video =================================*/}
      <section className="py-10 px-50 ownerBackground">
        <div className="w-11/12 mx-auto py-10">
          <video controls loop className='w-full rounded-2 '>
            <source src={ownerVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/*================================= Vision and Mission =================================*/}
      

      <section className='abtVision relative'>
        <div className='w-full top-2/4 z-0 absolute'>
            <hr className=' mb-1 h-0.5 hrThemeBg' />
            <hr className='hrThemeBg h-12' />
          </div>

       <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='md:w-[80%] max-w-lg z-20 md:ml-8 '>
                <img src={ownerImg} alt="image of the company owner" width='100%' />
                <hr className='h-px w-3/4 ml-42 hrThemeBg' />
                <h1 className='font-bold text-satin-gold md:ml-16 text-2xl'>Mohamed Abdulmalik</h1>
                <h1 className='md:ml-16 text-base'>Founder of The Cooking Academy</h1>
          </div>
          <div className='flex flex-col xs:gap-5 md:gap-0 justify-between z-20 '>
              <div className='xs:mt-28 md:mt-36 '>
                <h1 className='font-bold xs:text-4xl lg:text-5xl  '>Our Vision</h1>
                <p className='text-lg pt-2'>Create a culture of cooking excellence.</p>
              </div>
              <div className='mb-20'>
                <h1 className='font-bold xs:text-4xl lg:text-5xl'>Our Mission</h1>
                <p className='text-lg pt-2'>By connecting to nature, exchanging experiences and bridging cultures through innovative products and solutions.</p>
              </div>
          </div>
       </div>
      </section>

      {/*================================= Last Year achievement =================================*/}
      <section className='w-11/12 mx-auto xs:py-5 md:py-20'>
        <LSA aboutPage />
      </section>
      {/*================================= Last Year achievement =================================*/}

      {/*================================= Our Values =================================*/}
      <section className='ourValues w-full overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto'>
                <div data-aos="fade-right" className='flex justify-center flex-col xs:py-10 md:py-24 '>
                    <h2 className='font-bold xs:text-4xl lg:text-5xl'>Our values</h2>
                    <p className='text-xl md:w-[70%] pt-3'>These values are the operating philosophies
                       and principles within TCA; they are
                      the guide of TCA’s internal conduct and the
                      definition of the relationship with customers,
                      partners and stakeholders.</p>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 xs:py-10 md:py-24 place-items-center'>
                    <div className='grid place-items-center'>
                      <img src={valueTrust} alt='Trust' width='120px' height='120px inline-block' />
                      <h1 className='pt-3 text-xl' >Trust</h1>
                    </div>
                    <div className='grid place-items-center'>
                        <img src={valueInnovation} alt='Innovation' width='80px' height='80px' />
                        <h1 className='pt-3 text-xl'>Innovation</h1>
                    </div>
                    <div className='grid place-items-center'>
                      <img src={valueDevelopment} alt='Development' width='80px' height='80px' />
                      <h1 className='pt-3 text-xl'>Development</h1>
                    </div>
                    <div className='grid place-items-center'>
                        <img src={valueQuality} alt='Quality' width='80px' height='80px' />
                        <h1 className='pt-3 text-xl'>Quality</h1>
                    </div>
                </div>
          </div>

          
      </section>

      {/* Meet our Chefs */}
        <MOC />
      {/* Meet our Chefs */}

      {/*================================= CLients =================================*/}
      <section>
        <CL/>
      </section>
      {/*================================= CLients =================================*/}

      {/*================================= ENQUIRY =================================*/}
      <section>
        <ENQ/>
      </section>
      {/*================================= ENQUIRY =================================*/}

      {/*================================= faq =================================*/}
      <section>
        <FAQ/>
      </section>
      {/*================================= faq =================================*/}


      {/*================================= MAP =================================*/}
      <section className='w-[97%] mx-auto py-10'>
        <iframe className='xs:h-[70vh] md:h-[50vh] lg:h-[70vh]  w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14423.795945138305!2d51.4615454!3d25.3394928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c027a67228c010e!2sThe%20Cooking%20Academy!5e0!3m2!1sen!2sin!4v1671271346846!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      {/*================================= MAP =================================*/}





    </>
  )
}

export default AboutUs;