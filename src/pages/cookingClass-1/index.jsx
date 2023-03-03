import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import useCourseDetails from "./useCourseDetails";

let Videotemp ="https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4";

function Cookingclass() {
  const [toggleState, setToggleState] = useState(1);
  const location = useLocation();
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const courseId = location.search?.split('?')?.[1]?.split('=')?.[1] || '';
  const course = useCourseDetails(courseId);

  return (
    <>
      <section className="w-11/12 mx-auto xs:flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-3 gap-16 relative mt-32">

        {/* left */}
        <div className="bg-zinc-800 px-10 md:my-5 rounded-[2rem] relative h-fit">
        <span className="xs:hidden md:block absolute top-10 xs:-left-5 lg:-left-10"><i class="text-primary-clr2 text-3xl fa-solid fa-trophy"></i></span>

          {/* Progress */}
            <div className="py-5">
                <p className="text-xl font-semibold">Course Progress: <span>55%</span></p>
                <div class="progress">
                  <div class="bar bg-primary-clr2" style={{width:"55%"}}>
                  </div>
                </div>
            </div>

            {/* Content Navigator */}
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Content Navigator</p>
              <div className="flex justify-between items-center bg-black p-4 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <p>Chapter</p>
                    <p className="text-base font-medium">Heading</p>
                    <div className="flex gap-5">
                        <span className="flex gap-2 text-sm">
                          <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                          <p>Video 5</p>
                        </span>
                        <span className="flex gap-2 text-sm">
                          <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                          <p>1 hrs</p>
                        </span>
                    </div>
                  </div>
                  <div class="progresess">
                      <span class="title timer" data-from="0" data-to="70" data-speed="1500">5/6</span>
                      <div class="overlay"></div>
                      <div class="left"></div>
                      <div class="right"></div>
                  </div>
              </div>
            </div>

            {/* More class list */}

            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                      <p>Video 5</p>
                    </span>
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                      <p>1 hrs</p>
                    </span>
                </div>
                <p className="text-base font-medium">Heading</p>
              </div>

              <i class="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
            </div>

            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                      <p>Video 5</p>
                    </span>
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                      <p>1 hrs</p>
                    </span>
                </div>
                <p className="text-base font-medium">Heading</p>
              </div>

              <i class="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
            </div>


            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                      <p>Video 5</p>
                    </span>
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                      <p>1 hrs</p>
                    </span>
                </div>
                <p className="text-base font-medium">Heading</p>
              </div>

              <i class="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
            </div>


            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                      <p>Video 5</p>
                    </span>
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                      <p>1 hrs</p>
                    </span>
                </div>
                <p className="text-base font-medium">Heading</p>
              </div>

              <i class="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
            </div>



            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-circle-play"></i>
                      <p>Video 5</p>
                    </span>
                    <span className="flex gap-2 text-sm">
                      <i class="text-primary-clr2 grid place-items-center fa-regular fa-clock"></i>
                      <p>1 hrs</p>
                    </span>
                </div>
                <p className="text-base font-medium">Heading</p>
              </div>

              <i class="text-4xl text-primary-clr2 fa-regular fa-circle-play"></i>
            </div>




        </div>


      {/* Right */}
        <div className="lg:col-span-2 md:my-5 overflow-hidden">
          <div className="flex gap-10">
            <span className="flex">
              <i class="text-primary-clr2 pr-2 grid place-items-center fa-regular fa-circle-play"></i>
              <p>Video 5</p>
            </span>
            <span className="flex">
              <i class="text-primary-clr2 pr-2 grid place-items-center fa-regular fa-clock"></i>
              <p>1 hrs</p>
            </span>
          </div>
          <h1 className="text-2xl font-medium tracking-wide py-3">
            5. Crispy Dishes
          </h1>

          <video className=" rounded-2xl" controls loop>
            <source src={Videotemp} type="video/mp4" />
          </video>

          <div className="container pt-10">
            <div className="block-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Class Info
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Instructor(s)
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                FAQ
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
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
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptatum qui adipisci.
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cookingclass;
