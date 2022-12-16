import React, { useState } from "react";
import "./index.css";

let Videotemp ="https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4";

function Cookingclass() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className=" relative overflow-hidden">
        <span className="xs:hidden md:block absolute top-32 left-8"><i class="text-primary-clr2 text-3xl fa-solid fa-trophy"></i></span>
        <div className="xs:w-11/12 md:w-8/12 mx-auto py-5">
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

          <video className="w-full h-full rounded-2xl" controls loop>
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
