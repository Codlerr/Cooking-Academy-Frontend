import React from 'react'
import Navbar from '../Navbar/AdminNav';

function ClassInnerDetails() {
  return (
    <>
    <Navbar/>
    
     {/* Main section */}

    <section className='admin-body'>
      {/* Data Input */}
        <div className='p-5'>
            <h1 className='font-bold text-4xl pt-5'>Fundamentals of Cuisine</h1>

            <form action="" className='md:w-3/5 flex flex-col gap-8 py-10'>
            <div className='flex flex-row justify-between gap-10'>
                    <div className='flex-1'>
                      <p className='text-xl pb-4'>Chapter Title</p>
                      <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Title' required/>
                    </div>
                    <div>
                      <p className='text-xl pb-4'>No.of Lessons</p>
                      <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Lessons' required/>
                    </div>
                   
              </div>

              <div>
                <p className='text-xl pb-4'>Class info</p>
                <textarea rows="3" className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Class info' required/>
              </div>

              <div>
                <p className='text-xl pb-4'>Instructor Name</p>
                <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Instructor name' required/>
              </div>

                <p className='text-primary-clr2'>+ Add New Lesson</p>
                <div className='md:pl-10 flex flex-col gap-5'>
                    <div className='flex flex-row justify-between gap-10'>
                            <div className='flex-1'>
                            <p className='text-xl pb-4'>Lesson Title</p>
                            <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Title' required/>
                            </div>
                            <div>
                            <p className='text-xl pb-4'>Lesson length</p>
                            <input className='bg-bg-darks border-none  p-3 rounded-lg w-full' type="text" placeholder='Lessons' required/>
                            </div>
                        
                    </div>
                    <div className='flex gap-5 justify-between'>
                        <div>
                            <p className='text-xl pb-4'>Lesson Video</p>
                            <input className='bg-bg-darks p-2 border-dashed rounded-md border-slate-600 border-2' type="file" placeholder='Upload files' />
                        </div>
                        <div>
                            <p className='text-xl pb-4'>Lesson PDF</p>
                            <input className='bg-bg-darks p-2 border-dashed rounded-md border-slate-600 border-2' type="file" placeholder='Upload files' />
                        </div>
                    </div>
                </div>


              <div className='flex justify-end'>
                <button className='bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 rounded-md' type='submit'>Create</button>
              </div>
            </form>
        </div>
        {/* Data Input end*/}


        {/* Display Data*/}
        <div className='w-full bg-[#2b2929] p-5 min-h-[200px]'>
            <h1 className='font-bold text-2xl text-primary-clr2'>Chapters</h1>
            <div className='relative'>
                {/* contents */}
                <div className='w-[90%] flex flex-col py-5 gap-5'>
                 <p>Chapters</p>
                 <p className='font-medium text-xl'>Fundamentals of cooking</p>
                </div>
                {/* Edit/Delete Buttons */}
                <div className='absolute top-10 right-5 flex gap-8'>
                  <i class="fa-solid fa-pen-to-square hover:text-red-700"></i>
                  <i class="fa-solid fa-trash hover:text-red-700"></i>
                </div>
                <hr />
            </div>
        </div>

    </section>

    </>
  )
}

export default ClassInnerDetails