import React from 'react'

export default function index() {
  return (
    <>
     <section className='w-11/12 mx-auto xs:py-16 md:py-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:px-5 bg-slate-800 xs:py-10 md:py-16 rounded-md md:place-items-center enquire-form'>
              <div className='xs:px-2 md:px-0' data-aos="fade-right">
                <h3 className='font-bold text-2xl'>Enquire Now for More Details</h3>
                <p className='text-[#ffffffcb]'>Enter your email and we’ll keep you updates on all upcoming programs.</p>
              </div>
              <div className='xs:px-2 md:px-0 xs:pt-5 md:pt-0'>
                <form className='flex xs:flex-col md:flex-row justify-start gap-5 '>
                  <div className='flex flex-col gap-2'>
                    <input className='outline-none  bg-black rounded-md border-2 border-[#383737] text-xl py-1 lg:w-72' type="text" />
                    <span className='flex'><input className='ml-1 mr-3' type='checkbox'/><p className='text-xs text-[#ffffffb0]'>I agree to receive email updates</p></span>
                  </div>
                  <button className='bg-slate-600 hover:bg-[#FFBB00] transition-all duration-500 text-base text-[#ffffffb0] px-8 py-2 rounded-md h-fit w-fit' type='submit'>Submit</button>
                </form>
              </div>
          </div>
    </section>
    </>
  )
}
