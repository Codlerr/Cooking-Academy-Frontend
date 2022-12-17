import React,{useEffect} from 'react'
import './style.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import WorkSlider from '../../components/sliders/workshop-images';
import InstaSlider from '../../components/sliders/insta-slider';
import ServiceSlider from '../../components/sliders/service-slider';
import LSA from "../../components/LatYearAchive"
import MOC from "../../components/MeetOurChefs"
import CL from "../../components/ClientList"
import ENQ from "../../components/Enquiry"
import FEED from "../../components/Feedback"
import FAQ from "../../components/Faq"
import EXPCLASS from "../../components/ExploreClasses"


// Assets Links

let Videotemp = 'https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4';
let Item1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/Chicken-Yakitori_EXPS_FT21_186160_F_0607_1-15_njhpqx.webp';
let Item2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/Downloader.la_-62d1127ecf2b9_z39o5c.webp';
let Item3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621450/Cooking%20Academy%20Assets/exps128090_TH153340B10_01_7b-1_wgmm2v.webp';
let Item4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621450/Cooking%20Academy%20Assets/exps187883_TH153343C04_14_2b-1_qulj3p.webp';
let Item5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/abhishek-hajare-6hr5YZDjyHc-unsplash_mvfec6.jpg';
let Item6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/alex-lvrs-aX_ljOOyWJY-unsplash_zl6jpa.webp';
let Item7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621449/Cooking%20Academy%20Assets/Cuccidati_EXPS_HCBZ22_49902_P2_MD_04_15_16b-1_tvsxfq.webp';
let Item8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/amirali-mirhashemian-5tC2YOVXE9Y-unsplash_fjtjrv.webp';

function LandingPage() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
  }, [])

    


  return (
    <>
    {/* =================================Banner================================= */}
    <section className='banner bg-[#080808] text-white'>
            <div className='xs:px-5 md:px-0 md:pl-10 lg:pl-20 xs:h-[90vh] md:h-[40vh] lg:h-[90vh]  flex flex-col xs:gap-5 lg:gap-8 justify-end'  data-aos="fade-right">
              <p className='xs:text-4xl md:text-3xl lg:text-5xl font-bold md:w-[50%] lg:w-[40%]'>Flavours surrounds you in The Cooking Academy</p>
              <p className='xs:text-base lg:text-xl lg:w-[35%] text-[color:var(--text-clr)]'>Cooking is not just about ingredients; it's a creative outlet for us.</p>
              <a href='#' className='bg-[color:var(--thm-clr2)] hover:bg-[#FFBB00] transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>Resume Class</a>
              <p className='md:w-[60%] lg:w-[40%] xs:mt-2 lg:mt-10 text-[color:var(--text-clr)]'>The Cooking Academy is a Digital Platform where you can learn various cooking styles and techniques from professional chefs.</p>
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
     <section className='workshop'>
       <div className='xs:w-11/12 lg:w-10/12 mx-auto xs:pt-10 lg:pt-20'>
          <div className='flex flex-col md:flex-row justify-between pt-5' data-aos="fade-right">
          <h2 className='font-bold xs:text-4xl lg:text-5xl' data-aos="fade-right">Workshop</h2>
            <a href='#' className='bg-white hover:bg-[#f0eeee] text-black h-fit w-fit xs:mt-5 md:mt-0  py-2 px-5 rounded-lg lg:text-xl font-medium'>See all<i class="fa-solid fa-arrow-right pl-5"></i></a>
          </div>
          <div className='workshop-video'>
            <video className='w-full py-10' controls loop>
              <source src={Videotemp} type="video/mp4"/>
            </video>
          </div>

          
       {/* slider */}
        <div><WorkSlider/></div>
       </div>

     </section>
     {/* =================================Workshop================================= */}

     {/* =================================Meet Our Chefs================================= */}
      <section>
        <MOC/>
      </section>
     {/* =================================Meet Our Chefs================================= */}

          

    {/* ==================================Other Service================================ */}
    <section className=''>
      <div className='md:pl-5 lg:pl-32  xs:px-5 md:px-0 py-10' data-aos="fade-right">
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
                <p className='text-[#ffffffb0] md:text-right text-xl lg:w-[30%] xs:pt-5 md:pt-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, magnam.</p>
              </div>


              <div className='dishes grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10 xs:p-5 md:p-10 '>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item1}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Chicken Yakitori</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item2}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Cassoulet Today</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item3}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Nana's Italian Roulade</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item4}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Beef Paprikash with Fire-Roated Tomatoes</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item5}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Vannila chololava icecream</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item6}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Oma's Apfelkuchen (Grandma's Apple cake)</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item7}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Cuccidati</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
                        <p><i class="fa-solid fa-utensils pr-2"></i>Healthy</p>
                      </span>
                    </div>
                    <div className='relative' data-aos="fade-right">
                      <img alt='img' className=' rounded-3xl' src={Item8}/>
                        <p className='xs:text-base  md:text-sm lg:text-lg  font-semibold py-3 '>Irish Spiced Beef</p>
                      <span className='flex justify-between text-xs lg:text-base text-[#ffffffc7]'>
                        <p><i class="fa-regular fa-clock pr-2"></i>45 minutes</p>
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


    </>
  )
}

export default LandingPage