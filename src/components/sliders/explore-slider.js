import React,{useEffect,useState} from 'react';
// import {useNavigate} from "react-router-dom";
import '../../pages/home/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {ExploreData} from '../constant/data';
import instance from "../../API/api_instance";


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


      // -------------------API CALL-----------------------//
      const [course, setCourse] = useState([]);
        useEffect(() => {
          const fetchItems = async () => {
            await instance.get("/course", {}).then((response) => {
              setCourse(response.data.data.courses);
              console.log(response.data);
            });
          };
          fetchItems();
        }, []);

      // -------------------API CALL-----------------------//


        var settings = {
          dots: false,
          infinite: true,
          speed:2000,
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
                slidesToScroll: 1,
              }
            }
          ]
        };
  return (
    <>
    <section className='text-white lg:pl-14 overflow-hidden'>
    {/* <Slider {...settings} className='w-full py-5 bg-[#131212]'>
      {
        ExploreData.map((item,index) => (
          <div className='relative ui-card' key={index}>
            <LazyLoadImage className='rounded-2xl card-img xs:h-[500px] w-fit mx-auto md:h-full' src={item.image}/>
                <div className='centered'>
                <p className='text-xl font-bold text-center uppercase'>{item.Title}</p>
                    <p className='text-2xl font-extrabold text-center uppercase'>{item.Title2}</p>
                    <div className='flex flex-col  gap-5 w-64 md:w-52 lg:w-64 mx-auto pb-3 mt-8'>
                      <a className='bg-white rounded-lg text-black py-2.5 text-center font-semibold' href='/cooking-class-inside'>ENROLL NOW</a>
                      <a className='bg-white rounded-lg text-black py-2.5 text-center font-medium' href='/cooking-class-inside'><i class="pr-2 fa-solid fa-circle-info"></i>VIEW CLASS INFO</a>
                    </div>
                </div>
       </div>
        ))
      }
       
      
    </Slider> */}


  <Slider {...settings} className='w-full py-5 bg-[#131212]'>
  {course && course.length>0 && course?.map((item, index) => {
          return (
            <div className='relative ui-card' key={index}>
            <LazyLoadImage className='rounded-2xl card-img xs:h-[500px] w-fit mx-auto md:h-full' src={item.image}/>
                <div className='centered'>
                <p className='text-xl font-bold text-center uppercase'>{item.name}</p>
                  
                    <div className='flex flex-col  gap-5 w-64 md:w-52 lg:w-64 mx-auto pb-3 mt-8'>
                      <a className='bg-white rounded-lg text-black py-2.5 text-center font-semibold' href='/cooking-class-inside'>ENROLL NOW</a>
                      <a className='bg-white rounded-lg text-black py-2.5 text-center font-medium' href='/cooking-class-inside'><i class="pr-2 fa-solid fa-circle-info"></i>VIEW CLASS INFO</a>
                    </div>
                </div>
       </div>
          );
        })}
       
      
    </Slider>

    
    </section>
    </>
  )
}

export default Exploreslider;