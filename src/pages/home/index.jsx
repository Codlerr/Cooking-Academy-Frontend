import React,{useEffect} from 'react'
import './style.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import WorkSlider from '../../components/sliders/workshop-images';
import InstaSlider from '../../components/sliders/insta-slider';
import ServiceSlider from '../../components/sliders/service-slider';
import WorkshopVideo from '../../components/sliders/workshopVideo';
import LSA from "../../components/LatYearAchive"
import MOC from "../../components/MeetOurChefs"
import CL from "../../components/ClientList"
import ENQ from "../../components/Enquiry"
import FEED from "../../components/Feedback"
import FAQ from "../../components/Faq"
import EXPCLASS from "../../components/ExploreClasses"


// Assets Links

let Videotemp = 'https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4';
let Item1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039134/Cooking%20Academy%20Assets/POT_CHICKEN_TACOS_yxidyt.jpg';
let Item2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039134/Cooking%20Academy%20Assets/BAKED_CHICKEN_NUGGETS_tgz1sr.jpg';
let Item3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039134/Cooking%20Academy%20Assets/THE_BEST_EVER_CHEESEBERGUR_x38vf2.jpg';
let Item4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/SLOW_COOKER_BEEF_BARBACOA_fu6cfb.jpg';
let Item5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/SHEET_PAN_CHICKEN_AND_STUFFING_dnwjxp.jpg';
let Item6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/LOADED_SMASHED_POTATOES_uipncw.jpg';
let Item7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674050617/Cooking%20Academy%20Assets/MINI_CHICKEN_QUESADILLAS_wparli.jpg';
let Item8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674039133/Cooking%20Academy%20Assets/HOT_SPINACH_AND_ARTICHOKE_DIP_t95lsn.jpg';
let google = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1674319499/Cooking%20Academy%20Assets/WhatsApp_Image_2023-01-21_at_17.27.37_xuoe5t.jpg';


function LandingPage() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
  }, [])

    


  return (
    <>
    {/* =================================Banner================================= */}
    <section className='banner bg-[#080808] text-white'>
            <div className='xs:px-5 md:px-0 md:pl-10 lg:pl-20 xs:h-[90vh] md:h-[40vh] lg:h-[90vh]  flex flex-col xs:gap-5 lg:gap-8 xs:justify-end lg:justify-center'  data-aos="fade-right">
              <p className='xs:text-4xl md:text-3xl lg:text-5xl font-bold md:w-[50%] lg:w-[40%]'>Flavours surrounds you in The Cooking Academy</p>
              <p className='xs:text-base lg:text-xl lg:w-[35%] text-[color:var(--text-clr)]'>Cooking is not just about ingredients; it's a creative outlet for us.</p>
              <a href='#' className='bg-[color:var(--thm-clr2)] hover:bg-[#FFBB00] transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>Resume Class</a>
              <p className='md:w-[60%] lg:w-[40%] xs:mt-2 lg:mt-5 text-[color:var(--text-clr)]'>The Cooking Academy is a Digital Platform where you can learn various cooking styles and techniques from professional chefs.</p>
            </div>
       
    </section>
    {/* =================================Banner================================= */}

    {/* =================================Brands================================= */}
    <CL/>
    {/* =================================Brands================================= */}


    {/* =================================Explore================================= */}
    <section className='' data-aos="fade-right">
      <div className='flex gap-10 py-10 xs:px-5 md:px-0 md:pl-5 lg:pl-16'>
        <h3 className='xs:text-2xl md:text-3xl font-semibold'>Explore our classes.</h3>
      </div>
      <EXPCLASS/>
      <div className='grid place-items-center pt-20 pb-10'>
        <a href='#' className='bg-slate-500 hover:bg-[#FFBB00] transition-all duration-500 rounded-md px-5 py-2'>Explore Classes</a>
    </div>
    </section>
    {/* =================================Explore================================= */}

    {/* =================================About us================================= */}
      <section className='w-11/12 mx-auto pt-10'>
              <div data-aos="fade-right">
                  <h2 className='text-center font-bold xs:text-4xl lg:text-5xl'>About Us</h2>
                  <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>The Cooking Academy (TCA) is culinary startup in Qatar with the aim of bringing people together, to learn and enjoy the art of cooking. The academy does this through various engagements and events for culinary professionals and food lovers to interact and do what they love. The academy aims at ensuring that people prepare meals that are as pleasing to the eye as they are to the palate.The newly established academy has been organising food-tasting events for professionals and foodies.</p>
              </div>
      </section>
    {/* =================================About us================================= */}

    {/* =================================Achievment================================= */}
    <section className='w-11/12 mx-auto pb-10'>
      <LSA/>
    </section>
    {/* =================================Achievment================================= */}


     {/* =================================Workshop================================= */}
     <section className='workshop overflow-hidden relative'>
        <div className='xs:w-[90%] md:w-[85%] mx-auto xs:pt-10 lg:pt-10'>
          <div className='' data-aos="fade-right">
            <h2 className='font-bold xs:text-4xl lg:text-5xl' data-aos="fade-right">Workshop</h2>
          </div>
          <WorkshopVideo/>
        </div>
       {/* <div className='xs:w-11/12 lg:w-10/12 mx-auto xs:pt-10 lg:pt-20'>
          <div className='pt-5' data-aos="fade-right">
          <h2 className='font-bold xs:text-4xl lg:text-5xl' data-aos="fade-right">Workshop</h2>
          </div>
          <div className='workshop-video '>
            <video className='w-full py-10 ' controls loop controlsList="nodownload">
              <source src={Videotemp} type="video/mp4"/>
            </video>
          </div>

          
       
        <div><WorkSlider/></div>
       </div> */}

     </section>
     {/* =================================Workshop================================= */}

     {/* =================================Meet Our Chefs================================= */}
      <section>
        <MOC/>
      </section>
     {/* =================================Meet Our Chefs================================= */}

          

    {/* ==================================Other Service================================ */}
    <section className=''>
      <div className='md:pl-5 lg:pl-20  xs:px-5 md:px-0 py-10' data-aos="fade-right">
        <h3 className='text-3xl font-semibold'>Other Services.</h3>
      </div>

          <ServiceSlider/>

    </section>
    {/* ==================================Other Service================================ */}


    {/* ==================================Enquire Submit form================================ */}
    <ENQ/>
    {/* ==================================Enquire Submit form================================ */}



    {/* ==================================delicious recipe================================ */}
      <section className='w-11/12 mx-auto recipe p-2'>
        <div className='bg-[#000000a2] rounded-3xl'>
              <div className='flex xs:flex-col md:flex-row justify-between py-10 px-5' data-aos="fade-right">
                <p className='text-[color:var(--thm-clr2)] text-3xl lg:w-[30%]'>Try these delicious recipe to make your day</p>
                {/* <p className='text-[#ffffffb0] md:text-right text-xl lg:w-[30%] xs:pt-5 md:pt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, magnam.</p> */}
              </div>


              <div className='dishes grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10 xs:p-5 md:p-10 '>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item1}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Pot Chicken Tacos</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item2}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Baked Chicken Nuggets</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>50 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item3}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>The Best Ever Cheeseburger</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>60 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item4}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Slow Cooker Beef Barbacoa</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>55 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item5}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Sheet Pan Chicken And Stuffing</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>60 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item6}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Loaded Smashed Potatoes</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>20 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item7}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Mini Chicken Quesadillas</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>50 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item8}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Hot Spinach & Artichoke Dip</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>35 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>

              </div>
                    <div className='grid place-items-center xs:pt-10 lg:pt-16 pb-10' data-aos="fade-right">
                        <a href='#' className='bg-slate-500 hover:bg-[#FFBB00] transition-all duration-500 rounded-md px-5 py-2'>Explore Classes</a>
                    </div>
        </div>
      </section>
    {/* ==================================delicious recipe================================ */}


    {/* ==================================Feedback================================ */}
    
    <FEED/>
    {/* ==================================Feedback================================ */}

    {/* ==================================Instagram================================ */}
    <section className='xs:py-10  insta-bg'>
         <div className='xs:w-11/12 md:w-full mx-auto text-center text-[#ffffffcb]' data-aos="fade-right">
            <h2 className='xs:text-xl md:text-3xl '>Check out@cookingacademy on instagram</h2>
            <p className='xs:text-sm md:text-base py-3 lg:w-[30%] mx-auto'>Follow us on instagram to get more tips & updates on cooking</p>
          </div>

          {/* scroll */}
          <div className='pb-10 relative'>
            <InstaSlider/>
          </div>
          <div className='grid place-items-center xs:mt-16 md:mt-28'>
            <a className='bg-white hover:bg-[#FFBB00] rounded-lg px-3 py-2 text-black hover:text-white xs:text-lg md:text-xl' href="https://instagram.com/thecookingacademyqtr" target="__blank">Visit Our Instgram<i class="fa-brands fa-instagram font-medium text-2xl pl-2"></i></a>
          </div>
    </section>
    {/* ==================================Instagram================================ */}


    {/* ==================================Frequently questions================================ */}
      <FAQ/>
    {/* ==================================Frequently questions================================ */}
    
    <section className='w-11/12 mx-auto pt-20 pb-10 grid place-items-center'>
        <img className='h-16' src={google} alt="google" />
    </section>

    </>
  )
}

export default LandingPage