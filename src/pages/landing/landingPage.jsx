import React from 'react'
import '../landing/landingPage.css';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

function LandingPage() {
  return (
    <>
    <AccessAlarmsIcon/>
    <div className='h-[40vh]  grid place-items-center '>
        <h1 className='xs:text-yellow-600 sm:text-blue-600 md:text-pink-600 lg:text-green-600 xl:text-red-600 text-xl font-bold'>hais</h1>
    </div>
    </>
  )
}

export default LandingPage