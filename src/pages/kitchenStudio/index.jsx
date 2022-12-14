import react,{useEffect, useState} from 'react';
import './style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import KitcheSlider from '../../components/sliders/kitchen-slider';
import { KitchenFilter } from '../../components/constant/data';
import ENQ from "../../components/Enquiry"
import FEEDBACK from "../../components/Feedback"
import FAQ from "../../components/Faq"



let graph = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1671011767/Cooking%20Academy%20Assets/kitchen%20page/e736728f395daac3c44999403c6eea40_r9sga7.webp';

function KitchenStudio() {
    // filter tabs
    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);


    useEffect(() => {
      setData(KitchenFilter);
      setCollection([... new Set(KitchenFilter.map((item)=> item.title))])
    },[])


   

    const ImageFilter =(itemData) =>{
        const filterData = KitchenFilter.filter((item) => item.title == itemData)
        setData(filterData);
    }

  return (
    <>
    {/* =========================BANNER=============================== */}
    <section className='kitchen-banner'>
            <div data-aos="fade-right" className='xs:px-5 md:px-0 md:pl-20 h-full flex justify-center flex-col xs:gap-5 md:gap-5'>
                <h1 className='xs:text-5xl lg:text-7xl  font-bold md:w-[40%] '>The Modern Kitchen Studio</h1>
                <p className='xs:text-xl md:text-2xl md:w-[40%]'>Cooking is not just about ingredients, it's a creative outlet for us.</p>
                <a className='bg-primary-clr2 hover:bg-primary-clr1 w-fit text-xl font-medium rounded-3xl xs:px-10 md:px-16 py-3' href="#">Book Now</a>
            </div>
    </section>
    {/* ==========================BANNER============================== */}

    {/* ============================BOOK NOW============================ */}
    <section>
        <div className='xs:pt-10 md:pt-20'>
            <div data-aos="fade-right" className='xs:text-2xl md:text-4xl text-center font-semibold italic leading-snug'>
                <h2 className=''>BRING YOUR <span className='text-primary-clr2'>VISION</span> TO LIFE.</h2>
                <h2 className=''>LET US HANDLE THE REST.</h2>
            </div>
            <div data-aos="fade-right" className='grid place-items-center'>
                    <p className='xs:w-[90%] md:w-[70%] text-xl mx-auto text-center text-text-dark pt-5 pb-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat. sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea reburn. Stet clita kasd gubergren. no sea takimata sanctus est</p>
                    <a className='bg-primary-dark hover:bg-primary-clr1 text-xl font-medium rounded-3xl xs:px-10 md:px-16 py-3' href="#">Book Now</a>
            </div>
        </div>
        <div className='pt-28'>
            <KitcheSlider/>
        </div>
    </section>
    {/* ============================BOOK NOW============================ */}

    {/* ==========================SKETCH============================== */}
    <section className='md:pt-10'>
        <div className='md:py-16 xs:w-[90%] md:w-9/12 mx-auto'>
            <LazyLoadImage effect='blur' className='' src={graph} alt="graph" />
        </div>
    </section>
    {/* =========================SKETCH=============================== */}

    {/* ============================TABS============================ */}
    <section className='xs:w-11/12 md:w-9/12 mx-auto xs:pt-10 md:pt-0'>
        <div className='filter '>
            <ul className='flex justify-between flex-wrap list-none  gap-5'>
                {
                collection.map((item) => <li className=' border-primary-clr2 border-[2px] hover:bg-primary-clr1 rounded-3xl px-5 py-1.5 duration-500 xs:text-xs md:text-xs lg:text-lg'><button onClick={() => {ImageFilter(item)}}>{item}</button></li>)
                }
            </ul>
        </div>
        <div className=''>
            {
            data.slice(0,1).map((item) => 
            <div className='grid grid-cols-1 md:grid-cols-2 xs:gap-y-10 md:gap-20 py-10'>
                <LazyLoadImage effect='blur' className='lg:h-[350px]' src={item.img} key={item.id} />
                <div className='filts'>
                    <h1 className='text-xl uppercase font-semibold'>{item.title}</h1>
                    <ul className='pl-4 pt-3 text-text-dark'>
                        <li className='list-disc '>{item.point1}</li>
                        <li className='list-disc '>{item.point2}</li>
                        <li className='list-disc '>{item.point3}</li>
                    </ul>
                </div>
            </div>
            )
            }
        </div>
    </section>
    {/* =============================TABS=========================== */}

    {/* ===========================ENQUIRY=========================== */}
    <ENQ/>
    {/* ===========================ENQUIRY=========================== */}

    {/* ==========================FEEDBACK============================ */}
    <FEEDBACK/>
    {/* ==========================FEEDBACK============================ */}

    {/* =============================FAQ========================= */}
    <FAQ/>
    {/* =============================FAQ========================= */}


    </>
  )
}

export default KitchenStudio;