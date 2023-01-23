import React,{useState} from 'react'
import Navbar from '../Navbar/AdminNav';
import '../Pages/style.css'




function WorkShopimage() {

   
  return (
    <>
     <Navbar/>

{/* Main section */}
<section className='admin-body'>
  {/* Data Input */}
    <div className='p-5'>
        <h1 className='font-bold text-4xl pt-5'>Workshop Images</h1>
        <form
        method="POST"
        className="lg:w-3/5 flex flex-col gap-6 py-10"
      >
        <div>
          <p className="text-xl pb-4">Add Image</p>
          <input
            type="file"
            class="block w-full text-sm text-slate-500 bg-bg-darks md:w-80 p-10 border-dashed border-slate-600 border-2 rounded-lg
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-transparent file:text-primary-clr2
                  hover:file:bg-violet-100
                "
            name="image"
            // onChange={(e) => {
            //   setFieldTouched("image", true);
            //   if (
            //     e?.target?.files &&
            //     e?.target?.files?.length > 0
            //   ) {
            //     setFieldValue("image", e.target.files[0]);
            //   }
            // }}
            required
          />
        </div>

          <button
        //    disabled={isSubmitting}
            className="bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-200 md:px-16 py-2 w-fit rounded-md"
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   handleSubmit();
            // }}
            >
        
            Create
          </button>

      </form>
        
    </div>
    {/* Data Input end*/}


    {/* Display Data*/}
    <div className='w-full bg-[#2b2929] p-5 min-h-[200px]'>
        <h1 className='font-bold text-2xl text-primary-clr2'>Kitchen Studio</h1>
        <div className='relative'>
            {/* contents */}
           <img className='h-60 w-40 bg-yellow-600 my-2' src="" alt="" />
            {/* Edit/Delete Buttons */}
            <div className='absolute top-10 right-20 flex gap-8'>
              <i class="text-2xl fa-solid fa-trash hover:text-red-700"></i>
            </div>
            <hr />
        </div>
    </div>

</section>
    </>
  )
}

export default WorkShopimage;