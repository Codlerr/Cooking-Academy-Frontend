import React,{useState} from 'react';
import '../../pages/home/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ServiceImg } from '../constant/data';



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
      dots: true,
      dotsClass: "slick-dots custom-indicator",
      infinite: true,
      speed: 2000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      beforeChange: (current, next)=>setSlideIndex(next),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: function(i) {
        return (
         <div>
            <img src={ServiceImg[i].image} alt='img' className='custom-pagin'/>
         </div>
        );
      },
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       dots: true,

      //     }
      //   }]
    };

  return (
    <div className='services'>
        <Slider {...settings} className='w-full'>
          {
            ServiceImg.map((img, index) => (
            <div className={index === slideIndex ? 'slide2 slide2-active': 'slide2'} key={index}>
                <div className='relative zoom-card'>
                <img alt='img' className='xs:h-60 md:h-[400px] lg:h-[600px] w-full object-cover brightness-75'  src={img.image}/>
                <h3 className='absolute bottom-2 left-5 xs:text-2xl md:text-4xl font-bold'>{img.heading}</h3>
              </div>
          </div>
            ))
          }
        </Slider>
    </div>
   
  )
}

export default Workshopslider;