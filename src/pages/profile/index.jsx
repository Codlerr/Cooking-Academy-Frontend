import React,{useState} from 'react'
import "./style.css";

let profile = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1669706433/Cooking%20Academy%20Assets/Downloader.la_-62d179ce09ad1_pgh3it.webp';

function Profile() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    {/* ==================Profile====================== */}
    <section className='w-11/12 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10 md:place-items-start py-10'>
          <div className='grid place-items-center gap-2'>
            <div className='relative'>
              <img src={profile} alt="profile" />
              <i class="absolute bottom-5 right-5 text-xl hover:text-primary-clr1 fa-solid fa-pen-to-square"></i>
            </div>
            <h2 className='font-bold text-3xl'>John Doe</h2>
            <p>Johndoe@gmail.com</p>
            <a href="#">+98 0458 0158 58</a>
            <span className='flex gap-5 border-[1px] hover:bg-primary-clr2 transition-all duration-300 border-primary-clr2 rounded-3xl px-8 py-2 w-fit flex-row justify-center'><a href="#" className=''>Logout</a><i class="grid place-items-center fa-solid fa-right-from-bracket"></i></span>           
          </div>
          <div className='md:col-span-2 pt-10 md:pt-0'>
                  <div className="profile-container">
                    <div className="md:flex xs:grid grid-cols-2 ">
                      <button
                        className={toggleState === 1 ? "pro-tab active-pro-tab" : "pro-tab"}
                        onClick={() => toggleTab(1)}
                      >
                        MY COURSES
                      </button>
                      <button
                        className={toggleState === 2 ? "pro-tab active-pro-tab" : "pro-tab"}
                        onClick={() => toggleTab(2)}
                      >
                        MY LESSONS
                      </button>
                      <button
                        className={toggleState === 3 ? "pro-tab active-pro-tab" : "pro-tab"}
                        onClick={() => toggleTab(3)}
                      >
                        BOOKMARKS
                      </button>
                      <button
                        className={toggleState === 4 ? "pro-tab active-pro-tab" : "pro-tab"}
                        onClick={() => toggleTab(4)}
                      >
                        PHOTOS
                      </button>
                    </div>

                    <div className="pro-content-tabs">
                      <div
                        className={
                          toggleState === 1 ? "pro-content  active-pro-content" : "pro-content"
                        }
                      >
                        <div>
                          <h1 className='text-3xl font-bold md:w-[30%]'>Foundamentals of cuisine</h1>
                          <div className='grid grid-cols-1 md:grid-cols-3'>
                            <p className='md:text-base py-2 col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsa? Delectus porro, accusamus illo saepe distinctio dolore architecto inventore nulla pariatur itaque quis eum animi unde, corrupti doloremque minima doloribus.</p>
                            <div className='grid xs:place-items-start md:place-items-center'>
                                <a href='#' className='bg-primary-clr2 hover:bg-primary-clr1 transition-all duration-500 w-fit py-1 pl-2 xs:pr-4 md:pr-8 rounded-full grid place-items-center grid-flow-col xs:text-base lg:text-xl' ><i class="fa-solid fa-circle-play xs:text-2xl md:text-4xl pr-2"></i>Resume Class</a>
                            </div>
                          </div>
                        </div>
                        <hr className='my-5' />
                        <div>
                          <h1 className='text-xl font-bold'>Upcoming Classes</h1>
                          <h1 className='text-2xl font-bold py-2'>Worldwide Cuisine</h1>
                          <div className='grid grid-cols-1 md:grid-cols-3'>
                            <p className='md:text-base py-2 col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsa? Delectus porro, accusamus illo saepe distinctio dolore architecto inventore nulla pariatur itaque quis eum animi unde, corrupti doloremque minima doloribus.</p>
                            
                          </div>
                        </div>
                      </div>

                      <div
                        className={
                          toggleState === 2 ? "pro-content  active-pro-content" : "pro-content"
                        }
                      >

                        <p>
                        It's more than dinner—it's a dining experience. Gordon Ramsay returns with a second cooking Master Class to teach you
                        how to prep, plate, and pair recipes that wow guests. With 13 restaurant-inspired dishes designed for home cooking, you'll
                        learn how to build elevated courses from appetizer to dessert using everyday ingredients.
                        </p>
                      </div>

                      <div
                        className={
                          toggleState === 3 ? "pro-content  active-pro-content" : "pro-content"
                        }
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                          sed nostrum rerum laudantium totam unde adipisci incidunt modi
                          alias! Accusamus in quia odit aspernatur provident et ad vel
                          distinctio recusandae totam quidem repudiandae omnis veritatis
                          nostrum laboriosam architecto optio rem, dignissimos
                          voluptatum beatae aperiam voluptatem atque. Beatae rerum
                          dolores sunt.
                        </p>
                      </div>
                      <div
                        className={
                          toggleState === 4 ? "pro-content  active-pro-content" : "pro-content"
                        }
                      >
                        <p>
                        It's more than dinner—it's a dining experience. Gordon Ramsay returns with a second cooking Master Class to teach you
                        how to prep, plate, and pair recipes that wow guests. With 13 restaurant-inspired dishes designed for home cooking, you'll
                        learn how to build elevated courses from appetizer to dessert using everyday ingredients.
                        </p>
                      </div>
                    </div>
                  </div>
          </div>
      </div>
    </section>
    {/* ==================Profile====================== */}

      {/* ==================Settings====================== */}
    <section className='w-11/12 mx-auto'>
      <h1 className='font-bold text-3xl pb-5'>Settings</h1>
      <div className='bg-white rounded-2xl overflow-hidden'>
        <div className='w-11/12 mx-auto flex justify-between py-10 align-middle text-black'>
          <div className='flex flex-col gap-5 justify-center w-[50%]'>
            <h3 className='text-xl font-bold'>Password</h3>
            <input  type="password" className='outline-none border-b-2 text-xl'/>
          </div>
          <div className='grid place-items-center'>
            <a href='#'>Change</a>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-2xl overflow-hidden my-10'>
        <div className='w-11/12 mx-auto flex justify-between py-10 align-middle text-black'>
          <div className='flex flex-col gap-5 justify-center w-[50%]'>
            <h3 className='text-xl font-bold'>Payment</h3>
            <h3 className='text-base'>Payment Method</h3>
            <input  type="text" placeholder='Add card' className='outline-none border-b-2 text-xl'/>
          </div>
          <div className='grid place-items-center'>
            <a href='#'>Add</a>
          </div>
        </div>
      </div>


      <div className='bg-white rounded-2xl overflow-hidden my-10'>
        <div className='w-11/12 mx-auto flex justify-between py-10 align-middle text-black'>
          <div className='flex flex-col gap-5 justify-center w-[50%]'>
            <h3 className='text-xl font-bold'>Streaming Quality</h3>
          </div>
          <div className='grid place-items-center'>
            <select>
              <option value="HD 720p">HD 720P</option>
              <option value="420p">420P</option>
              <option value="280p">280P</option>
            </select>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-2xl overflow-hidden my-10'>
        <div className='w-11/12 mx-auto flex justify-between py-10 align-middle text-black'>
          <div className='flex flex-col gap-5 justify-center w-[50%]'>
            <h3 className='text-xl font-bold'>Language</h3>
          </div>
          <div className='grid place-items-center'>
            <select>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>
      </div>

    </section>
    {/* ==================Settings====================== */}
    </>
  )
}

export default Profile