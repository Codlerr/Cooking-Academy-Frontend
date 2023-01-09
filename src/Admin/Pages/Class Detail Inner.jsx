import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router';
import instance from "../../API/api_instance";
import Navbar from '../Navbar/AdminNav';


function ClassInnerDetails() {
  const location = useLocation();
  const classDetails = location.state.details;
  const [course, setCourse] = useState([]);



  const fetchItems = async () => {
    await instance.get("/course", {}).then((response) => {
      setCourse(response.data.data.courses);
      console.log(response.data);
    });
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
    <Navbar/>
    
     {/* Main section */}

    <section className='admin-body'>
      {/* Data Input */}
        <div className='p-5 pb-10'>
            <h1 className='font-bold text-4xl pt-5'>{classDetails.name}</h1>
            <video className='w-3/4 py-10' controls loop controlsList="nodownload">
              <source src={classDetails.videoLink} type="video/mp4"/>
            </video>
            <div className='w-[80%] flex flex-col gap-5'>
              <p className='text-justify'>{classDetails.about}</p>
              <p className='font-medium text-xl'>Instructor(s): {classDetails.instructorName}</p>
              <p className='font-medium text-xl'>Class Length: {classDetails.duration}</p>
              <p className='font-medium text-xl'>{classDetails.unit} units<span className='px-5'>|</span>{classDetails.lesson} lessons<span className='px-5'>|</span>{classDetails.task} tasks</p>
              <p className='font-medium text-2xl'>Enrolling Fees: <span className='text-primary-clr2'>${classDetails.price}</span></p>

            </div>
        </div>
        {/* Data Input end*/}


        {/* Display Data*/}
        {/* <div className='w-full bg-[#2b2929] p-5 min-h-[200px]'>
            <h1 className='font-bold text-2xl text-primary-clr2'>Chapters</h1>
            <div className='relative'>
               
                <div className='w-[90%] flex flex-col py-5 gap-5'>
                 <p>Chapters</p>
                 <p className='font-medium text-xl'>Fundamentals of cooking</p>
                </div>
              
                <div className='absolute top-10 right-5 flex gap-8'>
                  <i class="fa-solid fa-pen-to-square hover:text-red-700"></i>
                  <i class="fa-solid fa-trash hover:text-red-700"></i>
                </div>
                <hr />
            </div>
        </div> */}

    </section>

    </>
  )
}

export default ClassInnerDetails