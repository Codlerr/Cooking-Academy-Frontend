import React,{useState} from 'react';
import '../../pages/home/landingPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

let Image1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621456/Cooking%20Academy%20Assets/Downloader.la_-62d10ce67947b_oac5tv.webp'
let Image2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d10d3d95ada_ytkdqj.webp'
let Image3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621456/Cooking%20Academy%20Assets/Downloader.la_-62d10d1a23e4c_yrm4qp.webp'
let Image4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621456/Cooking%20Academy%20Assets/Downloader.la_-62d10ce67947b_oac5tv.webp'
let Image5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621457/Cooking%20Academy%20Assets/Downloader.la_-62d10d3d95ada_ytkdqj.webp'
let Image6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621456/Cooking%20Academy%20Assets/Downloader.la_-62d10d1a23e4c_yrm4qp.webp'

const images = [Image1,Image2,Image3,Image4,Image5,Image6];

function SampleNextArrow({onClick}) {
    return (
      <div className='arrow2 arrow-right2' onClick={onClick}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrow2 arrow-left2' onClick={onClick}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    );
  }

function Workshopslider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      beforeChange: (current, next)=>setSlideIndex(next),
      centerMode: true,
      centerPadding: "20px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,

          }
        }]
    };

  return (
    <div>
        <Slider {...settings} className='w-[97%] py-5'>
          {
            images.map((img, index) => (
            <div className={index === slideIndex ? 'slide2 slide2-active': 'slide2'} key={index}>
                <LazyLoadImage effect='blur' src={img} alt="" />
            </div>
            ))
          }
        </Slider>
    </div>
   
  )
}

export default Workshopslider;