import React from 'react'
import '../../pages/home/style.css';


let  User1 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669621459/Cooking%20Academy%20Assets/avatar-ff16c9f4f6a033d94f3ef4d895e78d42_2x_h99rtd.png';
let  User2 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670233805/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.12.44_PM_qtrtei.jpg';
let  User3 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670233805/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.10.49_PM_z4nnhl.jpg';
let  User4 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670235612/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.43.18_PM_iokoby.jpg';
let  User5 = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1670235612/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.47.55_PM_bn7zat.jpg';

function Feedback() {
  return (
    <>
    <section className='feedback xs:my-10 md:pb-10 lg:pb-0 lg:my-28 xs:h-fit md:h-fit lg:h-[600px] overflow-hidden'>
      <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5'>
          <div className='md:col-span-2 flex justify-center flex-col xs:py-10 lg:py-0 lg:h-[600px]' data-aos="fade-right">
                <h1 className='xs:text-3xl md:text-4xl font-medium pb-5'>Feedbacks</h1>
                <a className='bg-white text-black px-4 py-2 text-xl rounded-lg w-fit h-fit' href="#">Read all <i class="fa-solid fa-arrow-right pl-4"></i></a>
          </div>

          <div className='xs:w-10/12 md:w-full mx-auto md:col-span-3 grid grid-cols-1 gap-3 md:grid-cols-3 overflow-hidden  xs:h-[650px] md:h-[570px] lg:h-fit  scroll-main'>
                <div className='bg-white p-5  rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>A fully equipped place for
                those who want to dream of sneezing or even
                give lessons to trainees</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14' src={User1} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Alghalya</p>
                      <p className='font-semibold'>Almarzzooqi</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1670233805/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.10.49_PM_z4nnhl.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14 rounded-2xl' src={User3} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Vladimir</p>
                          <p className='font-semibold'>Kirkhmeyer</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>It's emazing class even 11m a chef But I benefited from a
                                lot of classes I recommend everyone interesting for
                                cooking to join.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14 rounded-2xl' src={User2} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Hamad</p>
                    
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1670233805/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.12.44_PM_qtrtei.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14' src={User2} />
                        <span className='text-white pl-3'>
                        <p className='font-medium'>Hamad</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5 rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Recently, we had team building event in The Cooking
                        Academy. Everything was very well organized by the
                        academy. Team enjoyed the black box activity and spend
                        good 2 hours for cooking different type of dishes.
                        Recommend others to try it as well. Everyone will
                        definitely remember team building activity.</p>
                  <div className='flex pt-3'>
                    <img alt='img' className='h-14 rounded-2xl' src={User3} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Vladimir</p>
                      <p className='font-semibold'>Kirkhmeyer</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1670235612/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.43.18_PM_iokoby.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14 rounded-2xl' src={User4} />
                        <span className='text-white pl-3'>
                        <p className='font-medium'>Marwa M</p>
                        <p className='font-medium'>Shehat</p>
                        </span>
                      </div>
                </div>
               
                <div className='bg-white p-5  rounded-[2rem] '>
                  <p className='text-black xs:text-lg md:text-sm'>A fantastic organisation! Great service from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                  <div className='flex pt-2'>
                    <img alt='img' className='h-14 rounded-2xl' src={User4} />
                    <span className='text-black pl-3'>
                    <p className='font-medium'>Marwa M</p>
                        <p className='font-medium'>Shehat</p>
                    </span>
                  </div>
                </div>
                <div className='relative rounded-[2rem] xs:h-80 md:h-full bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dvbplh4z9/image/upload/v1670235612/Cooking%20Academy%20Assets/WhatsApp_Image_2022-12-05_at_3.47.55_PM_bn7zat.jpg)]'>
                    <div className='absolute bottom-2 left-2 flex pt-3'>
                        <img alt='img' className='h-14 rounded-2xl' src={User5} />
                        <span className='text-white pl-3'>
                          <p className='font-medium'>Chef Ali</p>
                          <p className='font-semibold'>Kirkhmeyer</p>
                        </span>
                      </div>
                </div>
                <div className='bg-white p-5  rounded-[2rem]'>
                  <p className='text-black xs:text-lg md:text-sm'>Great customer service and professional staff members.</p>
                  <div className='flex pt-5'>
                    <img alt='img' className='h-14 rounded-2xl' src={User5} />
                    <span className='text-black pl-3'>
                      <p className='font-medium'>Chef Ali</p>
                    </span>
                  </div>
                </div>
                
               
                
                
          </div>
      </div>
    </section>
    </>
  )
}

export default Feedback