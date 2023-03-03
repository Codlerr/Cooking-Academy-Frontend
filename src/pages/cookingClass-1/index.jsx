import React, { useState } from "react";
import "./style.css";
import Progress from './progress';
import Activeclass from './activeClass';
import Moreclass from './moreClass';
import Mainvideo from './mainVideo';
import ClassInfo from './classinfo';


function Cookingclass() {


  return (
    <>
      <section className="w-11/12 mx-auto xs:flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-3 gap-16 relative mt-32">

        {/* left */}
        <div className="bg-zinc-800 px-10 md:my-5 rounded-[2rem] relative h-fit">
        <span className="xs:hidden md:block absolute top-10 xs:-left-5 lg:-left-10"><i class="text-primary-clr2 text-3xl fa-solid fa-trophy"></i></span>

          {/* Progress */}
            <Progress/>

            {/* Content Navigator */}
            <Activeclass/>

            {/* More class list */}
            <Moreclass/>

        </div>


      {/* Right */}
        <div className="lg:col-span-2 md:my-5 overflow-hidden">
          {/* Main video */}
          <Mainvideo/>
          {/* Main video */}

          {/* classinfo */}
            <ClassInfo/>
          {/* classinfo */}
        </div>
      </section>
    </>
  );
}

export default Cookingclass;
