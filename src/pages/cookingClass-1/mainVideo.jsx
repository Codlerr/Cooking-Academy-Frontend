import React from 'react'


let Videotemp ="https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4";

function MainVideo() {
  return (
    <>
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

    </>
  )
}

export default MainVideo