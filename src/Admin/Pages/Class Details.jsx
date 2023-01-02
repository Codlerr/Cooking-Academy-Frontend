import React from 'react';
import Navbar from '../Navbar/AdminNav';
let Image = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670322162/Cooking%20Academy%20Assets/foods/Indian_food_yyqojn.jpg';

function ClassDetails() {
  return (
    <>
    <Navbar/>
    
     {/* Main section */}
     <section className='admin-body'>
      {/* Data Input */}
        <div className='p-5'>
            <h1 className='font-bold text-4xl py-5'>Class Details</h1>

          {/*  */}
          <div className='p-2 grid grid-cols-1 md:grid-cols-4 bg-bg-darks rounded-lg place-items-center'>
              <img className='h-72 w-60 object-cover rounded-md' src={Image} alt="img" />
              <div className='flex flex-col gap-4 md:col-span-2'>
                <p className='font-medium text-xl'>Funddamentals of Qlisine</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                <p>Instructor(s): Kelly Wearstler</p>
                <p>Class Length: 17 video lessons (2 hrs 13 min)</p>
                <p>6 unis | 17 lessons | 54 tæks</p>
              </div>
              <div>
                <a href="/admin/course-details-Inner"><i class="text-5xl text-primary-clr2 hover:text-primary-clr1 bg-[#424040] hover:bg-[#555151] p-2 rounded-md fa-solid fa-arrow-right-from-bracket"></i></a>
              </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default ClassDetails