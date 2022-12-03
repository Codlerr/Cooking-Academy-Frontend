import React,{useState} from 'react';
import '../../pages/home/landingPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { WorkshopImg } from '../constant/data'



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
      autoplay: true,
      autoplaySpeed: 4000,
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
        <Slider {...settings} className='w-full mx-auto py-5'>
          {
            WorkshopImg.map((img, index) => (
            <div className={index === slideIndex ? 'slide2 slide2-active': 'slide2'} key={index}>
                <LazyLoadImage className='h-[400px]' effect='blur' src={img.image} alt="" />
            </div>
            ))
          }
        </Slider>
    </div>
   
  )
}

export default Workshopslider;