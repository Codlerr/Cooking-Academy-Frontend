import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.css';


export default function lsa(props) {
  return (
    <>
      <div data-aos="fade-right">
        <h2 className='text-center font-bold text-5xl text-[color:var(--thm-clr2)] pt-5 pb-3'>Last year achievement</h2>
        <p className='xs:w-[90%] md:w-[80%] mx-auto text-center text-[#ffffffcb] xs:text-lg md:text-xl py-5'>we are a culinary startup based in qatar with the aim of bringing people together, to learn and enjoy the art of cooking.</p>
      </div>

      <div data-aos="fade-right" className='md:w-10/12 mx-auto md:pt-5 grid grid-cols-2 md:grid-cols-4 xs:gap-5 md:gap-0 place-items-center text-[color:var(--thm-clr2)]'>
        <div className='grid place-items-center'>
          <h4 className='xs:text-6xl lg:text-7xl'>+10</h4>
          <p className='capitalize'>new partners</p>
        </div>
        <div className='grid place-items-center'>
          <h4 className='xs:text-6xl lg:text-7xl'>+20</h4>
          <p className='capitalize'>Workshop</p>
        </div>
        <div className='grid place-items-center'>
          <h4 className='xs:text-6xl lg:text-7xl'>+02</h4>
          <p className='capitalize'>awards</p>
        </div>
        <div className='grid place-items-center'>
          <h4 className='xs:text-6xl lg:text-7xl'>+50</h4>
          <p className='capitalize'>cooking class</p>
        </div>

      </div></>
  )
}
