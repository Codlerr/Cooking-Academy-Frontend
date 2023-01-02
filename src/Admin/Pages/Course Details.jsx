import React from 'react';
import Navbar from '../Navbar/AdminNav';

function CourseDetails() {
  return (
    <>
    <Navbar/>

    
     {/* Main section */}
     <section className='admin-body'>
      {/* Data Input */}
        <div className='p-5'>
            <h1 className='font-bold text-4xl pt-5'>Course Details</h1>

            <form action="" className='md:w-3/5 flex flex-col gap-6 py-10'>
              <div>
                  <p className='text-xl pb-4'>Banner Image</p>
                  <input type="file" class="block w-full text-sm text-slate-500 bg-bg-darks md:w-80 p-10 border-dashed border-slate-600 border-2 rounded-lg
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-transparent file:text-primary-clr2
                      hover:file:bg-violet-100
                    " required/>
              </div>

              <div>
                <p className='text-xl pb-4'>Banner Video</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Enter your Question' required/>
              </div>

              <div>
                <p className='text-xl pb-4'>Headline</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Enter your Headline' required/>
              </div>

              <div>
                <p className='text-xl pb-4'>About Class</p>
                <textarea rows='3' className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='About Class' required/>
              </div>

              <div>
                <p className='text-xl pb-4'>Instructure Name</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Instructure name' required/>
              </div>

              <div>
                <p className='text-xl pb-4'>Class Length</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Class Length' required/>
              </div>
              
              <div className='flex flex-row justify-between gap-10'>
                    <div>
                      <p className='text-xl pb-4'>Units</p>
                      <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='01' required/>
                    </div>
                    <div>
                      <p className='text-xl pb-4'>Lessons</p>
                      <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='19' required/>
                    </div>
                    <div>
                      <p className='text-xl pb-4'>Tasks</p>
                      <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='60' required/>
                    </div>
              </div>

              <div>
                <p className='text-xl pb-4'>Enrolling Fees</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-1/3' type="text" placeholder='300' required/>
              </div>

              <div className='flex justify-end'>
                <button className='bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 rounded-md' type='submit'>Create</button>
              </div>
            </form>
        </div>
        {/* Data Input end*/}


        {/* Display Data*/}
        <div className='w-full bg-[#2b2929] p-5 min-h-[200px]'>
            <div className='relative grid grid-cols-1  md:grid-cols-5'>
                {/* contents */}
                <div className='flex flex-col py-5 gap-5 md:col-span-3'>
                  <p className='text-2xl font-medium'>Lorem, ipsum dolor sit amet consectetur?</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus placeat modi a delectus ipsum labore maxime, alias sint voluptas voluptatibus, ipsam cum. Tenetur, in. Asperiores beatae, nesciunt ducimus impedit sit error consequatur illo adipisci distinctio unde, facilis excepturi at.</p>
                  <p>Instructor(s): Kelly Wearstler</p>
                  <p>Class Length: 17 video lessons (2 hrd 13min)</p>
                  <p>6 units | 17 lessons | 54 tasks</p>
                </div>

                <div className='md:grid place-items-center'>
                  <h1 className='text-primary-clr2 text-3xl font-semibold'>$299</h1>
                </div>
                {/* Edit/Delete Buttons */}
                <div className='absolute top-10 right-5 flex gap-8'>
                  <i class="fa-solid fa-pen-to-square hover:text-red-700"></i>
                  <i class="fa-solid fa-trash hover:text-red-700"></i>
                </div>
            </div>
            <hr />
        </div>

    </section>
    </>
  )
}

export default CourseDetails