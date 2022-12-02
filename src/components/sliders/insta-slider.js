import React,{useState} from 'react';
import '../../pages/home/landingPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {InstaData} from '../constant/data'


let instabox = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786014/Cooking%20Academy%20Assets/Instagram_mockup_4_htobcw.png';
let instapic1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786014/Cooking%20Academy%20Assets/Rectangle_201_yk75qp.png';
let instapic2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786013/Cooking%20Academy%20Assets/Rectangle_204_qkmtot.png';
let instapic3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786013/Cooking%20Academy%20Assets/Rectangle_202_pnltzr.png';
let instapic4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786014/Cooking%20Academy%20Assets/Rectangle_200_mtzb1s.png';
let instapic5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786013/Cooking%20Academy%20Assets/Rectangle_205_d5xgqm.png';
let instapic6 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669786013/Cooking%20Academy%20Assets/Rectangle_206_ggq0ya.png';



function Instaslider() {

    const [slideIndex, setSlideIndex] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        beforeChange: (current, next)=>setSlideIndex(next),
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
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
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='insta relative xs:mt-32 md:mt-44'>
        <div className=' instta'>
            <img className='xs:h-[300px] md:h-[480px]' src={instabox} />
        </div>
        <Slider {...settings} className=' '>
            {
                InstaData.map((item,index) => (
                    <div className={index === slideIndex ? 'slide3 slide3-active': 'slide3'} key={index}>
                        <img src={item.image} />
                    </div>
                ))
            }
            {/* <div>
                <img src={instapic1}/>
            </div>
            <div>
                <img src={instapic2}/>
            </div>
            <div>
                <img src={instapic3}/>
            </div>
            <div>
                <img src={instapic4}/>
            </div>
            <div>
                <img src={instapic5}/>
            </div>
            <div>
                <img src={instapic6}/>
            </div>
            <div>
                <img src={instapic1}/>
            </div>
            <div>
                <img src={instapic2}/>
            </div>
            <div>
                <img src={instapic3}/>
            </div>
            <div>
                <img src={instapic4}/>
            </div>
            <div>
                <img src={instapic5}/>
            </div>
            <div>
                <img src={instapic6}/>
            </div>
            <div>
                <img src={instapic3}/>
            </div>
            <div>
                <img src={instapic4}/>
            </div> */}
        </Slider>
    </div>
  )
}

export default Instaslider;