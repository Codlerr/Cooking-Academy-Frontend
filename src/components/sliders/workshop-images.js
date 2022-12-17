import React,{useState} from 'react';
import '../../pages/home/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {WorkshopImg} from '../constant/data'


function SampleNextArrow({onClick}) {
    return (
      <div className='arrow3 arrow-right3' onClick={onClick}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}) {
    return (
      <div className='arrow3 arrow-left3' onClick={onClick}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    );
  }



function Instaslider() {

    const [slideIndex, setSlideIndex] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setSlideIndex(next),
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
              dots:false
            }
          }
        ]
      };
  return (
    <div className='work-img relative py-10'>

        <Slider {...settings} className='w-full mx-auto '>
            {
                WorkshopImg.map((item,index) => (
                    <div className={index === slideIndex ? 'slide3 slide3-active': 'slide3'} key={index}>
                        <img className='xs:h-60 xs:w-48 md:w-fit md:h-96 object-cover rounded-lg' src={item.image} />
                    </div>
                ))
            }
           
        </Slider>
    </div>
  )
}

export default Instaslider;