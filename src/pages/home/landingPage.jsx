import React,{useState,useEffect} from 'react'
import './landingPage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ExploreSlider from '../../components/sliders/explore-slider'
import WorkSlider from '../../components/sliders/workshop-slider';
import InstaSlider from '../../components/sliders/insta-slider';
import {Faq,Price} from '../../components/constant/data';


// Assets Links
let Brand1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669636282/Cooking%20Academy%20Assets/PngItem_2430409_c1mjn7.png';
let Brand2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/Layer_2_1_i3ipvl.svg';
let Brand3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_2_ge5flv.svg';
let Brand4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/Layer_2_3_id8fxj.svg';
let Brand5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621453/Cooking%20Academy%20Assets/logo_1_dbbxfe.webp';
let Brand6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_4_huybkz.svg';
let Brand7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621452/Cooking%20Academy%20Assets/Layer_2_5_gnuqug.svg';
let Videotemp = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621456/Cooking%20Academy%20Assets/Downloader.la_-62d10cae714b0_sk6f66.webp';
let zomImg1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786722/Cooking%20Academy%20Assets/Component_19_1_wrk493.jpg';
let zomImg2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786013/Cooking%20Academy%20Assets/Component_20_1_qkz1nr.jpg';
let zomImg3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786013/Cooking%20Academy%20Assets/Component_21_1_cuqked.jpg';
let Item1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/Chicken-Yakitori_EXPS_FT21_186160_F_0607_1-15_njhpqx.webp';
let Item2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/Downloader.la_-62d1127ecf2b9_z39o5c.webp';
let Item3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621450/Cooking%20Academy%20Assets/exps128090_TH153340B10_01_7b-1_wgmm2v.webp';
let Item4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621450/Cooking%20Academy%20Assets/exps187883_TH153343C04_14_2b-1_qulj3p.webp';
let Item5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/abhishek-hajare-6hr5YZDjyHc-unsplash_mvfec6.jpg';
let Item6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/alex-lvrs-aX_ljOOyWJY-unsplash_zl6jpa.webp';
let Item7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621449/Cooking%20Academy%20Assets/Cuccidati_EXPS_HCBZ22_49902_P2_MD_04_15_16b-1_tvsxfq.webp';
let Item8 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/amirali-mirhashemian-5tC2YOVXE9Y-unsplash_fjtjrv.webp';
let  User1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/avatar-ff16c9f4f6a033d94f3ef4d895e78d42_2x_h99rtd.png';
let  User2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/avatar-8aae058a0f5df7ef941fe5ef9577bc3c_2x_ybvck6.png';
let  User3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/avatar-8aae058a0f5df7ef941fe5ef9577bc3c_2x_ybvck6.png';
let  User4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621458/Cooking%20Academy%20Assets/avatar-08db931a9ed7cf9e60e5a8c188683a76_2x_dos7la.png';
let  User5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_2x_jvrg8j.png';
let  User6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d1798845da8_2x_bxvjqo.png';
let  User7 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d179a7d9dfc_vnafio.png';

let Chef1= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669886573/Cooking%20Academy%20Assets/4_kkde8z.webp';
let Chef2= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669886572/Cooking%20Academy%20Assets/5_zrgcc9.webp';
let Chef3= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669887904/Cooking%20Academy%20Assets/7_as7x3q.webp';
let Chef4= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669887980/Cooking%20Academy%20Assets/10_fcvuao.webp';
let Chef5= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669888044/Cooking%20Academy%20Assets/8_wo25wz.webp';
let Chef6= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669886574/Cooking%20Academy%20Assets/1_tlahly.webp';
let Chef7= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669886573/Cooking%20Academy%20Assets/3_kjadid.webp';
let Chef8= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669886573/Cooking%20Academy%20Assets/2_y9zuty.webp';
let Chef9= 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669886572/Cooking%20Academy%20Assets/6_bthe0s.webp';


function LandingPage() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
  }, [])

    // ---accordion--//
    const [accordion, setActiveAccordion] = useState(0);
    const [accordion2, setActiveAccordion2] = useState(0);

    function toggleAccordion(index) {
      if (index === accordion) {
        setActiveAccordion(-1);
        return
      }
      setActiveAccordion(index);
    };
    function toggleAccordion2(index) {
      if (index === accordion2) {
        setActiveAccordion2(-1);
        return
      }
      setActiveAccordion2(index);
    };
    // ----accordion---//


  return (
    <>
    {/* =================================Banner================================= */}
    <section className='banner bg-[#080808] text-white'>
            <div className='xs:px-5 xs:py-32 md:py-0 md:px-0 md:pl-10 lg:pl-20 md:h-[40vh] lg:h-[90vh]  flex flex-col xs:gap-5 lg:gap-8 justify-center'  data-aos="fade-right">
              <p className='xs:text-4xl md:text-3xl lg:text-5xl font-bold md:w-[50%] lg:w-[40%]'>Flavours surrounds you in The Cooking Academy</p>
              <p className='xs:text-base lg:text-xl lg:w-[35%] text-[color:var(--text-clr)]'>Cooking is not just about ingredients; it's a creative outlet for us.</p>
              <a href='#' className='bg-[color:var(--thm-clr2)] hover:bg-[#FFBB00] transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>Resume Class</a>
              <p className='md:w-[60%] lg:w-[40%] xs:mt-2 lg:mt-10 text-[color:var(--text-clr)]'>The Cooking Academy is a Digital Platform where you can learn various cooking styles and techniques from professional chefs.</p>
            </div>
       
    </section>
    {/* =================================Banner================================= */}

    {/* =================================Brands================================= */}
    <section className='w-11/12 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-7 gap-10 place-items-center py-20' data-aos="fade-right">
          <LazyLoadImage effect='blur' className='h-10' src={Brand1}/>
          <LazyLoadImage effect='blur' className='h-10' src={Brand2}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand3}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand4}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand5}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand6}/>
          <LazyLoadImage effect='blur' className='h-14' src={Brand7}/>
        </div>
    </section>
    {/* =================================Brands================================= */}


    {/* =================================Explore================================= */}
    <section className='' data-aos="fade-right">
      <div className='flex gap-10 py-10 xs:px-5 md:px-0 md:pl-5 lg:pl-16'>
        <h3 className='xs:text-2xl md:text-3xl font-semibold'>Explore our classes.</h3>
        <a href='#' className='text-slate-600 hover:text-white text-xl font-medium flex align-bottom md:pt-2'>See all</a>
      </div>
      <ExploreSlider/>
      <div className='grid place-items-center pt-20 pb-10'>
        <a href='#' className='bg-slate-500 hover:bg-[#FFBB00] transition-all duration-500 rounded-md px-5 py-2'>Explore Classes</a>
    </div>
    </section>
    {/* =================================Explore================================= */}

    {/* =================================About us================================= */}
      <section className='w-11/12 mx-auto py-10'>
              <div data-aos="fade-right">
                  <h2 className='text-center font-bold xs:text-4xl lg:text-5xl'>About Us</h2>
                  <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas nam fuga itaque expedita distinctio totam dolore, consequuntur ullam dolorum est consectetur eos, maxime enim dolorem nihil illo minus, reprehenderit aliquid delectus dignissimos maiores dicta sunt quasi! Harum, magnam doloribus?</p>
                  <h2 className='text-center font-bold text-4xl text-[color:var(--thm-clr2)] pt-5'>Last year achievemrnt</h2>
                  <p className='xs:w-[90%] md:w-[60%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>we are a culinary startup based in qatar with the aim of bringing people together, to leam and enjoy the art of cooking.</p>
              </div>

              <div data-aos="fade-right" className='md:w-10/12 mx-auto md:pt-5 grid grid-cols-2 md:grid-cols-4 xs:gap-5 md:gap-0 place-items-center text-[color:var(--thm-clr2)]'>
                  <h4 className='xs:text-6xl lg:text-7xl'>+00</h4>
                  <h4 className='xs:text-6xl lg:text-7xl'>+00</h4>
                  <h4 className='xs:text-6xl lg:text-7xl'>+00</h4>
                  <h4 className='xs:text-6xl lg:text-7xl'>+00</h4>
              </div>
      </section>
    {/* =================================About us================================= */}

     {/* =================================Workshop================================= */}
     <section className='workshop'>
       <div className='xs:w-11/12 lg:w-10/12 mx-auto xs:pt-10 lg:pt-20'>
          <h2 className='font-bold xs:text-4xl lg:text-5xl' data-aos="fade-right">Workshop</h2>
          <div className='flex flex-col md:flex-row justify-between pt-5' data-aos="fade-right">
            <p className='text-[#ffffffcb] md:w-[60%] text-xl xs:pb-5 md:pb-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <a href='#' className='bg-white hover:bg-[#f0eeee] text-black h-fit w-fit  py-2 px-5 rounded-lg lg:text-xl font-medium'>See all<i class="fa-solid fa-arrow-right pl-5"></i></a>
          </div>
          <div data-aos="fade-right">
            <LazyLoadImage effect='blur' className='pt-5' src={Videotemp}/>
          </div>

          
       {/* slider */}
        <div data-aos="fade-right" ><WorkSlider/></div>
       </div>

     </section>
     {/* =================================Workshop================================= */}

     {/* =================================Meet Our Chefs================================= */}
      <section className='w-11/12 mx-auto grid place-items-center my-20 overflow-hidden'>
          {/* Chefs imaegs */}
          {/* Large Device */}
          <div id='chefs' className='xs:hidden md:block relative grid place-items-center pt-20'>
              <div className='flex justify-center relative'>
                  <div id='cheftip1' className='relative'>
                    <img src={Chef1} className='relative pt-24 -right-28  z-10 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel1' className='absolute top-10 left-10 '>Chef Claudio Trovato<br></br><p>Italian Cuisine</p></span>
                  </div>
                  <div id='cheftip2' className='relative'>
                    <img src={Chef2} className='relative pt-16 -right-20  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel2' className='absolute top-5 left-10 '>Chef Dala<br></br><p>Pastry Chef</p></span>
                  </div>
                  <div id='cheftip3' className='relative'>
                    <img src={Chef3} className='relative  z-0 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel3' className='absolute top-0 left-0 '>Chef Landry Hatlas<br></br><p>Head Baker</p></span>
                  </div>
                  <div id='cheftip4' className='relative'>
                    <img src={Chef4} className='relative pt-20 -left-20  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel4' className='absolute top-0 left-10 '>Chef Stephanie<br></br><p>Mediterranean cuisine</p></span>
                  </div>
                  <div id='cheftip5' className='relative'>
                    <img src={Chef5} className='relative pt-24 -left-40  z-10 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel5' className='absolute top-20 right-5 '>Chef VJ<br></br><p>Modern viennoiserie and pastry</p></span>
                  </div>
              </div>
              <div className='flex justify-center relative -mt-52 z-50'>
                  <div id='cheftip6' className='relative'>
                    <img src={Chef6} className='relative pt-14 -right-32  z-10 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel6' className='absolute top-20 left-20'>Chef Suzy Aly<br></br><p>Kids Master Chef</p></span>
                  </div>
                  <div id='cheftip7' className='relative'>
                    <img src={Chef7} className='relative -right-16  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel7' className='absolute top-5 left-10 '>Chef Manuel<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip8' className='relative'>
                    <img src={Chef8} className='relative   z-0 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel8' className='absolute top-5 left-0 '>Chef Airo<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip9' className='relative'>
                    <img src={Chef9} className='relative pt-14 -left-24  z-20 md:h-[350px] lg:h-[500px] hover:z-30 hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel9' className='absolute top-20 right-20 '>Chef Aisha Al Tamimi<br></br><p>Qatari Chef</p></span>
                  </div>
              </div>
          </div>

          {/* Small Device */}

          <div id='chefs' className='xs:block md:hidden relative grid place-items-center pt-10'>
              <div className='flex justify-center relative'>
                  <div id='cheftip4' className='relative'>
                    <img src={Chef4} className='relative h-32 -right-8  z-0   hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel4' className='absolute top-16 left-0 '>Chef Stephanie<br></br><p>Mediterranean cuisine</p></span>
                  </div>
                  <div id='cheftip2' className='relative'>
                    <img src={Chef2} className='relative h-40 right-3  z-10  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel2' className='absolute top-16 left-5 '>Chef Dala<br></br><p>Pastry Chef</p></span>
                  </div>
                  <div id='cheftip3' className='relative'>
                    <img src={Chef3} className='relative h-32 -left-10  z-0  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel3' className='absolute top-10 left-0 '>Chef Landry Hatlas<br></br><p>Head Baker</p></span>
                  </div>
                  
              </div>

              <div className='flex justify-center relative -mt-24'>
                  <div id='cheftip1' className='relative'>
                    <img src={Chef1} className='relative h-40 -right-3 z-10  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel1' className='absolute top-16 left-0 '>Chef Claudio Trovato<br></br><p>Italian Cuisine</p></span>
                  </div>
                  <div id='cheftip7' className='relative'>
                    <img src={Chef7} className='relative h-40 z-20  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel7' className='absolute top-16 left-0 '>Chef Manuel<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip5' className='relative'>
                    <img src={Chef5} className='relative h-40 -left-3 z-10   hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel5' className='absolute top-16 right-0 '>Chef VJ<br></br><p>Modern viennoiserie and pastry</p></span>
                  </div>
              </div>
              <div className='flex justify-center relative -mt-20'>
                  <div id='cheftip6' className='relative'>
                    <img src={Chef6} className='relative h-40 z-20 -right-3   hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel6' className='absolute top-20 left-0'>Chef Suzy Aly<br></br><p>Kids Master Chef</p></span>
                  </div>
                  <div id='cheftip8' className='relative'>
                    <img src={Chef8} className='relative h-40 z-30  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel8' className='absolute top-20 left-5 '>Chef Airo<br></br><p>Executive Chef</p></span>
                  </div>
                  <div id='cheftip9' className='relative'>
                    <img src={Chef9} className='relative h-40 z-20 -left-3  hover:scale-125 transition-all duration-150 ease-in-out cursor-pointer' alt='img'/>
                    <span id='cheflabel9' className='absolute top-20 right-0 '>Chef Aisha Al Tamimi<br></br><p>Qatari Chef</p></span>
                  </div>
              </div>
          </div>



          <div className='text-center pt-5' data-aos="fade-right">
            <h2 className='text-4xl font-bold'>Meet our chefs</h2>
            <p className='text-xl pt-3 md:w-[70%] mx-auto text-[#ffffffcb]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
          </div>
      </section>
     {/* =================================Meet Our Chefs================================= */}

          

    {/* ==================================Other Service================================ */}
    <section>
      <div className='md:pl-5 lg:pl-32 flex gap-10 xs:px-5 md:px-0 py-10' data-aos="fade-right">
        <h3 className='text-3xl font-semibold'>Other Services.</h3>
        <a href='#' className='text-slate-600 hover:text-white text-xl font-medium flex align-bottom pt-2'>See all</a>
      </div>

      <div class="grid grid-rows-4 grid-flow-row md:grid-flow-col overflow-hidden" >
            <div class="relative zoom-card row-span-4 md:col-span-2">
              <img alt='img' className='h-full w-full object-cover brightness-75'  src={zomImg1}/>
              <h3 className='absolute bottom-5 left-10 text-4xl font-bold' data-aos="fade-right">Kitchen Studio</h3>
            </div>
            <div class="relative zoom-card row-span-2">
            <img alt='img' className='h-full w-full object-cover brightness-75' src={zomImg2}/>
            <h3 className='absolute bottom-5 left-10 text-4xl font-bold' data-aos="fade-right">Consultancy</h3>
            </div>
            <div class="relative zoom-card row-span-2">
            <img alt='img' className='h-full w-full object-cover brightness-75' src={zomImg3}/>
            <h3 className='absolute bottom-5 left-10 text-4xl font-bold' data-aos="fade-right">Kitchen</h3>
            </div>
          </div>

    </section>
    {/* ==================================Other Service================================ */}


    {/* ==================================Enquire================================ */}
    <section className='w-11/12 mx-auto xs:py-16 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:px-5 bg-slate-800 xs:py-10 md:py-16 rounded-md md:place-items-center enquire-form'>
              <div className='xs:px-2 md:px-0' data-aos="fade-right">
                <h3 className='font-bold text-2xl'>Enquire Now for More Details</h3>
                <p className='text-[#ffffffcb]'>Enter your email and we'll send you some samples of our favorite classes.</p>
              </div>
              <div className='xs:px-2 md:px-0 xs:pt-5 md:pt-0'>
                <form className='flex xs:flex-col md:flex-row justify-start gap-5 '>
                  <div className='flex flex-col gap-2'>
                    <input className='outline-none  bg-black rounded-md border-2 border-[#383737] text-xl py-1 lg:w-72' type="text" />
                    <span className='flex'><input className='ml-1 mr-3' type='checkbox'/><p className='text-xs text-[#ffffffb0]'>I agree to receive email updates</p></span>
                  </div>
                  <button className='bg-slate-600 hover:bg-[#FFBB00] transition-all duration-500 text-base text-[#ffffffb0] px-8 py-2 rounded-md h-fit w-fit' type='submit'>Submit</button>
                </form>
              </div>
          </div>
    </section>
    {/* ==================================Enquire================================ */}



    {/* ==================================Enquire================================ */}
      <section className='w-11/12 mx-auto enquire p-2'>
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
    {/* ==================================Enquire================================ */}


    {/* ==================================Feedback================================ */}
    <section className='feedback xs:my-10 lg:my-28 xs:h-screen md:h-[800px] lg:h-[600px] overflow-hidden'>
      <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5'>
          <div className='md:col-span-2 flex justify-center flex-col xs:py-10 lg:py-0' data-aos="fade-right">
                <h1 className='xs:text-3xl md:text-4xl font-medium'>Feedbacks</h1>
                <p className='text-[#ffffffc7] text-lg lg:w-[60%] py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates id inventore fugiat!</p>
                <a className='bg-white text-black px-4 py-2 text-xl rounded-lg w-fit h-fit' href="#">Read all <i class="fa-solid fa-arrow-right pl-4"></i></a>
          </div>

          <div className='xs:w-10/12 md:w-full mx-auto md:col-span-3 grid grid-cols-1 gap-3 md:grid-cols-3 overflow-y-scroll xs:h-[600px] md:h-[500px] lg:h-[600px] scroll-main'>
                <div className='bg-white p-5  rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User1} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669705586/Cooking%20Academy%20Assets/Downloader.la_-62d179a7d9dfc_dl2d8z.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User7} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706361/Cooking%20Academy%20Assets/Downloader.la_-62d1798845da8_zo60xv.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User6} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User4} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706433/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_pgh3it.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User5} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User3} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706522/Cooking%20Academy%20Assets/avatar-8aae058a0f5df7ef941fe5ef9577bc3c_shlfy1.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User2} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User4} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User1} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669705586/Cooking%20Academy%20Assets/Downloader.la_-62d179a7d9dfc_dl2d8z.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User7} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706361/Cooking%20Academy%20Assets/Downloader.la_-62d1798845da8_zo60xv.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User6} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User1} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669705586/Cooking%20Academy%20Assets/Downloader.la_-62d179a7d9dfc_dl2d8z.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User7} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706361/Cooking%20Academy%20Assets/Downloader.la_-62d1798845da8_zo60xv.webp)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User6} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Alex</p>
                          <p className='font-semibold'>Joseph</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A est deserunt iusto recusandae expedita quidem, delectus provident ut magni ipsum.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alex</p>
                      <p className='font-semibold'>Joseph</p>
                    </span>
                  </div>
                </div>
                
          </div>
      </div>
    </section>
    {/* ==================================Feedback================================ */}

    {/* ==================================Instagram================================ */}
    <section className='xs:py-10  insta-bg'>
         <div className='xs:w-11/12 md:w-full mx-auto text-center text-[#ffffffcb]' data-aos="fade-right">
            <h2 className='xs:text-xl md:text-3xl '>Check out@cookingacademy on instagram</h2>
            <p className='xs:text-sm md:text-base py-3 lg:w-[30%] mx-auto'>Lorem ipsurn dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut I</p>
          </div>

          {/* scroll */}
          <div className='pb-10 relative'>
            <InstaSlider/>
          </div>
          <div className='grid place-items-center xs:mt-16 md:mt-28'>
            <a className='bg-white hover:bg-[#FFBB00] rounded-lg px-3 py-2 text-black hover:text-white xs:text-lg md:text-xl' href="#">Visit Our Instgram<i class="fa-brands fa-instagram font-medium text-2xl pl-2"></i></a>
          </div>
    </section>
    {/* ==================================Instagram================================ */}


    {/* ==================================Frequently questions================================ */}
      <section className='w-[90%] md:w-[70%] lg:w-[50%] mx-auto pt-10'>
        <p className='text-center text-3xl  pb-5' data-aos="fade-right">Frequently asked questions</p>
        <div className='accordion__faq'>
            <h2 className='text-xl pb-3'>General</h2>
            {Faq.map((item, index) =>
                        <div key={index} onClick={() => toggleAccordion(index)} data-aos="fade-right">
                            <div className="accordion__faq-heading acco-m">
                            <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            <div>
                                {accordion === index ?
                                <span className="verticle"><i class="fa-solid fa-angle-up"></i></span> : <span className="horizental"><i class="fa-solid fa-angle-down"></i></span>}
                            </div>
                            </div>
                            <div className='acco-m'><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
                  
                        </div>
                        )
                    }
        </div>
        <div className='accordion__faq pt-10'>
            <h2 className='text-xl pb-3'>Pricing & Payment</h2>
            {Price.map((item, index) =>
                        <div key={index} onClick={() => toggleAccordion2(index)} data-aos="fade-right">
                            <div className="accordion__faq-heading acco-m">
                            <h3 className={accordion2 === index ? "active" : ""}>{item.question}</h3>
                            <div>
                                {accordion2 === index ?
                                <span className="verticle"><i class="fa-solid fa-angle-up"></i></span> : <span className="horizental"><i class="fa-solid fa-angle-down"></i></span>}
                            </div>
                            </div>
                            <div className='acco-m'><p className={accordion2 === index ? "active" : "inactive"} >{item.answer}</p></div>
                  
                        </div>
                        )
                    }
        </div>
      </section>
    {/* ==================================Frequently questions================================ */}


    </>
  )
}

export default LandingPage