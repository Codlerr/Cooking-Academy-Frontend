import React from 'react';
import '../../pages/home/landingPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


let Image1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/istockphoto-922783734-612x612_vjmgsi.jpg';
let Image2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/istockphoto-922783734-612x612_1_cxnvhp.jpg';
let Image3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/istockphoto-922783734-612x612_2_gnkpms.jpg';
let Image4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621451/Cooking%20Academy%20Assets/istockphoto-922783734-612x612_3_gzyv5c.jpg';


function SampleNextArrow({onClick}) {
  return (
    <div className='arroww2 arroww-right2' onClick={onClick}>
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <div className='' onClick={onClick}>
      
    </div>
  );
}


function Exploreslider() {

        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <>
    <section className='text-white lg:pl-32'>
    <Slider {...settings} className='w-[97%] py-5 bg-[#131212]'>
       <div className='relative'>
        <LazyLoadImage className='rounded-xl card-img' src={Image1}/>
            <div className='centered'>
            <p className='text-xl font-bold text-center'>FUNDAMENTAL</p>
                <p className='text-3xl font-bold text-center'>CUISINE</p>
            </div>
       </div>

       <div className='relative'>
        <LazyLoadImage className='rounded-xl card-img' src={Image2}/>
            <div className='centered'>
                <p className='text-xl font-bold text-center'>WORLDWIDE</p>
                <p className='text-3xl font-bold text-center'>CUISINE</p>
            </div>
       </div>

       <div className='relative'>
        <LazyLoadImage className='rounded-xl card-img' src={Image3}/>
            <div className='centered'>
            <p className='text-xl font-bold text-center'>FUNDAMENTAL</p>
                <p className='text-3xl font-bold text-center'>PASTRY</p>
            </div>
       </div>

       <div className='relative'>
        <LazyLoadImage className='rounded-xl card-img' src={Image4}/>
            <div className='centered'>
            <p className='text-xl font-bold text-center'>WORLDWIDE</p>
                <p className='text-3xl font-bold text-center'>CUISINE</p>
            </div>
       </div>
       <div className='relative'>
        <LazyLoadImage className='rounded-xl card-img' src={Image1}/>
            <div className='centered'>
            <p className='text-xl font-bold text-center'>FUNDAMENTAL</p>
                <p className='text-3xl font-bold text-center'>CUISINE</p>
            </div>
       </div>

       <div className='relative'>
        <LazyLoadImage className='rounded-xl card-img' src={Image2}/>
            <div className='centered'>
                <p className='text-xl font-bold text-center'>WORLDWIDE</p>
                <p className='text-3xl font-bold text-center'>CUISINE</p>
            </div>
       </div>
      
    </Slider>

    
    </section>
    </>
  )
}

export default Exploreslider;